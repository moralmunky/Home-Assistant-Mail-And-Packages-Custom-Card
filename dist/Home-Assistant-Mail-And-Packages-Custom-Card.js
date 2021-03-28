/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(e,t,i,s){var a,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(n<3?a(o):n>3?a(t,i,o):a(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o
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
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${s}--\x3e`,n=new RegExp(`${s}|${a}`);class o{constructor(e,t){this.parts=[],this.element=t;const i=[],a=[],o=document.createTreeWalker(t.content,133,null,!1);let c=0,h=-1,p=0;const{strings:u,values:{length:g}}=e;for(;p<g;){const e=o.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)r(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=u[p],i=d.exec(t)[2],s=i.toLowerCase()+"$lit$",a=e.getAttribute(s);e.removeAttribute(s);const o=a.split(n);this.parts.push({type:"attribute",index:h,name:i,strings:o}),p+=o.length-1}}"TEMPLATE"===e.tagName&&(a.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,a=t.split(n),o=a.length-1;for(let t=0;t<o;t++){let i,n=a[t];if(""===n)i=l();else{const e=d.exec(n);null!==e&&r(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(n)}s.insertBefore(i,e),this.parts.push({type:"node",index:++h})}""===a[o]?(s.insertBefore(l(),e),i.push(e)):e.data=a[o],p+=o}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&h!==c||(h++,t.insertBefore(l(),e)),c=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(i.push(e),h--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),p++}}else o.currentNode=a.pop()}for(const e of i)e.parentNode.removeChild(e)}}const r=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},c=e=>-1!==e.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:i},parts:s}=e,a=document.createTreeWalker(i,133,null,!1);let n=u(s),o=s[n],r=-1,c=0;const l=[];let d=null;for(;a.nextNode();){r++;const e=a.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==o&&o.index===r;)o.index=null!==d?-1:o.index-c,n=u(s,n),o=s[n]}l.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},u=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(c(t))return i}return-1};
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
const g=new WeakMap,_=e=>"function"==typeof e&&g.has(e),m={},f={};
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
class v{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let n,o=0,r=0,l=a.nextNode();for(;o<s.length;)if(n=s[o],c(n)){for(;r<n.index;)r++,"TEMPLATE"===l.nodeName&&(i.push(l),a.currentNode=l.content),null===(l=a.nextNode())&&(a.currentNode=i.pop(),l=a.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const y=` ${s} `;class w{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const e=this.strings[n],o=e.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===e.indexOf("--\x3e",o+1);const r=d.exec(e);t+=null===r?e+(i?y:a):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
 */const S=e=>null===e||!("object"==typeof e||"function"==typeof e),b=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new $(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(S(e)||!b(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(e){this.value=void 0,this.committer=e}setValue(e){e===m||S(e)&&e===this.value||(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const e=this.value;this.value=m,e(this)}this.value!==m&&this.committer.commit()}}class x{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}const e=this.__pendingValue;e!==m&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):b(e)?this.__commitIterable(e):e===f?(this.value=f,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const i=new v(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const a of e)i=t[s],void 0===i&&(i=new x(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(a),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=m}}class C extends k{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends ${}let E=!1;(()=>{try{const e={get capture(){return E=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class M{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=N(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=m}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const N=e=>e&&(E?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function A(e){let t=z.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},z.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(s);return i=t.keyString.get(a),void 0===i&&(i=new o(e,e.getTemplateElement()),t.keyString.set(a,i)),t.stringsArray.set(e.strings,i),i}const z=new Map,V=new WeakMap;
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
 */const D=new
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
class{handleAttributeExpressions(e,t,i,s){const a=t[0];if("."===a){return new C(e,t.slice(1),i).parts}if("@"===a)return[new M(e,t.slice(1),s.eventContext)];if("?"===a)return[new P(e,t.slice(1),i)];return new k(e,t,i).parts}handleTextExpression(e){return new x(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const O=(e,...t)=>new w(e,t,"html",D)
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
 */,U=(e,t)=>`${e}--${t}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const q=e=>t=>{const i=U(t.type,e);let a=z.get(i);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},z.set(i,a));let n=a.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(s);if(n=a.keyString.get(r),void 0===n){const i=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(i,e),n=new o(t,i),a.keyString.set(r,n)}return a.stringsArray.set(t.strings,n),n},L=["html","svg"],R=new Set,Y=(e,t,i)=>{R.add(e);const s=i?i.element:document.createElement("template"),a=t.querySelectorAll("style"),{length:n}=a;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=a[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{L.forEach(t=>{const i=z.get(U(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),h(e,i)})})})(e);const r=s.content;i?function(e,t,i=null){const{element:{content:s},parts:a}=e;if(null==i)return void s.appendChild(t);const n=document.createTreeWalker(s,133,null,!1);let o=u(a),r=0,c=-1;for(;n.nextNode();){c++;for(n.currentNode===i&&(r=p(t),i.parentNode.insertBefore(t,i));-1!==o&&a[o].index===c;){if(r>0){for(;-1!==o;)a[o].index+=r,o=u(a,o);return}o=u(a,o)}}}(i,o,r.firstChild):r.insertBefore(o,r.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const c=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){r.insertBefore(o,r.firstChild);const e=new Set;e.add(o),h(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const j={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},I=(e,t)=>t!==e&&(t==t||e==e),F={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:I};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=F){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const a=this[e];this[t]=s,this.requestUpdateInternal(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||F}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=I){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||j,a="function"==typeof s?s:s.fromAttribute;return a?a(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||j.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=F){const s=this.constructor,a=s._attributeNameForProperty(e,i);if(void 0!==a){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(a):this.setAttribute(a,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let s=!0;if(void 0!==e){const a=this.constructor;i=i||a.getPropertyOptions(e),a._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;
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
const B=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),J=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function Z(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):J(e,t)}function X(e){return Z({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(e,t){if(t!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const i=t.reduce((t,i,s)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1],e[0]);return new Q(i,K)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const te={};class ie extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),s=[];i.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!G){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Q(String(t),K)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ie.finalized=!0,ie.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const a=s.scopeName,n=V.has(t),o=H&&11===t.nodeType&&!!t.host,r=o&&!R.has(a),c=r?document.createDocumentFragment():t;if(((e,t,s)=>{let a=V.get(t);void 0===a&&(i(t,t.firstChild),V.set(t,a=new x(Object.assign({templateFactory:A},s))),a.appendInto(t)),a.setValue(e),a.commit()})(e,c,Object.assign({templateFactory:q(a)},s)),r){const e=V.get(c);V.delete(c);const s=e.value instanceof v?e.value.template:void 0;Y(a,c,s),i(t,t.firstChild),t.appendChild(c),V.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)};var se=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ae="[^\\s]+",ne=/\[([^]*?)\]/gm;function oe(e,t){for(var i=[],s=0,a=e.length;s<a;s++)i.push(e[s].substr(0,t));return i}var re=function(e){return function(t,i){var s=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return s>-1?s:null}};function ce(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var s=0,a=t;s<a.length;s++){var n=a[s];for(var o in n)e[o]=n[o]}return e}var le=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],he=oe(de,3),pe={dayNamesShort:oe(le,3),dayNames:le,monthNamesShort:he,monthNames:de,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},ue=ce({},pe),ge=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},_e={D:function(e){return String(e.getDate())},DD:function(e){return ge(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ge(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ge(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ge(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ge(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ge(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ge(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ge(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ge(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ge(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ge(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(Math.floor(Math.abs(t)/60),2)+":"+ge(Math.abs(t)%60,2)}},me=function(e){return+e-1},fe=[null,"[1-9]\\d?"],ve=[null,ae],ye=["isPm",ae,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],we=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],Se=(re("monthNamesShort"),re("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var be=function(e,t,i){if(void 0===t&&(t=Se.default),void 0===i&&(i={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var s=[];t=(t=Se[t]||t).replace(ne,(function(e,t){return s.push(t),"@@@"}));var a=ce(ce({},ue),i);return(t=t.replace(se,(function(t){return _e[t](e,a)}))).replace(/@@@/g,(function(){return s.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var ke=["closed","locked","off"],$e=function(e,t,i,s){s=s||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return a.detail=i,e.dispatchEvent(a),a},xe=function(e){$e(window,"haptic",e)},Pe=function(e,t,i,s){var a;if("double_tap"===s&&i.double_tap_action?a=i.double_tap_action:"hold"===s&&i.hold_action?a=i.hold_action:"tap"===s&&i.tap_action&&(a=i.tap_action),a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(xe("warning"),confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?")))switch(a.action){case"more-info":(i.entity||i.camera_image)&&$e(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":a.navigation_path&&function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),$e(window,"location-changed",{replace:i})}(0,a.navigation_path);break;case"url":a.url_path&&window.open(a.url_path);break;case"toggle":i.entity&&(function(e,t){(function(e,t,i){void 0===i&&(i=!0);var s,a=function(e){return e.substr(0,e.indexOf("."))}(t),n="group"===a?"homeassistant":a;switch(a){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}e.callService(n,s,{entity_id:t})})(e,t,ke.includes(e.states[t].state))}(t,i.entity),xe("success"));break;case"call-service":if(!a.service)return void xe("failure");var n=a.service.split(".",2);t.callService(n[0],n[1],a.service_data),xe("success")}};function Ce(e){return void 0!==e&&"none"!==e.action}var Te={name:"Mail and Packages Custom Card",version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ee={common:Te},Me={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Ne={common:Me};const Ae={en:Object.freeze({__proto__:null,common:Te,default:Ee}),nb:Object.freeze({__proto__:null,common:Me,default:Ne})};function ze(e,t="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let a;try{a=e.split(".").reduce((e,t)=>e[t],Ae[s])}catch(t){a=e.split(".").reduce((e,t)=>e[t],Ae.en)}return void 0===a&&(a=e.split(".").reduce((e,t)=>e[t],Ae.en)),""!==t&&""!==i&&(a=a.replace(t,i)),a}const Ve={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},builtin_sensors:{icon:"palette",name:"Built-in Entities",secondary:"Configure the built-in entities",show:!1},optional_sensors:{icon:"palette",name:"Optional Entities",secondary:"Configure the optional entities",show:!1},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}}};let De=class extends ie{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var e;return(null===(e=this._config)||void 0===e?void 0:e.name)||""}get _entity_usps_mail(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_usps_mail)||!1}get _entity_packages_delivered(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_packages_delivered)||!1}get _entity_packages_in_transit(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_packages_in_transit)||!1}get _show_amazon_camera(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_amazon_camera)||!1}get _entity_fedex_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_fedex_packages)||!1}get _entity_UPS_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_UPS_packages)||!1}get _entity_USPS_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_USPS_packages)||!1}get _entity_USPS_exceptions(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_USPS_exceptions)||!1}get _entity_canada_post_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_canada_post_packages)||!1}get _entity_DHL_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_DHL_packages)||!1}get _entity_hermes_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_hermes_packages)||!1}get _entity_royal_mail_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_royal_mail_packages)||!1}get _entity_delivery_message(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_delivery_message)||""}get _show_usps_camera(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_usps_camera)||!1}get _entity_amazon_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_amazon_packages)||!1}get _entity_amazon_packages_delivered(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_amazon_packages_delivered)||!1}get _entity_amazon_hub_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_amazon_hub_packages)||!1}get _amazon_url(){var e;return(null===(e=this._config)||void 0===e?void 0:e.amazon_url)||""}get _show_warning(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_warning)||!1}get _show_error(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_error)||!1}get _tap_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.tap_action)||{action:"more-info"}}get _hold_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.hold_action)||{action:"none"}}get _double_tap_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return O``;this._helpers.importMoreInfoControl("climate");const e=Object.keys(this.hass.states).filter(e=>e.startsWith("sensor.mail_"));return O`
      <div class="card-config">
        <h2>${ze("common.name")} (v${"0.7.2.4"})</h2>
        <p>A custom companion card for the ${ze("common.name")} custom integration.</p>
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Ve.required.icon}></ha-icon>
            <div class="title">${Ve.required.name}</div>
          </div>
          <div class="secondary">${Ve.required.secondary}</div>
        </div>
        ${Ve.required.show?O`
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
            <ha-icon .icon=${"mdi:"+Ve.builtin_sensors.icon}></ha-icon>
            <div class="title">${Ve.builtin_sensors.name}</div>
          </div>
          <div class="secondary">${Ve.builtin_sensors.secondary}</div>
        </div>
        ${Ve.builtin_sensors.show?O`
              <div class="values">
                <ha-formfield
                  .label=${"Toggle Total Packages Delivered "+(this._entity_packages_delivered?"off":"on")}
                >
                  <ha-switch
                    .checked=${!1!==this._entity_packages_delivered}
                    .configValue=${"entity_packages_delivered"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield
                  .label=${"Toggle Total Packages In-Transit "+(this._entity_packages_in_transit?"off":"on")}
                >
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

                <ha-formfield
                  .label=${"Toggle Canada Post Packates "+(this._entity_canada_post_packages?"off":"on")}
                >
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
                <br />
                <br />
                <paper-input
                  label="Amazon Link URL"
                  .value=${this._amazon_url}
                  .configValue=${"amazon_url"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <ha-formfield .label=${"Toggle Amazon Packages "+(this._entity_amazon_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_amazon_packages}
                    .configValue=${"entity_amazon_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield
                  .label=${"Toggle Amazon Packages Delivered "+(this._entity_amazon_packages_delivered?"off":"on")}
                >
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

                <br />
                <br />

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
            <ha-icon .icon=${"mdi:"+Ve.optional_sensors.icon}></ha-icon>
            <div class="title">${Ve.optional_sensors.name}</div>
          </div>
          <div class="secondary">${Ve.optional_sensors.secondary}</div>
        </div>
        ${Ve.optional_sensors.show?O`
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

        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Ve.actions.icon}></ha-icon>
            <div class="title">${Ve.actions.name}</div>
          </div>
          <div class="secondary">${Ve.actions.secondary}</div>
        </div>
        ${Ve.actions.show?O`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Ve.actions.options.tap.icon}></ha-icon>
                    <div class="title">${Ve.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${Ve.actions.options.tap.secondary}</div>
                </div>
                ${Ve.actions.options.tap.show?O`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Ve.actions.options.hold.icon}></ha-icon>
                    <div class="title">${Ve.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${Ve.actions.options.hold.secondary}</div>
                </div>
                ${Ve.actions.options.hold.show?O`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Ve.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${Ve.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${Ve.actions.options.double_tap.secondary}</div>
                </div>
                ${Ve.actions.options.double_tap.show?O`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(e){this._toggleThing(e,Ve.actions.options)}_toggleOption(e){this._toggleThing(e,Ve)}_toggleThing(e,t){const i=!t[e.target.option].show;for(const[e]of Object.entries(t))t[e].show=!1;t[e.target.option].show=i,this._toggle=!this._toggle}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;this["_"+t.configValue]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value})),$e(this,"config-changed",{config:this._config}))}static get styles(){return ee`
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
    `}};e([Z({attribute:!1})],De.prototype,"hass",void 0),e([X()],De.prototype,"_config",void 0),e([X()],De.prototype,"_toggle",void 0),e([X()],De.prototype,"_helpers",void 0),De=e([B("mailandpackages-card-editor")],De);
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
const Oe=new WeakMap;String(Math.random()).slice(2),window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e});
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
let Ue=!1;(()=>{try{const e={get capture(){return Ue=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})(),
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const He="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class qe extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:He?"100px":"50px",height:He?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1});const i=e=>{let t,i;this.held=!1,e.touches?(t=e.touches[0].pageX,i=e.touches[0].pageY):(t=e.pageX,i=e.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(t,i),this.held=!0},this.holdTime)},s=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?$e(e,"action",{action:"hold"}):t.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,$e(e,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,$e(e,"action",{action:"double_tap"})):$e(e,"action",{action:"tap"}))};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchend",s),e.addEventListener("touchcancel",s),e.addEventListener("mousedown",i,{passive:!0}),e.addEventListener("click",s),e.addEventListener("keyup",e=>{13===e.keyCode&&s(e)})}startAnimation(e,t){Object.assign(this.style,{left:e+"px",top:t+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-mailandpackages",qe);const Le=(e,t)=>{const i=(()=>{const e=document.body;if(e.querySelector("action-handler-mailandpackages"))return e.querySelector("action-handler-mailandpackages");const t=document.createElement("action-handler-mailandpackages");return e.appendChild(t),t})();i&&i.bind(e,t)},Re=(Ye=(e={})=>t=>{Le(t.committer.element,e)},(...e)=>{const t=Ye(...e);return Oe.set(t,!0),t});var Ye;
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
 */console.info(`%c  MAILANDPACKAGES-CARD \n%c  ${ze("common.version")} 0.7.2.4    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"mailandpackages-card",name:"mailandpackages Card",preview:!0,description:"A template custom card for you to create something awesome"});let je=class extends ie{static async getConfigElement(){return document.createElement("mailandpackages-card-editor")}static getStubConfig(){return{name:"Mail and Packages"}}setConfig(e){if(!e)throw new Error(ze("common.invalid_configuration"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config=Object.assign({title:"Mail and Packages"},e)}shouldUpdate(e){return!!this.config&&function(e,t,i){if(t.has("config")||i)return!0;if(e.config.entity){var s=t.get("hass");return!s||s.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}render(){const e=this.hass.states["sensor.mail_updated"].state?O`Last Check: ${this.hass.states["sensor.mail_updated"].state}`:"",t=this.config.entity_usps_mail?O`<div><a href="https://informeddelivery.usps.com/" title="Open the USPS Informed Delivery website." target="_blank"><img src="/hacsfiles/img/square_mail.png" /></a> ${this.hass.states["sensor.mail_usps_mail"].state}</div>`:"",i=this.hass.states["camera.mail_usps_camera"].attributes.entity_picture,s=this.config.entity_packages_in_transit?O`<div><img src="/hacsfiles/img/square_in-transit.png" /> ${this.hass.states["sensor.mail_packages_in_transit"].state} </div>`:"",a=this.config.entity_packages_delivered?O`<div><img src="/hacsfiles/img/square_delivery.png" /> ${this.hass.states["sensor.mail_packages_delivered"].state} </div>`:"",n=this.config.amazon_url?this.config.amazon_url:"",o=this.config.entity_amazon_packages?O`<div><a href="${n}" title="Open the amazon website." target="_blank"><img src="/hacsfiles/img/square_amazon.png" /></a> ${this.hass.states["sensor.mail_amazon_packages"].state}</div>`:"",r=this.config.entity_amazon_packages_delivered?O`<div><img src="/hacsfiles/img/square_delivery.png" /> ${this.hass.states["sensor.mail_amazon_packages_delivered"].state}</div>`:"",c=this.config.entity_amazon_hub_packages?O`<div><img src="/hacsfiles/img/square_amazon-hub.png" /> ${this.hass.states["sensor.mail_amazon_hub_packages"].state}</div>`:"",l=this.hass.states["camera.mail_amazon_delivery_camera"].attributes.entity_picture,d=this.config.entity_fedex_packages?O`<div><a href="$https://www.fedex.com/apps/fedextracking" title="Open the FedEx website." target="_blank"><img src="/hacsfiles/img/square_fedex.png" /></a> ${this.hass.states["sensor.mail_fedex_packages"].state}</div>`:"",h=this.config.entity_UPS_packages?O`<div><a href="$https://wwwapps.ups.com/mcdp" title="Open the UPS website." target="_blank"><img src="/hacsfiles/img/square_ups.png" /></a> ${this.hass.states["sensor.mail_ups_packages"].state}</div>`:"",p=this.config.entity_USPS_packages?O`<div><a href="https://informeddelivery.usps.com/" title="Open the USPS Informed Delivery website." target="_blank"><img src="/hacsfiles/img/square_usps.png" /></a> ${this.hass.states["sensor.mail_usps_packages"].state}</div>`:"",u=this.config.entity_USPS_exceptions?O`<div><img src="/hacsfiles/img/square_usps.png" /> ${this.hass.states["sensor.mail_usps_exception"].state}</div>`:"",g=this.config.entity_canada_post_packages?O`<div><a href="https://www.canadapost-postescanada.ca" title="Open the Canada Post website." target="_blank"><img src="/hacsfiles/img/square_canada-post.png" /></a> ${this.hass.states["sensor.mail_canada_post_packages"].state}</div>`:"",_=this.config.entity_DHL_packages?O`<div><a href="https://www.dhl.com" title="Open the DHL website." target="_blank"><img src="/hacsfiles/img/square_dhl.png" /></a> ${this.hass.states["sensor.mail_dhl_packages"].state}</div>`:"",m=this.config.entity_hermes_packages?O`<div><a href="https://www.myhermes.co.uk" title="Open the Hermes  website." target="_blank"><img src="/hacsfiles/img/square_hermes-packages.png" /></a> ${this.hass.states["sensor.mail_hermes_packages"].state}</div>`:"",f=this.config.entity_royal_mail_packages?O`<div><a href="https://www.royalmail.com" title="Open the Royal Mail website." target="_blank"><img src="/hacsfiles/img/square_royal-mail.png" /></a> ${this.hass.states["sensor.mail_royal_mail_packages"].state}</div>`:"",v=this.config.entity_delivery_message?this.hass.states[this.config.entity_delivery_message].state:"";if(this.config.show_warning)return this._showWarning(ze("common.show_warning"));return!this.hass.states["sensor.mail_updated"].state?this._showError(ze("common.show_error")):O`
      <ha-card
        tabindex="0"
        .label=${"Mail and Packages: "+(this.config.entity||"No Entity Defined")}
        class="mail-and-packages"
      >
      <div class="header">
      <h1 class="card-header">${this.config.name}</h1>
      </div>
      ${this.config.show_usps_camera?O`
      <img @action=${this._handleAction}
        .actionHandler=${Re({hasHold:Ce(this.config.hold_action),hasDoubleClick:Ce(this.config.double_tap_action)})} class="MailImg clear" src="${i}&interval=30" />
      `:""}
      <div class="deliveryTotals">
      ${t}
      ${s}
      ${a}
      </div>
      <p class="summary">${v}</p>
      <div class="packagesTotals">
      ${p}
      ${d}
      ${h}
      ${u}
      ${g}
      ${_}
      ${m}
      ${f}
      </div>
      <!-- ${o||r||c||this.config.show_amazon_camera?O`<h1>Amazon</h1>`:""} -->
      <div class="amazon">
      ${o}
      ${r}
      ${c}
      </div>
      ${this.config.show_amazon_camera?O`
      <img class="MailImg clear" src="${l}&interval=30" />
      `:""}
      <div class="footer">
      <span class="usps_update">${e}</span> <span class="version">v${"0.7.2.4"}</span></div>

      </ha-card>
    `}_handleAction(e){this.hass&&this.config&&e.detail.action&&Pe(this,this.hass,this.config,e.detail.action)}_showWarning(e){return O`
      <hui-warning>${e}</hui-warning>
    `}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e,origConfig:this.config}),O`
      ${t}
    `}static get styles(){return ee`
    .mail-and-packages {
        margin: auto;
        padding: 0;
        position: relative;
    }
    .mail-and-packages .clear {
        clear: both;
    }
    .mail-and-packages a {
        color: var(--secondary-text-color)
    }
    .mail-and-packages .summary {
      padding: 0 1rem;
    }
    .mail-and-packages .deliveryTotals {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
    .mail-and-packages .deliveryTotals div {
      flex: 0 0 33.3%;
    }
    .mail-and-packages .packagesTotals, .mail-and-packages .amazon, .mail-and-packages .deliveryTotals {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
    .mail-and-packages .packagesTotals div, .mail-and-packages .amazon div, .mail-and-packages .deliveryTotals div {
      box-sizing: border-box;
      flex: 0 0 50%;
      width: 50%;
      height: 45px;
      background-color: var(--secondary-background-color);
      margin-bottom: 2px;
      font-size: 2rem;
      line-height: 45px;
    }
    .mail-and-packages .amazon div, .mail-and-packages .deliveryTotals div {
      flex: 0 0 33.3%;
      font-size: 2rem;
    }
    .mail-and-packages .packagesTotals img, .mail-and-packages .amazon img, .mail-and-packages .deliveryTotals img {
      width: 45px;
      height: 45px;
      float: left;
      margin-right: 1rem;
    }
    .mail-and-packages .packagesTotals::after {
      content: "";
      flex: auto;
    }
    .mail-and-packages .MailImg {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 2px;
    }
    .mail-and-packages .header, .mail-and-packages .footer {
        background-color: #588EF7;
        padding: 1rem;
        margin-bottom: 2px;
    }
    .mail-and-packages .footer {
        padding: 0 1rem;
        margin-bottom: 0;
    }
    .mail-and-packages .usps_update, .mail-and-packages .version {
        font-size: .7rem;
    }
    .mail-and-packages .version {
        float: right;
    }
    `}};e([Z({attribute:!1})],je.prototype,"hass",void 0),e([X()],je.prototype,"config",void 0),je=e([B("mailandpackages-card")],je);export{je as MailandpackagesCard};
