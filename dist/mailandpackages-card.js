/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,i,s){var n,a=arguments.length,o=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,a=new RegExp(`${s}|${n}`);class o{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],o=document.createTreeWalker(t.content,133,null,!1);let c=0,d=-1,u=0;const{strings:p,values:{length:_}}=e;for(;u<_;){const e=o.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)r(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=p[u],i=h.exec(t)[2],s=i.toLowerCase()+"$lit$",n=e.getAttribute(s);e.removeAttribute(s);const o=n.split(a);this.parts.push({type:"attribute",index:d,name:i,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,n=t.split(a),o=n.length-1;for(let t=0;t<o;t++){let i,a=n[t];if(""===a)i=l();else{const e=h.exec(a);null!==e&&r(e[2],"$lit$")&&(a=a.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(a)}s.insertBefore(i,e),this.parts.push({type:"node",index:++d})}""===n[o]?(s.insertBefore(l(),e),i.push(e)):e.data=n[o],u+=o}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&d!==c||(d++,t.insertBefore(l(),e)),c=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(i.push(e),d--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const r=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},c=e=>-1!==e.index,l=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(e,t){const{element:{content:i},parts:s}=e,n=document.createTreeWalker(i,133,null,!1);let a=p(s),o=s[a],r=-1,c=0;const l=[];let h=null;for(;n.nextNode();){r++;const e=n.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(l.push(e),null===h&&(h=e)),null!==h&&c++;void 0!==o&&o.index===r;)o.index=null!==h?-1:o.index-c,a=p(s,a),o=s[a]}l.forEach(e=>e.parentNode.removeChild(e))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(c(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=new WeakMap,g=e=>"function"==typeof e&&_.has(e),m={},f={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let a,o=0,r=0,l=n.nextNode();for(;o<s.length;)if(a=s[o],c(a)){for(;r<a.index;)r++,"TEMPLATE"===l.nodeName&&(i.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=i.pop(),l=n.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,a.name,a.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),w=` ${s} `;class S{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let a=0;a<e;a++){const e=this.strings[a],o=e.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===e.indexOf("--\x3e",o+1);const r=h.exec(e);t+=null===r?e+(i?w:n):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==y&&(t=y.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=e=>null===e||!("object"==typeof e||"function"==typeof e),k=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class ${constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!k(e))return e}let s="";for(let n=0;n<t;n++){s+=e[n];const t=i[n];if(void 0!==t){const e=t.value;if(b(e)||!k(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===m||b(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=m,e(this)}this.value!==m&&this.committer.commit()}}class x{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}const e=this.__pendingValue;e!==m&&(b(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):k(e)?this.__commitIterable(e):e===f?(this.value=f,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const i=new v(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const n of e)i=t[s],void 0===i&&(i=new x(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(n),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=m}}class T extends ${constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends P{}let N=!1;(()=>{try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class E{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=m}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function V(e){let t=z.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},z.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(s);return i=t.keyString.get(n),void 0===i&&(i=new o(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const z=new Map,D=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,s){const n=t[0];if("."===n){return new T(e,t.slice(1),i).parts}if("@"===n)return[new E(e,t.slice(1),s.eventContext)];if("?"===n)return[new C(e,t.slice(1),i)];return new $(e,t,i).parts}handleTextExpression(e){return new x(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const O=(e,...t)=>new S(e,t,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,H=(e,t)=>`${e}--${t}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),R=!1);const L=e=>t=>{const i=H(t.type,e);let n=z.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},z.set(i,n));let a=n.stringsArray.get(t.strings);if(void 0!==a)return a;const r=t.strings.join(s);if(a=n.keyString.get(r),void 0===a){const i=t.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(i,e),a=new o(t,i),n.keyString.set(r,a)}return n.stringsArray.set(t.strings,a),a},Y=["html","svg"],j=new Set,q=(e,t,i)=>{j.add(e);const s=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:a}=n;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<a;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{Y.forEach(t=>{const i=z.get(H(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),d(e,i)})})})(e);const r=s.content;i?function(e,t,i=null){const{element:{content:s},parts:n}=e;if(null==i)return void s.appendChild(t);const a=document.createTreeWalker(s,133,null,!1);let o=p(n),r=0,c=-1;for(;a.nextNode();){c++;for(a.currentNode===i&&(r=u(t),i.parentNode.insertBefore(t,i));-1!==o&&n[o].index===c;){if(r>0){for(;-1!==o;)n[o].index+=r,o=p(n,o);return}o=p(n,o)}}}(i,o,r.firstChild):r.insertBefore(o,r.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const c=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){r.insertBefore(o,r.firstChild);const e=new Set;e.add(o),d(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const I={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:F};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=F){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||I,n="function"==typeof s?s:s.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||I.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=W){const s=this.constructor,n=s._attributeNameForProperty(e,i);if(void 0!==n){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let s=!0;if(void 0!==e){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}B.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function X(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Z(e,t)}function G(e){return X({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class ee{constructor(e,t){if(t!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const i=t.reduce((t,i,s)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1],e[0]);return new ee(i,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ie={};class se extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),s=[];i.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!K){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ee(String(t),Q)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ie&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ie}}se.finalized=!0,se.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,a=D.has(t),o=R&&11===t.nodeType&&!!t.host,r=o&&!j.has(n),c=r?document.createDocumentFragment():t;if(((e,t,s)=>{let n=D.get(t);void 0===n&&(i(t,t.firstChild),D.set(t,n=new x(Object.assign({templateFactory:V},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,c,Object.assign({templateFactory:L(n)},s)),r){const e=D.get(c);D.delete(c);const s=e.value instanceof v?e.value.template:void 0;q(n,c,s),i(t,t.firstChild),t.appendChild(c),D.set(t,e)}!a&&o&&window.ShadyCSS.styleElement(t.host)};var ne=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ae="[^\\s]+",oe=/\[([^]*?)\]/gm;function re(e,t){for(var i=[],s=0,n=e.length;s<n;s++)i.push(e[s].substr(0,t));return i}var ce=function(e){return function(t,i){var s=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return s>-1?s:null}};function le(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var s=0,n=t;s<n.length;s++){var a=n[s];for(var o in a)e[o]=a[o]}return e}var he=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],ue=re(de,3),pe={dayNamesShort:re(he,3),dayNames:he,monthNamesShort:ue,monthNames:de,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},_e=le({},pe),ge=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},me={D:function(e){return String(e.getDate())},DD:function(e){return ge(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ge(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ge(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ge(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ge(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ge(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ge(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ge(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ge(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ge(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ge(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(Math.floor(Math.abs(t)/60),2)+":"+ge(Math.abs(t)%60,2)}},fe=function(e){return+e-1},ve=[null,"[1-9]\\d?"],ye=[null,ae],we=["isPm",ae,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],Se=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],be=(ce("monthNamesShort"),ce("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var ke=function(e,t,i){if(void 0===t&&(t=be.default),void 0===i&&(i={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var s=[];t=(t=be[t]||t).replace(oe,(function(e,t){return s.push(t),"@@@"}));var n=le(le({},_e),i);return(t=t.replace(ne,(function(t){return me[t](e,n)}))).replace(/@@@/g,(function(){return s.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var $e=["closed","locked","off"],Pe=function(e,t,i,s){s=s||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,e.dispatchEvent(n),n},xe=function(e){Pe(window,"haptic",e)},Ce=function(e,t,i,s){var n;if("double_tap"===s&&i.double_tap_action?n=i.double_tap_action:"hold"===s&&i.hold_action?n=i.hold_action:"tap"===s&&i.tap_action&&(n=i.tap_action),n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(xe("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&Pe(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),Pe(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(e,t){(function(e,t,i){void 0===i&&(i=!0);var s,n=function(e){return e.substr(0,e.indexOf("."))}(t),a="group"===n?"homeassistant":n;switch(n){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}e.callService(a,s,{entity_id:t})})(e,t,$e.includes(e.states[t].state))}(t,i.entity),xe("success"));break;case"call-service":if(!n.service)return void xe("failure");var a=n.service.split(".",2);t.callService(a[0],a[1],n.service_data),xe("success")}};function Te(e){return void 0!==e&&"none"!==e.action}var Me={name:"Mail and Packages Custom Card",version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ne={common:Me},Ee={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Ae={common:Ee};const Ve={en:Object.freeze({__proto__:null,common:Me,default:Ne}),nb:Object.freeze({__proto__:null,common:Ee,default:Ae})};function ze(e,t="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=e.split(".").reduce((e,t)=>e[t],Ve[s])}catch(t){n=e.split(".").reduce((e,t)=>e[t],Ve.en)}return void 0===n&&(n=e.split(".").reduce((e,t)=>e[t],Ve.en)),""!==t&&""!==i&&(n=n.replace(t,i)),n}const De={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},builtin_sensors:{icon:"palette",name:"Built-in Entities",secondary:"Configure the built-in entities",show:!1},optional_sensors:{icon:"palette",name:"Optional Entities",secondary:"Configure the optional entities",show:!1}};let Ue=class extends se{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var e;return(null===(e=this._config)||void 0===e?void 0:e.name)||""}get _entity_usps_mail(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_usps_mail)||!1}get _entity_packages_delivered(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_packages_delivered)||!1}get _entity_packages_in_transit(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_packages_in_transit)||!1}get _show_amazon_camera(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_amazon_camera)||!1}get _entity_fedex_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_fedex_packages)||!1}get _entity_UPS_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_UPS_packages)||!1}get _entity_USPS_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_USPS_packages)||!1}get _entity_USPS_exceptions(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_USPS_exceptions)||!1}get _entity_canada_post_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_canada_post_packages)||!1}get _entity_DHL_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_DHL_packages)||!1}get _entity_hermes_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_hermes_packages)||!1}get _entity_royal_mail_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_royal_mail_packages)||!1}get _entity_delivery_message(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_delivery_message)||""}get _show_usps_camera(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_usps_camera)||!1}get _entity_amazon_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_amazon_packages)||!1}get _entity_amazon_packages_delivered(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_amazon_packages_delivered)||!1}get _entity_amazon_hub_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_amazon_hub_packages)||!1}get _amazon_url(){var e;return(null===(e=this._config)||void 0===e?void 0:e.amazon_url)||""}get _show_warning(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_warning)||!1}get _show_error(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_error)||!1}get _tap_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.tap_action)||{action:"more-info"}}get _hold_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.hold_action)||{action:"none"}}get _double_tap_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return O``;this._helpers.importMoreInfoControl("climate");const e=Object.keys(this.hass.states).filter(e=>e.startsWith("sensor.mail_"));return O`
      <div class="card-config">
      <h2>${ze("common.name")} (v${"0.8"})</h2>
      <p>A custom companion card for the ${ze("common.name")} custom integration.</p>
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+De.required.icon}></ha-icon>
            <div class="title">${De.required.name}</div>
          </div>
          <div class="secondary">${De.required.secondary}</div>
        </div>
        ${De.required.show?O`
              <div class="values">
              <paper-input
                  label="Name (Required)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}

        <div class="option" @click=${this._toggleOption} .option=${"builtin_sensors"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+De.builtin_sensors.icon}></ha-icon>
            <div class="title">${De.builtin_sensors.name}</div>
          </div>
          <div class="secondary">${De.builtin_sensors.secondary}</div>
        </div>
        ${De.builtin_sensors.show?O`
              <div class="values">

                <ha-formfield .label=${"Toggle Total Packages Delivered "+(this._entity_packages_delivered?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_packages_delivered}
                    .configValue=${"entity_packages_delivered"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle Total Packages In-Transit "+(this._entity_packages_in_transit?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_packages_in_transit}
                    .configValue=${"entity_packages_in_transit"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle FedEx Packages "+(this._entity_fedex_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_fedex_packages}
                    .configValue=${"entity_fedex_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle UPS Packages "+(this._entity_UPS_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_UPS_packages}
                    .configValue=${"entity_UPS_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle USPS Packages "+(this._entity_USPS_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_USPS_packages}
                    .configValue=${"entity_USPS_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle USPS Exceptions "+(this._entity_USPS_exceptions?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_USPS_exceptions}
                    .configValue=${"entity_USPS_exceptions"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle Canada Post Packates "+(this._entity_canada_post_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_canada_post_packages}
                    .configValue=${"entity_canada_post_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle DHL Packages "+(this._entity_DHL_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_DHL_packages}
                    .configValue=${"entity_DHL_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle Hermes Packages "+(this._entity_hermes_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_hermes_packages}
                    .configValue=${"entity_hermes_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle Royal Mail "+(this._entity_royal_mail_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_royal_mail_packages}
                    .configValue=${"entity_royal_mail_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle USPS Mail "+(this._entity_usps_mail?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_usps_mail}
                    .configValue=${"entity_usps_mail"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle USPS camera "+(this._show_usps_camera?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_usps_camera}
                    .configValue=${"show_usps_camera"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <br>
                <br>
                <ha-formfield .label=${"Toggle Amazon Packages "+(this._entity_amazon_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_amazon_packages}
                    .configValue=${"entity_amazon_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle Amazon Packages Delivered "+(this._entity_amazon_packages_delivered?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_amazon_packages_delivered}
                    .configValue=${"entity_amazon_packages_delivered"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle Amazon Hub Packages "+(this._entity_amazon_hub_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_amazon_hub_packages}
                    .configValue=${"entity_amazon_hub_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle Amazon camera "+(this._show_amazon_camera?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_amazon_camera}
                    .configValue=${"show_amazon_camera"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <br>
                <br>

                <ha-formfield .label=${"Toggle warning "+(this._show_warning?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_warning}
                    .configValue=${"show_warning"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${"Toggle error "+(this._show_error?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_error}
                    .configValue=${"show_error"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            `:""}

          <div class="option" @click=${this._toggleOption} .option=${"optional_sensors"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+De.optional_sensors.icon}></ha-icon>
            <div class="title">${De.optional_sensors.name}</div>
          </div>
          <div class="secondary">${De.optional_sensors.secondary}</div>
        </div>
        ${De.optional_sensors.show?O`
              <div class="values">
              <paper-dropdown-menu
                  label="Delivery Summary"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity_delivery_message"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._entity_delivery_message)}>
                    ${e.map(e=>O`
                        <paper-item>${e}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleOption(e){this._toggleThing(e,De)}_toggleThing(e,t){const i=!t[e.target.option].show;for(const[e]of Object.entries(t))t[e].show=!1;t[e.target.option].show=i,this._toggle=!this._toggle}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;this["_"+t.configValue]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value})),Pe(this,"config-changed",{config:this._config}))}static get styles(){return te`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
        margin-bottom: 10px;
      }
    `}};e([X({attribute:!1})],Ue.prototype,"hass",void 0),e([G()],Ue.prototype,"_config",void 0),e([G()],Ue.prototype,"_toggle",void 0),e([G()],Ue.prototype,"_helpers",void 0),Ue=e([J("mailandpackages-card-editor")],Ue);const Oe="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class He extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Oe?"100px":"50px",height:Oe?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1});const i=e=>{let t,i;this.held=!1,e.touches?(t=e.touches[0].pageX,i=e.touches[0].pageY):(t=e.pageX,i=e.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(t,i),this.held=!0},this.holdTime)},s=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Pe(e,"action",{action:"hold"}):t.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Pe(e,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Pe(e,"action",{action:"double_tap"})):Pe(e,"action",{action:"tap"}))};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchend",s),e.addEventListener("touchcancel",s),e.addEventListener("mousedown",i,{passive:!0}),e.addEventListener("click",s),e.addEventListener("keyup",e=>{13===e.keyCode&&s(e)})}startAnimation(e,t){Object.assign(this.style,{left:e+"px",top:t+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-mailandpackages",He);const Re=(e,t)=>{const i=(()=>{const e=document.body;if(e.querySelector("action-handler-mailandpackages"))return e.querySelector("action-handler-mailandpackages");const t=document.createElement("action-handler-mailandpackages");return e.appendChild(t),t})();i&&i.bind(e,t)},Le=(Ye=(e={})=>t=>{Re(t.committer.element,e)},(...e)=>{const t=Ye(...e);return _.set(t,!0),t});var Ye;console.info(`%c  MAILANDPACKAGES-CARD \n%c  ${ze("common.version")} 0.8    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"mailandpackages-card",name:"mailandpackages Card",preview:!0,description:"A template custom card for you to create something awesome"});let je=class extends se{static async getConfigElement(){return document.createElement("mailandpackages-card-editor")}static getStubConfig(){return{name:"Mail and Packages",entity_usps_mail:!0,entity_packages_delivered:!0,entity_packages_in_transit:!0,show_usps_camera:!0}}setConfig(e){if(!e)throw new Error(ze("common.invalid_configuration"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config=Object.assign({title:"Mail and Packages",entity_usps_mail:!0,entity_packages_delivered:!0,entity_packages_in_transit:!0,show_usps_camera:!0},e)}shouldUpdate(e){return!!this.config&&function(e,t,i){if(t.has("config")||i)return!0;if(e.config.entity){var s=t.get("hass");return!s||s.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}render(){const e=this.hass.states["sensor.mail_updated"].state?O`Last Check: ${this.hass.states["sensor.mail_updated"].state}`:"",t=this.config.entity_usps_mail?O`<div>USPS Mail: ${this.hass.states["sensor.mail_usps_mail"].state}</div>`:"",i=this.hass.states["camera.mail_usps_camera"].attributes.entity_picture,s=this.config.entity_packages_in_transit?O`<div>In-transit: ${this.hass.states["sensor.mail_packages_in_transit"].state} </div>`:"",n=this.config.entity_packages_delivered?O`<div>Delivered: ${this.hass.states["sensor.mail_packages_delivered"].state} </div>`:"",a=!!this.config.amazon_url&&this.config.amazon_url,o=this.config.entity_amazon_packages?O`<div><a href="${a}" title="Open the amazon website" target="_blank">Amazon</a>: ${this.hass.states["sensor.mail_amazon_packages"].state}</div>`:"",r=this.config.entity_amazon_packages_delivered?O`<div>Amazon Delviered: ${this.hass.states["sensor.mail_amazon_packages_delivered"].state}</div>`:"",c=this.config.entity_amazon_hub_packages?O`<div> Amazon Hub: ${this.hass.states["sensor.mail_amazon_hub_packages"].state}</div>`:"",l=this.hass.states["camera.mail_amazon_delivery_camera"].attributes.entity_picture,h=this.config.entity_fedex_packages?O`<div>Fedex Packages: ${this.hass.states["sensor.mail_fedex_packages"].state}</div>`:"",d=this.config.entity_UPS_packages?O`<div>UPS Packages: ${this.hass.states["sensor.mail_ups_packages"].state}</div>`:"",u=this.config.entity_USPS_packages?O`<div>USPS Packages: ${this.hass.states["sensor.mail_usps_packages"].state}</div>`:"",p=this.config.entity_USPS_exceptions?O`<div>USPS Exceptions: ${this.hass.states["sensor.mail_usps_exception"].state}</div>`:"",_=this.config.entity_canada_post_packages?O`<div>Canada Post Packages: ${this.hass.states["sensor.mail_canada_post_packages"].state}</div>`:"",g=this.config.entity_DHL_packages?O`<div>DHL Packages: ${this.hass.states["sensor.mail_dhl_packages"].state}</div>`:"",m=this.config.entity_hermes_packages?O`<div>Hermes Packages: ${this.hass.states["sensor.mail_hermes_packages"].state}</div>`:"",f=this.config.entity_royal_mail_packages?O`<div>Royal Mail Packages: ${this.hass.states["sensor.mail_royal_mail_packages"].state}</div>`:"",v=this.config.entity_delivery_message?this.hass.states[this.config.entity_delivery_message].state:"";if(this.config.show_warning)return this._showWarning(ze("common.show_warning"));return!this.hass.states["sensor.mail_updated"].state?this._showError(ze("common.show_error")):O`
      <ha-card
        .header=${this.config.name}
        @action=${this._handleAction}
        .actionHandler=${Le({hasHold:Te(this.config.hold_action),hasDoubleClick:Te(this.config.double_tap_action)})}
        tabindex="0"
        .label=${"Mail and Packages: "+(this.config.entity||"No Entity Defined")}
        class="mail-and-packages"
      >
      <div class="deliveryTotals">
      ${t}
      ${s}
      ${n}
      </div>
      <p>${v}</p>
      <div class="packagesTotals">
      ${u}
      ${h}
      ${d}
      ${p}
      ${_}
      ${g}
      ${m}
      ${f}
      </div>
      ${this.config.show_usps_camera?O`
      <img class="MailImg clear" src="${i}&interval=30" />
      `:""}

      <!-- ${o||r||c||this.config.show_amazon_camera?O`<h1>Amazon</h1>`:""} -->
      ${o}
      ${r}
      ${c}
      ${this.config.show_amazon_camera?O`
      <img class="MailImg clear" src="${l}&interval=30" />
      `:""}

      <p class=".usps_update">${e} v${"0.8"}</p>

      </ha-card>
    `}_handleAction(e){this.hass&&this.config&&e.detail.action&&Ce(this,this.hass,this.config,e.detail.action)}_showWarning(e){return O`
      <hui-warning>${e}</hui-warning>
    `}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e,origConfig:this.config}),O`
      ${t}
    `}static get styles(){return te`
    .mail-and-packages {
        margin: auto;
        padding: 2em;
        position: relative;
    }
    .mail-and-packages .clear {
        clear: both;
    }
    .mail-and-packages .deliveryTotals {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
    .mail-and-packages .deliveryTotals div {
      flex: 1 1 33%;
    }
    .mail-and-packages .packagesTotals {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
    .mail-and-packages .packagesTotals div {
      flex: 0 0 50%;
    }
    .mail-and-packages .packagesTotals::after {
      content: "";
      flex: auto;
    }
    .mail-and-packages .MailImg {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 1em;
    }
    .mail-and-packages .usps_update {
                    font-size: .7em;
                }
    `}};e([X({attribute:!1})],je.prototype,"hass",void 0),e([G()],je.prototype,"config",void 0),je=e([J("mailandpackages-card")],je);export{je as MailandpackagesCard};
