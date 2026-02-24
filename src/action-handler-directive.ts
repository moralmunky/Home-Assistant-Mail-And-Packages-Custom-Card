import { directive, Directive, DirectiveParameters, ElementPart } from 'lit/directive.js';

import { ActionHandlerOptions } from 'custom-card-helpers/dist/types';
import { fireEvent } from 'custom-card-helpers';

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

interface ActionHandlerElement extends HTMLElement {
  actionHandler?: boolean;
}

class ActionHandlerDirectiveClass extends Directive {
  update(part: ElementPart, [options]: [ActionHandlerOptions]) {
    const element = part.element as ActionHandlerElement;
    actionHandlerBind(element, options);
    return this.render(options);
  }

  render(_options: ActionHandlerOptions) {
    return undefined;
  }
}

class ActionHandlerHTMLElement extends HTMLElement {
  public holdTime = 500;
  public ripple: any;
  protected timer?: number;
  protected held = false;
  private dblClickTimeout?: number;

  constructor() {
    super();
    this.ripple = document.createElement('mwc-ripple');
  }

  public connectedCallback(): void {
    Object.assign(this.style, {
      position: 'absolute',
      width: isTouch ? '100px' : '50px',
      height: isTouch ? '100px' : '50px',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: '999',
    });

    this.appendChild(this.ripple);
    this.ripple.primary = true;

    ['touchcancel', 'mouseout', 'mouseup', 'touchmove', 'mousewheel', 'wheel', 'scroll'].forEach(ev => {
      document.addEventListener(
        ev,
        () => {
          clearTimeout(this.timer);
          this.stopAnimation();
          this.timer = undefined;
        },
        { passive: true },
      );
    });
  }

  public bind(element: ActionHandlerElement, options: ActionHandlerOptions): void {
    if (element.actionHandler) {
      return;
    }
    element.actionHandler = true;

    element.addEventListener('contextmenu', (ev: Event) => {
      ev.preventDefault();
      ev.stopPropagation();
      return false;
    });

    const start = (ev: Event): void => {
      this.held = false;
      let x: number;
      let y: number;
      if ((ev as TouchEvent).touches) {
        x = (ev as TouchEvent).touches[0].pageX;
        y = (ev as TouchEvent).touches[0].pageY;
      } else {
        x = (ev as MouseEvent).pageX;
        y = (ev as MouseEvent).pageY;
      }

      this.timer = window.setTimeout(() => {
        this.startAnimation(x, y);
        this.held = true;
      }, this.holdTime);
    };

    const end = (ev: Event): void => {
      ev.preventDefault();
      if (['touchend', 'touchcancel'].includes(ev.type) && this.timer === undefined) {
        return;
      }
      clearTimeout(this.timer);
      this.stopAnimation();
      this.timer = undefined;
      if (this.held) {
        fireEvent(element as any, 'action', { action: 'hold' });
      } else if (options.hasDoubleClick) {
        if ((ev.type === 'click' && (ev as MouseEvent).detail < 2) || !this.dblClickTimeout) {
          this.dblClickTimeout = window.setTimeout(() => {
            this.dblClickTimeout = undefined;
            fireEvent(element as any, 'action', { action: 'tap' });
          }, 250);
        } else {
          clearTimeout(this.dblClickTimeout);
          this.dblClickTimeout = undefined;
          fireEvent(element as any, 'action', { action: 'double_tap' });
        }
      } else {
        fireEvent(element as any, 'action', { action: 'tap' });
      }
    };

    const handleEnter = (ev: KeyboardEvent): void => {
      if (ev.keyCode !== 13) {
        return;
      }
      end(ev);
    };

    element.addEventListener('touchstart', start, { passive: true });
    element.addEventListener('touchend', end);
    element.addEventListener('touchcancel', end);
    element.addEventListener('mousedown', start, { passive: true });
    element.addEventListener('click', end);
    element.addEventListener('keyup', handleEnter);
  }

  private startAnimation(x: number, y: number): void {
    Object.assign(this.style, {
      left: `${x}px`,
      top: `${y}px`,
      display: null,
    });
    this.ripple.disabled = false;
    this.ripple.active = true;
    this.ripple.unbounded = true;
  }

  private stopAnimation(): void {
    this.ripple.active = false;
    this.ripple.disabled = true;
    this.style.display = 'none';
  }
}

customElements.define('action-handler-mailandpackages', ActionHandlerHTMLElement);

const getActionHandler = (): ActionHandlerHTMLElement => {
  const body = document.body;
  if (body.querySelector('action-handler-mailandpackages')) {
    return body.querySelector('action-handler-mailandpackages') as ActionHandlerHTMLElement;
  }

  const actionhandler = document.createElement('action-handler-mailandpackages');
  body.appendChild(actionhandler);

  return actionhandler as ActionHandlerHTMLElement;
};

export const actionHandlerBind = (element: ActionHandlerElement, options: ActionHandlerOptions): void => {
  const actionhandler = getActionHandler();
  if (!actionhandler) {
    return;
  }
  actionhandler.bind(element, options);
};

export const actionHandler = directive(ActionHandlerDirectiveClass);
