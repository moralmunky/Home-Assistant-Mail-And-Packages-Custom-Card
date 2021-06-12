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
function e(e,t,s,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(n<3?a(o):n>3?a(t,s,o):a(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o
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
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},i=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${a}`);class o{constructor(e,t){this.parts=[],this.element=t;const s=[],a=[],o=document.createTreeWalker(t.content,133,null,!1);let c=0,h=-1,u=0;const{strings:p,values:{length:g}}=e;for(;u<g;){const e=o.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)r(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=p[u],s=d.exec(t)[2],i=s.toLowerCase()+"$lit$",a=e.getAttribute(i);e.removeAttribute(i);const o=a.split(n);this.parts.push({type:"attribute",index:h,name:s,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(a.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,a=t.split(n),o=a.length-1;for(let t=0;t<o;t++){let s,n=a[t];if(""===n)s=l();else{const e=d.exec(n);null!==e&&r(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(n)}i.insertBefore(s,e),this.parts.push({type:"node",index:++h})}""===a[o]?(i.insertBefore(l(),e),s.push(e)):e.data=a[o],u+=o}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&h!==c||(h++,t.insertBefore(l(),e)),c=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(s.push(e),h--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=a.pop()}for(const e of s)e.parentNode.removeChild(e)}}const r=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},c=e=>-1!==e.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:s},parts:i}=e,a=document.createTreeWalker(s,133,null,!1);let n=p(i),o=i[n],r=-1,c=0;const l=[];let d=null;for(;a.nextNode();){r++;const e=a.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==o&&o.index===r;)o.index=null!==d?-1:o.index-c,n=p(i,n),o=i[n]}l.forEach(e=>e.parentNode.removeChild(e))}const u=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},p=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(c(t))return s}return-1};
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
class v{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let n,o=0,r=0,l=a.nextNode();for(;o<i.length;)if(n=i[o],c(n)){for(;r<n.index;)r++,"TEMPLATE"===l.nodeName&&(s.push(l),a.currentNode=l.content),null===(l=a.nextNode())&&(a.currentNode=s.pop(),l=a.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const y=` ${i} `;class w{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],o=e.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===e.indexOf("--\x3e",o+1);const r=d.exec(e);t+=null===r?e+(s?y:a):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
 */const S=e=>null===e||!("object"==typeof e||"function"==typeof e),k=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class b{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new $(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let i=0;i<t;i++){s+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(S(e)||!k(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(e){this.value=void 0,this.committer=e}setValue(e){e===m||S(e)&&e===this.value||(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const e=this.value;this.value=m,e(this)}this.value!==m&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}const e=this.__pendingValue;e!==m&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):k(e)?this.__commitIterable(e):e===f?(this.value=f,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const s=new v(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const a of e)s=t[i],void 0===s&&(s=new C(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(a),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=m}}class P extends b{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends ${}let A=!1;(()=>{try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class M{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=E(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=m}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const E=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function N(e){let t=z.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},z.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const a=e.strings.join(i);return s=t.keyString.get(a),void 0===s&&(s=new o(e,e.getTemplateElement()),t.keyString.set(a,s)),t.stringsArray.set(e.strings,s),s}const z=new Map,D=new WeakMap;
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
 */const V=new
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
class{handleAttributeExpressions(e,t,s,i){const a=t[0];if("."===a){return new P(e,t.slice(1),s).parts}if("@"===a)return[new M(e,t.slice(1),i.eventContext)];if("?"===a)return[new x(e,t.slice(1),s)];return new b(e,t,s).parts}handleTextExpression(e){return new C(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const U=(e,...t)=>new w(e,t,"html",V)
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
 */,H=(e,t)=>`${e}--${t}`;let O=!0;void 0===window.ShadyCSS?O=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),O=!1);const q=e=>t=>{const s=H(t.type,e);let a=z.get(s);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},z.set(s,a));let n=a.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(i);if(n=a.keyString.get(r),void 0===n){const s=t.getTemplateElement();O&&window.ShadyCSS.prepareTemplateDom(s,e),n=new o(t,s),a.keyString.set(r,n)}return a.stringsArray.set(t.strings,n),n},L=["html","svg"],R=new Set,Y=(e,t,s)=>{R.add(e);const i=s?s.element:document.createElement("template"),a=t.querySelectorAll("style"),{length:n}=a;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=a[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{L.forEach(t=>{const s=z.get(H(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),h(e,s)})})})(e);const r=i.content;s?function(e,t,s=null){const{element:{content:i},parts:a}=e;if(null==s)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let o=p(a),r=0,c=-1;for(;n.nextNode();){c++;for(n.currentNode===s&&(r=u(t),s.parentNode.insertBefore(t,s));-1!==o&&a[o].index===c;){if(r>0){for(;-1!==o;)a[o].index+=r,o=p(a,o);return}o=p(a,o)}}}(s,o,r.firstChild):r.insertBefore(o,r.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const c=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(s){r.insertBefore(o,r.firstChild);const e=new Set;e.add(o),h(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const j={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},I=(e,t)=>t!==e&&(t==t||e==e),F={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:I};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=F){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const a=this[e];this[t]=i,this.requestUpdateInternal(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||F}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=I){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||j,a="function"==typeof i?i:i.fromAttribute;return a?a(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||j.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=F){const i=this.constructor,a=i._attributeNameForProperty(e,s);if(void 0!==a){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(a):this.setAttribute(a,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,s){let i=!0;if(void 0!==e){const a=this.constructor;s=s||a.getPropertyOptions(e),a._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;
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
const B=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),J=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(s){s.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function Z(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):J(e,t)}function X(e){return Z({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(e,t){if(t!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new Q(s,K)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const te={};class se extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),i=[];s.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!G){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Q(String(t),K)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}se.finalized=!0,se.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const a=i.scopeName,n=D.has(t),o=O&&11===t.nodeType&&!!t.host,r=o&&!R.has(a),c=r?document.createDocumentFragment():t;if(((e,t,i)=>{let a=D.get(t);void 0===a&&(s(t,t.firstChild),D.set(t,a=new C(Object.assign({templateFactory:N},i))),a.appendInto(t)),a.setValue(e),a.commit()})(e,c,Object.assign({templateFactory:q(a)},i)),r){const e=D.get(c);D.delete(c);const i=e.value instanceof v?e.value.template:void 0;Y(a,c,i),s(t,t.firstChild),t.appendChild(c),D.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)};var ie=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ae="[^\\s]+",ne=/\[([^]*?)\]/gm;function oe(e,t){for(var s=[],i=0,a=e.length;i<a;i++)s.push(e[i].substr(0,t));return s}var re=function(e){return function(t,s){var i=s[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return i>-1?i:null}};function ce(e){for(var t=[],s=1;s<arguments.length;s++)t[s-1]=arguments[s];for(var i=0,a=t;i<a.length;i++){var n=a[i];for(var o in n)e[o]=n[o]}return e}var le=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],he=oe(de,3),ue={dayNamesShort:oe(le,3),dayNames:le,monthNamesShort:he,monthNames:de,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},pe=ce({},ue),ge=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},_e={D:function(e){return String(e.getDate())},DD:function(e){return ge(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ge(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ge(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ge(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ge(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ge(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ge(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ge(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ge(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ge(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ge(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(Math.floor(Math.abs(t)/60),2)+":"+ge(Math.abs(t)%60,2)}},me=function(e){return+e-1},fe=[null,"[1-9]\\d?"],ve=[null,ae],ye=["isPm",ae,function(e,t){var s=e.toLowerCase();return s===t.amPm[0]?0:s===t.amPm[1]?1:null}],we=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var s=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?s:-s}return 0}],Se=(re("monthNamesShort"),re("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var ke=function(e,t,s){if(void 0===t&&(t=Se.default),void 0===s&&(s={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var i=[];t=(t=Se[t]||t).replace(ne,(function(e,t){return i.push(t),"@@@"}));var a=ce(ce({},pe),s);return(t=t.replace(ie,(function(t){return _e[t](e,a)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var be=["closed","locked","off"],$e=function(e,t,s,i){i=i||{},s=null==s?{}:s;var a=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return a.detail=s,e.dispatchEvent(a),a},Ce=function(e){$e(window,"haptic",e)},xe=function(e,t,s,i){var a;if("double_tap"===i&&s.double_tap_action?a=s.double_tap_action:"hold"===i&&s.hold_action?a=s.hold_action:"tap"===i&&s.tap_action&&(a=s.tap_action),a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(Ce("warning"),confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?")))switch(a.action){case"more-info":(s.entity||s.camera_image)&&$e(e,"hass-more-info",{entityId:s.entity?s.entity:s.camera_image});break;case"navigate":a.navigation_path&&function(e,t,s){void 0===s&&(s=!1),s?history.replaceState(null,"",t):history.pushState(null,"",t),$e(window,"location-changed",{replace:s})}(0,a.navigation_path);break;case"url":a.url_path&&window.open(a.url_path);break;case"toggle":s.entity&&(function(e,t){(function(e,t,s){void 0===s&&(s=!0);var i,a=function(e){return e.substr(0,e.indexOf("."))}(t),n="group"===a?"homeassistant":a;switch(a){case"lock":i=s?"unlock":"lock";break;case"cover":i=s?"open_cover":"close_cover";break;default:i=s?"turn_on":"turn_off"}e.callService(n,i,{entity_id:t})})(e,t,be.includes(e.states[t].state))}(t,s.entity),Ce("success"));break;case"call-service":if(!a.service)return void Ce("failure");var n=a.service.split(".",2);t.callService(n[0],n[1],a.service_data),Ce("success")}};function Pe(e){return void 0!==e&&"none"!==e.action}var Te={name:"Mail and Packages Custom Card",version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ae={common:Te},Me={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Ee={common:Me};const Ne={en:Object.freeze({__proto__:null,common:Te,default:Ae}),nb:Object.freeze({__proto__:null,common:Me,default:Ee})};function ze(e,t="",s=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let a;try{a=e.split(".").reduce((e,t)=>e[t],Ne[i])}catch(t){a=e.split(".").reduce((e,t)=>e[t],Ne.en)}return void 0===a&&(a=e.split(".").reduce((e,t)=>e[t],Ne.en)),""!==t&&""!==s&&(a=a.replace(t,s)),a}const De={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},builtin_sensors:{icon:"palette",name:"Built-in Entities",secondary:"Configure the built-in entities",show:!1},optional_sensors:{icon:"palette",name:"Optional Entities",secondary:"Configure the optional entities",show:!1},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}}};let Ve=class extends se{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var e;return(null===(e=this._config)||void 0===e?void 0:e.name)||""}get _entity_usps_mail(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_usps_mail)||!1}get _entity_packages_delivered(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_packages_delivered)||!1}get _entity_packages_in_transit(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_packages_in_transit)||!1}get _show_usps_camera(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_usps_camera)||!1}get _entity_USPS_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_USPS_packages)||!1}get _entity_USPS_exception(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_USPS_exception)||!1}get _entity_UPS_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_UPS_packages)||!1}get _entity_UPS_exception(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_UPS_exception)||!1}get _entity_fedex_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_fedex_packages)||!1}get _entity_canada_post_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_canada_post_packages)||!1}get _entity_DHL_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_DHL_packages)||!1}get _entity_hermes_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_hermes_packages)||!1}get _entity_royal_mail_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_royal_mail_packages)||!1}get _entity_delivery_message(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_delivery_message)||""}get _show_amazon_camera(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_amazon_camera)||!1}get _entity_amazon_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_amazon_packages)||!1}get _entity_amazon_packages_delivered(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_amazon_packages_delivered)||!1}get _entity_amazon_exception(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_amazon_exception)||!1}get _entity_amazon_hub_packages(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity_amazon_hub_packages)||!1}get _amazon_url(){var e;return(null===(e=this._config)||void 0===e?void 0:e.amazon_url)||""}get _show_warning(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_warning)||!1}get _show_error(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_error)||!1}get _tap_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.tap_action)||{action:"more-info"}}get _hold_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.hold_action)||{action:"none"}}get _double_tap_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return U``;this._helpers.importMoreInfoControl("climate");const e=Object.keys(this.hass.states).filter(e=>e.startsWith("sensor.mail_"));return U`
      <div class="card-config">
        <h2>${ze("common.name")} (v${"0.8.0.0"})</h2>
        <p>A custom companion card for the ${ze("common.name")} custom integration.</p>
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+De.required.icon}></ha-icon>
            <div class="title">${De.required.name}</div>
          </div>
          <div class="secondary">${De.required.secondary}</div>
        </div>
        ${De.required.show?U`
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
        ${De.builtin_sensors.show?U`
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
                <h3>USPS</h3>
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

                <ha-formfield .label=${"Toggle USPS Packages "+(this._entity_USPS_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_USPS_packages}
                    .configValue=${"entity_USPS_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle USPS Exception "+(this._entity_USPS_exception?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_USPS_exception}
                    .configValue=${"entity_USPS_exception"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <h3>UPS</h3>
                <ha-formfield .label=${"Toggle UPS Packages "+(this._entity_UPS_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_UPS_packages}
                    .configValue=${"entity_UPS_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <ha-formfield .label=${"Toggle UPS Exception "+(this._entity_UPS_exception?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_UPS_exception}
                    .configValue=${"entity_UPS_exception"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <h3>FedEx</h3>
                <ha-formfield .label=${"Toggle FedEx Packages "+(this._entity_fedex_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_fedex_packages}
                    .configValue=${"entity_fedex_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <h3>DHL</h3>
                <ha-formfield .label=${"Toggle DHL Packages "+(this._entity_DHL_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_DHL_packages}
                    .configValue=${"entity_DHL_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <h3>Canada Post</h3>
                <ha-formfield
                  .label=${"Toggle Canada Post Packates "+(this._entity_canada_post_packages?"off":"on")}
                >
                  <ha-switch
                    .checked=${!1!==this._entity_canada_post_packages}
                    .configValue=${"entity_canada_post_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <h3>Hermes Packages</h3>
                <ha-formfield .label=${"Toggle Hermes Packages "+(this._entity_hermes_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_hermes_packages}
                    .configValue=${"entity_hermes_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <h3>Royal Mail</h3>
                <ha-formfield .label=${"Toggle Royal Mail "+(this._entity_royal_mail_packages?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._entity_royal_mail_packages}
                    .configValue=${"entity_royal_mail_packages"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>

                <h3>Amazon</h3>
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

                <ha-formfield
                  .label=${"Toggle Amazon Exception "+(this._entity_amazon_exception?"off":"on")}
                >
                  <ha-switch
                    .checked=${!1!==this._entity_amazon_exception}
                    .configValue=${"entity_amazon_exception"}
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
            <ha-icon .icon=${"mdi:"+De.optional_sensors.icon}></ha-icon>
            <div class="title">${De.optional_sensors.name}</div>
          </div>
          <div class="secondary">${De.optional_sensors.secondary}</div>
        </div>
        ${De.optional_sensors.show?U`
              <div class="values">
                <paper-dropdown-menu
                  label="Delivery Summary"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity_delivery_message"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._entity_delivery_message)}>
                    ${e.map(e=>U`
                        <paper-item>${e}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}

        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+De.actions.icon}></ha-icon>
            <div class="title">${De.actions.name}</div>
          </div>
          <div class="secondary">${De.actions.secondary}</div>
        </div>
        ${De.actions.show?U`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+De.actions.options.tap.icon}></ha-icon>
                    <div class="title">${De.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${De.actions.options.tap.secondary}</div>
                </div>
                ${De.actions.options.tap.show?U`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+De.actions.options.hold.icon}></ha-icon>
                    <div class="title">${De.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${De.actions.options.hold.secondary}</div>
                </div>
                ${De.actions.options.hold.show?U`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+De.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${De.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${De.actions.options.double_tap.secondary}</div>
                </div>
                ${De.actions.options.double_tap.show?U`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(e){this._toggleThing(e,De.actions.options)}_toggleOption(e){this._toggleThing(e,De)}_toggleThing(e,t){const s=!t[e.target.option].show;for(const[e]of Object.entries(t))t[e].show=!1;t[e.target.option].show=s,this._toggle=!this._toggle}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;this["_"+t.configValue]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value})),$e(this,"config-changed",{config:this._config}))}static get styles(){return ee`
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
    `}};e([Z({attribute:!1})],Ve.prototype,"hass",void 0),e([X()],Ve.prototype,"_config",void 0),e([X()],Ve.prototype,"_toggle",void 0),e([X()],Ve.prototype,"_helpers",void 0),Ve=e([B("mailandpackages-card-editor")],Ve);
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
const Ue=new WeakMap;String(Math.random()).slice(2),window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e});
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
let He=!1;(()=>{try{const e={get capture(){return He=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})(),
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
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const Oe="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class qe extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Oe?"100px":"50px",height:Oe?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1});const s=e=>{let t,s;this.held=!1,e.touches?(t=e.touches[0].pageX,s=e.touches[0].pageY):(t=e.pageX,s=e.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(t,s),this.held=!0},this.holdTime)},i=s=>{s.preventDefault(),["touchend","touchcancel"].includes(s.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?$e(e,"action",{action:"hold"}):t.hasDoubleClick?"click"===s.type&&s.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,$e(e,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,$e(e,"action",{action:"double_tap"})):$e(e,"action",{action:"tap"}))};e.addEventListener("touchstart",s,{passive:!0}),e.addEventListener("touchend",i),e.addEventListener("touchcancel",i),e.addEventListener("mousedown",s,{passive:!0}),e.addEventListener("click",i),e.addEventListener("keyup",e=>{13===e.keyCode&&i(e)})}startAnimation(e,t){Object.assign(this.style,{left:e+"px",top:t+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-mailandpackages",qe);const Le=(e,t)=>{const s=(()=>{const e=document.body;if(e.querySelector("action-handler-mailandpackages"))return e.querySelector("action-handler-mailandpackages");const t=document.createElement("action-handler-mailandpackages");return e.appendChild(t),t})();s&&s.bind(e,t)},Re=(Ye=(e={})=>t=>{Le(t.committer.element,e)},(...e)=>{const t=Ye(...e);return Ue.set(t,!0),t});var Ye;
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
 */console.info(`%c  MAILANDPACKAGES-CARD \n%c  ${ze("common.version")} 0.8.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"mailandpackages-card",name:"mailandpackages Card",preview:!0,description:"A template custom card for you to create something awesome"});let je=class extends se{static async getConfigElement(){return document.createElement("mailandpackages-card-editor")}static getStubConfig(){return{name:"Mail and Packages"}}setConfig(e){if(!e)throw new Error(ze("common.invalid_configuration"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config=Object.assign({title:"Mail and Packages"},e)}shouldUpdate(e){return!!this.config&&function(e,t,s){if(t.has("config")||s)return!0;if(e.config.entity){var i=t.get("hass");return!i||i.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}render(){const e=this.hass.states["sensor.mail_updated"].state?U`Last Check: ${this.hass.states["sensor.mail_updated"].state}`:"",t=this.config.entity_packages_in_transit?U`<div class="status"><div class="statusDetails"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_in-transit.png" /> <div class="statusCount">${this.hass.states["sensor.mail_packages_in_transit"].state} </div></div></div>`:"",s=this.config.entity_packages_delivered?U`<div class="status"><div class="statusDetails"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_delivery.png" /> <div class="statusCount">${this.hass.states["sensor.mail_packages_delivered"].state} </div></div></div>`:"",i=this.config.entity_usps_mail?U`<div class="status"><div class="statusDetails"><a href="https://informeddelivery.usps.com/" title="Open the USPS Informed Delivery website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_mail.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_usps_mail"].state}</div></div></div>`:"",a=this.hass.states["camera.mail_usps_camera"].attributes.entity_picture,n=this.config.entity_USPS_packages?U`<div class="status"><div class="statusDetails"><a href="https://informeddelivery.usps.com/" title="Open the USPS Informed Delivery website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_usps.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_usps_packages"].state}</div></div></div>`:"",o=this.config.entity_USPS_exception?U`<div class="status"><div class="statusDetails"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_usps_exception.png" /> <div class="statusCount">${this.hass.states["sensor.mail_usps_exception"].state}</div></div></div>`:"",r=this.config.entity_UPS_packages?U`<div class="status"><div class="statusDetails"><a href="$https://wwwapps.ups.com/mcdp" title="Open the UPS website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_ups.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_ups_packages"].state}</div></div></div>`:"",c=this.config.entity_UPS_exception?U`<div class="status"><div class="statusDetails"><a href="$https://wwwapps.ups.com/mcdp" title="Open the UPS website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_ups_exception.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_ups_exception"].state}</div></div></div>`:"",l=this.config.entity_fedex_packages?U`<div class="status"><div class="statusDetails"><a href="$https://www.fedex.com/apps/fedextracking" title="Open the FedEx website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_fedex.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_fedex_packages"].state}</div></div></div>`:"",d=this.config.amazon_url?this.config.amazon_url:"",h=this.config.entity_amazon_packages?U`<div class="status"><div class="statusDetails"><a href="${d}" title="Open the amazon website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_amazon.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_amazon_packages"].state}</div></div></div>`:"",u=this.config.entity_amazon_exception?U`<div class="status"><div class="statusDetails"><a href="${d}" title="Open the amazon website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_amazon_exception.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_amazon_exception"].state}</div></div></div>`:"",p=this.config.entity_amazon_packages_delivered?U`<div class="status"><div class="statusDetails"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_delivery.png" /> <div class="statusCount">${this.hass.states["sensor.mail_amazon_packages_delivered"].state}</div></div></div>`:"",g=this.config.entity_amazon_hub_packages?U`<div class="status"><div class="statusDetails"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_amazon-hub.png" /> <div class="statusCount">${this.hass.states["sensor.mail_amazon_hub_packages"].state}</div></div></div>`:"",_=this.hass.states["camera.mail_amazon_delivery_camera"].attributes.entity_picture,m=this.config.entity_canada_post_packages?U`<div class="status"><div class="statusDetails"><a href="https://www.canadapost-postescanada.ca" title="Open the Canada Post website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_canada-post.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_canada_post_packages"].state}</div></div></div>`:"",f=this.config.entity_DHL_packages?U`<div class="status"><div class="statusDetails"><a href="https://www.dhl.com" title="Open the DHL website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_dhl.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_dhl_packages"].state}</div></div></div>`:"",v=this.config.entity_hermes_packages?U`<div class="status"><div class="statusDetails"><a href="https://www.myhermes.co.uk" title="Open the Hermes  website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_hermes-packages.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_hermes_packages"].state}</div></div></div>`:"",y=this.config.entity_royal_mail_packages?U`<div class="status"><div class="statusDetails"><a href="https://www.royalmail.com" title="Open the Royal Mail website." target="_blank"><img src="/hacsfiles/Home-Assistant-Mail-And-Packages-Custom-Card/img/square_royal-mail.png" /></a> <div class="statusCount">${this.hass.states["sensor.mail_royal_mail_packages"].state}</div></div></div>`:"",w=this.config.entity_delivery_message?this.hass.states[this.config.entity_delivery_message].state:"";if(this.config.show_warning)return this._showWarning(ze("common.show_warning"));return!this.hass.states["sensor.mail_updated"].state?this._showError(ze("common.show_error")):U`
      <ha-card
        tabindex="0"
        .label=${"Mail and Packages: "+(this.config.entity||"No Entity Defined")}
        class="mail-and-packages"
      >
      <div class="header">
      <h1 class="card-header">${this.config.name}</h1>
      </div>
      <div class="deliveryDetails">
      ${this.config.show_usps_camera?U`
      <img @action=${this._handleAction}
        .actionHandler=${Re({hasHold:Pe(this.config.hold_action),hasDoubleClick:Pe(this.config.double_tap_action)})} class="MailImg clear" src="${a}&interval=30" />
      `:""}
      <div class="deliveryTotals">
      ${i}
      ${t}
      ${s}
      </div>
      </div>
      <p class="summary">${w}</p>
      <div class="packagesTotals">
      ${n}
      ${o}
      ${r}
      ${c}
      ${l}
      ${m}
      ${f}
      ${v}
      ${y}
      </div>
      <!-- ${h||p||g||this.config.show_amazon_camera?U`<h1>Amazon</h1>`:""} -->
      ${this.config.show_amazon_camera?U`
      <img class="MailImg clear" src="${_}&interval=30" />
      `:""}
      <div class="amazon">
      ${h}
      ${p}
      ${u}
      ${g}
      </div>
      <div class="footer">
      <span class="usps_update">${e}</span> <span class="version">v${"0.8.0.0"}</span></div>

      </ha-card>
    `}_handleAction(e){this.hass&&this.config&&e.detail.action&&xe(this,this.hass,this.config,e.detail.action)}_showWarning(e){return U`
      <hui-warning>${e}</hui-warning>
    `}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e,origConfig:this.config}),U`
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
      padding: 1rem 1rem 0 1rem;
    }
    .mail-and-packages .deliveryDetails {
      width: 100%;
      height: auto;
      position: relative;
    }
    .mail-and-packages .packagesTotals, .mail-and-packages .amazon, .mail-and-packages .deliveryTotals {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
    }

    .mail-and-packages .packagesTotals {
      margin-bottom: 1rem;
    }

    .mail-and-packages .deliveryTotals {
      position: absolute;
      bottom: -1.5rem;
      width: 100%;
    }

    .mail-and-packages .deliveryTotals .status {
      flex: 0 0 auto;
    }

    .mail-and-packages .status {
      box-sizing: border-box;
      flex: 0 0 15%;
      width: 2.5rem;
      height: 2.5rem;
      /* background-color: var(--secondary-background-color); */
      margin: 1rem;
      font-size: 1.5rem;
      text-align: center;
    }

    .mail-and-packages .status .statusDetails{
      width: 2.5rem;
      height: 2.5rem;
      margin: auto;
      width: 50%;
    }

    .mail-and-packages .packagesTotals .statusCount, .mail-and-packages .amazon .statusCount, .mail-and-packages .deliveryTotals .statusCount {
      background-color: var(--secondary-background-color);
      border-radius: 50%;
      font-size: 1rem;
      position: relative;
      bottom: 1rem;
      right: -1.5rem;
      line-height: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
    }
    .mail-and-packages .packagesTotals img, .mail-and-packages .amazon img, .mail-and-packages .deliveryTotals img {
      height: 2.5rem;
      width: auto;
      margin-right: 1rem;
      border-radius: 50%;
    }
    /* .mail-and-packages .packagesTotals::after {
      content: "";
      flex: auto;
    } */
    .mail-and-packages .MailImg {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 2px;
    }
    .mail-and-packages .header, .mail-and-packages .footer {
        background-color: none;
        padding: 1rem;
        margin-bottom: 2px;
    }
    .mail-and-packages .header {
        display: none;
    }
    .mail-and-packages .footer {
        padding: 1rem 1rem 0 1rem;
        margin-bottom: 0;
    }
    .mail-and-packages .usps_update, .mail-and-packages .version {
        font-size: .7rem;
    }
    .mail-and-packages .version {
        float: right;
    }
    `}};e([Z({attribute:!1})],je.prototype,"hass",void 0),e([X()],je.prototype,"config",void 0),je=e([B("mailandpackages-card")],je);export{je as MailandpackagesCard};
