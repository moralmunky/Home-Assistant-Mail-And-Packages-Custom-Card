function e(e,t,a,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(r=(n<3?s(r):n>3?s(t,a,r):s(t,a))||r);return n>3&&r&&Object.defineProperty(t,a,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,a=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&s.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new n(a,e,i)},o=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,u=globalThis,_=u.trustedTypes,m=_?_.emptyScript:"",f=u.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},k=(e,t)=>!c(e,t),$={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:k};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){const{get:i,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);s?.call(this,t),this.requestUpdate(e,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(a)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const a of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=a.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(void 0!==i&&!0===a.reflect){const s=(void 0!==a.converter?.toAttribute?a.converter:y).toAttribute(t,a.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const a=this.constructor,i=a._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=a.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i;const n=s.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,a,i=!1,s){if(void 0!==e){const n=this.constructor;if(!1===i&&(s=this[e]),a??=n.getPropertyOptions(e),!((a.hasChanged??k)(s,t)||a.useDefault&&a.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,a))))return;this.C(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:i,wrapped:s},n){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==s||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e){const{wrapped:e}=a,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,a,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[v("elementProperties")]=new Map,b[v("finalized")]=new Map,f?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,x=e=>e,A=w.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+E,z=`<${P}>`,T=document,U=()=>T.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,D="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,q=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...a)=>({_$litType$:e,strings:t,values:a}))(1),B=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),F=new WeakMap,W=T.createTreeWalker(T,129);function G(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const J=(e,t)=>{const a=e.length-1,i=[];let s,n=2===t?"<svg>":3===t?"<math>":"",r=N;for(let t=0;t<a;t++){const a=e[t];let o,c,l=-1,d=0;for(;d<a.length&&(r.lastIndex=d,c=r.exec(a),null!==c);)d=r.lastIndex,r===N?"!--"===c[1]?r=H:void 0!==c[1]?r=R:void 0!==c[2]?(I.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=q):void 0!==c[3]&&(r=q):r===q?">"===c[0]?(r=s??N,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,o=c[1],r=void 0===c[3]?q:'"'===c[3]?j:L):r===j||r===L?r=q:r===H||r===R?r=N:(r=q,s=void 0);const p=r===q&&e[t+1].startsWith("/>")?" ":"";n+=r===N?a+z:l>=0?(i.push(o),a.slice(0,l)+C+a.slice(l)+E+p):a+E+(-2===l?t:p)}return[G(e,n+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class X{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let s=0,n=0;const r=e.length-1,o=this.parts,[c,l]=J(e,t);if(this.el=X.createElement(c,a),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=W.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(C)){const t=l[n++],a=i.getAttribute(e).split(E),r=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:r[2],strings:a,ctor:"."===r[1]?te:"?"===r[1]?ae:"@"===r[1]?ie:ee}),i.removeAttribute(e)}else e.startsWith(E)&&(o.push({type:6,index:s}),i.removeAttribute(e));if(I.test(i.tagName)){const e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=A?A.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],U()),W.nextNode(),o.push({type:2,index:++s});i.append(e[t],U())}}}else if(8===i.nodeType)if(i.data===P)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(E,e+1));)o.push({type:7,index:s}),e+=E.length-1}s++}}static createElement(e,t){const a=T.createElement("template");return a.innerHTML=e,a}}function Y(e,t,a=e,i){if(t===B)return t;let s=void 0!==i?a._$Co?.[i]:a._$Cl;const n=M(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,a,i)),void 0!==i?(a._$Co??=[])[i]=s:a._$Cl=s),void 0!==s&&(t=Y(e,s._$AS(e,t.values),s,i)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,i=(e?.creationScope??T).importNode(t,!0);W.currentNode=i;let s=W.nextNode(),n=0,r=0,o=a[0];for(;void 0!==o;){if(n===o.index){let t;2===o.type?t=new Q(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new se(s,this,e)),this._$AV.push(t),o=a[++r]}n!==o?.index&&(s=W.nextNode(),n++)}return W.currentNode=T,i}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),M(e)?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,i="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=X.createElement(G(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Z(i,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new X(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const s of e)i===t.length?t.push(a=new Q(this.O(U()),this.O(U()),this,this.options)):a=t[i],a._$AI(s),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=x(e).nextSibling;x(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,s){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=K}_$AI(e,t=this,a,i){const s=this.strings;let n=!1;if(void 0===s)e=Y(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==B,n&&(this._$AH=e);else{const i=e;let r,o;for(e=s[0],r=0;r<s.length-1;r++)o=Y(this,i[a+r],t,r),o===B&&(o=this._$AH[r]),n||=!M(o)||o!==this._$AH[r],o===K?e=K:e!==K&&(e+=(o??"")+s[r+1]),this._$AH[r]=o}n&&!i&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class ae extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class ie extends ee{constructor(e,t,a,i,s){super(e,t,a,i,s),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??K)===B)return;const a=this._$AH,i=e===K&&a!==K||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==K&&(a===K||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}let se=class{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}};const ne=w.litHtmlPolyfillSupport;ne?.(X,Q),(w.litHtmlVersions??=[]).push("3.3.2");const re=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let oe=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,a)=>{const i=a?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=a?.renderBefore??null;i._$litPart$=s=new Q(t.insertBefore(U(),e),e,void 0,a??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};oe._$litElement$=!0,oe.finalized=!0,re.litElementHydrateSupport?.({LitElement:oe});const ce=re.litElementPolyfillSupport;ce?.({LitElement:oe}),(re.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:k},pe=(e=de,t,a)=>{const{kind:i,metadata:s}=a;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(a.name,e),"accessor"===i){const{name:i}=a;return{set(a){const s=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,s,e,!0,a)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=a;return function(a){const s=this[i];t.call(this,a),this.requestUpdate(i,s,e,!0,a)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return(t,a)=>"object"==typeof a?pe(e,t,a):((e,t,a)=>{const i=t.hasOwnProperty(a);return t.constructor.createProperty(a,e),i?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(e){return he({...e,state:!0,attribute:!1})}var ue,_e;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ue||(ue={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(_e||(_e={}));var me=["closed","locked","off"],fe=function(e,t,a,i){i=i||{},a=null==a?{}:a;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=a,e.dispatchEvent(s),s},ve=function(e){fe(window,"haptic",e)},ye=function(e,t,a,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(e){return e.user===t.user.id})||(ve("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(a.entity||a.camera_image)&&fe(e,"hass-more-info",{entityId:a.entity?a.entity:a.camera_image});break;case"navigate":i.navigation_path&&function(e,t,a){void 0===a&&(a=!1),a?history.replaceState(null,"",t):history.pushState(null,"",t),fe(window,"location-changed",{replace:a})}(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":a.entity&&(function(e,t){(function(e,t,a){void 0===a&&(a=!0);var i,s=function(e){return e.substr(0,e.indexOf("."))}(t),n="group"===s?"homeassistant":s;switch(s){case"lock":i=a?"unlock":"lock";break;case"cover":i=a?"open_cover":"close_cover";break;default:i=a?"turn_on":"turn_off"}e.callService(n,i,{entity_id:t})})(e,t,me.includes(e.states[t].state))}(t,a.entity),ve("success"));break;case"call-service":if(!i.service)return void ve("failure");var s=i.service.split(".",2);t.callService(s[0],s[1],i.service_data,i.target),ve("success");break;case"fire-dom-event":fe(e,"ll-custom",i)}};function ke(e){return void 0!==e&&"none"!==e.action}const $e="1.0.0",be="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/",we=[{id:"usps",name:"USPS",icon:"square_usps.png",exceptionIcon:"square_usps_exception.png",url:"https://informeddelivery.usps.com/",sensorSuffix:"usps_packages",exceptionSensorSuffix:"usps_exception",configKey:"entity_usps_packages",exceptionConfigKey:"entity_usps_exception",registryNames:["usps","USPS"]},{id:"ups",name:"UPS",icon:"square_ups.png",exceptionIcon:"square_ups_exception.png",url:"https://wwwapps.ups.com/mcdp",sensorSuffix:"ups_packages",exceptionSensorSuffix:"ups_exception",configKey:"entity_ups_packages",exceptionConfigKey:"entity_ups_exception",registryNames:["ups","UPS"]},{id:"fedex",name:"FedEx",icon:"square_fedex.png",url:"https://www.fedex.com/apps/fedextracking",sensorSuffix:"fedex_packages",configKey:"entity_fedex_packages",registryNames:["fedex","FedEx"]},{id:"dhl",name:"DHL",icon:"square_dhl.png",url:"https://www.dhl.com",sensorSuffix:"dhl_packages",configKey:"entity_dhl_packages",registryNames:["dhl","DHL"]},{id:"canada_post",name:"Canada Post",icon:"square_canada-post.png",url:"https://www.canadapost-postescanada.ca",sensorSuffix:"canada_post_packages",configKey:"entity_canada_post_packages",registryNames:["canada_post","Canada Post"]},{id:"hermes",name:"Hermes",icon:"square_hermes-packages.png",url:"https://www.myhermes.co.uk",sensorSuffix:"hermes_packages",configKey:"entity_hermes_packages",registryNames:["hermes","Hermes"]},{id:"royal_mail",name:"Royal Mail",icon:"square_royal-mail.png",url:"https://www.royalmail.com",sensorSuffix:"royal_mail_packages",configKey:"entity_royal_mail_packages",registryNames:["royal_mail","Royal Mail"]},{id:"auspost",name:"Australia Post",icon:"square_australia-post.png",url:"https://auspost.com.au/mypost/track/",sensorSuffix:"auspost_packages",configKey:"entity_auspost_packages",registryNames:["auspost","australia_post","Australia Post"]},{id:"poczta_polska",name:"Poczta Polska",icon:"square_poczta-polska.png",url:"https://emonitoring.poczta-polska.pl/",sensorSuffix:"poczta_polska_packages",configKey:"entity_poczta_polska_packages",registryNames:["poczta_polska","Poczta Polska"]},{id:"inpost",name:"InPost",icon:"square_inpost.png",url:"https://inpost.pl/sledzenie-przesylek",sensorSuffix:"inpost_pl_packages",configKey:"entity_inpost_packages",registryNames:["inpost","inpost_pl","InPost"]},{id:"dpd",name:"DPD",icon:"square_dpd.png",url:"https://tracktrace.dpd.com.pl/",sensorSuffix:"dpd_com_pl_packages",configKey:"entity_dpd_packages",registryNames:["dpd","dpd_com_pl","DPD"]},{id:"gls",name:"GLS",icon:"square_gls.png",url:"https://gls-group.eu/GROUP/en/parcel-tracking",sensorSuffix:"gls_packages",configKey:"entity_gls_packages",registryNames:["gls","GLS"]}],xe={id:"amazon",name:"Amazon",icon:"square_amazon.png",exceptionIcon:"square_amazon_exception.png",url:"https://www.amazon.com/gp/your-account/order-history",sensorSuffix:"amazon_packages",exceptionSensorSuffix:"amazon_exception",configKey:"entity_amazon_packages",exceptionConfigKey:"entity_amazon_exception",registryNames:["amazon","Amazon"]};new Map(we.map(e=>[e.id,e]));var Ae={name:"Mail and Packages",version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Mail and Packages integration not found. Please check that it is installed and configured."},Se={title:"Package Tracker",no_packages:"No packages being tracked",registry_not_found:"Package Registry not found.",registry_hint:"Enable Package Registry in the Mail and Packages integration settings.",add_package:"Add Package",add:"Add",cancel:"Cancel",clear_delivered:"Clear Delivered",clear_all_delivered:"Clear All Delivered",mark_delivered:"Mark Delivered",clear:"Clear",track_on:"Track on",tracking_number:"Tracking Number",tracking_placeholder:"Tracking number",carrier:"Carrier",source:{label:"Source",email:"Email",manual:"Manual",carrier_email:"Carrier Email",unknown:"Unknown"},status:{detected:"Detected",in_transit:"In Transit",out_for_delivery:"Out for Delivery",delivered:"Delivered",active:"active",delivered_count:"delivered"},first_seen:"First Seen",last_updated:"Last Updated",confirmed:"Confirmed",exception:"Exception",exception_text:"Delivery exception reported"},Ce={common:Ae,tracker:Se},Ee={name:"Post og pakker",version:"Versjon",invalid_configuration:"Ikke gyldig konfigurasjon",show_warning:"Vis advarsel",show_error:"Post og pakker integrasjon ikke funnet."},Pe={title:"Pakkesporing",no_packages:"Ingen pakker spores",registry_not_found:"Pakkeregisteret ble ikke funnet.",registry_hint:"Aktiver pakkeregisteret i innstillingene for Post og pakker-integrasjonen.",add_package:"Legg til pakke",add:"Legg til",cancel:"Avbryt",clear_delivered:"Fjern leverte",clear_all_delivered:"Fjern alle leverte",mark_delivered:"Merk som levert",clear:"Fjern",track_on:"Spor hos",tracking_number:"Sporingsnummer",tracking_placeholder:"Sporingsnummer",carrier:"Transportør",source:{label:"Kilde",email:"E-post",manual:"Manuell",carrier_email:"Transportør-e-post",unknown:"Ukjent"},status:{detected:"Oppdaget",in_transit:"Under transport",out_for_delivery:"Ute for levering",delivered:"Levert",active:"aktive",delivered_count:"levert"},first_seen:"Først sett",last_updated:"Sist oppdatert",confirmed:"Bekreftet",exception:"Unntak",exception_text:"Leveringsunntak rapportert"},ze={common:Ee,tracker:Pe};const Te={en:Object.freeze({__proto__:null,common:Ae,default:Ce,tracker:Se}),nb:Object.freeze({__proto__:null,common:Ee,default:ze,tracker:Pe})};function Ue(e,t="",a=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=e.split(".").reduce((e,t)=>e[t],Te[i])}catch(t){s=e.split(".").reduce((e,t)=>e[t],Te.en)}return void 0===s&&(s=e.split(".").reduce((e,t)=>e[t],Te.en)),""!==t&&""!==a&&(s=s.replace(t,a)),s}const Me={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},builtin_sensors:{icon:"package-variant",name:"Carrier Sensors",secondary:"Toggle carrier package count sensors",show:!1},optional_sensors:{icon:"message-text",name:"Optional Entities",secondary:"Configure optional entities",show:!1},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}}};let Oe=class extends oe{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){return this._config?.name||""}get _entity_usps_mail(){return this._config?.entity_usps_mail||!1}get _entity_packages_delivered(){return this._config?.entity_packages_delivered||!1}get _entity_packages_in_transit(){return this._config?.entity_packages_in_transit||!1}get _show_usps_camera(){return this._config?.show_usps_camera||!1}get _show_amazon_camera(){return this._config?.show_amazon_camera||!1}get _entity_delivery_message(){return this._config?.entity_delivery_message||""}get _amazon_url(){return this._config?.amazon_url||""}get _entity_amazon_packages(){return this._config?.entity_amazon_packages||!1}get _entity_amazon_packages_delivered(){return this._config?.entity_amazon_packages_delivered||!1}get _entity_amazon_exception(){return this._config?.entity_amazon_exception||!1}get _entity_amazon_hub_packages(){return this._config?.entity_amazon_hub_packages||!1}get _show_warning(){return this._config?.show_warning||!1}get _show_error(){return this._config?.show_error||!1}get _show_registry_totals(){return this._config?.show_registry_totals||!1}_carrierToggle(e,t){const a=function(e,t){if(!e)return!1;if(void 0!==e[t])return!!e[t];const a={entity_usps_packages:"entity_USPS_packages",entity_usps_exception:"entity_USPS_exception",entity_ups_packages:"entity_UPS_packages",entity_ups_exception:"entity_UPS_exception",entity_dhl_packages:"entity_DHL_packages"}[t];return!(!a||void 0===e[a]||!e[a])}(this._config,e);return V`
      <ha-formfield .label=${`Toggle ${t} ${a?"off":"on"}`}>
        <ha-switch
          .checked=${a}
          .configValue=${e}
          @change=${this._valueChanged}
        ></ha-switch>
      </ha-formfield>
    `}render(){if(!this.hass||!this._helpers)return V``;this._helpers.importMoreInfoControl("climate");const e=Object.keys(this.hass.states).filter(e=>e.startsWith("sensor.mail_"));return V`
      <div class="card-config">
        <h2>${Ue("common.name")} (v${$e})</h2>
        <p>Companion card for the Mail and Packages integration.</p>

        <!-- Required -->
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${Me.required.icon}`}></ha-icon>
            <div class="title">${Me.required.name}</div>
          </div>
          <div class="secondary">${Me.required.secondary}</div>
        </div>
        ${Me.required.show?V`
          <div class="values">
            <paper-input label="Name (Required)" .value=${this._name} .configValue=${"name"} @value-changed=${this._valueChanged}></paper-input>
          </div>
        `:""}

        <!-- Carrier Sensors -->
        <div class="option" @click=${this._toggleOption} .option=${"builtin_sensors"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${Me.builtin_sensors.icon}`}></ha-icon>
            <div class="title">${Me.builtin_sensors.name}</div>
          </div>
          <div class="secondary">${Me.builtin_sensors.secondary}</div>
        </div>
        ${Me.builtin_sensors.show?V`
          <div class="values">
            <!-- Totals -->
            ${this._carrierToggle("entity_packages_delivered","Total Packages Delivered")}
            ${this._carrierToggle("entity_packages_in_transit","Total Packages In-Transit")}

            <!-- USPS special -->
            <h3>USPS</h3>
            ${this._carrierToggle("entity_usps_mail","USPS Mail")}
            ${this._carrierToggle("show_usps_camera","USPS Camera")}
            ${this._carrierToggle("entity_usps_packages","USPS Packages")}
            ${this._carrierToggle("entity_usps_exception","USPS Exception")}

            <!-- Standard carriers from registry -->
            ${we.filter(e=>"usps"!==e.id).map(e=>V`
              <h3>${e.name}</h3>
              ${this._carrierToggle(e.configKey,`${e.name} Packages`)}
              ${e.exceptionConfigKey?this._carrierToggle(e.exceptionConfigKey,`${e.name} Exception`):""}
            `)}

            <!-- Amazon -->
            <h3>Amazon</h3>
            <paper-input label="Amazon Link URL" .value=${this._amazon_url} .configValue=${"amazon_url"} @value-changed=${this._valueChanged}></paper-input>
            ${this._carrierToggle("entity_amazon_packages","Amazon Packages")}
            ${this._carrierToggle("entity_amazon_packages_delivered","Amazon Packages Delivered")}
            ${this._carrierToggle("entity_amazon_exception","Amazon Exception")}
            ${this._carrierToggle("entity_amazon_hub_packages","Amazon Hub Packages")}
            ${this._carrierToggle("show_amazon_camera","Amazon Camera")}

            <!-- Registry -->
            <h3>Package Registry</h3>
            ${this._carrierToggle("show_registry_totals","Registry Totals Overlay")}

            <br />
            ${this._carrierToggle("show_warning","Warning")}
            ${this._carrierToggle("show_error","Error")}
          </div>
        `:""}

        <!-- Optional Entities -->
        <div class="option" @click=${this._toggleOption} .option=${"optional_sensors"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${Me.optional_sensors.icon}`}></ha-icon>
            <div class="title">${Me.optional_sensors.name}</div>
          </div>
          <div class="secondary">${Me.optional_sensors.secondary}</div>
        </div>
        ${Me.optional_sensors.show?V`
          <div class="values">
            <paper-dropdown-menu label="Delivery Summary" @value-changed=${this._valueChanged} .configValue=${"entity_delivery_message"}>
              <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._entity_delivery_message)}>
                ${e.map(e=>V`<paper-item>${e}</paper-item>`)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        `:""}

        <!-- Actions -->
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${Me.actions.icon}`}></ha-icon>
            <div class="title">${Me.actions.name}</div>
          </div>
          <div class="secondary">${Me.actions.secondary}</div>
        </div>
        ${Me.actions.show?V`
          <div class="values">
            ${["tap","hold","double_tap"].map(e=>V`
              <div class="option" @click=${this._toggleAction} .option=${e}>
                <div class="row">
                  <ha-icon .icon=${`mdi:${Me.actions.options[e].icon}`}></ha-icon>
                  <div class="title">${Me.actions.options[e].name}</div>
                </div>
                <div class="secondary">${Me.actions.options[e].secondary}</div>
              </div>
              ${Me.actions.options[e].show?V`<div class="values"><paper-item>Action Editors Coming Soon</paper-item></div>`:""}
            `)}
          </div>
        `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(e){this._toggleThing(e,Me.actions.options)}_toggleOption(e){this._toggleThing(e,Me)}_toggleThing(e,t){const a=!t[e.target.option].show;for(const[e]of Object.entries(t))t[e].show=!1;t[e.target.option].show=a,this._toggle=!this._toggle}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;if(this[`_${t.configValue}`]!==t.value){if(t.configValue)if(""===t.value){const e={...this._config};delete e[t.configValue],this._config=e}else this._config={...this._config,[t.configValue]:void 0!==t.checked?t.checked:t.value};fe(this,"config-changed",{config:this._config})}}static get styles(){return r`
      .option { padding: 4px 0; cursor: pointer; }
      .row { display: flex; margin-bottom: -14px; pointer-events: none; }
      .title { padding-left: 16px; margin-top: -6px; pointer-events: none; }
      .secondary { padding-left: 40px; color: var(--secondary-text-color); pointer-events: none; }
      .values { padding-left: 16px; background: var(--secondary-background-color); display: grid; }
      ha-formfield { padding-bottom: 8px; margin-bottom: 10px; }
    `}};e([he({attribute:!1})],Oe.prototype,"hass",void 0),e([ge()],Oe.prototype,"_config",void 0),e([ge()],Oe.prototype,"_toggle",void 0),e([ge()],Oe.prototype,"_helpers",void 0),Oe=e([le("mailandpackages-card-editor")],Oe);let De=class extends oe{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this._loadHelpers()}shouldUpdate(){return!this._initialized&&this.hass&&this._config&&this._helpers&&(this._initialized=!0),!0}render(){if(!this.hass||!this._config)return V``;const e=Object.keys(this.hass.states).filter(e=>e.startsWith("sensor.mail_packages_")||e.includes("registry"));return V`
      <div class="card-config">
        <h2>Package Tracker</h2>
        <p>Full-page package tracking dashboard.</p>

        <div class="section">
          <paper-input
            label="Card Name"
            .value=${this._config.name||""}
            .configValue=${"name"}
            @value-changed=${this._valueChanged}
          ></paper-input>

          <paper-dropdown-menu
            label="Registry Entity"
            @value-changed=${this._valueChanged}
            .configValue=${"registry_entity"}
          >
            <paper-listbox
              slot="dropdown-content"
              .selected=${e.indexOf(this._config.registry_entity||"sensor.mail_packages_tracked")}
            >
              ${e.map(e=>V`<paper-item>${e}</paper-item>`)}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>

        <div class="section">
          <h3>Display Options</h3>

          <ha-formfield .label=${"Show delivered packages section"}>
            <ha-switch
              .checked=${!1!==this._config.show_delivered}
              .configValue=${"show_delivered"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show detected packages section"}>
            <ha-switch
              .checked=${!1!==this._config.show_detected}
              .configValue=${"show_detected"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Collapse delivered section by default"}>
            <ha-switch
              .checked=${!1!==this._config.collapsed_delivered}
              .configValue=${"collapsed_delivered"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="section">
          <h3>Actions</h3>

          <ha-formfield .label=${"Show Add Package button"}>
            <ha-switch
              .checked=${!1!==this._config.show_add_package}
              .configValue=${"show_add_package"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${"Show Clear All Delivered button"}>
            <ha-switch
              .checked=${!1!==this._config.show_clear_all}
              .configValue=${"show_clear_all"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `}async _loadHelpers(){this._helpers=await window.loadCardHelpers(),this._helpers&&this._helpers.importMoreInfoControl("climate")}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;if(t.configValue){const e=void 0!==t.checked?t.checked:t.value;if(""===e||void 0===e){const e={...this._config};delete e[t.configValue],this._config=e}else this._config={...this._config,[t.configValue]:e}}fe(this,"config-changed",{config:this._config})}static get styles(){return r`
      .card-config {
        padding: 8px;
      }
      .section {
        margin-bottom: 16px;
      }
      h2 {
        margin: 0 0 4px 0;
        font-size: 1.1rem;
      }
      h3 {
        margin: 12px 0 8px 0;
        font-size: 0.95rem;
        color: var(--secondary-text-color);
      }
      p {
        margin: 0 0 12px 0;
        color: var(--secondary-text-color);
        font-size: 0.85rem;
      }
      ha-formfield {
        display: block;
        padding-bottom: 8px;
      }
    `}};e([he({attribute:!1})],De.prototype,"hass",void 0),e([ge()],De.prototype,"_config",void 0),e([ge()],De.prototype,"_helpers",void 0),De=e([le("mailandpackages-tracker-editor")],De);const Ne=["out_for_delivery","in_transit","detected","delivered"],He={out_for_delivery:"mdi:truck-fast",in_transit:"mdi:package-variant",detected:"mdi:magnify",delivered:"mdi:package-variant-closed-check"},Re={out_for_delivery:"#03a9f4",in_transit:"#ff9800",detected:"#9e9e9e",delivered:"#4caf50"};function qe(e){return new Date(e).toLocaleString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})}window.customCards=window.customCards||[],window.customCards.push({type:"mailandpackages-tracker",name:"Mail and Packages Tracker",preview:!0,description:"Full-page package tracking dashboard with registry management"});let Le=class extends oe{constructor(){super(...arguments),this.expandedPackages=new Set,this.collapsedSections=new Set,this.showAddForm=!1,this.newTrackingNumber="",this.newCarrier="unknown"}static async getConfigElement(){return document.createElement("mailandpackages-tracker-editor")}static getStubConfig(){return{name:"Package Tracker",registry_entity:"sensor.mail_packages_tracked"}}setConfig(e){if(!e)throw new Error(Ue("common.invalid_configuration"));this.config={name:Ue("tracker.title"),registry_entity:"sensor.mail_packages_tracked",show_add_package:!0,show_clear_all:!0,show_delivered:!0,show_detected:!0,collapsed_delivered:!0,...e};const t=new Set;this.config.collapsed_delivered&&t.add("delivered"),this.collapsedSections=t}render(){const e=this.config.registry_entity||"sensor.mail_packages_tracked",t=this.hass.states[e];if(!t)return V`
        <ha-card>
          <div class="tracker-card">
            <div class="empty-state">
              <ha-icon icon="mdi:package-variant-closed-remove"></ha-icon>
              <p>${Ue("tracker.registry_not_found")}</p>
              <p class="hint">${Ue("tracker.registry_hint")}</p>
            </div>
          </div>
        </ha-card>
      `;const a=(t.attributes.packages||[]).filter(e=>"cleared"!==e.status),i=function(e){const t=new Map;for(const e of Ne)t.set(e,[]);for(const a of e){if("cleared"===a.status)continue;const e=t.get(a.status);e&&e.push(a)}for(const[,e]of t)e.sort((e,t)=>new Date(t.last_updated).getTime()-new Date(e.last_updated).getTime());return t}(a),s=a.filter(e=>"delivered"!==e.status).length,n=(i.get("delivered")||[]).length;return V`
      <ha-card>
        <div class="tracker-card">
          ${this._renderHeader(s,n)}
          ${Ne.map(e=>{if("delivered"===e&&!this.config.show_delivered)return K;if("detected"===e&&!this.config.show_detected)return K;const t=i.get(e)||[];return this._renderStatusSection(e,t)})}
          ${0===a.length?V`
            <div class="empty-state">
              <ha-icon icon="mdi:package-variant-closed"></ha-icon>
              <p>${Ue("tracker.no_packages")}</p>
            </div>
          `:K}
          ${this.showAddForm?this._renderAddForm():K}
        </div>
      </ha-card>
    `}_renderHeader(e,t){return V`
      <div class="tracker-header">
        <div class="tracker-title">
          <h2>${this.config.name}</h2>
          <div class="header-badges">
            <span class="badge active">${e} ${Ue("tracker.status.active")}</span>
            ${t>0?V`<span class="badge delivered">${t} ${Ue("tracker.status.delivered_count")}</span>`:K}
          </div>
        </div>
        <div class="header-actions">
          ${this.config.show_add_package?V`
            <button class="action-btn primary" @click=${()=>{this.showAddForm=!this.showAddForm}}>
              <ha-icon icon="mdi:plus"></ha-icon> ${Ue("tracker.add")}
            </button>
          `:K}
          ${this.config.show_clear_all?V`
            <button class="action-btn" @click=${this._clearAllDelivered}>
              <ha-icon icon="mdi:broom"></ha-icon> ${Ue("tracker.clear_delivered")}
            </button>
          `:K}
        </div>
      </div>
    `}_renderStatusSection(e,t){if(0===t.length)return K;const a=this.collapsedSections.has(e);return V`
      <div class="status-section">
        <div class="status-header" @click=${()=>this._toggleSection(e)}>
          <ha-icon icon="${He[e]}" style="color: ${Re[e]}"></ha-icon>
          <span class="status-label">${Ue(`tracker.status.${e}`)}</span>
          <span class="status-count" style="background: ${Re[e]}">${t.length}</span>
          <ha-icon class="chevron ${a?"":"open"}" icon="mdi:chevron-down"></ha-icon>
        </div>
        ${a?K:V`
          <div class="status-packages">
            ${t.map(e=>this._renderPackageRow(e))}
          </div>
        `}
      </div>
    `}_renderPackageRow(e){const t=this.expandedPackages.has(e.tracking_number),a=function(e){const t=e.toLowerCase();return we.find(e=>e.registryNames.some(e=>e.toLowerCase()===t))||(xe.registryNames.some(e=>e.toLowerCase()===t)?xe:void 0)}(e.carrier),i=a?`${be}${a.icon}`:"";return V`
      <div class="package-row ${t?"expanded":""}" @click=${()=>this._toggleExpanded(e.tracking_number)}>
        <div class="package-summary">
          <div class="package-carrier">
            ${i?V`<img class="carrier-icon" src="${i}" alt="${e.carrier}" />`:V`<ha-icon icon="mdi:package-variant" class="carrier-icon-fallback"></ha-icon>`}
          </div>
          <div class="package-info">
            <span class="tracking-number">${t?e.tracking_number:function(e,t=22){return e.length<=t?e:e.substring(0,10)+"…"+e.substring(e.length-6)}(e.tracking_number)}</span>
            ${e.description?V`<span class="package-desc">${e.description}</span>`:K}
          </div>
          <div class="package-meta">
            ${e.exception?V`<ha-icon icon="mdi:alert" class="exception-icon"></ha-icon>`:K}
            <span class="package-time">${function(e){const t=new Date,a=new Date(e),i=t.getTime()-a.getTime(),s=Math.floor(i/6e4);if(s<1)return"just now";if(s<60)return`${s}m ago`;const n=Math.floor(s/60);if(n<24)return`${n}h ago`;const r=Math.floor(n/24);return 1===r?"1 day ago":`${r} days ago`}(e.last_updated)}</span>
            <ha-icon class="expand-icon ${t?"open":""}" icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>

        ${t?V`
          <div class="package-details" @click=${e=>e.stopPropagation()}>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="detail-label">${Ue("tracker.carrier")}</span>
                <span class="detail-value">
                  ${a?.name||e.carrier}
                  ${e.carrier_confirmed?V`<span class="confirmed-badge">${Ue("tracker.confirmed")}</span>`:K}
                </span>
              </div>
              <div class="detail-item">
                <span class="detail-label">${Ue("tracker.source.label")}</span>
                <span class="detail-value">${e.source}${e.source_from?V` &mdash; ${e.source_from}`:K}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">${Ue("tracker.first_seen")}</span>
                <span class="detail-value">${qe(e.first_seen)}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">${Ue("tracker.last_updated")}</span>
                <span class="detail-value">${qe(e.last_updated)}</span>
              </div>
              ${e.exception?V`
                <div class="detail-item">
                  <span class="detail-label">${Ue("tracker.exception")}</span>
                  <span class="detail-value exception-text">${Ue("tracker.exception_text")}</span>
                </div>
              `:K}
            </div>
            <div class="package-actions">
              ${a?.url?V`
                <a class="action-btn link" href="${a.url}" target="_blank">
                  <ha-icon icon="mdi:open-in-new"></ha-icon> ${Ue("tracker.track_on")} ${a.name}
                </a>
              `:K}
              ${"delivered"!==e.status?V`
                <button class="action-btn success" @click=${()=>this._markDelivered(e.tracking_number)}>
                  <ha-icon icon="mdi:check"></ha-icon> ${Ue("tracker.mark_delivered")}
                </button>
              `:K}
              <button class="action-btn danger" @click=${()=>this._clearPackage(e.tracking_number)}>
                <ha-icon icon="mdi:close"></ha-icon> ${Ue("tracker.clear")}
              </button>
            </div>
          </div>
        `:K}
      </div>
    `}_renderAddForm(){const e=[{id:"unknown",name:Ue("tracker.source.unknown")},...we];return V`
      <div class="add-package-form">
        <h3>${Ue("tracker.add_package")}</h3>
        <div class="form-row">
          <input
            type="text"
            class="form-input"
            placeholder="${Ue("tracker.tracking_placeholder")}"
            .value=${this.newTrackingNumber}
            @input=${e=>{this.newTrackingNumber=e.target.value}}
          />
          <select class="form-select" .value=${this.newCarrier} @change=${e=>{this.newCarrier=e.target.value}}>
            ${e.map(e=>V`<option value="${e.id}">${e.name}</option>`)}
          </select>
        </div>
        <div class="form-actions">
          <button class="action-btn primary" @click=${this._addPackage} ?disabled=${!this.newTrackingNumber.trim()}>
            <ha-icon icon="mdi:plus"></ha-icon> ${Ue("tracker.add")}
          </button>
          <button class="action-btn" @click=${()=>{this.showAddForm=!1,this.newTrackingNumber=""}}>
            ${Ue("tracker.cancel")}
          </button>
        </div>
      </div>
    `}_toggleExpanded(e){const t=new Set(this.expandedPackages);t.has(e)?t.delete(e):t.add(e),this.expandedPackages=t}_toggleSection(e){const t=new Set(this.collapsedSections);t.has(e)?t.delete(e):t.add(e),this.collapsedSections=t}async _markDelivered(e){await this.hass.callService("mail_and_packages","mark_delivered",{tracking_number:e})}async _clearPackage(e){await this.hass.callService("mail_and_packages","clear_package",{tracking_number:e});const t=new Set(this.expandedPackages);t.delete(e),this.expandedPackages=t}async _clearAllDelivered(){await this.hass.callService("mail_and_packages","clear_all_delivered",{})}async _addPackage(){const e=this.newTrackingNumber.trim();e&&(await this.hass.callService("mail_and_packages","add_package",{tracking_number:e,carrier:this.newCarrier}),this.newTrackingNumber="",this.showAddForm=!1)}static get styles(){return r`
      :host {
        --tracker-radius: var(--ha-card-border-radius, 12px);
        --tracker-bg: var(--card-background-color, var(--ha-card-background, white));
        --tracker-border: var(--divider-color, rgba(0,0,0,.12));
        --tracker-text: var(--primary-text-color);
        --tracker-text-secondary: var(--secondary-text-color);
      }

      .tracker-card {
        padding: 16px;
      }

      /* Header */
      .tracker-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 16px;
        flex-wrap: wrap;
        gap: 12px;
      }
      .tracker-title h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--tracker-text);
      }
      .header-badges {
        display: flex;
        gap: 8px;
        margin-top: 4px;
      }
      .badge {
        font-size: 0.75rem;
        padding: 2px 8px;
        border-radius: 12px;
        font-weight: 500;
      }
      .badge.active {
        background: #ff98001a;
        color: #ff9800;
      }
      .badge.delivered {
        background: #4caf501a;
        color: #4caf50;
      }
      .header-actions {
        display: flex;
        gap: 8px;
      }

      /* Action buttons */
      .action-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 6px 12px;
        border: 1px solid var(--tracker-border);
        border-radius: 8px;
        background: transparent;
        color: var(--tracker-text-secondary);
        font-size: 0.8rem;
        cursor: pointer;
        text-decoration: none;
        font-family: inherit;
      }
      .action-btn:hover { background: var(--secondary-background-color); }
      .action-btn ha-icon { --mdc-icon-size: 16px; }
      .action-btn.primary {
        background: var(--primary-color);
        color: var(--text-primary-color, white);
        border-color: var(--primary-color);
      }
      .action-btn.primary:hover { opacity: 0.9; }
      .action-btn.success { color: #4caf50; border-color: #4caf50; }
      .action-btn.success:hover { background: #4caf501a; }
      .action-btn.danger { color: #f44336; border-color: #f44336; }
      .action-btn.danger:hover { background: #f443361a; }
      .action-btn.link { color: var(--primary-color); border-color: var(--primary-color); }
      .action-btn.link:hover { background: var(--primary-color); color: var(--text-primary-color, white); }
      .action-btn[disabled] { opacity: 0.5; cursor: not-allowed; }

      /* Status sections */
      .status-section {
        margin-bottom: 8px;
      }
      .status-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        user-select: none;
      }
      .status-header:hover { background: var(--secondary-background-color); }
      .status-header ha-icon { --mdc-icon-size: 20px; }
      .status-label {
        flex: 1;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--tracker-text);
      }
      .status-count {
        font-size: 0.75rem;
        padding: 1px 8px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        min-width: 20px;
        text-align: center;
      }
      .chevron {
        transition: transform 0.2s ease;
        --mdc-icon-size: 20px;
        color: var(--tracker-text-secondary);
      }
      .chevron.open { transform: rotate(180deg); }

      /* Package rows */
      .status-packages {
        padding: 0 4px;
      }
      .package-row {
        border: 1px solid var(--tracker-border);
        border-radius: 8px;
        margin-bottom: 6px;
        cursor: pointer;
        overflow: hidden;
        transition: box-shadow 0.15s ease;
      }
      .package-row:hover {
        box-shadow: 0 1px 4px rgba(0,0,0,.08);
      }
      .package-row.expanded {
        border-color: var(--primary-color);
      }
      .package-summary {
        display: flex;
        align-items: center;
        padding: 10px 12px;
        gap: 10px;
      }
      .package-carrier {
        flex: 0 0 32px;
      }
      .carrier-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
      .carrier-icon-fallback {
        --mdc-icon-size: 28px;
        color: var(--tracker-text-secondary);
      }
      .package-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .tracking-number {
        font-size: 0.85rem;
        font-weight: 500;
        font-family: 'Roboto Mono', monospace;
        color: var(--tracker-text);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .package-desc {
        font-size: 0.75rem;
        color: var(--tracker-text-secondary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .package-meta {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }
      .exception-icon {
        --mdc-icon-size: 18px;
        color: #f44336;
      }
      .package-time {
        font-size: 0.7rem;
        color: var(--tracker-text-secondary);
        white-space: nowrap;
      }
      .expand-icon {
        transition: transform 0.2s ease;
        --mdc-icon-size: 18px;
        color: var(--tracker-text-secondary);
      }
      .expand-icon.open { transform: rotate(180deg); }

      /* Expanded details */
      .package-details {
        padding: 0 12px 12px 54px;
        cursor: default;
      }
      .detail-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-bottom: 12px;
      }
      @media (max-width: 500px) {
        .detail-grid { grid-template-columns: 1fr; }
      }
      .detail-item {
        display: flex;
        flex-direction: column;
        gap: 1px;
      }
      .detail-label {
        font-size: 0.7rem;
        color: var(--tracker-text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .detail-value {
        font-size: 0.8rem;
        color: var(--tracker-text);
      }
      .confirmed-badge {
        display: inline-block;
        font-size: 0.65rem;
        padding: 1px 6px;
        border-radius: 4px;
        background: #4caf501a;
        color: #4caf50;
        margin-left: 6px;
        font-weight: 500;
      }
      .exception-text { color: #f44336; }
      .package-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      /* Add package form */
      .add-package-form {
        border: 1px solid var(--tracker-border);
        border-radius: 8px;
        padding: 16px;
        margin-top: 12px;
      }
      .add-package-form h3 {
        margin: 0 0 12px 0;
        font-size: 0.95rem;
        font-weight: 500;
      }
      .form-row {
        display: flex;
        gap: 8px;
        margin-bottom: 12px;
      }
      .form-input, .form-select {
        padding: 8px 12px;
        border: 1px solid var(--tracker-border);
        border-radius: 8px;
        background: transparent;
        color: var(--tracker-text);
        font-size: 0.85rem;
        font-family: inherit;
      }
      .form-input {
        flex: 1;
        min-width: 0;
      }
      .form-select {
        flex: 0 0 auto;
        min-width: 120px;
      }
      .form-actions {
        display: flex;
        gap: 8px;
      }

      /* Empty state */
      .empty-state {
        text-align: center;
        padding: 32px 16px;
        color: var(--tracker-text-secondary);
      }
      .empty-state ha-icon {
        --mdc-icon-size: 48px;
        margin-bottom: 8px;
        opacity: 0.5;
      }
      .empty-state p { margin: 4px 0; }
      .empty-state .hint { font-size: 0.8rem; opacity: 0.7; }
    `}};e([he({attribute:!1})],Le.prototype,"hass",void 0),e([ge()],Le.prototype,"config",void 0),e([ge()],Le.prototype,"expandedPackages",void 0),e([ge()],Le.prototype,"collapsedSections",void 0),e([ge()],Le.prototype,"showAddForm",void 0),e([ge()],Le.prototype,"newTrackingNumber",void 0),e([ge()],Le.prototype,"newCarrier",void 0),Le=e([le("mailandpackages-tracker")],Le);class je{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Ie="ontouchstart"in window||navigator.maxTouchPoints>0;class Ve extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ie?"100px":"50px",height:Ie?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",e=>(e.preventDefault(),e.stopPropagation(),!1));const a=e=>{let t,a;this.held=!1,e.touches?(t=e.touches[0].pageX,a=e.touches[0].pageY):(t=e.pageX,a=e.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(t,a),this.held=!0},this.holdTime)},i=a=>{a.preventDefault(),["touchend","touchcancel"].includes(a.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?fe(e,"action",{action:"hold"}):t.hasDoubleClick?"click"===a.type&&a.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,fe(e,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,fe(e,"action",{action:"double_tap"})):fe(e,"action",{action:"tap"}))};e.addEventListener("touchstart",a,{passive:!0}),e.addEventListener("touchend",i),e.addEventListener("touchcancel",i),e.addEventListener("mousedown",a,{passive:!0}),e.addEventListener("click",i),e.addEventListener("keyup",e=>{13===e.keyCode&&i(e)})}startAnimation(e,t){Object.assign(this.style,{left:`${e}px`,top:`${t}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-mailandpackages",Ve);const Be=(e,t)=>{const a=(()=>{const e=document.body;if(e.querySelector("action-handler-mailandpackages"))return e.querySelector("action-handler-mailandpackages");const t=document.createElement("action-handler-mailandpackages");return e.appendChild(t),t})();a&&a.bind(e,t)},Ke=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends je{update(e,[t]){const a=e.element;return Be(a,t),this.render(t)}render(e){}});function Fe(e,t){if(void 0!==e[t])return!!e[t];const a={entity_usps_packages:"entity_USPS_packages",entity_usps_exception:"entity_USPS_exception",entity_ups_packages:"entity_UPS_packages",entity_ups_exception:"entity_UPS_exception",entity_dhl_packages:"entity_DHL_packages"}[t];return!(!a||void 0===e[a])&&!!e[a]}function We(e,t){const a=e.states[t];return a?a.state:void 0}console.info(`%c  MAILANDPACKAGES-CARD \n%c  ${Ue("common.version")} ${$e}    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"mailandpackages-card",name:"Mail and Packages",preview:!0,description:"Summary card showing mail and package counts by carrier"});let Ge=class extends oe{static async getConfigElement(){return document.createElement("mailandpackages-card-editor")}static getStubConfig(){return{name:"Mail and Packages"}}setConfig(e){if(!e)throw new Error(Ue("common.invalid_configuration"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config={title:"Mail and Packages",...e}}shouldUpdate(e){return!!this.config&&function(e,t,a){if(t.has("config")||a)return!0;if(e.config.entity){var i=t.get("hass");return!i||i.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}render(){if(this.config.show_warning)return this._showWarning(Ue("common.show_warning"));const e=We(this.hass,"sensor.mail_updated");if(!e)return this._showError(Ue("common.show_error"));const t=this.config.entity_delivery_message&&We(this.hass,this.config.entity_delivery_message)||"";return V`
      <ha-card
        tabindex="0"
        .label=${"Mail and Packages"}
        class="mail-and-packages"
      >
        <div class="header">
          <h1 class="card-header">${this.config.name}</h1>
        </div>

        <div class="deliveryDetails">
          ${this.config.show_usps_camera?this._renderCamera("camera.mail_usps_camera"):K}
          <div class="deliveryTotals">
            ${this.config.entity_usps_mail?this._renderBadge("square_mail.png","sensor.mail_usps_mail","https://informeddelivery.usps.com/"):K}
            ${this.config.entity_packages_in_transit?this._renderBadge("square_in-transit.png","sensor.mail_packages_in_transit"):K}
            ${this.config.entity_packages_delivered?this._renderBadge("square_delivery.png","sensor.mail_packages_delivered"):K}
          </div>
        </div>

        ${t?V`<p class="summary">${t}</p>`:K}

        <div class="packagesTotals">
          ${we.map(e=>Fe(this.config,e.configKey)?this._renderBadge(e.icon,`sensor.mail_${e.sensorSuffix}`,e.url,e.name):K)}
          ${this._renderExceptions()}
        </div>

        ${this.config.show_registry_totals?this._renderRegistryTotals():K}

        ${this.config.show_amazon_camera?this._renderCamera("camera.mail_amazon_delivery_camera"):K}

        <div class="amazon">
          ${this._renderAmazon()}
        </div>

        <div class="footer">
          <span class="usps_update">Last Check: ${e}</span>
          <span class="version">v${$e}</span>
        </div>
      </ha-card>
    `}_renderBadge(e,t,a,i){const s=We(this.hass,t);if(void 0===s)return K;const n=V`<img src="${be}${e}" />`;return V`
      <div class="status">
        <div class="statusDetails">
          ${a?V`<a href="${a}" title="Open ${i||""} website" target="_blank">${n}</a>`:n}
          <div class="statusCount">${s}</div>
        </div>
      </div>
    `}_renderExceptions(){const e=[],t=[["entity_usps_exception","sensor.mail_usps_exception","square_usps_exception.png"],["entity_ups_exception","sensor.mail_ups_exception","square_ups_exception.png"]];for(const[a,i,s]of t)if(Fe(this.config,a)){const t=We(this.hass,i);void 0!==t&&e.push(V`
            <div class="status"><div class="statusDetails">
              <img src="${be}${s}" />
              <div class="statusCount">${t}</div>
            </div></div>
          `)}return V`${e}`}_renderAmazon(){const e=[],t=this.config.amazon_url||"",a=[[this.config.entity_amazon_packages,"sensor.mail_amazon_packages","square_amazon.png",t],[this.config.entity_amazon_packages_delivered,"sensor.mail_amazon_packages_delivered","square_delivery.png",void 0],[this.config.entity_amazon_exception,"sensor.mail_amazon_exception","square_amazon_exception.png",t],[this.config.entity_amazon_hub_packages,"sensor.mail_amazon_hub_packages","square_amazon-hub.png",void 0]];for(const[t,i,s,n]of a){if(!t)continue;const a=We(this.hass,i);if(void 0===a)continue;const r=V`<img src="${be}${s}" />`;e.push(V`
        <div class="status"><div class="statusDetails">
          ${n?V`<a href="${n}" title="Open Amazon" target="_blank">${r}</a>`:r}
          <div class="statusCount">${a}</div>
        </div></div>
      `)}return e.length?V`${e}`:K}_renderRegistryTotals(){const e=We(this.hass,"sensor.mail_packages_tracked"),t=We(this.hass,"sensor.mail_packages_in_transit_registry"),a=We(this.hass,"sensor.mail_packages_delivered_registry");return void 0===e?K:V`
      <div class="registryTotals">
        <div class="registryBadge">
          <ha-icon icon="mdi:package-variant"></ha-icon>
          <span class="registryCount">${e}</span>
          <span class="registryLabel">Tracked</span>
        </div>
        ${void 0!==t?V`
          <div class="registryBadge">
            <ha-icon icon="mdi:truck-fast" style="color: #ff9800"></ha-icon>
            <span class="registryCount">${t}</span>
            <span class="registryLabel">In Transit</span>
          </div>
        `:K}
        ${void 0!==a?V`
          <div class="registryBadge">
            <ha-icon icon="mdi:package-variant-closed-check" style="color: #4caf50"></ha-icon>
            <span class="registryCount">${a}</span>
            <span class="registryLabel">Delivered</span>
          </div>
        `:K}
      </div>
    `}_renderCamera(e){const t=function(e,t,a){const i=e.states[t];return i?.attributes?.[a]}(this.hass,e,"entity_picture");return t?V`
      <img
        @action=${this._handleAction}
        .actionHandler=${Ke({hasHold:ke(this.config.hold_action),hasDoubleClick:ke(this.config.double_tap_action)})}
        class="MailImg clear"
        src="${t}&interval=30"
      />
    `:K}_handleAction(e){this.hass&&this.config&&e.detail.action&&function(e,t,a,i){var s;"double_tap"===i&&a.double_tap_action?s=a.double_tap_action:"hold"===i&&a.hold_action?s=a.hold_action:"tap"===i&&a.tap_action&&(s=a.tap_action),ye(e,t,a,s)}(this,this.hass,this.config,e.detail.action)}_showWarning(e){return V`<hui-warning>${e}</hui-warning>`}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e,origConfig:this.config}),V`${t}`}static get styles(){return r`
      .mail-and-packages {
        margin: auto;
        padding: 0;
        position: relative;
      }
      .mail-and-packages .clear { clear: both; }
      .mail-and-packages a { color: var(--secondary-text-color); }
      .mail-and-packages .summary { padding: 1rem 1rem 0 1rem; }
      .mail-and-packages .deliveryDetails {
        width: 100%;
        height: auto;
        position: relative;
      }
      .mail-and-packages .packagesTotals,
      .mail-and-packages .amazon,
      .mail-and-packages .deliveryTotals {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: flex-start;
      }
      .mail-and-packages .packagesTotals { margin-bottom: 1rem; }
      .mail-and-packages .deliveryTotals {
        padding: 0.75rem 0;
      }
      .mail-and-packages .status {
        box-sizing: border-box;
        flex: 0 0 auto;
        margin: 0.5rem;
        font-size: 1.5rem;
        text-align: center;
      }
      .mail-and-packages .status .statusDetails {
        position: relative;
        display: inline-block;
      }
      .mail-and-packages .packagesTotals .statusCount,
      .mail-and-packages .amazon .statusCount,
      .mail-and-packages .deliveryTotals .statusCount {
        background-color: var(--secondary-background-color);
        border-radius: 50%;
        font-size: 0.75rem;
        font-weight: 600;
        position: absolute;
        bottom: -0.25rem;
        right: -0.5rem;
        line-height: 1.25rem;
        width: 1.25rem;
        height: 1.25rem;
      }
      .mail-and-packages .packagesTotals img,
      .mail-and-packages .amazon img,
      .mail-and-packages .deliveryTotals img {
        height: 2.5rem;
        width: 2.5rem;
        object-fit: contain;
        border-radius: 50%;
        display: block;
      }
      .mail-and-packages .registryTotals {
        display: flex;
        justify-content: space-evenly;
        padding: 0.5rem 1rem;
        border-top: 1px solid var(--divider-color, rgba(0,0,0,.12));
        margin: 0 1rem;
      }
      .mail-and-packages .registryBadge {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
      }
      .mail-and-packages .registryBadge ha-icon {
        --mdc-icon-size: 24px;
        color: var(--primary-text-color);
      }
      .mail-and-packages .registryCount {
        font-size: 1.1rem;
        font-weight: 600;
      }
      .mail-and-packages .registryLabel {
        font-size: 0.65rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
      }
      .mail-and-packages .MailImg {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 2px;
      }
      .mail-and-packages .header,
      .mail-and-packages .footer {
        padding: 1rem;
        margin-bottom: 2px;
      }
      .mail-and-packages .header { display: none; }
      .mail-and-packages .footer {
        padding: 1rem 1rem 0 1rem;
        margin-bottom: 0;
      }
      .mail-and-packages .usps_update,
      .mail-and-packages .version { font-size: 0.7rem; }
      .mail-and-packages .version { float: right; }
    `}};e([he({attribute:!1})],Ge.prototype,"hass",void 0),e([ge()],Ge.prototype,"config",void 0),Ge=e([le("mailandpackages-card")],Ge);export{Ge as MailandpackagesCard};
