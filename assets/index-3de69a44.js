function j0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var z0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ym={exports:{}},ga={},_m={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Co=Symbol.for("react.element"),U0=Symbol.for("react.portal"),$0=Symbol.for("react.fragment"),B0=Symbol.for("react.strict_mode"),W0=Symbol.for("react.profiler"),H0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),Y0=Symbol.for("react.forward_ref"),G0=Symbol.for("react.suspense"),K0=Symbol.for("react.memo"),Q0=Symbol.for("react.lazy"),kd=Symbol.iterator;function q0(e){return e===null||typeof e!="object"?null:(e=kd&&e[kd]||e["@@iterator"],typeof e=="function"?e:null)}var wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sm=Object.assign,Em={};function oi(e,t,n){this.props=e,this.context=t,this.refs=Em,this.updater=n||wm}oi.prototype.isReactComponent={};oi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cm(){}Cm.prototype=oi.prototype;function Ac(e,t,n){this.props=e,this.context=t,this.refs=Em,this.updater=n||wm}var Pc=Ac.prototype=new Cm;Pc.constructor=Ac;Sm(Pc,oi.prototype);Pc.isPureReactComponent=!0;var bd=Array.isArray,km=Object.prototype.hasOwnProperty,Oc={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function xm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)km.call(t,r)&&!bm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Co,type:e,key:o,ref:s,props:i,_owner:Oc.current}}function X0(e,t){return{$$typeof:Co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Co}function J0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xd=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?J0(""+e.key):t.toString(36)}function hs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Co:case U0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+nl(s,0):r,bd(i)?(n="",e!=null&&(n=e.replace(xd,"$&/")+"/"),hs(i,t,n,"",function(u){return u})):i!=null&&(Rc(i)&&(i=X0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(xd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",bd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+nl(o,a);s+=hs(o,t,n,l,i)}else if(l=q0(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+nl(o,a++),s+=hs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function zo(e,t,n){if(e==null)return e;var r=[],i=0;return hs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Z0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},ps={transition:null},e1={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:ps,ReactCurrentOwner:Oc};Y.Children={map:zo,forEach:function(e,t,n){zo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zo(e,function(){t++}),t},toArray:function(e){return zo(e,function(t){return t})||[]},only:function(e){if(!Rc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=oi;Y.Fragment=$0;Y.Profiler=W0;Y.PureComponent=Ac;Y.StrictMode=B0;Y.Suspense=G0;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Oc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)km.call(t,l)&&!bm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Co,type:e.type,key:i,ref:o,props:r,_owner:s}};Y.createContext=function(e){return e={$$typeof:V0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:H0,_context:e},e.Consumer=e};Y.createElement=xm;Y.createFactory=function(e){var t=xm.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Y0,render:e}};Y.isValidElement=Rc;Y.lazy=function(e){return{$$typeof:Q0,_payload:{_status:-1,_result:e},_init:Z0}};Y.memo=function(e,t){return{$$typeof:K0,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=ps.transition;ps.transition={};try{e()}finally{ps.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Ve.current.useCallback(e,t)};Y.useContext=function(e){return Ve.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ve.current.useEffect(e,t)};Y.useId=function(){return Ve.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ve.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};Y.useRef=function(e){return Ve.current.useRef(e)};Y.useState=function(e){return Ve.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ve.current.useTransition()};Y.version="18.2.0";_m.exports=Y;var L=_m.exports;const va=Nc(L),t1=j0({__proto__:null,default:va},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=L,r1=Symbol.for("react.element"),i1=Symbol.for("react.fragment"),o1=Object.prototype.hasOwnProperty,s1=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a1={key:!0,ref:!0,__self:!0,__source:!0};function Tm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)o1.call(t,r)&&!a1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:r1,type:e,key:o,ref:s,props:i,_owner:s1.current}}ga.Fragment=i1;ga.jsx=Tm;ga.jsxs=Tm;ym.exports=ga;var B=ym.exports,Xl={},Im={exports:{}},st={},Nm={exports:{}},Am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,I){var O=x.length;x.push(I);e:for(;0<O;){var M=O-1>>>1,te=x[M];if(0<i(te,I))x[M]=I,x[O]=te,O=M;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var I=x[0],O=x.pop();if(O!==I){x[0]=O;e:for(var M=0,te=x.length,E=te>>>1;M<E;){var Nt=2*(M+1)-1,j=x[Nt],Q=Nt+1,we=x[Q];if(0>i(j,O))Q<te&&0>i(we,j)?(x[M]=we,x[Q]=O,M=Q):(x[M]=j,x[Nt]=O,M=Nt);else if(Q<te&&0>i(we,O))x[M]=we,x[Q]=O,M=Q;else break e}}return I}function i(x,I){var O=x.sortIndex-I.sortIndex;return O!==0?O:x.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,h=!1,m=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(x){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=x)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function w(x){if(y=!1,v(x),!m)if(n(l)!==null)m=!0,W(C);else{var I=n(u);I!==null&&jn(w,I.startTime-x)}}function C(x,I){m=!1,y&&(y=!1,g(b),b=-1),h=!0;var O=d;try{for(v(I),f=n(l);f!==null&&(!(f.expirationTime>I)||x&&!z());){var M=f.callback;if(typeof M=="function"){f.callback=null,d=f.priorityLevel;var te=M(f.expirationTime<=I);I=e.unstable_now(),typeof te=="function"?f.callback=te:f===n(l)&&r(l),v(I)}else r(l);f=n(l)}if(f!==null)var E=!0;else{var Nt=n(u);Nt!==null&&jn(w,Nt.startTime-I),E=!1}return E}finally{f=null,d=O,h=!1}}var k=!1,S=null,b=-1,A=5,P=-1;function z(){return!(e.unstable_now()-P<A)}function G(){if(S!==null){var x=e.unstable_now();P=x;var I=!0;try{I=S(!0,x)}finally{I?U():(k=!1,S=null)}}else k=!1}var U;if(typeof p=="function")U=function(){p(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Z=$.port2;$.port1.onmessage=G,U=function(){Z.postMessage(null)}}else U=function(){_(G,0)};function W(x){S=x,k||(k=!0,U())}function jn(x,I){b=_(function(){x(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,W(C))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(x){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var O=d;d=I;try{return x()}finally{d=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,I){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var O=d;d=x;try{return I()}finally{d=O}},e.unstable_scheduleCallback=function(x,I,O){var M=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?M+O:M):O=M,x){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=O+te,x={id:c++,callback:I,priorityLevel:x,startTime:O,expirationTime:te,sortIndex:-1},O>M?(x.sortIndex=O,t(u,x),n(l)===null&&x===n(u)&&(y?(g(b),b=-1):y=!0,jn(w,O-M))):(x.sortIndex=te,t(l,x),m||h||(m=!0,W(C))),x},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(x){var I=d;return function(){var O=d;d=I;try{return x.apply(this,arguments)}finally{d=O}}}})(Am);Nm.exports=Am;var l1=Nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm=L,ot=l1;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Om=new Set,Ki={};function pr(e,t){Kr(e,t),Kr(e+"Capture",t)}function Kr(e,t){for(Ki[e]=t,e=0;e<t.length;e++)Om.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,u1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Td={},Id={};function c1(e){return Jl.call(Id,e)?!0:Jl.call(Td,e)?!1:u1.test(e)?Id[e]=!0:(Td[e]=!0,!1)}function f1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function d1(e,t,n,r){if(t===null||typeof t>"u"||f1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dc=/[\-:]([a-z])/g;function Lc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Dc,Lc);Me[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Dc,Lc);Me[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Dc,Lc);Me[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mc(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(d1(t,n,i,r)&&(n=null),r||i===null?c1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tn=Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),Fc=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),eu=Symbol.for("react.suspense"),tu=Symbol.for("react.suspense_list"),zc=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Lm=Symbol.for("react.offscreen"),Nd=Symbol.iterator;function gi(e){return e===null||typeof e!="object"?null:(e=Nd&&e[Nd]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,rl;function Ii(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var il=!1;function ol(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ii(e):""}function h1(e){switch(e.tag){case 5:return Ii(e.type);case 16:return Ii("Lazy");case 13:return Ii("Suspense");case 19:return Ii("SuspenseList");case 0:case 2:case 15:return e=ol(e.type,!1),e;case 11:return e=ol(e.type.render,!1),e;case 1:return e=ol(e.type,!0),e;default:return""}}function nu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case Er:return"Portal";case Zl:return"Profiler";case Fc:return"StrictMode";case eu:return"Suspense";case tu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dm:return(e.displayName||"Context")+".Consumer";case Rm:return(e._context.displayName||"Context")+".Provider";case jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zc:return t=e.displayName||null,t!==null?t:nu(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return nu(e(t))}catch{}}return null}function p1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nu(t);case 8:return t===Fc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m1(e){var t=Mm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $o(e){e._valueTracker||(e._valueTracker=m1(e))}function Fm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ts(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ru(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ad(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jm(e,t){t=t.checked,t!=null&&Mc(e,"checked",t,!1)}function iu(e,t){jm(e,t);var n=Tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ou(e,t.type,n):t.hasOwnProperty("defaultValue")&&ou(e,t.type,Tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ou(e,t,n){(t!=="number"||Ts(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ni=Array.isArray;function jr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function su(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Od(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Ni(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tn(n)}}function zm(e,t){var n=Tn(t.value),r=Tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Um(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Um(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bo,$m=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g1=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(e){g1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ri[t]=Ri[e]})});function Bm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ri.hasOwnProperty(e)&&Ri[e]?(""+t).trim():t+"px"}function Wm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var v1=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lu(e,t){if(t){if(v1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function uu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cu=null;function Uc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fu=null,zr=null,Ur=null;function Dd(e){if(e=xo(e)){if(typeof fu!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ea(t),fu(e.stateNode,e.type,t))}}function Hm(e){zr?Ur?Ur.push(e):Ur=[e]:zr=e}function Vm(){if(zr){var e=zr,t=Ur;if(Ur=zr=null,Dd(e),t)for(e=0;e<t.length;e++)Dd(t[e])}}function Ym(e,t){return e(t)}function Gm(){}var sl=!1;function Km(e,t,n){if(sl)return e(t,n);sl=!0;try{return Ym(e,t,n)}finally{sl=!1,(zr!==null||Ur!==null)&&(Gm(),Vm())}}function qi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ea(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var du=!1;if(Vt)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){du=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{du=!1}function y1(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Di=!1,Is=null,Ns=!1,hu=null,_1={onError:function(e){Di=!0,Is=e}};function w1(e,t,n,r,i,o,s,a,l){Di=!1,Is=null,y1.apply(_1,arguments)}function S1(e,t,n,r,i,o,s,a,l){if(w1.apply(this,arguments),Di){if(Di){var u=Is;Di=!1,Is=null}else throw Error(T(198));Ns||(Ns=!0,hu=u)}}function mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ld(e){if(mr(e)!==e)throw Error(T(188))}function E1(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ld(i),e;if(o===r)return Ld(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function qm(e){return e=E1(e),e!==null?Xm(e):null}function Xm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xm(e);if(t!==null)return t;e=e.sibling}return null}var Jm=ot.unstable_scheduleCallback,Md=ot.unstable_cancelCallback,C1=ot.unstable_shouldYield,k1=ot.unstable_requestPaint,_e=ot.unstable_now,b1=ot.unstable_getCurrentPriorityLevel,$c=ot.unstable_ImmediatePriority,Zm=ot.unstable_UserBlockingPriority,As=ot.unstable_NormalPriority,x1=ot.unstable_LowPriority,eg=ot.unstable_IdlePriority,ya=null,Lt=null;function T1(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(ya,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:A1,I1=Math.log,N1=Math.LN2;function A1(e){return e>>>=0,e===0?32:31-(I1(e)/N1|0)|0}var Wo=64,Ho=4194304;function Ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ps(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ai(a):(o&=s,o!==0&&(r=Ai(o)))}else s=n&~i,s!==0?r=Ai(s):o!==0&&(r=Ai(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function P1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-bt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=P1(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function pu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tg(){var e=Wo;return Wo<<=1,!(Wo&4194240)&&(Wo=64),e}function al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function R1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function ng(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rg,Wc,ig,og,sg,mu=!1,Vo=[],mn=null,gn=null,vn=null,Xi=new Map,Ji=new Map,un=[],D1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(t.pointerId)}}function yi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xo(t),t!==null&&Wc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function L1(e,t,n,r,i){switch(t){case"focusin":return mn=yi(mn,e,t,n,r,i),!0;case"dragenter":return gn=yi(gn,e,t,n,r,i),!0;case"mouseover":return vn=yi(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Xi.set(o,yi(Xi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ji.set(o,yi(Ji.get(o)||null,e,t,n,r,i)),!0}return!1}function ag(e){var t=Wn(e.target);if(t!==null){var n=mr(t);if(n!==null){if(t=n.tag,t===13){if(t=Qm(n),t!==null){e.blockedOn=t,sg(e.priority,function(){ig(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cu=r,n.target.dispatchEvent(r),cu=null}else return t=xo(n),t!==null&&Wc(t),e.blockedOn=n,!1;t.shift()}return!0}function jd(e,t,n){ms(e)&&n.delete(t)}function M1(){mu=!1,mn!==null&&ms(mn)&&(mn=null),gn!==null&&ms(gn)&&(gn=null),vn!==null&&ms(vn)&&(vn=null),Xi.forEach(jd),Ji.forEach(jd)}function _i(e,t){e.blockedOn===t&&(e.blockedOn=null,mu||(mu=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,M1)))}function Zi(e){function t(i){return _i(i,e)}if(0<Vo.length){_i(Vo[0],e);for(var n=1;n<Vo.length;n++){var r=Vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&_i(mn,e),gn!==null&&_i(gn,e),vn!==null&&_i(vn,e),Xi.forEach(t),Ji.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&un.shift()}var $r=tn.ReactCurrentBatchConfig,Os=!0;function F1(e,t,n,r){var i=ee,o=$r.transition;$r.transition=null;try{ee=1,Hc(e,t,n,r)}finally{ee=i,$r.transition=o}}function j1(e,t,n,r){var i=ee,o=$r.transition;$r.transition=null;try{ee=4,Hc(e,t,n,r)}finally{ee=i,$r.transition=o}}function Hc(e,t,n,r){if(Os){var i=gu(e,t,n,r);if(i===null)vl(e,t,r,Rs,n),Fd(e,r);else if(L1(i,e,t,n,r))r.stopPropagation();else if(Fd(e,r),t&4&&-1<D1.indexOf(e)){for(;i!==null;){var o=xo(i);if(o!==null&&rg(o),o=gu(e,t,n,r),o===null&&vl(e,t,r,Rs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else vl(e,t,r,null,n)}}var Rs=null;function gu(e,t,n,r){if(Rs=null,e=Uc(r),e=Wn(e),e!==null)if(t=mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rs=e,null}function lg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b1()){case $c:return 1;case Zm:return 4;case As:case x1:return 16;case eg:return 536870912;default:return 16}default:return 16}}var fn=null,Vc=null,gs=null;function ug(){if(gs)return gs;var e,t=Vc,n=t.length,r,i="value"in fn?fn.value:fn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return gs=i.slice(e,1<r?1-r:void 0)}function vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function zd(){return!1}function at(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yo:zd,this.isPropagationStopped=zd,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),t}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yc=at(si),bo=ge({},si,{view:0,detail:0}),z1=at(bo),ll,ul,wi,_a=ge({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(ll=e.screenX-wi.screenX,ul=e.screenY-wi.screenY):ul=ll=0,wi=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Ud=at(_a),U1=ge({},_a,{dataTransfer:0}),$1=at(U1),B1=ge({},bo,{relatedTarget:0}),cl=at(B1),W1=ge({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),H1=at(W1),V1=ge({},si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y1=at(V1),G1=ge({},si,{data:0}),$d=at(G1),K1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=q1[e])?!!t[e]:!1}function Gc(){return X1}var J1=ge({},bo,{key:function(e){if(e.key){var t=K1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z1=at(J1),ew=ge({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=at(ew),tw=ge({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),nw=at(tw),rw=ge({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),iw=at(rw),ow=ge({},_a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sw=at(ow),aw=[9,13,27,32],Kc=Vt&&"CompositionEvent"in window,Li=null;Vt&&"documentMode"in document&&(Li=document.documentMode);var lw=Vt&&"TextEvent"in window&&!Li,cg=Vt&&(!Kc||Li&&8<Li&&11>=Li),Wd=String.fromCharCode(32),Hd=!1;function fg(e,t){switch(e){case"keyup":return aw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function uw(e,t){switch(e){case"compositionend":return dg(t);case"keypress":return t.which!==32?null:(Hd=!0,Wd);case"textInput":return e=t.data,e===Wd&&Hd?null:e;default:return null}}function cw(e,t){if(kr)return e==="compositionend"||!Kc&&fg(e,t)?(e=ug(),gs=Vc=fn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cg&&t.locale!=="ko"?null:t.data;default:return null}}var fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fw[e.type]:t==="textarea"}function hg(e,t,n,r){Hm(r),t=Ds(t,"onChange"),0<t.length&&(n=new Yc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mi=null,eo=null;function dw(e){kg(e,0)}function wa(e){var t=Tr(e);if(Fm(t))return e}function hw(e,t){if(e==="change")return t}var pg=!1;if(Vt){var fl;if(Vt){var dl="oninput"in document;if(!dl){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),dl=typeof Yd.oninput=="function"}fl=dl}else fl=!1;pg=fl&&(!document.documentMode||9<document.documentMode)}function Gd(){Mi&&(Mi.detachEvent("onpropertychange",mg),eo=Mi=null)}function mg(e){if(e.propertyName==="value"&&wa(eo)){var t=[];hg(t,eo,e,Uc(e)),Km(dw,t)}}function pw(e,t,n){e==="focusin"?(Gd(),Mi=t,eo=n,Mi.attachEvent("onpropertychange",mg)):e==="focusout"&&Gd()}function mw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wa(eo)}function gw(e,t){if(e==="click")return wa(t)}function vw(e,t){if(e==="input"||e==="change")return wa(t)}function yw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:yw;function to(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jl.call(t,i)||!It(e[i],t[i]))return!1}return!0}function Kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qd(e,t){var n=Kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kd(n)}}function gg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vg(){for(var e=window,t=Ts();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ts(e.document)}return t}function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _w(e){var t=vg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(r!==null&&Qc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qd(n,o);var s=Qd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ww=Vt&&"documentMode"in document&&11>=document.documentMode,br=null,vu=null,Fi=null,yu=!1;function qd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yu||br==null||br!==Ts(r)||(r=br,"selectionStart"in r&&Qc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fi&&to(Fi,r)||(Fi=r,r=Ds(vu,"onSelect"),0<r.length&&(t=new Yc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=br)))}function Go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},hl={},yg={};Vt&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Sa(e){if(hl[e])return hl[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yg)return hl[e]=t[n];return e}var _g=Sa("animationend"),wg=Sa("animationiteration"),Sg=Sa("animationstart"),Eg=Sa("transitionend"),Cg=new Map,Xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){Cg.set(e,t),pr(t,[e])}for(var pl=0;pl<Xd.length;pl++){var ml=Xd[pl],Sw=ml.toLowerCase(),Ew=ml[0].toUpperCase()+ml.slice(1);Dn(Sw,"on"+Ew)}Dn(_g,"onAnimationEnd");Dn(wg,"onAnimationIteration");Dn(Sg,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Eg,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function Jd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,S1(r,t,void 0,e),e.currentTarget=null}function kg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Jd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Jd(i,a,u),o=l}}}if(Ns)throw e=hu,Ns=!1,hu=null,e}function se(e,t){var n=t[Cu];n===void 0&&(n=t[Cu]=new Set);var r=e+"__bubble";n.has(r)||(bg(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),bg(n,e,r,t)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function no(e){if(!e[Ko]){e[Ko]=!0,Om.forEach(function(n){n!=="selectionchange"&&(Cw.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ko]||(t[Ko]=!0,gl("selectionchange",!1,t))}}function bg(e,t,n,r){switch(lg(t)){case 1:var i=F1;break;case 4:i=j1;break;default:i=Hc}n=i.bind(null,t,n,e),i=void 0,!du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Wn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Km(function(){var u=o,c=Uc(n),f=[];e:{var d=Cg.get(e);if(d!==void 0){var h=Yc,m=e;switch(e){case"keypress":if(vs(n)===0)break e;case"keydown":case"keyup":h=Z1;break;case"focusin":m="focus",h=cl;break;case"focusout":m="blur",h=cl;break;case"beforeblur":case"afterblur":h=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=$1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=nw;break;case _g:case wg:case Sg:h=H1;break;case Eg:h=iw;break;case"scroll":h=z1;break;case"wheel":h=sw;break;case"copy":case"cut":case"paste":h=Y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Bd}var y=(t&4)!==0,_=!y&&e==="scroll",g=y?d!==null?d+"Capture":null:d;y=[];for(var p=u,v;p!==null;){v=p;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,g!==null&&(w=qi(p,g),w!=null&&y.push(ro(p,w,v)))),_)break;p=p.return}0<y.length&&(d=new h(d,m,null,n,c),f.push({event:d,listeners:y}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==cu&&(m=n.relatedTarget||n.fromElement)&&(Wn(m)||m[Yt]))break e;if((h||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Wn(m):null,m!==null&&(_=mr(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(y=Ud,w="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Bd,w="onPointerLeave",g="onPointerEnter",p="pointer"),_=h==null?d:Tr(h),v=m==null?d:Tr(m),d=new y(w,p+"leave",h,n,c),d.target=_,d.relatedTarget=v,w=null,Wn(c)===u&&(y=new y(g,p+"enter",m,n,c),y.target=v,y.relatedTarget=_,w=y),_=w,h&&m)t:{for(y=h,g=m,p=0,v=y;v;v=wr(v))p++;for(v=0,w=g;w;w=wr(w))v++;for(;0<p-v;)y=wr(y),p--;for(;0<v-p;)g=wr(g),v--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=wr(y),g=wr(g)}y=null}else y=null;h!==null&&Zd(f,d,h,y,!1),m!==null&&_!==null&&Zd(f,_,m,y,!0)}}e:{if(d=u?Tr(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var C=hw;else if(Vd(d))if(pg)C=vw;else{C=mw;var k=pw}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=gw);if(C&&(C=C(e,u))){hg(f,C,n,c);break e}k&&k(e,d,u),e==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&ou(d,"number",d.value)}switch(k=u?Tr(u):window,e){case"focusin":(Vd(k)||k.contentEditable==="true")&&(br=k,vu=u,Fi=null);break;case"focusout":Fi=vu=br=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,qd(f,n,c);break;case"selectionchange":if(ww)break;case"keydown":case"keyup":qd(f,n,c)}var S;if(Kc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else kr?fg(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(cg&&n.locale!=="ko"&&(kr||b!=="onCompositionStart"?b==="onCompositionEnd"&&kr&&(S=ug()):(fn=c,Vc="value"in fn?fn.value:fn.textContent,kr=!0)),k=Ds(u,b),0<k.length&&(b=new $d(b,e,null,n,c),f.push({event:b,listeners:k}),S?b.data=S:(S=dg(n),S!==null&&(b.data=S)))),(S=lw?uw(e,n):cw(e,n))&&(u=Ds(u,"onBeforeInput"),0<u.length&&(c=new $d("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=S))}kg(f,t)})}function ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ds(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qi(e,n),o!=null&&r.unshift(ro(e,o,i)),o=qi(e,t),o!=null&&r.push(ro(e,o,i))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=qi(n,o),l!=null&&s.unshift(ro(n,l,a))):i||(l=qi(n,o),l!=null&&s.push(ro(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var kw=/\r\n?/g,bw=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(kw,`
`).replace(bw,"")}function Qo(e,t,n){if(t=eh(t),eh(e)!==t&&n)throw Error(T(425))}function Ls(){}var _u=null,wu=null;function Su(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,Tw=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(e){return th.resolve(null).then(e).catch(Iw)}:Eu;function Iw(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ai=Math.random().toString(36).slice(2),Ot="__reactFiber$"+ai,io="__reactProps$"+ai,Yt="__reactContainer$"+ai,Cu="__reactEvents$"+ai,Nw="__reactListeners$"+ai,Aw="__reactHandles$"+ai;function Wn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nh(e);e!==null;){if(n=e[Ot])return n;e=nh(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[Ot]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ea(e){return e[io]||null}var ku=[],Ir=-1;function Ln(e){return{current:e}}function ce(e){0>Ir||(e.current=ku[Ir],ku[Ir]=null,Ir--)}function oe(e,t){Ir++,ku[Ir]=e.current,e.current=t}var In={},Be=Ln(In),qe=Ln(!1),tr=In;function Qr(e,t){var n=e.type.contextTypes;if(!n)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function Ms(){ce(qe),ce(Be)}function rh(e,t,n){if(Be.current!==In)throw Error(T(168));oe(Be,t),oe(qe,n)}function xg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,p1(e)||"Unknown",i));return ge({},n,r)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,tr=Be.current,oe(Be,e),oe(qe,qe.current),!0}function ih(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=xg(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,ce(qe),ce(Be),oe(Be,e)):ce(qe),oe(qe,n)}var zt=null,Ca=!1,_l=!1;function Tg(e){zt===null?zt=[e]:zt.push(e)}function Pw(e){Ca=!0,Tg(e)}function Mn(){if(!_l&&zt!==null){_l=!0;var e=0,t=ee;try{var n=zt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,Ca=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),Jm($c,Mn),i}finally{ee=t,_l=!1}}return null}var Nr=[],Ar=0,js=null,zs=0,ct=[],ft=0,nr=null,Ut=1,$t="";function zn(e,t){Nr[Ar++]=zs,Nr[Ar++]=js,js=e,zs=t}function Ig(e,t,n){ct[ft++]=Ut,ct[ft++]=$t,ct[ft++]=nr,nr=e;var r=Ut;e=$t;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var o=32-bt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ut=1<<32-bt(t)+i|n<<i|r,$t=o+e}else Ut=1<<o|n<<i|r,$t=e}function qc(e){e.return!==null&&(zn(e,1),Ig(e,1,0))}function Xc(e){for(;e===js;)js=Nr[--Ar],Nr[Ar]=null,zs=Nr[--Ar],Nr[Ar]=null;for(;e===nr;)nr=ct[--ft],ct[ft]=null,$t=ct[--ft],ct[ft]=null,Ut=ct[--ft],ct[ft]=null}var rt=null,nt=null,he=!1,St=null;function Ng(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function oh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,nt=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:Ut,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,nt=null,!0):!1;default:return!1}}function bu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xu(e){if(he){var t=nt;if(t){var n=t;if(!oh(e,t)){if(bu(e))throw Error(T(418));t=yn(n.nextSibling);var r=rt;t&&oh(e,t)?Ng(r,n):(e.flags=e.flags&-4097|2,he=!1,rt=e)}}else{if(bu(e))throw Error(T(418));e.flags=e.flags&-4097|2,he=!1,rt=e}}}function sh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function qo(e){if(e!==rt)return!1;if(!he)return sh(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Su(e.type,e.memoizedProps)),t&&(t=nt)){if(bu(e))throw Ag(),Error(T(418));for(;t;)Ng(e,t),t=yn(t.nextSibling)}if(sh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=rt?yn(e.stateNode.nextSibling):null;return!0}function Ag(){for(var e=nt;e;)e=yn(e.nextSibling)}function qr(){nt=rt=null,he=!1}function Jc(e){St===null?St=[e]:St.push(e)}var Ow=tn.ReactCurrentBatchConfig;function _t(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Us=Ln(null),$s=null,Pr=null,Zc=null;function ef(){Zc=Pr=$s=null}function tf(e){var t=Us.current;ce(Us),e._currentValue=t}function Tu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Br(e,t){$s=e,Zc=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Zc!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if($s===null)throw Error(T(308));Pr=e,$s.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var Hn=null;function nf(e){Hn===null?Hn=[e]:Hn.push(e)}function Pg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,nf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Og(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,nf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function ys(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}function ah(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bs(e,t,n,r){var i=e.updateQueue;ln=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,h=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,y=a;switch(d=t,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){f=m.call(h,f,d);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(h,f,d):m,d==null)break e;f=ge({},f,d);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ir|=s,e.lanes=s,e.memoizedState=f}}function lh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Rg=new Pm.Component().refs;function Iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ka={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=Sn(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=_n(e,o,i),t!==null&&(xt(t,e,i,r),ys(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=Sn(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_n(e,o,i),t!==null&&(xt(t,e,i,r),ys(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=Sn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_n(e,i,r),t!==null&&(xt(t,e,r,n),ys(t,e,r))}};function uh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!to(n,r)||!to(i,o):!0}function Dg(e,t,n){var r=!1,i=In,o=t.contextType;return typeof o=="object"&&o!==null?o=mt(o):(i=Xe(t)?tr:Be.current,r=t.contextTypes,o=(r=r!=null)?Qr(e,i):In),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ka,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ch(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ka.enqueueReplaceState(t,t.state,null)}function Nu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Rg,rf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=mt(o):(o=Xe(t)?tr:Be.current,i.context=Qr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Iu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ka.enqueueReplaceState(i,i.state,null),Bs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Si(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Rg&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Xo(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fh(e){var t=e._init;return t(e._payload)}function Lg(e){function t(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=En(g,p),g.index=0,g.sibling=null,g}function o(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,w){return p===null||p.tag!==6?(p=xl(v,g.mode,w),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,w){var C=v.type;return C===Cr?c(g,p,v.props.children,w,v.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&fh(C)===p.type)?(w=i(p,v.props),w.ref=Si(g,p,v),w.return=g,w):(w=ks(v.type,v.key,v.props,null,g.mode,w),w.ref=Si(g,p,v),w.return=g,w)}function u(g,p,v,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Tl(v,g.mode,w),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function c(g,p,v,w,C){return p===null||p.tag!==7?(p=Jn(v,g.mode,w,C),p.return=g,p):(p=i(p,v),p.return=g,p)}function f(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xl(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Uo:return v=ks(p.type,p.key,p.props,null,g.mode,v),v.ref=Si(g,null,p),v.return=g,v;case Er:return p=Tl(p,g.mode,v),p.return=g,p;case an:var w=p._init;return f(g,w(p._payload),v)}if(Ni(p)||gi(p))return p=Jn(p,g.mode,v,null),p.return=g,p;Xo(g,p)}return null}function d(g,p,v,w){var C=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(g,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Uo:return v.key===C?l(g,p,v,w):null;case Er:return v.key===C?u(g,p,v,w):null;case an:return C=v._init,d(g,p,C(v._payload),w)}if(Ni(v)||gi(v))return C!==null?null:c(g,p,v,w,null);Xo(g,v)}return null}function h(g,p,v,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(v)||null,a(p,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Uo:return g=g.get(w.key===null?v:w.key)||null,l(p,g,w,C);case Er:return g=g.get(w.key===null?v:w.key)||null,u(p,g,w,C);case an:var k=w._init;return h(g,p,v,k(w._payload),C)}if(Ni(w)||gi(w))return g=g.get(v)||null,c(p,g,w,C,null);Xo(p,w)}return null}function m(g,p,v,w){for(var C=null,k=null,S=p,b=p=0,A=null;S!==null&&b<v.length;b++){S.index>b?(A=S,S=null):A=S.sibling;var P=d(g,S,v[b],w);if(P===null){S===null&&(S=A);break}e&&S&&P.alternate===null&&t(g,S),p=o(P,p,b),k===null?C=P:k.sibling=P,k=P,S=A}if(b===v.length)return n(g,S),he&&zn(g,b),C;if(S===null){for(;b<v.length;b++)S=f(g,v[b],w),S!==null&&(p=o(S,p,b),k===null?C=S:k.sibling=S,k=S);return he&&zn(g,b),C}for(S=r(g,S);b<v.length;b++)A=h(S,g,b,v[b],w),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?b:A.key),p=o(A,p,b),k===null?C=A:k.sibling=A,k=A);return e&&S.forEach(function(z){return t(g,z)}),he&&zn(g,b),C}function y(g,p,v,w){var C=gi(v);if(typeof C!="function")throw Error(T(150));if(v=C.call(v),v==null)throw Error(T(151));for(var k=C=null,S=p,b=p=0,A=null,P=v.next();S!==null&&!P.done;b++,P=v.next()){S.index>b?(A=S,S=null):A=S.sibling;var z=d(g,S,P.value,w);if(z===null){S===null&&(S=A);break}e&&S&&z.alternate===null&&t(g,S),p=o(z,p,b),k===null?C=z:k.sibling=z,k=z,S=A}if(P.done)return n(g,S),he&&zn(g,b),C;if(S===null){for(;!P.done;b++,P=v.next())P=f(g,P.value,w),P!==null&&(p=o(P,p,b),k===null?C=P:k.sibling=P,k=P);return he&&zn(g,b),C}for(S=r(g,S);!P.done;b++,P=v.next())P=h(S,g,b,P.value,w),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?b:P.key),p=o(P,p,b),k===null?C=P:k.sibling=P,k=P);return e&&S.forEach(function(G){return t(g,G)}),he&&zn(g,b),C}function _(g,p,v,w){if(typeof v=="object"&&v!==null&&v.type===Cr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Uo:e:{for(var C=v.key,k=p;k!==null;){if(k.key===C){if(C=v.type,C===Cr){if(k.tag===7){n(g,k.sibling),p=i(k,v.props.children),p.return=g,g=p;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&fh(C)===k.type){n(g,k.sibling),p=i(k,v.props),p.ref=Si(g,k,v),p.return=g,g=p;break e}n(g,k);break}else t(g,k);k=k.sibling}v.type===Cr?(p=Jn(v.props.children,g.mode,w,v.key),p.return=g,g=p):(w=ks(v.type,v.key,v.props,null,g.mode,w),w.ref=Si(g,p,v),w.return=g,g=w)}return s(g);case Er:e:{for(k=v.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Tl(v,g.mode,w),p.return=g,g=p}return s(g);case an:return k=v._init,_(g,p,k(v._payload),w)}if(Ni(v))return m(g,p,v,w);if(gi(v))return y(g,p,v,w);Xo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=xl(v,g.mode,w),p.return=g,g=p),s(g)):n(g,p)}return _}var Xr=Lg(!0),Mg=Lg(!1),To={},Mt=Ln(To),oo=Ln(To),so=Ln(To);function Vn(e){if(e===To)throw Error(T(174));return e}function of(e,t){switch(oe(so,t),oe(oo,e),oe(Mt,To),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:au(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=au(t,e)}ce(Mt),oe(Mt,t)}function Jr(){ce(Mt),ce(oo),ce(so)}function Fg(e){Vn(so.current);var t=Vn(Mt.current),n=au(t,e.type);t!==n&&(oe(oo,e),oe(Mt,n))}function sf(e){oo.current===e&&(ce(Mt),ce(oo))}var pe=Ln(0);function Ws(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function af(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var _s=tn.ReactCurrentDispatcher,Sl=tn.ReactCurrentBatchConfig,rr=0,me=null,Ce=null,Ne=null,Hs=!1,ji=!1,ao=0,Rw=0;function Fe(){throw Error(T(321))}function lf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function uf(e,t,n,r,i,o){if(rr=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_s.current=e===null||e.memoizedState===null?Fw:jw,e=n(r,i),ji){o=0;do{if(ji=!1,ao=0,25<=o)throw Error(T(301));o+=1,Ne=Ce=null,t.updateQueue=null,_s.current=zw,e=n(r,i)}while(ji)}if(_s.current=Vs,t=Ce!==null&&Ce.next!==null,rr=0,Ne=Ce=me=null,Hs=!1,t)throw Error(T(300));return e}function cf(){var e=ao!==0;return ao=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?me.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function gt(){if(Ce===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Ne===null?me.memoizedState:Ne.next;if(t!==null)Ne=t,Ce=e;else{if(e===null)throw Error(T(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ne===null?me.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function lo(e,t){return typeof t=="function"?t(e):t}function El(e){var t=gt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Ce,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,me.lanes|=c,ir|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,It(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,ir|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cl(e){var t=gt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);It(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jg(){}function zg(e,t){var n=me,r=gt(),i=t(),o=!It(r.memoizedState,i);if(o&&(r.memoizedState=i,Ke=!0),r=r.queue,ff(Bg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,uo(9,$g.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error(T(349));rr&30||Ug(n,t,i)}return i}function Ug(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $g(e,t,n,r){t.value=n,t.getSnapshot=r,Wg(t)&&Hg(e)}function Bg(e,t,n){return n(function(){Wg(t)&&Hg(e)})}function Wg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Hg(e){var t=Gt(e,1);t!==null&&xt(t,e,1,-1)}function dh(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:e},t.queue=e,e=e.dispatch=Mw.bind(null,me,e),[t.memoizedState,e]}function uo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vg(){return gt().memoizedState}function ws(e,t,n,r){var i=Pt();me.flags|=e,i.memoizedState=uo(1|t,n,void 0,r===void 0?null:r)}function ba(e,t,n,r){var i=gt();r=r===void 0?null:r;var o=void 0;if(Ce!==null){var s=Ce.memoizedState;if(o=s.destroy,r!==null&&lf(r,s.deps)){i.memoizedState=uo(t,n,o,r);return}}me.flags|=e,i.memoizedState=uo(1|t,n,o,r)}function hh(e,t){return ws(8390656,8,e,t)}function ff(e,t){return ba(2048,8,e,t)}function Yg(e,t){return ba(4,2,e,t)}function Gg(e,t){return ba(4,4,e,t)}function Kg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qg(e,t,n){return n=n!=null?n.concat([e]):null,ba(4,4,Kg.bind(null,t,e),n)}function df(){}function qg(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xg(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jg(e,t,n){return rr&21?(It(n,t)||(n=tg(),me.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function Dw(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{ee=n,Sl.transition=r}}function Zg(){return gt().memoizedState}function Lw(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ev(e))tv(t,n);else if(n=Pg(e,t,n,r),n!==null){var i=He();xt(n,e,r,i),nv(n,t,r)}}function Mw(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ev(e))tv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,It(a,s)){var l=t.interleaved;l===null?(i.next=i,nf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Pg(e,t,i,r),n!==null&&(i=He(),xt(n,e,r,i),nv(n,t,r))}}function ev(e){var t=e.alternate;return e===me||t!==null&&t===me}function tv(e,t){ji=Hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}var Vs={readContext:mt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Fw={readContext:mt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:hh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ws(4194308,4,Kg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ws(4194308,4,e,t)},useInsertionEffect:function(e,t){return ws(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lw.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:dh,useDebugValue:df,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=dh(!1),t=e[0];return e=Dw.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Pt();if(he){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Pe===null)throw Error(T(349));rr&30||Ug(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hh(Bg.bind(null,r,o,e),[e]),r.flags|=2048,uo(9,$g.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Pe.identifierPrefix;if(he){var n=$t,r=Ut;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ao++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jw={readContext:mt,useCallback:qg,useContext:mt,useEffect:ff,useImperativeHandle:Qg,useInsertionEffect:Yg,useLayoutEffect:Gg,useMemo:Xg,useReducer:El,useRef:Vg,useState:function(){return El(lo)},useDebugValue:df,useDeferredValue:function(e){var t=gt();return Jg(t,Ce.memoizedState,e)},useTransition:function(){var e=El(lo)[0],t=gt().memoizedState;return[e,t]},useMutableSource:jg,useSyncExternalStore:zg,useId:Zg,unstable_isNewReconciler:!1},zw={readContext:mt,useCallback:qg,useContext:mt,useEffect:ff,useImperativeHandle:Qg,useInsertionEffect:Yg,useLayoutEffect:Gg,useMemo:Xg,useReducer:Cl,useRef:Vg,useState:function(){return Cl(lo)},useDebugValue:df,useDeferredValue:function(e){var t=gt();return Ce===null?t.memoizedState=e:Jg(t,Ce.memoizedState,e)},useTransition:function(){var e=Cl(lo)[0],t=gt().memoizedState;return[e,t]},useMutableSource:jg,useSyncExternalStore:zg,useId:Zg,unstable_isNewReconciler:!1};function Zr(e,t){try{var n="",r=t;do n+=h1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Au(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uw=typeof WeakMap=="function"?WeakMap:Map;function rv(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gs||(Gs=!0,Uu=r),Au(e,t)},n}function iv(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Au(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Au(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ph(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Uw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=eS.bind(null,e,t,n),t.then(e,e))}function mh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,_n(n,t,1))),n.lanes|=1),e)}var $w=tn.ReactCurrentOwner,Ke=!1;function We(e,t,n,r){t.child=e===null?Mg(t,null,n,r):Xr(t,e.child,n,r)}function vh(e,t,n,r,i){n=n.render;var o=t.ref;return Br(t,i),r=uf(e,t,n,r,o,i),n=cf(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(he&&n&&qc(t),t.flags|=1,We(e,t,r,i),t.child)}function yh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!wf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ov(e,t,o,r,i)):(e=ks(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:to,n(s,r)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=En(o,r),e.ref=t.ref,e.return=t,t.child=e}function ov(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(to(o,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return Pu(e,t,n,r,i)}function sv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Rr,tt),tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Rr,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,oe(Rr,tt),tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,oe(Rr,tt),tt|=r;return We(e,t,i,n),t.child}function av(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pu(e,t,n,r,i){var o=Xe(n)?tr:Be.current;return o=Qr(t,o),Br(t,i),n=uf(e,t,n,r,o,i),r=cf(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(he&&r&&qc(t),t.flags|=1,We(e,t,n,i),t.child)}function _h(e,t,n,r,i){if(Xe(n)){var o=!0;Fs(t)}else o=!1;if(Br(t,i),t.stateNode===null)Ss(e,t),Dg(t,n,r),Nu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=mt(u):(u=Xe(n)?tr:Be.current,u=Qr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ch(t,s,r,u),ln=!1;var d=t.memoizedState;s.state=d,Bs(t,r,s,i),l=t.memoizedState,a!==r||d!==l||qe.current||ln?(typeof c=="function"&&(Iu(t,n,c,r),l=t.memoizedState),(a=ln||uh(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Og(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:_t(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=mt(l):(l=Xe(n)?tr:Be.current,l=Qr(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&ch(t,s,r,l),ln=!1,d=t.memoizedState,s.state=d,Bs(t,r,s,i);var m=t.memoizedState;a!==f||d!==m||qe.current||ln?(typeof h=="function"&&(Iu(t,n,h,r),m=t.memoizedState),(u=ln||uh(t,n,u,r,d,m,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Ou(e,t,n,r,o,i)}function Ou(e,t,n,r,i,o){av(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&ih(t,n,!1),Kt(e,t,o);r=t.stateNode,$w.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Xr(t,e.child,null,o),t.child=Xr(t,null,a,o)):We(e,t,a,o),t.memoizedState=r.state,i&&ih(t,n,!0),t.child}function lv(e){var t=e.stateNode;t.pendingContext?rh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rh(e,t.context,!1),of(e,t.containerInfo)}function wh(e,t,n,r,i){return qr(),Jc(i),t.flags|=256,We(e,t,n,r),t.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Du(e){return{baseLanes:e,cachePool:null,transitions:null}}function uv(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),oe(pe,i&1),e===null)return xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ia(s,r,0,null),e=Jn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Du(n),t.memoizedState=Ru,e):hf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Bw(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=En(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=En(a,o):(o=Jn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Du(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ru,r}return o=e.child,e=o.sibling,r=En(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hf(e,t){return t=Ia({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jo(e,t,n,r){return r!==null&&Jc(r),Xr(t,e.child,null,n),e=hf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bw(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=kl(Error(T(422))),Jo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ia({mode:"visible",children:r.children},i,0,null),o=Jn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Xr(t,e.child,null,s),t.child.memoizedState=Du(s),t.memoizedState=Ru,o);if(!(t.mode&1))return Jo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(T(419)),r=kl(o,r,void 0),Jo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ke||a){if(r=Pe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gt(e,i),xt(r,e,i,-1))}return _f(),r=kl(Error(T(421))),Jo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=tS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,nt=yn(i.nextSibling),rt=t,he=!0,St=null,e!==null&&(ct[ft++]=Ut,ct[ft++]=$t,ct[ft++]=nr,Ut=e.id,$t=e.overflow,nr=t),t=hf(t,r.children),t.flags|=4096,t)}function Sh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tu(e.return,t,n)}function bl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function cv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(We(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sh(e,n,t);else if(e.tag===19)Sh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ws(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ws(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bl(t,!0,n,null,o);break;case"together":bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ss(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ww(e,t,n){switch(t.tag){case 3:lv(t),qr();break;case 5:Fg(t);break;case 1:Xe(t.type)&&Fs(t);break;case 4:of(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;oe(Us,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?uv(e,t,n):(oe(pe,pe.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);oe(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,sv(e,t,n)}return Kt(e,t,n)}var fv,Lu,dv,hv;fv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lu=function(){};dv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vn(Mt.current);var o=null;switch(n){case"input":i=ru(e,i),r=ru(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=su(e,i),r=su(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ls)}lu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ki.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ki.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};hv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ei(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hw(e,t,n){var r=t.pendingProps;switch(Xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Xe(t.type)&&Ms(),je(t),null;case 3:return r=t.stateNode,Jr(),ce(qe),ce(Be),af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(Wu(St),St=null))),Lu(e,t),je(t),null;case 5:sf(t);var i=Vn(so.current);if(n=t.type,e!==null&&t.stateNode!=null)dv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return je(t),null}if(e=Vn(Mt.current),qo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ot]=t,r[io]=o,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Pi.length;i++)se(Pi[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Ad(r,o),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},se("invalid",r);break;case"textarea":Od(r,o),se("invalid",r)}lu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Qo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Qo(r.textContent,a,e),i=["children",""+a]):Ki.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&se("scroll",r)}switch(n){case"input":$o(r),Pd(r,o,!0);break;case"textarea":$o(r),Rd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ls)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Um(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ot]=t,e[io]=r,fv(e,t,!1,!1),t.stateNode=e;e:{switch(s=uu(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pi.length;i++)se(Pi[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":Ad(e,r),i=ru(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),se("invalid",e);break;case"textarea":Od(e,r),i=su(e,r),se("invalid",e);break;default:i=r}lu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Wm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$m(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qi(e,l):typeof l=="number"&&Qi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ki.hasOwnProperty(o)?l!=null&&o==="onScroll"&&se("scroll",e):l!=null&&Mc(e,o,l,s))}switch(n){case"input":$o(e),Pd(e,r,!1);break;case"textarea":$o(e),Rd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?jr(e,!!r.multiple,o,!1):r.defaultValue!=null&&jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ls)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)hv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Vn(so.current),Vn(Mt.current),qo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(o=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:Qo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return je(t),null;case 13:if(ce(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&nt!==null&&t.mode&1&&!(t.flags&128))Ag(),qr(),t.flags|=98560,o=!1;else if(o=qo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Ot]=t}else qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else St!==null&&(Wu(St),St=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?be===0&&(be=3):_f())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Jr(),Lu(e,t),e===null&&no(t.stateNode.containerInfo),je(t),null;case 10:return tf(t.type._context),je(t),null;case 17:return Xe(t.type)&&Ms(),je(t),null;case 19:if(ce(pe),o=t.memoizedState,o===null)return je(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ei(o,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ws(e),s!==null){for(t.flags|=128,Ei(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&_e()>ei&&(t.flags|=128,r=!0,Ei(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ws(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ei(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!he)return je(t),null}else 2*_e()-o.renderingStartTime>ei&&n!==1073741824&&(t.flags|=128,r=!0,Ei(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,n=pe.current,oe(pe,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return yf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Vw(e,t){switch(Xc(t),t.tag){case 1:return Xe(t.type)&&Ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jr(),ce(qe),ce(Be),af(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sf(t),null;case 13:if(ce(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(pe),null;case 4:return Jr(),null;case 10:return tf(t.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Zo=!1,ze=!1,Yw=typeof WeakSet=="function"?WeakSet:Set,D=null;function Or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Mu(e,t,n){try{n()}catch(r){ve(e,t,r)}}var Eh=!1;function Gw(e,t){if(_u=Os,e=vg(),Qc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:e,selectionRange:n},Os=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,_=m.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:_t(t.type,y),_);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){ve(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return m=Eh,Eh=!1,m}function zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Mu(t,n,o)}i=i.next}while(i!==r)}}function xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pv(e){var t=e.alternate;t!==null&&(e.alternate=null,pv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[io],delete t[Cu],delete t[Nw],delete t[Aw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mv(e){return e.tag===5||e.tag===3||e.tag===4}function Ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ju(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ls));else if(r!==4&&(e=e.child,e!==null))for(ju(e,t,n),e=e.sibling;e!==null;)ju(e,t,n),e=e.sibling}function zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}var Oe=null,wt=!1;function on(e,t,n){for(n=n.child;n!==null;)gv(e,t,n),n=n.sibling}function gv(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(ya,n)}catch{}switch(n.tag){case 5:ze||Or(n,t);case 6:var r=Oe,i=wt;Oe=null,on(e,t,n),Oe=r,wt=i,Oe!==null&&(wt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(wt?(e=Oe,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),Zi(e)):yl(Oe,n.stateNode));break;case 4:r=Oe,i=wt,Oe=n.stateNode.containerInfo,wt=!0,on(e,t,n),Oe=r,wt=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Mu(n,t,s),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!ze&&(Or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,t,a)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,on(e,t,n),ze=r):on(e,t,n);break;default:on(e,t,n)}}function kh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yw),t.forEach(function(r){var i=nS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,wt=!1;break e;case 3:Oe=a.stateNode.containerInfo,wt=!0;break e;case 4:Oe=a.stateNode.containerInfo,wt=!0;break e}a=a.return}if(Oe===null)throw Error(T(160));gv(o,s,i),Oe=null,wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vv(t,e),t=t.sibling}function vv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),At(e),r&4){try{zi(3,e,e.return),xa(3,e)}catch(y){ve(e,e.return,y)}try{zi(5,e,e.return)}catch(y){ve(e,e.return,y)}}break;case 1:yt(t,e),At(e),r&512&&n!==null&&Or(n,n.return);break;case 5:if(yt(t,e),At(e),r&512&&n!==null&&Or(n,n.return),e.flags&32){var i=e.stateNode;try{Qi(i,"")}catch(y){ve(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&jm(i,o),uu(a,s);var u=uu(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Wm(i,f):c==="dangerouslySetInnerHTML"?$m(i,f):c==="children"?Qi(i,f):Mc(i,c,f,u)}switch(a){case"input":iu(i,o);break;case"textarea":zm(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?jr(i,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?jr(i,!!o.multiple,o.defaultValue,!0):jr(i,!!o.multiple,o.multiple?[]:"",!1))}i[io]=o}catch(y){ve(e,e.return,y)}}break;case 6:if(yt(t,e),At(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ve(e,e.return,y)}}break;case 3:if(yt(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zi(t.containerInfo)}catch(y){ve(e,e.return,y)}break;case 4:yt(t,e),At(e);break;case 13:yt(t,e),At(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(gf=_e())),r&4&&kh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(u=ze)||c,yt(t,e),ze=u):yt(t,e),At(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(D=e,c=e.child;c!==null;){for(f=D=c;D!==null;){switch(d=D,h=d.child,d.tag){case 0:case 11:case 14:case 15:zi(4,d,d.return);break;case 1:Or(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){ve(r,n,y)}}break;case 5:Or(d,d.return);break;case 22:if(d.memoizedState!==null){xh(f);continue}}h!==null?(h.return=d,D=h):xh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bm("display",s))}catch(y){ve(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ve(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:yt(t,e),At(e),r&4&&kh(e);break;case 21:break;default:yt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mv(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qi(i,""),r.flags&=-33);var o=Ch(e);zu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ch(e);ju(e,a,s);break;default:throw Error(T(161))}}catch(l){ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kw(e,t,n){D=e,yv(e)}function yv(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Zo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ze;a=Zo;var u=ze;if(Zo=s,(ze=l)&&!u)for(D=i;D!==null;)s=D,l=s.child,s.tag===22&&s.memoizedState!==null?Th(i):l!==null?(l.return=s,D=l):Th(i);for(;o!==null;)D=o,yv(o),o=o.sibling;D=i,Zo=a,ze=u}bh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):bh(e)}}function bh(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&lh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Zi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ze||t.flags&512&&Fu(t)}catch(d){ve(t,t.return,d)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function xh(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Th(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xa(4,t)}catch(l){ve(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ve(t,i,l)}}var o=t.return;try{Fu(t)}catch(l){ve(t,o,l)}break;case 5:var s=t.return;try{Fu(t)}catch(l){ve(t,s,l)}}}catch(l){ve(t,t.return,l)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var Qw=Math.ceil,Ys=tn.ReactCurrentDispatcher,pf=tn.ReactCurrentOwner,pt=tn.ReactCurrentBatchConfig,X=0,Pe=null,Se=null,Le=0,tt=0,Rr=Ln(0),be=0,co=null,ir=0,Ta=0,mf=0,Ui=null,Ge=null,gf=0,ei=1/0,jt=null,Gs=!1,Uu=null,wn=null,es=!1,dn=null,Ks=0,$i=0,$u=null,Es=-1,Cs=0;function He(){return X&6?_e():Es!==-1?Es:Es=_e()}function Sn(e){return e.mode&1?X&2&&Le!==0?Le&-Le:Ow.transition!==null?(Cs===0&&(Cs=tg()),Cs):(e=ee,e!==0||(e=window.event,e=e===void 0?16:lg(e.type)),e):1}function xt(e,t,n,r){if(50<$i)throw $i=0,$u=null,Error(T(185));ko(e,n,r),(!(X&2)||e!==Pe)&&(e===Pe&&(!(X&2)&&(Ta|=n),be===4&&cn(e,Le)),Je(e,r),n===1&&X===0&&!(t.mode&1)&&(ei=_e()+500,Ca&&Mn()))}function Je(e,t){var n=e.callbackNode;O1(e,t);var r=Ps(e,e===Pe?Le:0);if(r===0)n!==null&&Md(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Md(n),t===1)e.tag===0?Pw(Ih.bind(null,e)):Tg(Ih.bind(null,e)),Tw(function(){!(X&6)&&Mn()}),n=null;else{switch(ng(r)){case 1:n=$c;break;case 4:n=Zm;break;case 16:n=As;break;case 536870912:n=eg;break;default:n=As}n=xv(n,_v.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _v(e,t){if(Es=-1,Cs=0,X&6)throw Error(T(327));var n=e.callbackNode;if(Wr()&&e.callbackNode!==n)return null;var r=Ps(e,e===Pe?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qs(e,r);else{t=r;var i=X;X|=2;var o=Sv();(Pe!==e||Le!==t)&&(jt=null,ei=_e()+500,Xn(e,t));do try{Jw();break}catch(a){wv(e,a)}while(1);ef(),Ys.current=o,X=i,Se!==null?t=0:(Pe=null,Le=0,t=be)}if(t!==0){if(t===2&&(i=pu(e),i!==0&&(r=i,t=Bu(e,i))),t===1)throw n=co,Xn(e,0),cn(e,r),Je(e,_e()),n;if(t===6)cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!qw(i)&&(t=Qs(e,r),t===2&&(o=pu(e),o!==0&&(r=o,t=Bu(e,o))),t===1))throw n=co,Xn(e,0),cn(e,r),Je(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Un(e,Ge,jt);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=gf+500-_e(),10<t)){if(Ps(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Eu(Un.bind(null,e,Ge,jt),t);break}Un(e,Ge,jt);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-bt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qw(r/1960))-r,10<r){e.timeoutHandle=Eu(Un.bind(null,e,Ge,jt),r);break}Un(e,Ge,jt);break;case 5:Un(e,Ge,jt);break;default:throw Error(T(329))}}}return Je(e,_e()),e.callbackNode===n?_v.bind(null,e):null}function Bu(e,t){var n=Ui;return e.current.memoizedState.isDehydrated&&(Xn(e,t).flags|=256),e=Qs(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&Wu(t)),e}function Wu(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function qw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!It(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~mf,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Ih(e){if(X&6)throw Error(T(327));Wr();var t=Ps(e,0);if(!(t&1))return Je(e,_e()),null;var n=Qs(e,t);if(e.tag!==0&&n===2){var r=pu(e);r!==0&&(t=r,n=Bu(e,r))}if(n===1)throw n=co,Xn(e,0),cn(e,t),Je(e,_e()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,Ge,jt),Je(e,_e()),null}function vf(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(ei=_e()+500,Ca&&Mn())}}function or(e){dn!==null&&dn.tag===0&&!(X&6)&&Wr();var t=X;X|=1;var n=pt.transition,r=ee;try{if(pt.transition=null,ee=1,e)return e()}finally{ee=r,pt.transition=n,X=t,!(X&6)&&Mn()}}function yf(){tt=Rr.current,ce(Rr)}function Xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xw(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ms();break;case 3:Jr(),ce(qe),ce(Be),af();break;case 5:sf(r);break;case 4:Jr();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:tf(r.type._context);break;case 22:case 23:yf()}n=n.return}if(Pe=e,Se=e=En(e.current,null),Le=tt=t,be=0,co=null,mf=Ta=ir=0,Ge=Ui=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Hn=null}return e}function wv(e,t){do{var n=Se;try{if(ef(),_s.current=Vs,Hs){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hs=!1}if(rr=0,Ne=Ce=me=null,ji=!1,ao=0,pf.current=null,n===null||n.return===null){be=1,co=t,Se=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Le,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=mh(s);if(h!==null){h.flags&=-257,gh(h,s,a,o,t),h.mode&1&&ph(o,u,t),t=h,l=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(l),t.updateQueue=y}else m.add(l);break e}else{if(!(t&1)){ph(o,u,t),_f();break e}l=Error(T(426))}}else if(he&&a.mode&1){var _=mh(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),gh(_,s,a,o,t),Jc(Zr(l,a));break e}}o=l=Zr(l,a),be!==4&&(be=2),Ui===null?Ui=[o]:Ui.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=rv(o,l,t);ah(o,g);break e;case 1:a=l;var p=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(wn===null||!wn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=iv(o,a,t);ah(o,w);break e}}o=o.return}while(o!==null)}Cv(n)}catch(C){t=C,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function Sv(){var e=Ys.current;return Ys.current=Vs,e===null?Vs:e}function _f(){(be===0||be===3||be===2)&&(be=4),Pe===null||!(ir&268435455)&&!(Ta&268435455)||cn(Pe,Le)}function Qs(e,t){var n=X;X|=2;var r=Sv();(Pe!==e||Le!==t)&&(jt=null,Xn(e,t));do try{Xw();break}catch(i){wv(e,i)}while(1);if(ef(),X=n,Ys.current=r,Se!==null)throw Error(T(261));return Pe=null,Le=0,be}function Xw(){for(;Se!==null;)Ev(Se)}function Jw(){for(;Se!==null&&!C1();)Ev(Se)}function Ev(e){var t=bv(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?Cv(e):Se=t,pf.current=null}function Cv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vw(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,Se=null;return}}else if(n=Hw(n,t,tt),n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);be===0&&(be=5)}function Un(e,t,n){var r=ee,i=pt.transition;try{pt.transition=null,ee=1,Zw(e,t,n,r)}finally{pt.transition=i,ee=r}return null}function Zw(e,t,n,r){do Wr();while(dn!==null);if(X&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(R1(e,o),e===Pe&&(Se=Pe=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||es||(es=!0,xv(As,function(){return Wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=pt.transition,pt.transition=null;var s=ee;ee=1;var a=X;X|=4,pf.current=null,Gw(e,n),vv(n,e),_w(wu),Os=!!_u,wu=_u=null,e.current=n,Kw(n),k1(),X=a,ee=s,pt.transition=o}else e.current=n;if(es&&(es=!1,dn=e,Ks=i),o=e.pendingLanes,o===0&&(wn=null),T1(n.stateNode),Je(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gs)throw Gs=!1,e=Uu,Uu=null,e;return Ks&1&&e.tag!==0&&Wr(),o=e.pendingLanes,o&1?e===$u?$i++:($i=0,$u=e):$i=0,Mn(),null}function Wr(){if(dn!==null){var e=ng(Ks),t=pt.transition,n=ee;try{if(pt.transition=null,ee=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,Ks=0,X&6)throw Error(T(331));var i=X;for(X|=4,D=e.current;D!==null;){var o=D,s=o.child;if(D.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:zi(8,c,o)}var f=c.child;if(f!==null)f.return=c,D=f;else for(;D!==null;){c=D;var d=c.sibling,h=c.return;if(pv(c),c===u){D=null;break}if(d!==null){d.return=h,D=d;break}D=h}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}D=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,D=s;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,D=g;break e}D=o.return}}var p=e.current;for(D=p;D!==null;){s=D;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,D=v;else e:for(s=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xa(9,a)}}catch(C){ve(a,a.return,C)}if(a===s){D=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,D=w;break e}D=a.return}}if(X=i,Mn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(ya,e)}catch{}r=!0}return r}finally{ee=n,pt.transition=t}}return!1}function Nh(e,t,n){t=Zr(n,t),t=rv(e,t,1),e=_n(e,t,1),t=He(),e!==null&&(ko(e,1,t),Je(e,t))}function ve(e,t,n){if(e.tag===3)Nh(e,e,n);else for(;t!==null;){if(t.tag===3){Nh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=Zr(n,e),e=iv(t,e,1),t=_n(t,e,1),e=He(),t!==null&&(ko(t,1,e),Je(t,e));break}}t=t.return}}function eS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Le&n)===n&&(be===4||be===3&&(Le&130023424)===Le&&500>_e()-gf?Xn(e,0):mf|=n),Je(e,t)}function kv(e,t){t===0&&(e.mode&1?(t=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):t=1);var n=He();e=Gt(e,t),e!==null&&(ko(e,t,n),Je(e,n))}function tS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kv(e,n)}function nS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),kv(e,n)}var bv;bv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,Ww(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,he&&t.flags&1048576&&Ig(t,zs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ss(e,t),e=t.pendingProps;var i=Qr(t,Be.current);Br(t,n),i=uf(null,t,r,e,i,n);var o=cf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,Fs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rf(t),i.updater=ka,t.stateNode=i,i._reactInternals=t,Nu(t,r,e,n),t=Ou(null,t,r,!0,o,n)):(t.tag=0,he&&o&&qc(t),We(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ss(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=iS(r),e=_t(r,e),i){case 0:t=Pu(null,t,r,e,n);break e;case 1:t=_h(null,t,r,e,n);break e;case 11:t=vh(null,t,r,e,n);break e;case 14:t=yh(null,t,r,_t(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Pu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),_h(e,t,r,i,n);case 3:e:{if(lv(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Og(e,t),Bs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zr(Error(T(423)),t),t=wh(e,t,r,n,i);break e}else if(r!==i){i=Zr(Error(T(424)),t),t=wh(e,t,r,n,i);break e}else for(nt=yn(t.stateNode.containerInfo.firstChild),rt=t,he=!0,St=null,n=Mg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qr(),r===i){t=Kt(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return Fg(t),e===null&&xu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Su(r,i)?s=null:o!==null&&Su(r,o)&&(t.flags|=32),av(e,t),We(e,t,s,n),t.child;case 6:return e===null&&xu(t),null;case 13:return uv(e,t,n);case 4:return of(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xr(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),vh(e,t,r,i,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,oe(Us,r._currentValue),r._currentValue=s,o!==null)if(It(o.value,s)){if(o.children===i.children&&!qe.current){t=Kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Wt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Tu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(T(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Tu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}We(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Br(t,n),i=mt(i),r=r(i),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,i=_t(r,t.pendingProps),i=_t(r.type,i),yh(e,t,r,i,n);case 15:return ov(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_t(r,i),Ss(e,t),t.tag=1,Xe(r)?(e=!0,Fs(t)):e=!1,Br(t,n),Dg(t,r,i),Nu(t,r,i,n),Ou(null,t,r,!0,e,n);case 19:return cv(e,t,n);case 22:return sv(e,t,n)}throw Error(T(156,t.tag))};function xv(e,t){return Jm(e,t)}function rS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new rS(e,t,n,r)}function wf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iS(e){if(typeof e=="function")return wf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jc)return 11;if(e===zc)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ks(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")wf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Cr:return Jn(n.children,i,o,t);case Fc:s=8,i|=8;break;case Zl:return e=dt(12,n,t,i|2),e.elementType=Zl,e.lanes=o,e;case eu:return e=dt(13,n,t,i),e.elementType=eu,e.lanes=o,e;case tu:return e=dt(19,n,t,i),e.elementType=tu,e.lanes=o,e;case Lm:return Ia(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rm:s=10;break e;case Dm:s=9;break e;case jc:s=11;break e;case zc:s=14;break e;case an:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=dt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Jn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function Ia(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Lm,e.lanes=n,e.stateNode={isHidden:!1},e}function xl(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function oS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sf(e,t,n,r,i,o,s,a,l){return e=new oS(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rf(o),e}function sS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tv(e){if(!e)return In;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Xe(n))return xg(e,n,t)}return t}function Iv(e,t,n,r,i,o,s,a,l){return e=Sf(n,r,!0,e,i,o,s,a,l),e.context=Tv(null),n=e.current,r=He(),i=Sn(n),o=Wt(r,i),o.callback=t??null,_n(n,o,i),e.current.lanes=i,ko(e,i,r),Je(e,r),e}function Na(e,t,n,r){var i=t.current,o=He(),s=Sn(i);return n=Tv(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_n(i,t,s),e!==null&&(xt(e,i,s,o),ys(e,i,s)),s}function qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ef(e,t){Ah(e,t),(e=e.alternate)&&Ah(e,t)}function aS(){return null}var Nv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cf(e){this._internalRoot=e}Aa.prototype.render=Cf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Na(e,t,null,null)};Aa.prototype.unmount=Cf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){Na(null,e,null,null)}),t[Yt]=null}};function Aa(e){this._internalRoot=e}Aa.prototype.unstable_scheduleHydration=function(e){if(e){var t=og();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&ag(e)}};function kf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ph(){}function lS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=qs(s);o.call(u)}}var s=Iv(t,r,e,0,null,!1,!1,"",Ph);return e._reactRootContainer=s,e[Yt]=s.current,no(e.nodeType===8?e.parentNode:e),or(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=qs(l);a.call(u)}}var l=Sf(e,0,!1,null,null,!1,!1,"",Ph);return e._reactRootContainer=l,e[Yt]=l.current,no(e.nodeType===8?e.parentNode:e),or(function(){Na(t,l,n,r)}),l}function Oa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=qs(s);a.call(l)}}Na(t,s,e,i)}else s=lS(n,t,e,i,r);return qs(s)}rg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ai(t.pendingLanes);n!==0&&(Bc(t,n|1),Je(t,_e()),!(X&6)&&(ei=_e()+500,Mn()))}break;case 13:or(function(){var r=Gt(e,1);if(r!==null){var i=He();xt(r,e,1,i)}}),Ef(e,1)}};Wc=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=He();xt(t,e,134217728,n)}Ef(e,134217728)}};ig=function(e){if(e.tag===13){var t=Sn(e),n=Gt(e,t);if(n!==null){var r=He();xt(n,e,t,r)}Ef(e,t)}};og=function(){return ee};sg=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};fu=function(e,t,n){switch(t){case"input":if(iu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ea(r);if(!i)throw Error(T(90));Fm(r),iu(r,i)}}}break;case"textarea":zm(e,n);break;case"select":t=n.value,t!=null&&jr(e,!!n.multiple,t,!1)}};Ym=vf;Gm=or;var uS={usingClientEntryPoint:!1,Events:[xo,Tr,Ea,Hm,Vm,vf]},Ci={findFiberByHostInstance:Wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},cS={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qm(e),e===null?null:e.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||aS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{ya=ts.inject(cS),Lt=ts}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(t))throw Error(T(200));return sS(e,t,null,n)};st.createRoot=function(e,t){if(!kf(e))throw Error(T(299));var n=!1,r="",i=Nv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Sf(e,1,!1,null,null,n,!1,r,i),e[Yt]=t.current,no(e.nodeType===8?e.parentNode:e),new Cf(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=qm(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return or(e)};st.hydrate=function(e,t,n){if(!Pa(t))throw Error(T(200));return Oa(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!kf(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Nv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Iv(t,null,e,1,n??null,i,!1,o,s),e[Yt]=t.current,no(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Aa(t)};st.render=function(e,t,n){if(!Pa(t))throw Error(T(200));return Oa(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!Pa(e))throw Error(T(40));return e._reactRootContainer?(or(function(){Oa(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};st.unstable_batchedUpdates=vf;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pa(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Oa(e,t,n,!1,r)};st.version="18.2.0-next-9e3b772b8-20220608";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(e){console.error(e)}}Av(),Im.exports=st;var fS=Im.exports,Oh=fS;Xl.createRoot=Oh.createRoot,Xl.hydrateRoot=Oh.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}var hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hn||(hn={}));const Rh="popstate";function dS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Hu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ov(i)}return pS(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hS(){return Math.random().toString(36).substr(2,8)}function Dh(e,t){return{usr:e.state,key:e.key,idx:t}}function Hu(e,t,n,r){return n===void 0&&(n=null),fo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?li(t):t,{state:n,key:t&&t.key||r||hS()})}function Ov(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function li(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function pS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=hn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(fo({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=hn.Pop;let _=c(),g=_==null?null:_-u;u=_,l&&l({action:a,location:y.location,delta:g})}function d(_,g){a=hn.Push;let p=Hu(y.location,_,g);n&&n(p,_),u=c()+1;let v=Dh(p,u),w=y.createHref(p);try{s.pushState(v,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}o&&l&&l({action:a,location:y.location,delta:1})}function h(_,g){a=hn.Replace;let p=Hu(y.location,_,g);n&&n(p,_),u=c();let v=Dh(p,u),w=y.createHref(p);s.replaceState(v,"",w),o&&l&&l({action:a,location:y.location,delta:0})}function m(_){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof _=="string"?_:Ov(_);return p=p.replace(/ $/,"%20"),xe(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let y={get action(){return a},get location(){return e(i,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Rh,f),l=_,()=>{i.removeEventListener(Rh,f),l=null}},createHref(_){return t(i,_)},createURL:m,encodeLocation(_){let g=m(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:h,go(_){return s.go(_)}};return y}var Lh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lh||(Lh={}));function mS(e,t,n){return n===void 0&&(n="/"),gS(e,t,n,!1)}function gS(e,t,n,r){let i=typeof t=="string"?li(t):t,o=Lv(i.pathname||"/",n);if(o==null)return null;let s=Rv(e);vS(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=IS(o);a=xS(s[l],u,r)}return a}function Rv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(xe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:kS(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Dv(o.path))i(o,s,l)}),t}function Dv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Dv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function vS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:bS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yS=/^:[\w-]+$/,_S=3,wS=2,SS=1,ES=10,CS=-2,Mh=e=>e==="*";function kS(e,t){let n=e.split("/"),r=n.length;return n.some(Mh)&&(r+=CS),t&&(r+=wS),n.filter(i=>!Mh(i)).reduce((i,o)=>i+(yS.test(o)?_S:o===""?SS:ES),r)}function bS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function xS(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",f=Fh({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),d=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Fh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Zn([o,f.pathname]),pathnameBase:DS(Zn([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=Zn([o,f.pathnameBase]))}return s}function Fh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=TS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:h}=c;if(d==="*"){let y=a[f]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const m=a[f];return h&&!m?u[d]=void 0:u[d]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function TS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function IS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Lv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function NS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?li(e):e;return{pathname:n?n.startsWith("/")?n:AS(n,t):t,search:LS(r),hash:MS(i)}}function AS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Il(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function OS(e,t){let n=PS(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function RS(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=li(e):(i=fo({},e),xe(!i.pathname||!i.pathname.includes("?"),Il("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),Il("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),Il("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?t[f]:"/"}let l=NS(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Zn=e=>e.join("/").replace(/\/\/+/g,"/"),DS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),LS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,MS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function FS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mv=["post","put","patch","delete"];new Set(Mv);const jS=["get",...Mv];new Set(jS);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}const bf=L.createContext(null),zS=L.createContext(null),Ra=L.createContext(null),Da=L.createContext(null),ui=L.createContext({outlet:null,matches:[],isDataRoute:!1}),Fv=L.createContext(null);function La(){return L.useContext(Da)!=null}function jv(){return La()||xe(!1),L.useContext(Da).location}function zv(e){L.useContext(Ra).static||L.useLayoutEffect(e)}function US(){let{isDataRoute:e}=L.useContext(ui);return e?ZS():$S()}function $S(){La()||xe(!1);let e=L.useContext(bf),{basename:t,future:n,navigator:r}=L.useContext(Ra),{matches:i}=L.useContext(ui),{pathname:o}=jv(),s=JSON.stringify(OS(i,n.v7_relativeSplatPath)),a=L.useRef(!1);return zv(()=>{a.current=!0}),L.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=RS(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Zn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,s,o,e])}function BS(e,t){return WS(e,t)}function WS(e,t,n,r){La()||xe(!1);let{navigator:i}=L.useContext(Ra),{matches:o}=L.useContext(ui),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=jv(),c;if(t){var f;let _=typeof t=="string"?li(t):t;l==="/"||(f=_.pathname)!=null&&f.startsWith(l)||xe(!1),c=_}else c=u;let d=c.pathname||"/",h=d;if(l!=="/"){let _=l.replace(/^\//,"").split("/");h="/"+d.replace(/^\//,"").split("/").slice(_.length).join("/")}let m=mS(e,{pathname:h}),y=KS(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Zn([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Zn([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return t&&y?L.createElement(Da.Provider,{value:{location:ho({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:hn.Pop}},y):y}function HS(){let e=JS(),t=FS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.createElement("pre",{style:i},n):null,o)}const VS=L.createElement(HS,null);class YS extends L.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?L.createElement(ui.Provider,{value:this.props.routeContext},L.createElement(Fv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GS(e){let{routeContext:t,match:n,children:r}=e,i=L.useContext(bf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(ui.Provider,{value:t},r)}function KS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||xe(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:h}=n,m=f.route.loader&&d[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||m){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,d)=>{let h,m=!1,y=null,_=null;n&&(h=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||VS,l&&(u<0&&d===0?(eE("route-fallback",!1),m=!0,_=null):u===d&&(m=!0,_=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,d+1)),p=()=>{let v;return h?v=y:m?v=_:f.route.Component?v=L.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=c,L.createElement(GS,{match:f,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?L.createElement(YS,{location:n.location,revalidation:n.revalidation,component:y,error:h,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Uv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Uv||{}),Xs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Xs||{});function QS(e){let t=L.useContext(bf);return t||xe(!1),t}function qS(e){let t=L.useContext(zS);return t||xe(!1),t}function XS(e){let t=L.useContext(ui);return t||xe(!1),t}function $v(e){let t=XS(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function JS(){var e;let t=L.useContext(Fv),n=qS(Xs.UseRouteError),r=$v(Xs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ZS(){let{router:e}=QS(Uv.UseNavigateStable),t=$v(Xs.UseNavigateStable),n=L.useRef(!1);return zv(()=>{n.current=!0}),L.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ho({fromRouteId:t},o)))},[e,t])}const jh={};function eE(e,t,n){!t&&!jh[e]&&(jh[e]=!0)}function Bv(e){xe(!1)}function tE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=hn.Pop,navigator:o,static:s=!1,future:a}=e;La()&&xe(!1);let l=t.replace(/^\/*/,"/"),u=L.useMemo(()=>({basename:l,navigator:o,static:s,future:ho({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=li(r));let{pathname:c="/",search:f="",hash:d="",state:h=null,key:m="default"}=r,y=L.useMemo(()=>{let _=Lv(c,l);return _==null?null:{location:{pathname:_,search:f,hash:d,state:h,key:m},navigationType:i}},[l,c,f,d,h,m,i]);return y==null?null:L.createElement(Ra.Provider,{value:u},L.createElement(Da.Provider,{children:n,value:y}))}function nE(e){let{children:t,location:n}=e;return BS(Vu(t),n)}new Promise(()=>{});function Vu(e,t){t===void 0&&(t=[]);let n=[];return L.Children.forEach(e,(r,i)=>{if(!L.isValidElement(r))return;let o=[...t,i];if(r.type===L.Fragment){n.push.apply(n,Vu(r.props.children,o));return}r.type!==Bv&&xe(!1),!r.props.index||!r.props.children||xe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Vu(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const rE="6";try{window.__reactRouterVersion=rE}catch{}const iE="startTransition",zh=t1[iE];function oE(e){let{basename:t,children:n,future:r,window:i}=e,o=L.useRef();o.current==null&&(o.current=dS({window:i,v5Compat:!0}));let s=o.current,[a,l]=L.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=L.useCallback(f=>{u&&zh?zh(()=>l(f)):l(f)},[l,u]);return L.useLayoutEffect(()=>s.listen(c),[s,c]),L.createElement(tE,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var Uh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uh||(Uh={}));var $h;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($h||($h={}));var Wv={exports:{}};(function(e,t){(function(n,r){e.exports=r(L)})(typeof self<"u"?self:z0,n=>(()=>{var r={7403:(a,l,u)=>{u.d(l,{default:()=>jn});var c=u(4087),f=u.n(c);const d=function(x){return new RegExp(/<[a-z][\s\S]*>/i).test(x)},h=function(x){var I=document.createElement("div");return I.innerHTML=x,I.childNodes},m=function(x,I){return Math.floor(Math.random()*(I-x+1))+x};var y="TYPE_CHARACTER",_="REMOVE_CHARACTER",g="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",w="CALL_FUNCTION",C="ADD_HTML_TAG_ELEMENT",k="CHANGE_DELETE_SPEED",S="CHANGE_DELAY",b="CHANGE_CURSOR",A="PASTE_STRING",P="HTML_TAG";function z(x,I){var O=Object.keys(x);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(x);I&&(M=M.filter(function(te){return Object.getOwnPropertyDescriptor(x,te).enumerable})),O.push.apply(O,M)}return O}function G(x){for(var I=1;I<arguments.length;I++){var O=arguments[I]!=null?arguments[I]:{};I%2?z(Object(O),!0).forEach(function(M){W(x,M,O[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(O)):z(Object(O)).forEach(function(M){Object.defineProperty(x,M,Object.getOwnPropertyDescriptor(O,M))})}return x}function U(x){return function(I){if(Array.isArray(I))return $(I)}(x)||function(I){if(typeof Symbol<"u"&&I[Symbol.iterator]!=null||I["@@iterator"]!=null)return Array.from(I)}(x)||function(I,O){if(I){if(typeof I=="string")return $(I,O);var M=Object.prototype.toString.call(I).slice(8,-1);return M==="Object"&&I.constructor&&(M=I.constructor.name),M==="Map"||M==="Set"?Array.from(I):M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?$(I,O):void 0}}(x)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function $(x,I){(I==null||I>x.length)&&(I=x.length);for(var O=0,M=new Array(I);O<I;O++)M[O]=x[O];return M}function Z(x,I){for(var O=0;O<I.length;O++){var M=I[O];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(x,M.key,M)}}function W(x,I,O){return I in x?Object.defineProperty(x,I,{value:O,enumerable:!0,configurable:!0,writable:!0}):x[I]=O,x}const jn=function(){function x(M,te){var E=this;if(function(j,Q){if(!(j instanceof Q))throw new TypeError("Cannot call a class as a function")}(this,x),W(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),W(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),W(this,"setupWrapperElement",function(){E.state.elements.container&&(E.state.elements.wrapper.className=E.options.wrapperClassName,E.state.elements.cursor.className=E.options.cursorClassName,E.state.elements.cursor.innerHTML=E.options.cursor,E.state.elements.container.innerHTML="",E.state.elements.container.appendChild(E.state.elements.wrapper),E.state.elements.container.appendChild(E.state.elements.cursor))}),W(this,"start",function(){return E.state.eventLoopPaused=!1,E.runEventLoop(),E}),W(this,"pause",function(){return E.state.eventLoopPaused=!0,E}),W(this,"stop",function(){return E.state.eventLoop&&((0,c.cancel)(E.state.eventLoop),E.state.eventLoop=null),E}),W(this,"pauseFor",function(j){return E.addEventToQueue(v,{ms:j}),E}),W(this,"typeOutAllStrings",function(){return typeof E.options.strings=="string"?(E.typeString(E.options.strings).pauseFor(E.options.pauseFor),E):(E.options.strings.forEach(function(j){E.typeString(j).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed)}),E)}),W(this,"typeString",function(j){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(d(j))return E.typeOutHTMLString(j,Q);if(j){var we=E.options||{},Ee=we.stringSplitter,re=typeof Ee=="function"?Ee(j):j.split("");E.typeCharacters(re,Q)}return E}),W(this,"pasteString",function(j){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return d(j)?E.typeOutHTMLString(j,Q,!0):(j&&E.addEventToQueue(A,{character:j,node:Q}),E)}),W(this,"typeOutHTMLString",function(j){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,we=arguments.length>2?arguments[2]:void 0,Ee=h(j);if(Ee.length>0)for(var re=0;re<Ee.length;re++){var ut=Ee[re],_r=ut.innerHTML;ut&&ut.nodeType!==3?(ut.innerHTML="",E.addEventToQueue(C,{node:ut,parentNode:Q}),we?E.pasteString(_r,ut):E.typeString(_r,ut)):ut.textContent&&(we?E.pasteString(ut.textContent,Q):E.typeString(ut.textContent,Q))}return E}),W(this,"deleteAll",function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return E.addEventToQueue(g,{speed:j}),E}),W(this,"changeDeleteSpeed",function(j){if(!j)throw new Error("Must provide new delete speed");return E.addEventToQueue(k,{speed:j}),E}),W(this,"changeDelay",function(j){if(!j)throw new Error("Must provide new delay");return E.addEventToQueue(S,{delay:j}),E}),W(this,"changeCursor",function(j){if(!j)throw new Error("Must provide new cursor");return E.addEventToQueue(b,{cursor:j}),E}),W(this,"deleteChars",function(j){if(!j)throw new Error("Must provide amount of characters to delete");for(var Q=0;Q<j;Q++)E.addEventToQueue(_);return E}),W(this,"callFunction",function(j,Q){if(!j||typeof j!="function")throw new Error("Callbak must be a function");return E.addEventToQueue(w,{cb:j,thisArg:Q}),E}),W(this,"typeCharacters",function(j){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j||!Array.isArray(j))throw new Error("Characters must be an array");return j.forEach(function(we){E.addEventToQueue(y,{character:we,node:Q})}),E}),W(this,"removeCharacters",function(j){if(!j||!Array.isArray(j))throw new Error("Characters must be an array");return j.forEach(function(){E.addEventToQueue(_)}),E}),W(this,"addEventToQueue",function(j,Q){var we=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return E.addEventToStateProperty(j,Q,we,"eventQueue")}),W(this,"addReverseCalledEvent",function(j,Q){var we=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Ee=E.options.loop;return Ee?E.addEventToStateProperty(j,Q,we,"reverseCalledEvents"):E}),W(this,"addEventToStateProperty",function(j,Q){var we=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Ee=arguments.length>3?arguments[3]:void 0,re={eventName:j,eventArgs:Q||{}};return E.state[Ee]=we?[re].concat(U(E.state[Ee])):[].concat(U(E.state[Ee]),[re]),E}),W(this,"runEventLoop",function(){E.state.lastFrameTime||(E.state.lastFrameTime=Date.now());var j=Date.now(),Q=j-E.state.lastFrameTime;if(!E.state.eventQueue.length){if(!E.options.loop)return;E.state.eventQueue=U(E.state.calledEvents),E.state.calledEvents=[],E.options=G({},E.state.initialOptions)}if(E.state.eventLoop=f()(E.runEventLoop),!E.state.eventLoopPaused){if(E.state.pauseUntil){if(j<E.state.pauseUntil)return;E.state.pauseUntil=null}var we,Ee=U(E.state.eventQueue),re=Ee.shift();if(!(Q<=(we=re.eventName===p||re.eventName===_?E.options.deleteSpeed==="natural"?m(40,80):E.options.deleteSpeed:E.options.delay==="natural"?m(120,160):E.options.delay))){var ut=re.eventName,_r=re.eventArgs;switch(E.logInDevMode({currentEvent:re,state:E.state,delay:we}),ut){case A:case y:var Xa=_r.character,_d=_r.node,wd=document.createTextNode(Xa),mi=wd;E.options.onCreateTextNode&&typeof E.options.onCreateTextNode=="function"&&(mi=E.options.onCreateTextNode(Xa,wd)),mi&&(_d?_d.appendChild(mi):E.state.elements.wrapper.appendChild(mi)),E.state.visibleNodes=[].concat(U(E.state.visibleNodes),[{type:"TEXT_NODE",character:Xa,node:mi}]);break;case _:Ee.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case v:var A0=re.eventArgs.ms;E.state.pauseUntil=Date.now()+parseInt(A0);break;case w:var Sd=re.eventArgs,P0=Sd.cb,O0=Sd.thisArg;P0.call(O0,{elements:E.state.elements});break;case C:var Ed=re.eventArgs,Ja=Ed.node,Za=Ed.parentNode;Za?Za.appendChild(Ja):E.state.elements.wrapper.appendChild(Ja),E.state.visibleNodes=[].concat(U(E.state.visibleNodes),[{type:P,node:Ja,parentNode:Za||E.state.elements.wrapper}]);break;case g:var R0=E.state.visibleNodes,el=_r.speed,Fo=[];el&&Fo.push({eventName:k,eventArgs:{speed:el,temp:!0}});for(var Cd=0,D0=R0.length;Cd<D0;Cd++)Fo.push({eventName:p,eventArgs:{removingCharacterNode:!1}});el&&Fo.push({eventName:k,eventArgs:{speed:E.options.deleteSpeed,temp:!0}}),Ee.unshift.apply(Ee,Fo);break;case p:var L0=re.eventArgs.removingCharacterNode;if(E.state.visibleNodes.length){var tl=E.state.visibleNodes.pop(),M0=tl.type,jo=tl.node,F0=tl.character;E.options.onRemoveNode&&typeof E.options.onRemoveNode=="function"&&E.options.onRemoveNode({node:jo,character:F0}),jo&&jo.parentNode.removeChild(jo),M0===P&&L0&&Ee.unshift({eventName:p,eventArgs:{}})}break;case k:E.options.deleteSpeed=re.eventArgs.speed;break;case S:E.options.delay=re.eventArgs.delay;break;case b:E.options.cursor=re.eventArgs.cursor,E.state.elements.cursor.innerHTML=re.eventArgs.cursor}E.options.loop&&(re.eventName===p||re.eventArgs&&re.eventArgs.temp||(E.state.calledEvents=[].concat(U(E.state.calledEvents),[re]))),E.state.eventQueue=Ee,E.state.lastFrameTime=j}}}),M)if(typeof M=="string"){var Nt=document.querySelector(M);if(!Nt)throw new Error("Could not find container element");this.state.elements.container=Nt}else this.state.elements.container=M;te&&(this.options=G(G({},this.options),te)),this.state.initialOptions=G({},this.options),this.init()}var I,O;return I=x,(O=[{key:"init",value:function(){var M,te;this.setupWrapperElement(),this.addEventToQueue(b,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(M=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(te=document.createElement("style")).appendChild(document.createTextNode(M)),document.head.appendChild(te),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(M){this.options.devMode&&console.log(M)}}])&&Z(I.prototype,O),Object.defineProperty(I,"prototype",{writable:!1}),x}()},8552:(a,l,u)=>{var c=u(852)(u(5639),"DataView");a.exports=c},1989:(a,l,u)=>{var c=u(1789),f=u(401),d=u(7667),h=u(1327),m=u(1866);function y(_){var g=-1,p=_==null?0:_.length;for(this.clear();++g<p;){var v=_[g];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=f,y.prototype.get=d,y.prototype.has=h,y.prototype.set=m,a.exports=y},8407:(a,l,u)=>{var c=u(7040),f=u(4125),d=u(2117),h=u(7518),m=u(4705);function y(_){var g=-1,p=_==null?0:_.length;for(this.clear();++g<p;){var v=_[g];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=f,y.prototype.get=d,y.prototype.has=h,y.prototype.set=m,a.exports=y},7071:(a,l,u)=>{var c=u(852)(u(5639),"Map");a.exports=c},3369:(a,l,u)=>{var c=u(4785),f=u(1285),d=u(6e3),h=u(9916),m=u(5265);function y(_){var g=-1,p=_==null?0:_.length;for(this.clear();++g<p;){var v=_[g];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=f,y.prototype.get=d,y.prototype.has=h,y.prototype.set=m,a.exports=y},3818:(a,l,u)=>{var c=u(852)(u(5639),"Promise");a.exports=c},8525:(a,l,u)=>{var c=u(852)(u(5639),"Set");a.exports=c},8668:(a,l,u)=>{var c=u(3369),f=u(619),d=u(2385);function h(m){var y=-1,_=m==null?0:m.length;for(this.__data__=new c;++y<_;)this.add(m[y])}h.prototype.add=h.prototype.push=f,h.prototype.has=d,a.exports=h},6384:(a,l,u)=>{var c=u(8407),f=u(7465),d=u(3779),h=u(7599),m=u(4758),y=u(4309);function _(g){var p=this.__data__=new c(g);this.size=p.size}_.prototype.clear=f,_.prototype.delete=d,_.prototype.get=h,_.prototype.has=m,_.prototype.set=y,a.exports=_},2705:(a,l,u)=>{var c=u(5639).Symbol;a.exports=c},1149:(a,l,u)=>{var c=u(5639).Uint8Array;a.exports=c},577:(a,l,u)=>{var c=u(852)(u(5639),"WeakMap");a.exports=c},4963:a=>{a.exports=function(l,u){for(var c=-1,f=l==null?0:l.length,d=0,h=[];++c<f;){var m=l[c];u(m,c,l)&&(h[d++]=m)}return h}},4636:(a,l,u)=>{var c=u(2545),f=u(5694),d=u(1469),h=u(4144),m=u(5776),y=u(6719),_=Object.prototype.hasOwnProperty;a.exports=function(g,p){var v=d(g),w=!v&&f(g),C=!v&&!w&&h(g),k=!v&&!w&&!C&&y(g),S=v||w||C||k,b=S?c(g.length,String):[],A=b.length;for(var P in g)!p&&!_.call(g,P)||S&&(P=="length"||C&&(P=="offset"||P=="parent")||k&&(P=="buffer"||P=="byteLength"||P=="byteOffset")||m(P,A))||b.push(P);return b}},2488:a=>{a.exports=function(l,u){for(var c=-1,f=u.length,d=l.length;++c<f;)l[d+c]=u[c];return l}},2908:a=>{a.exports=function(l,u){for(var c=-1,f=l==null?0:l.length;++c<f;)if(u(l[c],c,l))return!0;return!1}},8470:(a,l,u)=>{var c=u(7813);a.exports=function(f,d){for(var h=f.length;h--;)if(c(f[h][0],d))return h;return-1}},8866:(a,l,u)=>{var c=u(2488),f=u(1469);a.exports=function(d,h,m){var y=h(d);return f(d)?y:c(y,m(d))}},4239:(a,l,u)=>{var c=u(2705),f=u(9607),d=u(2333),h=c?c.toStringTag:void 0;a.exports=function(m){return m==null?m===void 0?"[object Undefined]":"[object Null]":h&&h in Object(m)?f(m):d(m)}},9454:(a,l,u)=>{var c=u(4239),f=u(7005);a.exports=function(d){return f(d)&&c(d)=="[object Arguments]"}},939:(a,l,u)=>{var c=u(2492),f=u(7005);a.exports=function d(h,m,y,_,g){return h===m||(h==null||m==null||!f(h)&&!f(m)?h!=h&&m!=m:c(h,m,y,_,d,g))}},2492:(a,l,u)=>{var c=u(6384),f=u(7114),d=u(8351),h=u(6096),m=u(4160),y=u(1469),_=u(4144),g=u(6719),p="[object Arguments]",v="[object Array]",w="[object Object]",C=Object.prototype.hasOwnProperty;a.exports=function(k,S,b,A,P,z){var G=y(k),U=y(S),$=G?v:m(k),Z=U?v:m(S),W=($=$==p?w:$)==w,jn=(Z=Z==p?w:Z)==w,x=$==Z;if(x&&_(k)){if(!_(S))return!1;G=!0,W=!1}if(x&&!W)return z||(z=new c),G||g(k)?f(k,S,b,A,P,z):d(k,S,$,b,A,P,z);if(!(1&b)){var I=W&&C.call(k,"__wrapped__"),O=jn&&C.call(S,"__wrapped__");if(I||O){var M=I?k.value():k,te=O?S.value():S;return z||(z=new c),P(M,te,b,A,z)}}return!!x&&(z||(z=new c),h(k,S,b,A,P,z))}},8458:(a,l,u)=>{var c=u(3560),f=u(5346),d=u(3218),h=u(346),m=/^\[object .+?Constructor\]$/,y=Function.prototype,_=Object.prototype,g=y.toString,p=_.hasOwnProperty,v=RegExp("^"+g.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(w){return!(!d(w)||f(w))&&(c(w)?v:m).test(h(w))}},8749:(a,l,u)=>{var c=u(4239),f=u(1780),d=u(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(m){return d(m)&&f(m.length)&&!!h[c(m)]}},280:(a,l,u)=>{var c=u(5726),f=u(6916),d=Object.prototype.hasOwnProperty;a.exports=function(h){if(!c(h))return f(h);var m=[];for(var y in Object(h))d.call(h,y)&&y!="constructor"&&m.push(y);return m}},2545:a=>{a.exports=function(l,u){for(var c=-1,f=Array(l);++c<l;)f[c]=u(c);return f}},1717:a=>{a.exports=function(l){return function(u){return l(u)}}},4757:a=>{a.exports=function(l,u){return l.has(u)}},4429:(a,l,u)=>{var c=u(5639)["__core-js_shared__"];a.exports=c},7114:(a,l,u)=>{var c=u(8668),f=u(2908),d=u(4757);a.exports=function(h,m,y,_,g,p){var v=1&y,w=h.length,C=m.length;if(w!=C&&!(v&&C>w))return!1;var k=p.get(h),S=p.get(m);if(k&&S)return k==m&&S==h;var b=-1,A=!0,P=2&y?new c:void 0;for(p.set(h,m),p.set(m,h);++b<w;){var z=h[b],G=m[b];if(_)var U=v?_(G,z,b,m,h,p):_(z,G,b,h,m,p);if(U!==void 0){if(U)continue;A=!1;break}if(P){if(!f(m,function($,Z){if(!d(P,Z)&&(z===$||g(z,$,y,_,p)))return P.push(Z)})){A=!1;break}}else if(z!==G&&!g(z,G,y,_,p)){A=!1;break}}return p.delete(h),p.delete(m),A}},8351:(a,l,u)=>{var c=u(2705),f=u(1149),d=u(7813),h=u(7114),m=u(8776),y=u(1814),_=c?c.prototype:void 0,g=_?_.valueOf:void 0;a.exports=function(p,v,w,C,k,S,b){switch(w){case"[object DataView]":if(p.byteLength!=v.byteLength||p.byteOffset!=v.byteOffset)return!1;p=p.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=v.byteLength||!S(new f(p),new f(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return d(+p,+v);case"[object Error]":return p.name==v.name&&p.message==v.message;case"[object RegExp]":case"[object String]":return p==v+"";case"[object Map]":var A=m;case"[object Set]":var P=1&C;if(A||(A=y),p.size!=v.size&&!P)return!1;var z=b.get(p);if(z)return z==v;C|=2,b.set(p,v);var G=h(A(p),A(v),C,k,S,b);return b.delete(p),G;case"[object Symbol]":if(g)return g.call(p)==g.call(v)}return!1}},6096:(a,l,u)=>{var c=u(8234),f=Object.prototype.hasOwnProperty;a.exports=function(d,h,m,y,_,g){var p=1&m,v=c(d),w=v.length;if(w!=c(h).length&&!p)return!1;for(var C=w;C--;){var k=v[C];if(!(p?k in h:f.call(h,k)))return!1}var S=g.get(d),b=g.get(h);if(S&&b)return S==h&&b==d;var A=!0;g.set(d,h),g.set(h,d);for(var P=p;++C<w;){var z=d[k=v[C]],G=h[k];if(y)var U=p?y(G,z,k,h,d,g):y(z,G,k,d,h,g);if(!(U===void 0?z===G||_(z,G,m,y,g):U)){A=!1;break}P||(P=k=="constructor")}if(A&&!P){var $=d.constructor,Z=h.constructor;$==Z||!("constructor"in d)||!("constructor"in h)||typeof $=="function"&&$ instanceof $&&typeof Z=="function"&&Z instanceof Z||(A=!1)}return g.delete(d),g.delete(h),A}},1957:(a,l,u)=>{var c=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=c},8234:(a,l,u)=>{var c=u(8866),f=u(9551),d=u(3674);a.exports=function(h){return c(h,d,f)}},5050:(a,l,u)=>{var c=u(7019);a.exports=function(f,d){var h=f.__data__;return c(d)?h[typeof d=="string"?"string":"hash"]:h.map}},852:(a,l,u)=>{var c=u(8458),f=u(7801);a.exports=function(d,h){var m=f(d,h);return c(m)?m:void 0}},9607:(a,l,u)=>{var c=u(2705),f=Object.prototype,d=f.hasOwnProperty,h=f.toString,m=c?c.toStringTag:void 0;a.exports=function(y){var _=d.call(y,m),g=y[m];try{y[m]=void 0;var p=!0}catch{}var v=h.call(y);return p&&(_?y[m]=g:delete y[m]),v}},9551:(a,l,u)=>{var c=u(4963),f=u(479),d=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,m=h?function(y){return y==null?[]:(y=Object(y),c(h(y),function(_){return d.call(y,_)}))}:f;a.exports=m},4160:(a,l,u)=>{var c=u(8552),f=u(7071),d=u(3818),h=u(8525),m=u(577),y=u(4239),_=u(346),g="[object Map]",p="[object Promise]",v="[object Set]",w="[object WeakMap]",C="[object DataView]",k=_(c),S=_(f),b=_(d),A=_(h),P=_(m),z=y;(c&&z(new c(new ArrayBuffer(1)))!=C||f&&z(new f)!=g||d&&z(d.resolve())!=p||h&&z(new h)!=v||m&&z(new m)!=w)&&(z=function(G){var U=y(G),$=U=="[object Object]"?G.constructor:void 0,Z=$?_($):"";if(Z)switch(Z){case k:return C;case S:return g;case b:return p;case A:return v;case P:return w}return U}),a.exports=z},7801:a=>{a.exports=function(l,u){return l==null?void 0:l[u]}},1789:(a,l,u)=>{var c=u(4536);a.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:a=>{a.exports=function(l){var u=this.has(l)&&delete this.__data__[l];return this.size-=u?1:0,u}},7667:(a,l,u)=>{var c=u(4536),f=Object.prototype.hasOwnProperty;a.exports=function(d){var h=this.__data__;if(c){var m=h[d];return m==="__lodash_hash_undefined__"?void 0:m}return f.call(h,d)?h[d]:void 0}},1327:(a,l,u)=>{var c=u(4536),f=Object.prototype.hasOwnProperty;a.exports=function(d){var h=this.__data__;return c?h[d]!==void 0:f.call(h,d)}},1866:(a,l,u)=>{var c=u(4536);a.exports=function(f,d){var h=this.__data__;return this.size+=this.has(f)?0:1,h[f]=c&&d===void 0?"__lodash_hash_undefined__":d,this}},5776:a=>{var l=/^(?:0|[1-9]\d*)$/;a.exports=function(u,c){var f=typeof u;return!!(c=c??9007199254740991)&&(f=="number"||f!="symbol"&&l.test(u))&&u>-1&&u%1==0&&u<c}},7019:a=>{a.exports=function(l){var u=typeof l;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?l!=="__proto__":l===null}},5346:(a,l,u)=>{var c,f=u(4429),d=(c=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";a.exports=function(h){return!!d&&d in h}},5726:a=>{var l=Object.prototype;a.exports=function(u){var c=u&&u.constructor;return u===(typeof c=="function"&&c.prototype||l)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,l,u)=>{var c=u(8470),f=Array.prototype.splice;a.exports=function(d){var h=this.__data__,m=c(h,d);return!(m<0||(m==h.length-1?h.pop():f.call(h,m,1),--this.size,0))}},2117:(a,l,u)=>{var c=u(8470);a.exports=function(f){var d=this.__data__,h=c(d,f);return h<0?void 0:d[h][1]}},7518:(a,l,u)=>{var c=u(8470);a.exports=function(f){return c(this.__data__,f)>-1}},4705:(a,l,u)=>{var c=u(8470);a.exports=function(f,d){var h=this.__data__,m=c(h,f);return m<0?(++this.size,h.push([f,d])):h[m][1]=d,this}},4785:(a,l,u)=>{var c=u(1989),f=u(8407),d=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new c,map:new(d||f),string:new c}}},1285:(a,l,u)=>{var c=u(5050);a.exports=function(f){var d=c(this,f).delete(f);return this.size-=d?1:0,d}},6e3:(a,l,u)=>{var c=u(5050);a.exports=function(f){return c(this,f).get(f)}},9916:(a,l,u)=>{var c=u(5050);a.exports=function(f){return c(this,f).has(f)}},5265:(a,l,u)=>{var c=u(5050);a.exports=function(f,d){var h=c(this,f),m=h.size;return h.set(f,d),this.size+=h.size==m?0:1,this}},8776:a=>{a.exports=function(l){var u=-1,c=Array(l.size);return l.forEach(function(f,d){c[++u]=[d,f]}),c}},4536:(a,l,u)=>{var c=u(852)(Object,"create");a.exports=c},6916:(a,l,u)=>{var c=u(5569)(Object.keys,Object);a.exports=c},1167:(a,l,u)=>{a=u.nmd(a);var c=u(1957),f=l&&!l.nodeType&&l,d=f&&a&&!a.nodeType&&a,h=d&&d.exports===f&&c.process,m=function(){try{return d&&d.require&&d.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=m},2333:a=>{var l=Object.prototype.toString;a.exports=function(u){return l.call(u)}},5569:a=>{a.exports=function(l,u){return function(c){return l(u(c))}}},5639:(a,l,u)=>{var c=u(1957),f=typeof self=="object"&&self&&self.Object===Object&&self,d=c||f||Function("return this")();a.exports=d},619:a=>{a.exports=function(l){return this.__data__.set(l,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(l){return this.__data__.has(l)}},1814:a=>{a.exports=function(l){var u=-1,c=Array(l.size);return l.forEach(function(f){c[++u]=f}),c}},7465:(a,l,u)=>{var c=u(8407);a.exports=function(){this.__data__=new c,this.size=0}},3779:a=>{a.exports=function(l){var u=this.__data__,c=u.delete(l);return this.size=u.size,c}},7599:a=>{a.exports=function(l){return this.__data__.get(l)}},4758:a=>{a.exports=function(l){return this.__data__.has(l)}},4309:(a,l,u)=>{var c=u(8407),f=u(7071),d=u(3369);a.exports=function(h,m){var y=this.__data__;if(y instanceof c){var _=y.__data__;if(!f||_.length<199)return _.push([h,m]),this.size=++y.size,this;y=this.__data__=new d(_)}return y.set(h,m),this.size=y.size,this}},346:a=>{var l=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return l.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(l,u){return l===u||l!=l&&u!=u}},5694:(a,l,u)=>{var c=u(9454),f=u(7005),d=Object.prototype,h=d.hasOwnProperty,m=d.propertyIsEnumerable,y=c(function(){return arguments}())?c:function(_){return f(_)&&h.call(_,"callee")&&!m.call(_,"callee")};a.exports=y},1469:a=>{var l=Array.isArray;a.exports=l},8612:(a,l,u)=>{var c=u(3560),f=u(1780);a.exports=function(d){return d!=null&&f(d.length)&&!c(d)}},4144:(a,l,u)=>{a=u.nmd(a);var c=u(5639),f=u(5062),d=l&&!l.nodeType&&l,h=d&&a&&!a.nodeType&&a,m=h&&h.exports===d?c.Buffer:void 0,y=(m?m.isBuffer:void 0)||f;a.exports=y},8446:(a,l,u)=>{var c=u(939);a.exports=function(f,d){return c(f,d)}},3560:(a,l,u)=>{var c=u(4239),f=u(3218);a.exports=function(d){if(!f(d))return!1;var h=c(d);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:a=>{a.exports=function(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=9007199254740991}},3218:a=>{a.exports=function(l){var u=typeof l;return l!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(l){return l!=null&&typeof l=="object"}},6719:(a,l,u)=>{var c=u(8749),f=u(1717),d=u(1167),h=d&&d.isTypedArray,m=h?f(h):c;a.exports=m},3674:(a,l,u)=>{var c=u(4636),f=u(280),d=u(8612);a.exports=function(h){return d(h)?c(h):f(h)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var l,u,c,f,d,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(l()-d)/1e6},u=process.hrtime,f=(l=function(){var m;return 1e9*(m=u())[0]+m[1]})(),h=1e9*process.uptime(),d=f-h):Date.now?(a.exports=function(){return Date.now()-c},c=Date.now()):(a.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(a,l,u)=>{for(var c=u(75),f=typeof window>"u"?u.g:window,d=["moz","webkit"],h="AnimationFrame",m=f["request"+h],y=f["cancel"+h]||f["cancelRequest"+h],_=0;!m&&_<d.length;_++)m=f[d[_]+"Request"+h],y=f[d[_]+"Cancel"+h]||f[d[_]+"CancelRequest"+h];if(!m||!y){var g=0,p=0,v=[];m=function(w){if(v.length===0){var C=c(),k=Math.max(0,16.666666666666668-(C-g));g=k+C,setTimeout(function(){var S=v.slice(0);v.length=0;for(var b=0;b<S.length;b++)if(!S[b].cancelled)try{S[b].callback(g)}catch(A){setTimeout(function(){throw A},0)}},Math.round(k))}return v.push({handle:++p,callback:w,cancelled:!1}),p},y=function(w){for(var C=0;C<v.length;C++)v[C].handle===w&&(v[C].cancelled=!0)}}a.exports=function(w){return m.call(f,w)},a.exports.cancel=function(){y.apply(f,arguments)},a.exports.polyfill=function(w){w||(w=f),w.requestAnimationFrame=m,w.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},i={};function o(a){var l=i[a];if(l!==void 0)return l.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var l=a&&a.__esModule?()=>a.default:()=>a;return o.d(l,{a:l}),l},o.d=(a,l)=>{for(var u in l)o.o(l,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var s={};return(()=>{o.d(s,{default:()=>C});var a=o(8156),l=o.n(a),u=o(7403),c=o(8446),f=o.n(c);function d(k){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},d(k)}function h(k,S){if(!(k instanceof S))throw new TypeError("Cannot call a class as a function")}function m(k,S){for(var b=0;b<S.length;b++){var A=S[b];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(k,A.key,A)}}function y(k,S){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,A){return b.__proto__=A,b},y(k,S)}function _(k,S){if(S&&(d(S)==="object"||typeof S=="function"))return S;if(S!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(k)}function g(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}function p(k){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(S){return S.__proto__||Object.getPrototypeOf(S)},p(k)}function v(k,S,b){return S in k?Object.defineProperty(k,S,{value:b,enumerable:!0,configurable:!0,writable:!0}):k[S]=b,k}var w=function(k){(function(U,$){if(typeof $!="function"&&$!==null)throw new TypeError("Super expression must either be null or a function");U.prototype=Object.create($&&$.prototype,{constructor:{value:U,writable:!0,configurable:!0}}),Object.defineProperty(U,"prototype",{writable:!1}),$&&y(U,$)})(G,k);var S,b,A,P,z=(A=G,P=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var U,$=p(A);if(P){var Z=p(this).constructor;U=Reflect.construct($,arguments,Z)}else U=$.apply(this,arguments);return _(this,U)});function G(){var U;h(this,G);for(var $=arguments.length,Z=new Array($),W=0;W<$;W++)Z[W]=arguments[W];return v(g(U=z.call.apply(z,[this].concat(Z))),"state",{instance:null}),U}return S=G,(b=[{key:"componentDidMount",value:function(){var U=this,$=new u.default(this.typewriter,this.props.options);this.setState({instance:$},function(){var Z=U.props.onInit;Z&&Z($)})}},{key:"componentDidUpdate",value:function(U){f()(this.props.options,U.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var U=this,$=this.props.component;return l().createElement($,{ref:function(Z){return U.typewriter=Z},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(S.prototype,b),Object.defineProperty(S,"prototype",{writable:!1}),G}(a.Component);w.defaultProps={component:"div"};const C=w})(),s.default})())})(Wv);var sE=Wv.exports;const Bh=Nc(sE);function Wh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wh(Object(n),!0).forEach(function(r){Te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Js(e){"@babel/helpers - typeof";return Js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Js(e)}function aE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function lE(e,t,n){return t&&Hh(e.prototype,t),n&&Hh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xf(e,t){return cE(e)||dE(e,t)||Hv(e,t)||pE()}function Io(e){return uE(e)||fE(e)||Hv(e)||hE()}function uE(e){if(Array.isArray(e))return Yu(e)}function cE(e){if(Array.isArray(e))return e}function fE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dE(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function Hv(e,t){if(e){if(typeof e=="string")return Yu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yu(e,t)}}function Yu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vh=function(){},Tf={},Vv={},Yv=null,Gv={mark:Vh,measure:Vh};try{typeof window<"u"&&(Tf=window),typeof document<"u"&&(Vv=document),typeof MutationObserver<"u"&&(Yv=MutationObserver),typeof performance<"u"&&(Gv=performance)}catch{}var mE=Tf.navigator||{},Yh=mE.userAgent,Gh=Yh===void 0?"":Yh,Nn=Tf,fe=Vv,Kh=Yv,ns=Gv;Nn.document;var nn=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",Kv=~Gh.indexOf("MSIE")||~Gh.indexOf("Trident/"),rs,is,os,ss,as,Qt="___FONT_AWESOME___",Gu=16,Qv="fa",qv="svg-inline--fa",sr="data-fa-i2svg",Ku="data-fa-pseudo-element",gE="data-fa-pseudo-element-pending",If="data-prefix",Nf="data-icon",Qh="fontawesome-i2svg",vE="async",yE=["HTML","HEAD","STYLE","SCRIPT"],Xv=function(){try{return!0}catch{return!1}}(),ue="classic",ye="sharp",Af=[ue,ye];function No(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ue]}})}var po=No((rs={},Te(rs,ue,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Te(rs,ye,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),rs)),mo=No((is={},Te(is,ue,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Te(is,ye,{solid:"fass",regular:"fasr",light:"fasl"}),is)),go=No((os={},Te(os,ue,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Te(os,ye,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),os)),_E=No((ss={},Te(ss,ue,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Te(ss,ye,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ss)),wE=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Jv="fa-layers-text",SE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,EE=No((as={},Te(as,ue,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Te(as,ye,{900:"fass",400:"fasr",300:"fasl"}),as)),Zv=[1,2,3,4,5,6,7,8,9,10],CE=Zv.concat([11,12,13,14,15,16,17,18,19,20]),kE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vo=new Set;Object.keys(mo[ue]).map(vo.add.bind(vo));Object.keys(mo[ye]).map(vo.add.bind(vo));var bE=[].concat(Af,Io(vo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yn.GROUP,Yn.SWAP_OPACITY,Yn.PRIMARY,Yn.SECONDARY]).concat(Zv.map(function(e){return"".concat(e,"x")})).concat(CE.map(function(e){return"w-".concat(e)})),Bi=Nn.FontAwesomeConfig||{};function xE(e){var t=fe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function TE(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(fe&&typeof fe.querySelector=="function"){var IE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];IE.forEach(function(e){var t=xf(e,2),n=t[0],r=t[1],i=TE(xE(n));i!=null&&(Bi[r]=i)})}var ey={styleDefault:"solid",familyDefault:"classic",cssPrefix:Qv,replacementClass:qv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bi.familyPrefix&&(Bi.cssPrefix=Bi.familyPrefix);var ti=R(R({},ey),Bi);ti.autoReplaceSvg||(ti.observeMutations=!1);var F={};Object.keys(ey).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){ti[e]=n,Wi.forEach(function(r){return r(F)})},get:function(){return ti[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){ti.cssPrefix=t,Wi.forEach(function(n){return n(F)})},get:function(){return ti.cssPrefix}});Nn.FontAwesomeConfig=F;var Wi=[];function NE(e){return Wi.push(e),function(){Wi.splice(Wi.indexOf(e),1)}}var sn=Gu,Rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function AE(e){if(!(!e||!nn)){var t=fe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return fe.head.insertBefore(t,r),e}}var PE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yo(){for(var e=12,t="";e-- >0;)t+=PE[Math.random()*62|0];return t}function ci(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Pf(e){return e.classList?ci(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ty(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OE(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ty(e[n]),'" ')},"").trim()}function Ma(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Of(e){return e.size!==Rt.size||e.x!==Rt.x||e.y!==Rt.y||e.rotate!==Rt.rotate||e.flipX||e.flipY}function RE(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function DE(e){var t=e.transform,n=e.width,r=n===void 0?Gu:n,i=e.height,o=i===void 0?Gu:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&Kv?l+="translate(".concat(t.x/sn-r/2,"em, ").concat(t.y/sn-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/sn,"em), calc(-50% + ").concat(t.y/sn,"em)) "):l+="translate(".concat(t.x/sn,"em, ").concat(t.y/sn,"em) "),l+="scale(".concat(t.size/sn*(t.flipX?-1:1),", ").concat(t.size/sn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var LE=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ny(){var e=Qv,t=qv,n=F.cssPrefix,r=F.replacementClass,i=LE;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var qh=!1;function Nl(){F.autoAddCss&&!qh&&(AE(ny()),qh=!0)}var ME={mixout:function(){return{dom:{css:ny,insertCss:Nl}}},hooks:function(){return{beforeDOMElementCreation:function(){Nl()},beforeI2svg:function(){Nl()}}}},qt=Nn||{};qt[Qt]||(qt[Qt]={});qt[Qt].styles||(qt[Qt].styles={});qt[Qt].hooks||(qt[Qt].hooks={});qt[Qt].shims||(qt[Qt].shims=[]);var Ct=qt[Qt],ry=[],FE=function e(){fe.removeEventListener("DOMContentLoaded",e),Zs=1,ry.map(function(t){return t()})},Zs=!1;nn&&(Zs=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),Zs||fe.addEventListener("DOMContentLoaded",FE));function jE(e){nn&&(Zs?setTimeout(e,0):ry.push(e))}function Ao(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?ty(e):"<".concat(t," ").concat(OE(r),">").concat(o.map(Ao).join(""),"</").concat(t,">")}function Xh(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zE=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},Al=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?zE(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function UE(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Qu(e){var t=UE(e);return t.length===1?t[0].toString(16):null}function $E(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Jh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function qu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Jh(t);typeof Ct.hooks.addPack=="function"&&!i?Ct.hooks.addPack(e,Jh(t)):Ct.styles[e]=R(R({},Ct.styles[e]||{}),o),e==="fas"&&qu("fa",t)}var ls,us,cs,Dr=Ct.styles,BE=Ct.shims,WE=(ls={},Te(ls,ue,Object.values(go[ue])),Te(ls,ye,Object.values(go[ye])),ls),Rf=null,iy={},oy={},sy={},ay={},ly={},HE=(us={},Te(us,ue,Object.keys(po[ue])),Te(us,ye,Object.keys(po[ye])),us);function VE(e){return~bE.indexOf(e)}function YE(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!VE(i)?i:null}var uy=function(){var t=function(o){return Al(Dr,function(s,a,l){return s[l]=Al(a,o,{}),s},{})};iy=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),oy=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),ly=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in Dr||F.autoFetchSvg,r=Al(BE,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});sy=r.names,ay=r.unicodes,Rf=Fa(F.styleDefault,{family:F.familyDefault})};NE(function(e){Rf=Fa(e.styleDefault,{family:F.familyDefault})});uy();function Df(e,t){return(iy[e]||{})[t]}function GE(e,t){return(oy[e]||{})[t]}function Gn(e,t){return(ly[e]||{})[t]}function cy(e){return sy[e]||{prefix:null,iconName:null}}function KE(e){var t=ay[e],n=Df("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function An(){return Rf}var Lf=function(){return{prefix:null,iconName:null,rest:[]}};function Fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ue:n,i=po[r][e],o=mo[r][e]||mo[r][i],s=e in Ct.styles?e:null;return o||s||null}var Zh=(cs={},Te(cs,ue,Object.keys(go[ue])),Te(cs,ye,Object.keys(go[ye])),cs);function ja(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},Te(t,ue,"".concat(F.cssPrefix,"-").concat(ue)),Te(t,ye,"".concat(F.cssPrefix,"-").concat(ye)),t),s=null,a=ue;(e.includes(o[ue])||e.some(function(u){return Zh[ue].includes(u)}))&&(a=ue),(e.includes(o[ye])||e.some(function(u){return Zh[ye].includes(u)}))&&(a=ye);var l=e.reduce(function(u,c){var f=YE(F.cssPrefix,c);if(Dr[c]?(c=WE[a].includes(c)?_E[a][c]:c,s=c,u.prefix=c):HE[a].indexOf(c)>-1?(s=c,u.prefix=Fa(c,{family:a})):f?u.iconName=f:c!==F.replacementClass&&c!==o[ue]&&c!==o[ye]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=s==="fa"?cy(u.iconName):{},h=Gn(u.prefix,u.iconName);d.prefix&&(s=null),u.iconName=d.iconName||h||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Dr.far&&Dr.fas&&!F.autoFetchSvg&&(u.prefix="fas")}return u},Lf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ye&&(Dr.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=Gn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=An()||"fas"),l}var QE=function(){function e(){aE(this,e),this.definitions={}}return lE(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=R(R({},n.definitions[a]||{}),s[a]),qu(a,s[a]);var l=go[ue][a];l&&qu(l,s[a]),uy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),ep=[],Lr={},Hr={},qE=Object.keys(Hr);function XE(e,t){var n=t.mixoutsTo;return ep=e,Lr={},Object.keys(Hr).forEach(function(r){qE.indexOf(r)===-1&&delete Hr[r]}),ep.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Js(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Lr[s]||(Lr[s]=[]),Lr[s].push(o[s])})}r.provides&&r.provides(Hr)}),n}function Xu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Lr[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ar(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Lr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Xt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Hr[e]?Hr[e].apply(null,t):void 0}function Ju(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||An();if(t)return t=Gn(n,t)||t,Xh(fy.definitions,n,t)||Xh(Ct.styles,n,t)}var fy=new QE,JE=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,ar("noAuto")},ZE={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nn?(ar("beforeI2svg",t),Xt("pseudoElements2svg",t),Xt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,jE(function(){tC({autoReplaceSvgRoot:n}),ar("watch",t)})}},eC={icon:function(t){if(t===null)return null;if(Js(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Fa(t[0]);return{prefix:r,iconName:Gn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(wE))){var i=ja(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||An(),iconName:Gn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=An();return{prefix:o,iconName:Gn(o,t)||t}}}},lt={noAuto:JE,config:F,dom:ZE,parse:eC,library:fy,findIconDefinition:Ju,toHtml:Ao},tC=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(Ct.styles).length>0||F.autoFetchSvg)&&nn&&F.autoReplaceSvg&&lt.dom.i2svg({node:r})};function za(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ao(r)})}}),Object.defineProperty(e,"node",{get:function(){if(nn){var r=fe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function nC(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(Of(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Ma(R(R({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function rC(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:s}),children:r}]}]}function Mf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,h=d===void 0?!1:d,m=r.found?r:n,y=m.width,_=m.height,g=i==="fak",p=[F.replacementClass,o?"".concat(F.cssPrefix,"-").concat(o):""].filter(function(A){return f.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(f.classes).join(" "),v={children:[],attributes:R(R({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(_)})},w=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/_*16*.0625,"em")}:{};h&&(v.attributes[sr]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||yo())},children:[l]}),delete v.attributes.title);var C=R(R({},v),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:R(R({},w),f.styles)}),k=r.found&&n.found?Xt("generateAbstractMask",C)||{children:[],attributes:{}}:Xt("generateAbstractIcon",C)||{children:[],attributes:{}},S=k.children,b=k.attributes;return C.children=S,C.attributes=b,a?rC(C):nC(C)}function tp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=R(R(R({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[sr]="");var c=R({},s.styles);Of(i)&&(c.transform=DE({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Ma(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function iC(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Ma(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Pl=Ct.styles;function Zu(e){var t=e[0],n=e[1],r=e.slice(4),i=xf(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Yn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Yn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var oC={found:!1,width:512,height:512};function sC(e,t){!Xv&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ec(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=An()),new Promise(function(r,i){if(Xt("missingIconAbstract"),n==="fa"){var o=cy(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Pl[t]&&Pl[t][e]){var s=Pl[t][e];return r(Zu(s))}sC(e,t),r(R(R({},oC),{},{icon:F.showMissingIcons&&e?Xt("missingIconAbstract")||{}:{}}))})}var np=function(){},tc=F.measurePerformance&&ns&&ns.mark&&ns.measure?ns:{mark:np,measure:np},Oi='FA "6.4.0"',aC=function(t){return tc.mark("".concat(Oi," ").concat(t," begins")),function(){return dy(t)}},dy=function(t){tc.mark("".concat(Oi," ").concat(t," ends")),tc.measure("".concat(Oi," ").concat(t),"".concat(Oi," ").concat(t," begins"),"".concat(Oi," ").concat(t," ends"))},Ff={begin:aC,end:dy},bs=function(){};function rp(e){var t=e.getAttribute?e.getAttribute(sr):null;return typeof t=="string"}function lC(e){var t=e.getAttribute?e.getAttribute(If):null,n=e.getAttribute?e.getAttribute(Nf):null;return t&&n}function uC(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function cC(){if(F.autoReplaceSvg===!0)return xs.replace;var e=xs[F.autoReplaceSvg];return e||xs.replace}function fC(e){return fe.createElementNS("http://www.w3.org/2000/svg",e)}function dC(e){return fe.createElement(e)}function hy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?fC:dC:n;if(typeof e=="string")return fe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(hy(s,{ceFn:r}))}),i}function hC(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xs={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(hy(i),n)}),n.getAttribute(sr)===null&&F.keepOriginalSource){var r=fe.createComment(hC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Pf(n).indexOf(F.replacementClass))return xs.replace(t);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===F.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Ao(a)}).join(`
`);n.setAttribute(sr,""),n.innerHTML=s}};function ip(e){e()}function py(e,t){var n=typeof t=="function"?t:bs;if(e.length===0)n();else{var r=ip;F.mutateApproach===vE&&(r=Nn.requestAnimationFrame||ip),r(function(){var i=cC(),o=Ff.begin("mutate");e.map(i),o(),n()})}}var jf=!1;function my(){jf=!0}function nc(){jf=!1}var ea=null;function op(e){if(Kh&&F.observeMutations){var t=e.treeCallback,n=t===void 0?bs:t,r=e.nodeCallback,i=r===void 0?bs:r,o=e.pseudoElementsCallback,s=o===void 0?bs:o,a=e.observeMutationsRoot,l=a===void 0?fe:a;ea=new Kh(function(u){if(!jf){var c=An();ci(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!rp(f.addedNodes[0])&&(F.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&F.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&rp(f.target)&&~kE.indexOf(f.attributeName))if(f.attributeName==="class"&&lC(f.target)){var d=ja(Pf(f.target)),h=d.prefix,m=d.iconName;f.target.setAttribute(If,h||c),m&&f.target.setAttribute(Nf,m)}else uC(f.target)&&i(f.target)})}}),nn&&ea.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pC(){ea&&ea.disconnect()}function mC(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function gC(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=ja(Pf(e));return i.prefix||(i.prefix=An()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=GE(i.prefix,e.innerText)||Df(i.prefix,Qu(e.innerText))),!i.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function vC(e){var t=ci(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||yo()):(t["aria-hidden"]="true",t.focusable="false")),t}function yC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gC(e),r=n.iconName,i=n.prefix,o=n.rest,s=vC(e),a=Xu("parseNodeAttributes",{},e),l=t.styleParser?mC(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var _C=Ct.styles;function gy(e){var t=F.autoReplaceSvg==="nest"?sp(e,{styleParser:!1}):sp(e);return~t.extra.classes.indexOf(Jv)?Xt("generateLayersText",e,t):Xt("generateSvgReplacementMutation",e,t)}var Pn=new Set;Af.map(function(e){Pn.add("fa-".concat(e))});Object.keys(po[ue]).map(Pn.add.bind(Pn));Object.keys(po[ye]).map(Pn.add.bind(Pn));Pn=Io(Pn);function ap(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nn)return Promise.resolve();var n=fe.documentElement.classList,r=function(f){return n.add("".concat(Qh,"-").concat(f))},i=function(f){return n.remove("".concat(Qh,"-").concat(f))},o=F.autoFetchSvg?Pn:Af.map(function(c){return"fa-".concat(c)}).concat(Object.keys(_C));o.includes("fa")||o.push("fa");var s=[".".concat(Jv,":not([").concat(sr,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(sr,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=ci(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ff.begin("onTree"),u=a.reduce(function(c,f){try{var d=gy(f);d&&c.push(d)}catch(h){Xv||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){py(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function wC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gy(e).then(function(n){n&&py([n],t)})}function SC(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ju(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ju(i||{})),e(r,R(R({},n),{},{mask:i}))}}var EC=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Rt:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,h=n.titleId,m=h===void 0?null:h,y=n.classes,_=y===void 0?[]:y,g=n.attributes,p=g===void 0?{}:g,v=n.styles,w=v===void 0?{}:v;if(t){var C=t.prefix,k=t.iconName,S=t.icon;return za(R({type:"icon"},t),function(){return ar("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(d?p["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(m||yo()):(p["aria-hidden"]="true",p.focusable="false")),Mf({icons:{main:Zu(S),mask:l?Zu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:k,transform:R(R({},Rt),i),symbol:s,title:d,maskId:c,titleId:m,extra:{attributes:p,styles:w,classes:_}})})}},CC={mixout:function(){return{icon:SC(EC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ap,n.nodeCallback=wC,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,o=n.callback,s=o===void 0?function(){}:o;return ap(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(h,m){Promise.all([ec(i,a),c.iconName?ec(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var _=xf(y,2),g=_[0],p=_[1];h([n,Mf({icons:{main:g,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:d,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Ma(a);l.length>0&&(i.style=l);var u;return Of(s)&&(u=Xt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},kC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return za({type:"layer"},function(){ar("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(Io(o)).join(" ")},children:s}]})}}}},bC={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return za({type:"counter",content:n},function(){return ar("beforeDOMElementCreation",{content:n,params:r}),iC({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(Io(a))}})})}}}},xC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Rt:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,h=d===void 0?{}:d;return za({type:"text",content:n},function(){return ar("beforeDOMElementCreation",{content:n,params:r}),tp({content:n,transform:R(R({},Rt),o),title:a,extra:{attributes:f,styles:h,classes:["".concat(F.cssPrefix,"-layers-text")].concat(Io(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(Kv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return F.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,tp({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},TC=new RegExp('"',"ug"),lp=[1105920,1112319];function IC(e){var t=e.replace(TC,""),n=$E(t,0),r=n>=lp[0]&&n<=lp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Qu(i?t[0]:t),isSecondary:r||i}}function up(e,t){var n="".concat(gE).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=ci(e.children),s=o.filter(function(S){return S.getAttribute(Ku)===t})[0],a=Nn.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(SE),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ye:ue,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mo[d][l[2].toLowerCase()]:EE[d][u],m=IC(f),y=m.value,_=m.isSecondary,g=l[0].startsWith("FontAwesome"),p=Df(h,y),v=p;if(g){var w=KE(y);w.iconName&&w.prefix&&(p=w.iconName,h=w.prefix)}if(p&&!_&&(!s||s.getAttribute(If)!==h||s.getAttribute(Nf)!==v)){e.setAttribute(n,v),s&&e.removeChild(s);var C=yC(),k=C.extra;k.attributes[Ku]=t,ec(p,h).then(function(S){var b=Mf(R(R({},C),{},{icons:{main:S,mask:Lf()},prefix:h,iconName:v,extra:k,watchable:!0})),A=fe.createElement("svg");t==="::before"?e.insertBefore(A,e.firstChild):e.appendChild(A),A.outerHTML=b.map(function(P){return Ao(P)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function NC(e){return Promise.all([up(e,"::before"),up(e,"::after")])}function AC(e){return e.parentNode!==document.head&&!~yE.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ku)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function cp(e){if(nn)return new Promise(function(t,n){var r=ci(e.querySelectorAll("*")).filter(AC).map(NC),i=Ff.begin("searchPseudoElements");my(),Promise.all(r).then(function(){i(),nc(),t()}).catch(function(){i(),nc(),n()})})}var PC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=cp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;F.searchPseudoElements&&cp(i)}}},fp=!1,OC={mixout:function(){return{dom:{unwatch:function(){my(),fp=!0}}}},hooks:function(){return{bootstrap:function(){op(Xu("mutationObserverCallbacks",{}))},noAuto:function(){pC()},watch:function(n){var r=n.observeMutationsRoot;fp?nc():op(Xu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},dp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},RC={mixout:function(){return{parse:{transform:function(n){return dp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=dp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},h={outer:a,inner:f,path:d};return{tag:"g",attributes:R({},h.outer),children:[{tag:"g",attributes:R({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),h.path)}]}]}}}},Ol={x:0,y:0,width:"100%",height:"100%"};function hp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function DC(e){return e.tag==="g"?e.children:[e]}var LC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?ja(i.split(" ").map(function(s){return s.trim()})):Lf();return o.prefix||(o.prefix=An()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,d=s.icon,h=RE({transform:l,containerWidth:f,iconWidth:u}),m={tag:"rect",attributes:R(R({},Ol),{},{fill:"white"})},y=c.children?{children:c.children.map(hp)}:{},_={tag:"g",attributes:R({},h.inner),children:[hp(R({tag:c.tag,attributes:R(R({},c.attributes),h.path)},y))]},g={tag:"g",attributes:R({},h.outer),children:[_]},p="mask-".concat(a||yo()),v="clip-".concat(a||yo()),w={tag:"mask",attributes:R(R({},Ol),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:DC(d)},w]};return r.push(C,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Ol)}),{children:r,attributes:i}}}},MC={provides:function(t){var n=!1;Nn.matchMedia&&(n=Nn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=R(R({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:R(R({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},FC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},jC=[ME,CC,kC,bC,xC,PC,OC,RC,LC,MC,FC];XE(jC,{mixoutsTo:lt});lt.noAuto;lt.config;var zC=lt.library;lt.dom;var rc=lt.parse;lt.findIconDefinition;lt.toHtml;var UC=lt.icon;lt.layer;lt.text;lt.counter;var $C={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},BC={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},vy={exports:{}},WC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",HC=WC,VC=HC;function yy(){}function _y(){}_y.resetWarningCache=yy;var YC=function(){function e(r,i,o,s,a,l){if(l!==VC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_y,resetWarningCache:yy};return n.PropTypes=n,n};vy.exports=YC();var GC=vy.exports;const H=Nc(GC);function pp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pp(Object(n),!0).forEach(function(r){Mr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ta(e){"@babel/helpers - typeof";return ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ta(e)}function Mr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function QC(e,t){if(e==null)return{};var n=KC(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ic(e){return qC(e)||XC(e)||JC(e)||ZC()}function qC(e){if(Array.isArray(e))return oc(e)}function XC(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function JC(e,t){if(e){if(typeof e=="string")return oc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oc(e,t)}}function oc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ZC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ek(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,h=e.inverse,m=e.border,y=e.listItem,_=e.flip,g=e.size,p=e.rotation,v=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":h,"fa-border":m,"fa-li":y,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},Mr(t,"fa-".concat(g),typeof g<"u"&&g!==null),Mr(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Mr(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Mr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(C){return w[C]?C:null}).filter(function(C){return C})}function tk(e){return e=e-0,e===e}function wy(e){return tk(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var nk=["style"];function rk(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ik(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=wy(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[rk(i)]=o:t[i]=o,t},{})}function Sy(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Sy(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=ik(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[wy(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=QC(n,nk);return i.attrs.style=pn(pn({},i.attrs.style),s),e.apply(void 0,[t.tag,pn(pn({},i.attrs),a)].concat(ic(r)))}var Ey=!1;try{Ey=!0}catch{}function ok(){if(!Ey&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function mp(e){if(e&&ta(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(rc.icon)return rc.icon(e);if(e===null)return null;if(e&&ta(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Rl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mr({},e,t):{}}var Po=va.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=mp(n),c=Rl("classes",[].concat(ic(ek(e)),ic(o.split(" ")))),f=Rl("transform",typeof e.transform=="string"?rc.transform(e.transform):e.transform),d=Rl("mask",mp(r)),h=UC(u,pn(pn(pn(pn({},c),f),d),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!h)return ok("Could not find icon",u),null;var m=h.abstract,y={ref:t};return Object.keys(e).forEach(function(_){Po.defaultProps.hasOwnProperty(_)||(y[_]=e[_])}),sk(m[0],y)});Po.displayName="FontAwesomeIcon";Po.propTypes={beat:H.bool,border:H.bool,beatFade:H.bool,bounce:H.bool,className:H.string,fade:H.bool,flash:H.bool,mask:H.oneOfType([H.object,H.array,H.string]),maskId:H.string,fixedWidth:H.bool,inverse:H.bool,flip:H.oneOf([!0,!1,"horizontal","vertical","both"]),icon:H.oneOfType([H.object,H.array,H.string]),listItem:H.bool,pull:H.oneOf(["right","left"]),pulse:H.bool,rotation:H.oneOf([0,90,180,270]),shake:H.bool,size:H.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:H.bool,spinPulse:H.bool,spinReverse:H.bool,symbol:H.oneOfType([H.bool,H.string]),title:H.string,titleId:H.string,transform:H.oneOfType([H.string,H.object]),swapOpacity:H.bool};Po.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var sk=Sy.bind(null,va.createElement);const ak="/assets/WMCYN LOGO WHITE-b3ce33b8.png",lk="/assets/instagram-logo-b8fca9ce.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(e,t){if(!e)throw fi(t)},fi=function(e){return new Error("Firebase Database ("+Cy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},uk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},zf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,h=u&63;l||(h=64,s||(d=64)),r.push(n[c],n[f],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ky(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):uk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new ck;const d=o<<2|a>>4;if(r.push(d),u!==64){const h=a<<4&240|u>>2;if(r.push(h),f!==64){const m=u<<6&192|f;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ck extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const by=function(e){const t=ky(e);return zf.encodeByteArray(t,!0)},na=function(e){return by(e).replace(/\./g,"")},sc=function(e){try{return zf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(e){return xy(void 0,e)}function xy(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!dk(n)||(e[n]=xy(e[n],t[n]));return e}function dk(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=()=>hk().__FIREBASE_DEFAULTS__,mk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},gk=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&sc(e[1]);return t&&JSON.parse(t)},Ty=()=>{try{return pk()||mk()||gk()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},vk=e=>{var t,n;return(n=(t=Ty())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},yk=e=>{const t=vk(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Iy=()=>{var e;return(e=Ty())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[na(JSON.stringify(n)),na(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ny(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wk())}function Sk(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ek(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ay(){return Cy.NODE_ADMIN===!0}function Py(){try{return typeof indexedDB=="object"}catch{return!1}}function Oy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Ck(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="FirebaseError";class gr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=kk,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?bk(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new gr(i,a,r)}}function bk(e,t){return e.replace(xk,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const xk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e){return JSON.parse(e)}function De(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=_o(sc(o[0])||""),n=_o(sc(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},Tk=function(e){const t=Ry(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ik=function(e){const t=Ry(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ni(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function gp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ra(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ia(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(vp(o)&&vp(s)){if(!ia(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vp(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let f=0;f<16;f++)r[f]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=a^o&(s^a),c=1518500249):(u=o^s^a,c=1859775393):f<60?(u=o&s|a&(o|s),c=2400959708):(u=o^s^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[f]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=t[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)t[r]=this.chain_[i]>>o&255,++r;return t}}function Uf(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,N(r<e.length,"Surrogate pair missing trail surrogate.");const s=e.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ba=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=1e3,Rk=2,Dk=4*60*60*1e3,Lk=.5;function yp(e,t=Ok,n=Rk){const r=t*Math.pow(n,e),i=Math.round(Lk*r*(Math.random()-.5)*2);return Math.min(Dk,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e){return e&&e._delegate?e._delegate:e}class Jt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ua;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jk(t))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=$n){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$n){return this.instances.has(t)}getOptions(t=$n){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fk(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=$n){return this.component?this.component.multipleInstances?t:$n:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fk(e){return e===$n?void 0:e}function jk(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Mk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ie||(ie={}));const Uk={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},$k=ie.INFO,Bk={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Wk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Bk[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $f{constructor(t){this.name=t,this._logLevel=$k,this._logHandler=Wk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Uk[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...t),this._logHandler(this,ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...t),this._logHandler(this,ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...t),this._logHandler(this,ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...t),this._logHandler(this,ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...t),this._logHandler(this,ie.ERROR,...t)}}const Hk=(e,t)=>t.some(n=>e instanceof n);let _p,wp;function Vk(){return _p||(_p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yk(){return wp||(wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dy=new WeakMap,ac=new WeakMap,Ly=new WeakMap,Dl=new WeakMap,Bf=new WeakMap;function Gk(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Cn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Dy.set(n,e)}).catch(()=>{}),Bf.set(t,e),t}function Kk(e){if(ac.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});ac.set(e,t)}let lc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ac.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ly.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Qk(e){lc=e(lc)}function qk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ll(this),t,...n);return Ly.set(r,t.sort?t.sort():[t]),Cn(r)}:Yk().includes(e)?function(...t){return e.apply(Ll(this),t),Cn(Dy.get(this))}:function(...t){return Cn(e.apply(Ll(this),t))}}function Xk(e){return typeof e=="function"?qk(e):(e instanceof IDBTransaction&&Kk(e),Hk(e,Vk())?new Proxy(e,lc):e)}function Cn(e){if(e instanceof IDBRequest)return Gk(e);if(Dl.has(e))return Dl.get(e);const t=Xk(e);return t!==e&&(Dl.set(e,t),Bf.set(t,e)),t}const Ll=e=>Bf.get(e);function Jk(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Cn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Cn(s.result),l.oldVersion,l.newVersion,Cn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Zk=["get","getKey","getAll","getAllKeys","count"],eb=["put","add","delete","clear"],Ml=new Map;function Sp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ml.get(t))return Ml.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=eb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zk.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ml.set(t,o),o}Qk(e=>({...e,get:(t,n,r)=>Sp(t,n)||e.get(t,n,r),has:(t,n)=>!!Sp(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nb(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const uc="@firebase/app",Ep="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new $f("@firebase/app"),rb="@firebase/app-compat",ib="@firebase/analytics-compat",ob="@firebase/analytics",sb="@firebase/app-check-compat",ab="@firebase/app-check",lb="@firebase/auth",ub="@firebase/auth-compat",cb="@firebase/database",fb="@firebase/database-compat",db="@firebase/functions",hb="@firebase/functions-compat",pb="@firebase/installations",mb="@firebase/installations-compat",gb="@firebase/messaging",vb="@firebase/messaging-compat",yb="@firebase/performance",_b="@firebase/performance-compat",wb="@firebase/remote-config",Sb="@firebase/remote-config-compat",Eb="@firebase/storage",Cb="@firebase/storage-compat",kb="@firebase/firestore",bb="@firebase/firestore-compat",xb="firebase",Tb="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="[DEFAULT]",Ib={[uc]:"fire-core",[rb]:"fire-core-compat",[ob]:"fire-analytics",[ib]:"fire-analytics-compat",[ab]:"fire-app-check",[sb]:"fire-app-check-compat",[lb]:"fire-auth",[ub]:"fire-auth-compat",[cb]:"fire-rtdb",[fb]:"fire-rtdb-compat",[db]:"fire-fn",[hb]:"fire-fn-compat",[pb]:"fire-iid",[mb]:"fire-iid-compat",[gb]:"fire-fcm",[vb]:"fire-fcm-compat",[yb]:"fire-perf",[_b]:"fire-perf-compat",[wb]:"fire-rc",[Sb]:"fire-rc-compat",[Eb]:"fire-gcs",[Cb]:"fire-gcs-compat",[kb]:"fire-fst",[bb]:"fire-fst-compat","fire-js":"fire-js",[xb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Map,fc=new Map;function Nb(e,t){try{e.container.addComponent(t)}catch(n){lr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function On(e){const t=e.name;if(fc.has(t))return lr.debug(`There were multiple attempts to register component ${t}.`),!1;fc.set(t,e);for(const n of oa.values())Nb(n,e);return!0}function Oo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kn=new $a("app","Firebase",Ab);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=Tb;function My(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:cc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=Iy()),!n)throw kn.create("no-options");const o=oa.get(i);if(o){if(ia(n,o.options)&&ia(r,o.config))return o;throw kn.create("duplicate-app",{appName:i})}const s=new zk(i);for(const l of fc.values())s.addComponent(l);const a=new Pb(n,r,s);return oa.set(i,a),a}function Fy(e=cc){const t=oa.get(e);if(!t&&e===cc&&Iy())return My();if(!t)throw kn.create("no-app",{appName:e});return t}function Ft(e,t,n){var r;let i=(r=Ib[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),lr.warn(a.join(" "));return}On(new Jt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="firebase-heartbeat-database",Db=1,wo="firebase-heartbeat-store";let Fl=null;function jy(){return Fl||(Fl=Jk(Rb,Db,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wo)}}}).catch(e=>{throw kn.create("idb-open",{originalErrorMessage:e.message})})),Fl}async function Lb(e){try{return await(await jy()).transaction(wo).objectStore(wo).get(zy(e))}catch(t){if(t instanceof gr)lr.warn(t.message);else{const n=kn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});lr.warn(n.message)}}}async function Cp(e,t){try{const r=(await jy()).transaction(wo,"readwrite");await r.objectStore(wo).put(t,zy(e)),await r.done}catch(n){if(n instanceof gr)lr.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function zy(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=1024,Fb=30*24*60*60*1e3;class jb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ub(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Fb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=kp(),{heartbeatsToSend:n,unsentEntries:r}=zb(this._heartbeatsCache.heartbeats),i=na(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kp(){return new Date().toISOString().substring(0,10)}function zb(e,t=Mb){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),bp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ub{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Py()?Oy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Lb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bp(e){return na(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(e){On(new Jt("platform-logger",t=>new tb(t),"PRIVATE")),On(new Jt("heartbeat",t=>new jb(t),"PRIVATE")),Ft(uc,Ep,e),Ft(uc,Ep,"esm2017"),Ft("fire-js","")}$b("");var Bb="firebase",Wb="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(Bb,Wb,"app");const Hb=(e,t)=>t.some(n=>e instanceof n);let xp,Tp;function Vb(){return xp||(xp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yb(){return Tp||(Tp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uy=new WeakMap,dc=new WeakMap,$y=new WeakMap,jl=new WeakMap,Wf=new WeakMap;function Gb(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(bn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Uy.set(n,e)}).catch(()=>{}),Wf.set(t,e),t}function Kb(e){if(dc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});dc.set(e,t)}let hc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return dc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$y.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Qb(e){hc=e(hc)}function qb(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(zl(this),t,...n);return $y.set(r,t.sort?t.sort():[t]),bn(r)}:Yb().includes(e)?function(...t){return e.apply(zl(this),t),bn(Uy.get(this))}:function(...t){return bn(e.apply(zl(this),t))}}function Xb(e){return typeof e=="function"?qb(e):(e instanceof IDBTransaction&&Kb(e),Hb(e,Vb())?new Proxy(e,hc):e)}function bn(e){if(e instanceof IDBRequest)return Gb(e);if(jl.has(e))return jl.get(e);const t=Xb(e);return t!==e&&(jl.set(e,t),Wf.set(t,e)),t}const zl=e=>Wf.get(e);function Jb(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=bn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(bn(s.result),l.oldVersion,l.newVersion,bn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Zb=["get","getKey","getAll","getAllKeys","count"],ex=["put","add","delete","clear"],Ul=new Map;function Ip(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ul.get(t))return Ul.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ex.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zb.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ul.set(t,o),o}Qb(e=>({...e,get:(t,n,r)=>Ip(t,n)||e.get(t,n,r),has:(t,n)=>!!Ip(t,n)||e.has(t,n)}));const By="@firebase/installations",Hf="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=1e4,Hy=`w:${Hf}`,Vy="FIS_v2",tx="https://firebaseinstallations.googleapis.com/v1",nx=60*60*1e3,rx="installations",ix="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ur=new $a(rx,ix,ox);function Yy(e){return e instanceof gr&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy({projectId:e}){return`${tx}/projects/${e}/installations`}function Ky(e){return{token:e.token,requestStatus:2,expiresIn:ax(e.expiresIn),creationTime:Date.now()}}async function Qy(e,t){const r=(await t.json()).error;return ur.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qy({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function sx(e,{refreshToken:t}){const n=qy(e);return n.append("Authorization",lx(t)),n}async function Xy(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ax(e){return Number(e.replace("s","000"))}function lx(e){return`${Vy} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Gy(e),i=qy(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Vy,appId:e.appId,sdkVersion:Hy},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Xy(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ky(u.authToken)}}else throw await Qy("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=/^[cdef][\w-]{21}$/,pc="";function dx(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=hx(e);return fx.test(n)?n:pc}catch{return pc}}function hx(e){return cx(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Map;function e_(e,t){const n=Wa(e);t_(n,t),px(n,t)}function t_(e,t){const n=Zy.get(e);if(n)for(const r of n)r(t)}function px(e,t){const n=mx();n&&n.postMessage({key:e,fid:t}),gx()}let Kn=null;function mx(){return!Kn&&"BroadcastChannel"in self&&(Kn=new BroadcastChannel("[Firebase] FID Change"),Kn.onmessage=e=>{t_(e.data.key,e.data.fid)}),Kn}function gx(){Zy.size===0&&Kn&&(Kn.close(),Kn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="firebase-installations-database",yx=1,cr="firebase-installations-store";let $l=null;function Vf(){return $l||($l=Jb(vx,yx,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cr)}}})),$l}async function sa(e,t){const n=Wa(e),i=(await Vf()).transaction(cr,"readwrite"),o=i.objectStore(cr),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&e_(e,t.fid),t}async function n_(e){const t=Wa(e),r=(await Vf()).transaction(cr,"readwrite");await r.objectStore(cr).delete(t),await r.done}async function Ha(e,t){const n=Wa(e),i=(await Vf()).transaction(cr,"readwrite"),o=i.objectStore(cr),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&e_(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(e){let t;const n=await Ha(e.appConfig,r=>{const i=_x(r),o=wx(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===pc?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function _x(e){const t=e||{fid:dx(),registrationStatus:0};return r_(t)}function wx(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ur.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Sx(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ex(e)}:{installationEntry:t}}async function Sx(e,t){try{const n=await ux(e,t);return sa(e.appConfig,n)}catch(n){throw Yy(n)&&n.customData.serverCode===409?await n_(e.appConfig):await sa(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ex(e){let t=await Np(e.appConfig);for(;t.registrationStatus===1;)await Jy(100),t=await Np(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Yf(e);return r||n}return t}function Np(e){return Ha(e,t=>{if(!t)throw ur.create("installation-not-found");return r_(t)})}function r_(e){return Cx(e)?{fid:e.fid,registrationStatus:0}:e}function Cx(e){return e.registrationStatus===1&&e.registrationTime+Wy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx({appConfig:e,heartbeatServiceProvider:t},n){const r=bx(e,n),i=sx(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Hy,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Xy(()=>fetch(r,a));if(l.ok){const u=await l.json();return Ky(u)}else throw await Qy("Generate Auth Token",l)}function bx(e,{fid:t}){return`${Gy(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(e,t=!1){let n;const r=await Ha(e.appConfig,o=>{if(!i_(o))throw ur.create("not-registered");const s=o.authToken;if(!t&&Ix(s))return o;if(s.requestStatus===1)return n=xx(e,t),o;{if(!navigator.onLine)throw ur.create("app-offline");const a=Ax(o);return n=Tx(e,a),a}});return n?await n:r.authToken}async function xx(e,t){let n=await Ap(e.appConfig);for(;n.authToken.requestStatus===1;)await Jy(100),n=await Ap(e.appConfig);const r=n.authToken;return r.requestStatus===0?Gf(e,t):r}function Ap(e){return Ha(e,t=>{if(!i_(t))throw ur.create("not-registered");const n=t.authToken;return Px(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Tx(e,t){try{const n=await kx(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await sa(e.appConfig,r),n}catch(n){if(Yy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await n_(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await sa(e.appConfig,r)}throw n}}function i_(e){return e!==void 0&&e.registrationStatus===2}function Ix(e){return e.requestStatus===2&&!Nx(e)}function Nx(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+nx}function Ax(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Px(e){return e.requestStatus===1&&e.requestTime+Wy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(e){const t=e,{installationEntry:n,registrationPromise:r}=await Yf(t);return r?r.catch(console.error):Gf(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(e,t=!1){const n=e;return await Dx(n),(await Gf(n,t)).token}async function Dx(e){const{registrationPromise:t}=await Yf(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(e){if(!e||!e.options)throw Bl("App Configuration");if(!e.name)throw Bl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Bl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Bl(e){return ur.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="installations",Mx="installations-internal",Fx=e=>{const t=e.getProvider("app").getImmediate(),n=Lx(t),r=Oo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jx=e=>{const t=e.getProvider("app").getImmediate(),n=Oo(t,o_).getImmediate();return{getId:()=>Ox(n),getToken:i=>Rx(n,i)}};function zx(){On(new Jt(o_,Fx,"PUBLIC")),On(new Jt(Mx,jx,"PRIVATE"))}zx();Ft(By,Hf);Ft(By,Hf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="analytics",Ux="firebase_id",$x="origin",Bx=60*1e3,Wx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Kf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new $f("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},it=new $a("analytics","Analytics",Hx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(e){if(!e.startsWith(Kf)){const t=it.create("invalid-gtag-resource",{gtagURL:e});return Ze.warn(t.message),""}return e}function s_(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Yx(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Gx(e,t){const n=Yx("firebase-js-sdk-policy",{createScriptURL:Vx}),r=document.createElement("script"),i=`${Kf}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Kx(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Qx(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await s_(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Ze.error(a)}e("config",i,o)}async function qx(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await s_(n);for(const l of s){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)o.push(c);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ze.error(o)}}function Xx(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await qx(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await Qx(e,t,n,r,a,l)}else if(o==="consent"){const[a]=s;e("consent","update",a)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){Ze.error(a)}}return i}function Jx(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Xx(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Zx(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Kf)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=30,tT=1e3;class nT{constructor(t={},n=tT){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const a_=new nT;function rT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function iT(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:rT(r)},o=Wx.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw it.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function oT(e,t=a_,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw it.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw it.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new lT;return setTimeout(async()=>{a.abort()},n!==void 0?n:Bx),l_({appId:r,apiKey:i,measurementId:o},s,a,t)}async function l_(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=a_){var o;const{appId:s,measurementId:a}=e;try{await sT(r,t)}catch(l){if(a)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await iT(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!aT(u)){if(i.deleteThrottleMetadata(s),a)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const c=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?yp(n,i.intervalMillis,eT):yp(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(s,f),Ze.debug(`Calling attemptFetch again in ${c} millis`),l_(e,f,r,i)}}function sT(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(it.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function aT(e){if(!(e instanceof gr)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class lT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function uT(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(){if(Py())try{await Oy()}catch(e){return Ze.warn(it.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ze.warn(it.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fT(e,t,n,r,i,o,s){var a;const l=oT(e);l.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Ze.error(h)),t.push(l);const u=cT().then(h=>{if(h)return r.getId()}),[c,f]=await Promise.all([l,u]);Zx(o)||Gx(o,c.measurementId),i("js",new Date);const d=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return d[$x]="firebase",d.update=!0,f!=null&&(d[Ux]=f),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(t){this.app=t}_delete(){return delete Hi[this.app.options.appId],Promise.resolve()}}let Hi={},Pp=[];const Op={};let Wl="dataLayer",hT="gtag",Rp,u_,Dp=!1;function pT(){const e=[];if(Sk()&&e.push("This is a browser extension environment."),Ck()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=it.create("invalid-analytics-context",{errorInfo:t});Ze.warn(n.message)}}function mT(e,t,n){pT();const r=e.options.appId;if(!r)throw it.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw it.create("no-api-key");if(Hi[r]!=null)throw it.create("already-exists",{id:r});if(!Dp){Kx(Wl);const{wrappedGtag:o,gtagCore:s}=Jx(Hi,Pp,Op,Wl,hT);u_=o,Rp=s,Dp=!0}return Hi[r]=fT(e,Pp,Op,t,Rp,Wl,n),new dT(e)}function gT(e=Fy()){e=Fn(e);const t=Oo(e,aa);return t.isInitialized()?t.getImmediate():vT(e)}function vT(e,t={}){const n=Oo(e,aa);if(n.isInitialized()){const i=n.getImmediate();if(ia(t,n.getOptions()))return i;throw it.create("already-initialized")}return n.initialize({options:t})}function yT(e,t,n,r){e=Fn(e),uT(u_,Hi[e.app.options.appId],t,n,r).catch(i=>Ze.error(i))}const Lp="@firebase/analytics",Mp="0.10.0";function _T(){On(new Jt(aa,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return mT(r,i,n)},"PUBLIC")),On(new Jt("analytics-internal",e,"PRIVATE")),Ft(Lp,Mp),Ft(Lp,Mp,"esm2017");function e(t){try{const n=t.getProvider(aa).getImmediate();return{logEvent:(r,i,o)=>yT(n,r,i,o)}}catch(n){throw it.create("interop-component-reg-failed",{reason:n})}}}_T();const Fp="@firebase/database",jp="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c_="";function wT(e){c_=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),De(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:_o(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return rn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ST(t)}}catch{}return new ET},Qn=f_("localStorage"),mc=f_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new $f("@firebase/database"),CT=function(){let e=1;return function(){return e++}}(),d_=function(e){const t=Pk(e),n=new Ak;n.update(t);const r=n.digest();return zf.encodeByteArray(r)},Ro=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Ro.apply(null,r):typeof r=="object"?t+=De(r):t+=r,t+=" "}return t};let er=null,zp=!0;const kT=function(e,t){N(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Vr.logLevel=ie.VERBOSE,er=Vr.log.bind(Vr),t&&mc.set("logging_enabled",!0)):typeof e=="function"?er=e:(er=null,mc.remove("logging_enabled"))},Ue=function(...e){if(zp===!0&&(zp=!1,er===null&&mc.get("logging_enabled")===!0&&kT(!0)),er){const t=Ro.apply(null,e);er(t)}},Do=function(e){return function(...t){Ue(e,...t)}},gc=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ro(...e);Vr.error(t)},Zt=function(...e){const t=`FIREBASE FATAL ERROR: ${Ro(...e)}`;throw Vr.error(t),new Error(t)},et=function(...e){const t="FIREBASE WARNING: "+Ro(...e);Vr.warn(t)},bT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},h_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},xT=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ri="[MIN_NAME]",fr="[MAX_NAME]",di=function(e,t){if(e===t)return 0;if(e===ri||t===fr)return-1;if(t===ri||e===fr)return 1;{const n=Up(e),r=Up(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},TT=function(e,t){return e===t?0:e<t?-1:1},ki=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+De(t))},Qf=function(e){if(typeof e!="object"||e===null)return De(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=De(t[r]),n+=":",n+=Qf(e[t[r]]);return n+="}",n},p_=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function vt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const m_=function(e){N(!h_(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,s,a,l;e===0?(o=0,s=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=a+r,s=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const c=u.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},IT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},AT=new RegExp("^-?(0*)\\d{1,10}$"),PT=-2147483648,OT=2147483647,Up=function(e){if(AT.test(e)){const t=Number(e);if(t>=PT&&t<=OT)return t}return null},hi=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw et("Exception was thrown by user callback.",n),t},Math.floor(0))}},RT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vi=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(t)}}class Yr{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Yr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="5",g_="v",v_="s",y_="r",__="f",w_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,S_="ls",E_="p",vc="ac",C_="websocket",k_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t,n,r,i,o=!1,s="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qn.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Qn.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function MT(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function x_(e,t,n){N(typeof t=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(t===C_)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===k_)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);MT(e)&&(n.ns=e.namespace);const i=[];return vt(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.counters_={}}incrementCounter(t,n=1){rn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return fk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl={},Vl={};function Xf(e){const t=e.toString();return Hl[t]||(Hl[t]=new FT),Hl[t]}function jT(e,t){const n=e.toString();return Vl[n]||(Vl[n]=t()),Vl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&hi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="start",UT="close",$T="pLPCommand",BT="pRTLPCB",T_="id",I_="pw",N_="ser",WT="cb",HT="seg",VT="ts",YT="d",GT="dframe",A_=1870,P_=30,KT=A_-P_,QT=25e3,qT=3e4;class Fr{constructor(t,n,r,i,o,s,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Do(t),this.stats_=Xf(n),this.urlFn=l=>(this.appCheckToken&&(l[vc]=this.appCheckToken),x_(n,k_,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zT(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qT)),xT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jf((...o)=>{const[s,a,l,u,c]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===$p)this.id=a,this.password=l;else if(s===UT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[$p]="t",r[N_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[WT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[g_]=qf,this.transportSessionId&&(r[v_]=this.transportSessionId),this.lastSessionId&&(r[S_]=this.lastSessionId),this.applicationId&&(r[E_]=this.applicationId),this.appCheckToken&&(r[vc]=this.appCheckToken),typeof location<"u"&&location.hostname&&w_.test(location.hostname)&&(r[y_]=__);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fr.forceAllow_=!0}static forceDisallow(){Fr.forceDisallow_=!0}static isAvailable(){return Fr.forceAllow_?!0:!Fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!IT()&&!NT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=De(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=by(n),i=p_(r,KT);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[GT]="t",r[T_]=t,r[I_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=De(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jf{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CT(),window[$T+this.uniqueCallbackIdentifier]=t,window[BT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jf.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){Ue("frame writing exception"),a.stack&&Ue(a.stack),Ue(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Ue("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[T_]=this.myID,t[I_]=this.myPW,t[N_]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+P_+r.length<=A_;){const s=this.pendingSegs.shift();r=r+"&"+HT+i+"="+s.seg+"&"+VT+i+"="+s.ts+"&"+YT+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(QT)),o=()=>{clearTimeout(i),r()};this.addTag(t,o)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ue("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=16384,JT=45e3;let la=null;typeof MozWebSocket<"u"?la=MozWebSocket:typeof WebSocket<"u"&&(la=WebSocket);class Et{constructor(t,n,r,i,o,s,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Do(this.connId),this.stats_=Xf(n),this.connURL=Et.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,o){const s={};return s[g_]=qf,typeof location<"u"&&location.hostname&&w_.test(location.hostname)&&(s[y_]=__),n&&(s[v_]=n),r&&(s[S_]=r),i&&(s[vc]=i),o&&(s[E_]=o),x_(t,C_,s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qn.set("previous_websocket_failure",!0);try{let r;Ay(),this.mySock=new la(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&la!==null&&!Et.forceDisallow_}static previouslyFailed(){return Qn.isInMemoryStorage||Qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qn.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=_o(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(N(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=De(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=p_(n,XT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JT))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Fr,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=Et&&Et.isAvailable();let r=n&&!Et.previouslyFailed();if(t.webSocketOnly&&(n||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Et];else{const i=this.transports_=[];for(const o of So.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);So.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}So.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=6e4,eI=5e3,tI=10*1024,nI=100*1024,Yl="t",Bp="d",rI="s",Wp="r",iI="e",Hp="o",Vp="a",Yp="n",Gp="p",oI="h";class sI{constructor(t,n,r,i,o,s,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Do("c:"+this.id+":"),this.transportManager_=new So(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Vi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Yl in t){const n=t[Yl];n===Vp?this.upgradeIfSecondaryHealthy_():n===Wp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ki("t",t),r=ki("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ki("t",t),r=ki("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ki(Yl,t);if(Bp in t){const r=t[Bp];if(n===oI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rI?this.onConnectionShutdown_(r):n===Wp?this.onReset_(r):n===iI?gc("Server Error: "+r):n===Hp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gc("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),qf!==r&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Vi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZT))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gp,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.allowedEvents_=t,this.listeners_={},N(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(t){N(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends R_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ny()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ua}getInitialEvent(t){return N(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=32,Qp=768;class de{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function ne(){return new de("")}function V(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Rn(e){return e.pieces_.length-e.pieceNum_}function le(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new de(e.pieces_,t)}function D_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function aI(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function L_(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function M_(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new de(t,0)}function ke(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof de)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new de(n,0)}function K(e){return e.pieceNum_>=e.pieces_.length}function ht(e,t){const n=V(e),r=V(t);if(n===null)return t;if(n===r)return ht(le(e),le(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function F_(e,t){if(Rn(e)!==Rn(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function kt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Rn(e)>Rn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class lI{constructor(t,n){this.errorPrefix_=n,this.parts_=L_(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ba(this.parts_[r]);j_(this)}}function uI(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ba(t),j_(e)}function cI(e){const t=e.parts_.pop();e.byteLength_-=Ba(t),e.parts_.length>0&&(e.byteLength_-=1)}function j_(e){if(e.byteLength_>Qp)throw new Error(e.errorPrefix_+"has a key path longer than "+Qp+" bytes ("+e.byteLength_+").");if(e.parts_.length>Kp)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kp+") or object contains a cycle "+Bn(e))}function Bn(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends R_{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zf}getInitialEvent(t){return N(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=1e3,fI=60*5*1e3,qp=30*1e3,dI=1.3,hI=3e4,pI="server_kill",Xp=3;class Ht extends O_{constructor(t,n,r,i,o,s,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ht.nextPersistentConnectionId_++,this.log_=Do("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bi,this.maxReconnectDelay_=fI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ay())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zf.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&ua.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,o={r:i,a:t,b:n};this.log_(De(o)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new Ua,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(t,n,r,i){this.initConnection_();const o=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),N(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";t.tag&&(o.q=n._queryObject,o.t=t.tag),o.h=t.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,u=a.s;Ht.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&rn(t,"w")){const r=ni(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||Ik(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qp)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=Tk(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===t&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const o={p:t},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+t,o),this.sendRequest(t,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+De(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):gc("Unrecognized action received from server: "+De(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hI&&(this.reconnectDelay_=bi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ht.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},u=function(f){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new sI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,h=>{et(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(pI)},o))}catch(f){this.log_("Failed to get token: "+f),s||(this.repoInfo_.nodeAdmin&&et(f),l())}}}interrupt(t){Ue("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Ue("Resuming connection for reason: "+t),delete this.interruptReasons_[t],gp(this.interruptReasons_)&&(this.reconnectDelay_=bi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(o=>Qf(o)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new de(t).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Ue("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xp&&(this.reconnectDelay_=qp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Ue("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+c_.replace(/\./g,"-")]=1,Ny()?t["framework.cordova"]=1:Ek()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=ua.getInstance().currentlyOnline();return gp(this.interruptReasons_)&&t}}Ht.nextPersistentConnectionId_=0;Ht.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new q(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new q(ri,t),i=new q(ri,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;class z_ extends Va{static get __EMPTY_NODE(){return fs}static set __EMPTY_NODE(t){fs=t}compare(t,n){return di(t.name,n.name)}isDefinedOn(t){throw fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return q.MIN}maxPost(){return new q(fr,fs)}makePost(t,n){return N(typeof t=="string","KeyIndex indexValue must always be a string."),new q(t,fs)}toString(){return".key"}}const Gr=new z_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(t=t,s=n?r(t.key,n):1,i&&(s*=-1),s<0)this.isReverse_?t=t.left:t=t.right;else if(s===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ae{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??Ae.RED,this.left=i??Qe.EMPTY_NODE,this.right=o??Qe.EMPTY_NODE}copy(t,n,r,i,o){return new Ae(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ae.RED=!0;Ae.BLACK=!1;class mI{copy(t,n,r,i,o){return this}insert(t,n,r){return new Ae(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(t,n=Qe.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Qe(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ae.BLACK,null,null))}remove(t){return new Qe(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ae.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ds(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new ds(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new ds(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new ds(this.root_,null,this.comparator_,!0,t)}}Qe.EMPTY_NODE=new mI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(e,t){return di(e.name,t.name)}function ed(e,t){return di(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;function vI(e){yc=e}const U_=function(e){return typeof e=="number"?"number:"+m_(e):"string:"+e},$_=function(e){if(e.isLeafNode()){const t=e.val();N(typeof t=="string"||typeof t=="number"||typeof t=="object"&&rn(t,".sv"),"Priority must be a string or number.")}else N(e===yc||e.isEmpty(),"priority of unexpected type.");N(e===yc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jp;class Ie{constructor(t,n=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$_(this.priorityNode_)}static set __childrenNodeConstructor(t){Jp=t}static get __childrenNodeConstructor(){return Jp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ie(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return K(t)?this:V(t)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=V(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||Rn(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+U_(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=m_(this.value_):t+=this.value_,this.lazyHash_=d_(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ie.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ie.__childrenNodeConstructor?-1:(N(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Ie.VALUE_TYPE_ORDER.indexOf(n),o=Ie.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B_,W_;function yI(e){B_=e}function _I(e){W_=e}class wI extends Va{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?di(t.name,n.name):o}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(fr,new Ie("[PRIORITY-POST]",W_))}makePost(t,n){const r=B_(t);return new q(n,new Ie("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new wI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=Math.log(2);class EI{constructor(t){const n=o=>parseInt(Math.log(o)/SI,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const ca=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let f,d;if(c===0)return null;if(c===1)return f=e[l],d=n?n(f):f,new Ae(d,f.node,Ae.BLACK,null,null);{const h=parseInt(c/2,10)+l,m=i(l,h),y=i(h+1,u);return f=e[h],d=n?n(f):f,new Ae(d,f.node,Ae.BLACK,m,y)}},o=function(l){let u=null,c=null,f=e.length;const d=function(m,y){const _=f-m,g=f;f-=m;const p=i(_+1,g),v=e[_],w=n?n(v):v;h(new Ae(w,v.node,y,null,p))},h=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),_=Math.pow(2,l.count-(m+1));y?d(_,Ae.BLACK):(d(_,Ae.BLACK),d(_,Ae.RED))}return c},s=new EI(e.length),a=o(s);return new Qe(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl;const Sr={};class Bt{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return N(Sr&&$e,"ChildrenNode.ts has not been loaded"),Gl=Gl||new Bt({".priority":Sr},{".priority":$e}),Gl}get(t){const n=ni(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Qe?n:null}hasIndex(t){return rn(this.indexSet_,t.toString())}addIndex(t,n){N(t!==Gr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(q.Wrap);let s=o.getNext();for(;s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=ca(r,t.getCompare()):a=Sr;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Bt(c,u)}addToIndexes(t,n){const r=ra(this.indexes_,(i,o)=>{const s=ni(this.indexSet_,o);if(N(s,"Missing index implementation for "+o),i===Sr)if(s.isDefinedOn(t.node)){const a=[],l=n.getIterator(q.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),ca(a,s.getCompare())}else return Sr;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new q(t.name,a))),l.insert(t,t.node)}});return new Bt(r,this.indexSet_)}removeFromIndexes(t,n){const r=ra(this.indexes_,i=>{if(i===Sr)return i;{const o=n.get(t.name);return o?i.remove(new q(t.name,o)):i}});return new Bt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;class J{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&$_(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xi||(xi=new J(new Qe(ed),null,Bt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xi}updatePriority(t){return this.children_.isEmpty()?this:new J(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?xi:n}}getChild(t){const n=V(t);return n===null?this:this.getImmediateChild(n).getChild(le(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(N(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new q(t,n);let i,o;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?xi:this.priorityNode_;return new J(i,s,o)}}updateChild(t,n){const r=V(t);if(r===null)return n;{N(V(t)!==".priority"||Rn(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild($e,(s,a)=>{n[s]=a.val(t),r++,o&&J.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!t&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+U_(this.getPriority().val())+":"),this.forEachChild($e,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":d_(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new q(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new q(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new q(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,q.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,q.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Lo?-1:0}withIndex(t){if(t===Gr||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Gr||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($e),i=n.getIterator($e);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(t){return t===Gr?null:this.indexMap_.get(t.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CI extends J{constructor(){super(new Qe(ed),J.EMPTY_NODE,Bt.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return J.EMPTY_NODE}isEmpty(){return!1}}const Lo=new CI;Object.defineProperties(q,{MIN:{value:new q(ri,J.EMPTY_NODE)},MAX:{value:new q(fr,Lo)}});z_.__EMPTY_NODE=J.EMPTY_NODE;Ie.__childrenNodeConstructor=J;vI(Lo);_I(Lo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=!0;function Re(e,t=null){if(e===null)return J.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),N(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ie(n,Re(t))}if(!(e instanceof Array)&&kI){const n=[];let r=!1;if(vt(e,(s,a)=>{if(s.substring(0,1)!=="."){const l=Re(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new q(s,l)))}}),n.length===0)return J.EMPTY_NODE;const o=ca(n,gI,s=>s.name,ed);if(r){const s=ca(n,$e.getCompare());return new J(o,Re(t),new Bt({".priority":s},{".priority":$e}))}else return new J(o,Re(t),Bt.Default)}else{let n=J.EMPTY_NODE;return vt(e,(r,i)=>{if(rn(e,r)&&r.substring(0,1)!=="."){const o=Re(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(Re(t))}}yI(Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI extends Va{constructor(t){super(),this.indexPath_=t,N(!K(t)&&V(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?di(t.name,n.name):o}makePost(t,n){const r=Re(t),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const t=J.EMPTY_NODE.updateChild(this.indexPath_,Lo);return new q(fr,t)}toString(){return L_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI extends Va{compare(t,n){const r=t.node.compareTo(n.node);return r===0?di(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(t,n){const r=Re(t);return new q(n,r)}toString(){return".value"}}const TI=new xI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(e){return{type:"value",snapshotNode:e}}function NI(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function AI(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Zp(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function PI(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ri}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const t=new td;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function em(e){const t={};if(e.isDefault())return t;let n;if(e.index_===$e?n="$priority":e.index_===TI?n="$value":e.index_===Gr?n="$key":(N(e.index_ instanceof bI,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=De(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=De(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+De(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=De(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+De(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function tm(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==$e&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends O_{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Do("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(N(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const o=t._path.toString();this.log_("Listen called for "+o+" "+t._queryIdentifier);const s=fa.getListenId_(t,r),a={};this.listens_[s]=a;const l=em(t._queryParams);this.restRequest_(o+".json",l,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(o,f,!1,r),ni(this.listens_,s)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(t,n){const r=fa.getListenId_(t,n);delete this.listens_[r]}get(t){const n=em(t._queryParams),r=t._path.toString(),i=new Ua;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Nk(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=_o(a.responseText)}catch{et("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&et("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(){return{value:null,children:new Map}}function H_(e,t,n){if(K(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=V(t);e.children.has(r)||e.children.set(r,da());const i=e.children.get(r);t=le(t),H_(i,t,n)}}function _c(e,t,n){e.value!==null?n(t,e.value):RI(e,(r,i)=>{const o=new de(t.toString()+"/"+r);_c(i,o,n)})}function RI(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&vt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=10*1e3,LI=30*1e3,MI=5*60*1e3;class FI{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new DI(t);const r=nm+(LI-nm)*Math.random();Vi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;vt(t,(i,o)=>{o>0&&rn(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),Vi(this.reportStats_.bind(this),Math.floor(Math.random()*2*MI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function V_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Y_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function G_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Dt.ACK_USER_WRITE,this.source=V_()}operationForChild(t){if(K(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(t));return new ha(ne(),n,this.revert)}}else return N(V(this.path)===t,"operationForChild called for unrelated child."),new ha(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=Dt.OVERWRITE}operationForChild(t){return K(this.path)?new dr(this.source,ne(),this.snap.getImmediateChild(t)):new dr(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=Dt.MERGE}operationForChild(t){if(K(this.path)){const n=this.children.subtree(new de(t));return n.isEmpty()?null:n.value?new dr(this.source,ne(),n.value):new Eo(this.source,ne(),n)}else return N(V(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Eo(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(K(t))return this.isFullyInitialized()&&!this.filtered_;const n=V(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function jI(e,t,n,r){const i=[],o=[];return t.forEach(s=>{s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(PI(s.childName,s.snapshotNode))}),Ti(e,i,"child_removed",t,r,n),Ti(e,i,"child_added",t,r,n),Ti(e,i,"child_moved",o,r,n),Ti(e,i,"child_changed",t,r,n),Ti(e,i,"value",t,r,n),i}function Ti(e,t,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>UI(e,a,l)),s.forEach(a=>{const l=zI(e,a,o);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function zI(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function UI(e,t,n){if(t.childName==null||n.childName==null)throw fi("Should only compare child_ events.");const r=new q(t.childName,t.snapshotNode),i=new q(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(e,t){return{eventCache:e,serverCache:t}}function Yi(e,t,n,r){return K_(new nd(t,n,r),e.serverCache)}function Q_(e,t,n,r){return K_(e.eventCache,new nd(t,n,r))}function wc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function hr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl;const $I=()=>(Kl||(Kl=new Qe(TT)),Kl);class ae{constructor(t,n=$I()){this.value=t,this.children=n}static fromObject(t){let n=new ae(null);return vt(t,(r,i)=>{n=n.set(new de(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(K(t))return null;{const r=V(t),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(le(t),n);return o!=null?{path:ke(new de(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(K(t))return this;{const n=V(t),r=this.children.get(n);return r!==null?r.subtree(le(t)):new ae(null)}}set(t,n){if(K(t))return new ae(n,this.children);{const r=V(t),o=(this.children.get(r)||new ae(null)).set(le(t),n),s=this.children.insert(r,o);return new ae(this.value,s)}}remove(t){if(K(t))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=V(t),r=this.children.get(n);if(r){const i=r.remove(le(t));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new ae(null):new ae(this.value,o)}else return this}}get(t){if(K(t))return this.value;{const n=V(t),r=this.children.get(n);return r?r.get(le(t)):null}}setTree(t,n){if(K(t))return n;{const r=V(t),o=(this.children.get(r)||new ae(null)).setTree(le(t),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new ae(this.value,s)}}fold(t){return this.fold_(ne(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(ke(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,ne(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(t))return null;{const o=V(t),s=this.children.get(o);return s?s.findOnPath_(le(t),ke(n,o),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,ne(),n)}foreachOnPath_(t,n,r){if(K(t))return this;{this.value&&r(n,this.value);const i=V(t),o=this.children.get(i);return o?o.foreachOnPath_(le(t),ke(n,i),r):new ae(null)}}foreach(t){this.foreach_(ne(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ke(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.writeTree_=t}static empty(){return new Tt(new ae(null))}}function Gi(e,t,n){if(K(t))return new Tt(new ae(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let o=r.value;const s=ht(i,t);return o=o.updateChild(s,n),new Tt(e.writeTree_.set(i,o))}else{const i=new ae(n),o=e.writeTree_.setTree(t,i);return new Tt(o)}}}function rm(e,t,n){let r=e;return vt(n,(i,o)=>{r=Gi(r,ke(t,i),o)}),r}function im(e,t){if(K(t))return Tt.empty();{const n=e.writeTree_.setTree(t,new ae(null));return new Tt(n)}}function Sc(e,t){return vr(e,t)!=null}function vr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(ht(n.path,t)):null}function om(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(r,i)=>{t.push(new q(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new q(r,i.value))}),t}function xn(e,t){if(K(t))return e;{const n=vr(e,t);return n!=null?new Tt(new ae(n)):new Tt(e.writeTree_.subtree(t))}}function Ec(e){return e.writeTree_.isEmpty()}function ii(e,t){return q_(ne(),e.writeTree_,t)}function q_(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,o)=>{i===".priority"?(N(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=q_(ke(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(ke(e,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(e,t){return n0(t,e)}function BI(e,t,n,r,i){N(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Gi(e.visibleWrites,t,n)),e.lastWriteId=r}function WI(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function HI(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);N(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,s=e.allWrites.length-1;for(;i&&s>=0;){const a=e.allWrites[s];a.visible&&(s>=n&&VI(a,r.path)?i=!1:kt(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return YI(e),!0;if(r.snap)e.visibleWrites=im(e.visibleWrites,r.path);else{const a=r.children;vt(a,l=>{e.visibleWrites=im(e.visibleWrites,ke(r.path,l))})}return!0}else return!1}function VI(e,t){if(e.snap)return kt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&kt(ke(e.path,n),t))return!0;return!1}function YI(e){e.visibleWrites=J_(e.allWrites,GI,ne()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function GI(e){return e.visible}function J_(e,t,n){let r=Tt.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const s=o.path;let a;if(o.snap)kt(n,s)?(a=ht(n,s),r=Gi(r,a,o.snap)):kt(s,n)&&(a=ht(s,n),r=Gi(r,ne(),o.snap.getChild(a)));else if(o.children){if(kt(n,s))a=ht(n,s),r=rm(r,a,o.children);else if(kt(s,n))if(a=ht(s,n),K(a))r=rm(r,ne(),o.children);else{const l=ni(o.children,V(a));if(l){const u=l.getChild(le(a));r=Gi(r,ne(),u)}}}else throw fi("WriteRecord should have .snap or .children")}}return r}function Z_(e,t,n,r,i){if(!r&&!i){const o=vr(e.visibleWrites,t);if(o!=null)return o;{const s=xn(e.visibleWrites,t);if(Ec(s))return n;if(n==null&&!Sc(s,ne()))return null;{const a=n||J.EMPTY_NODE;return ii(s,a)}}}else{const o=xn(e.visibleWrites,t);if(!i&&Ec(o))return n;if(!i&&n==null&&!Sc(o,ne()))return null;{const s=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(kt(u.path,t)||kt(t,u.path))},a=J_(e.allWrites,s,t),l=n||J.EMPTY_NODE;return ii(a,l)}}}function KI(e,t,n){let r=J.EMPTY_NODE;const i=vr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild($e,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=xn(e.visibleWrites,t);return n.forEachChild($e,(s,a)=>{const l=ii(xn(o,new de(s)),a);r=r.updateImmediateChild(s,l)}),om(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=xn(e.visibleWrites,t);return om(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function QI(e,t,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=ke(t,n);if(Sc(e.visibleWrites,o))return null;{const s=xn(e.visibleWrites,o);return Ec(s)?i.getChild(n):ii(s,i.getChild(n))}}function qI(e,t,n,r){const i=ke(t,n),o=vr(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=xn(e.visibleWrites,i);return ii(s,r.getNode().getImmediateChild(n))}else return null}function XI(e,t){return vr(e.visibleWrites,t)}function JI(e,t,n,r,i,o,s){let a;const l=xn(e.visibleWrites,t),u=vr(l,ne());if(u!=null)a=u;else if(n!=null)a=ii(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const c=[],f=s.getCompare(),d=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let h=d.getNext();for(;h&&c.length<i;)f(h,r)!==0&&c.push(h),h=d.getNext();return c}else return[]}function ZI(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function Cc(e,t,n,r){return Z_(e.writeTree,e.treePath,t,n,r)}function e0(e,t){return KI(e.writeTree,e.treePath,t)}function sm(e,t,n,r){return QI(e.writeTree,e.treePath,t,n,r)}function pa(e,t){return XI(e.writeTree,ke(e.treePath,t))}function e2(e,t,n,r,i,o){return JI(e.writeTree,e.treePath,t,n,r,i,o)}function rd(e,t,n){return qI(e.writeTree,e.treePath,t,n)}function t0(e,t){return n0(ke(e.treePath,t),e.writeTree)}function n0(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,Zp(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,AI(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,NI(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,Zp(r,t.snapshotNode,i.oldSnap));else throw fi("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const r0=new n2;class id{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new nd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rd(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hr(this.viewCache_),o=e2(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]}}function r2(e,t){N(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),N(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function i2(e,t,n,r,i){const o=new t2;let s,a;if(n.type===Dt.OVERWRITE){const u=n;u.source.fromUser?s=kc(e,t,u.path,u.snap,r,i,o):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!K(u.path),s=ma(e,t,u.path,u.snap,r,i,a,o))}else if(n.type===Dt.MERGE){const u=n;u.source.fromUser?s=s2(e,t,u.path,u.children,r,i,o):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),s=bc(e,t,u.path,u.children,r,i,a,o))}else if(n.type===Dt.ACK_USER_WRITE){const u=n;u.revert?s=u2(e,t,u.path,r,i,o):s=a2(e,t,u.path,u.affectedTree,r,i,o)}else if(n.type===Dt.LISTEN_COMPLETE)s=l2(e,t,n.path,r,o);else throw fi("Unknown operation type: "+n.type);const l=o.getChanges();return o2(t,s,l),{viewCache:s,changes:l}}function o2(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=wc(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(II(wc(t)))}}function i0(e,t,n,r,i,o){const s=t.eventCache;if(pa(r,n)!=null)return t;{let a,l;if(K(n))if(N(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=hr(t),c=u instanceof J?u:J.EMPTY_NODE,f=e0(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),f,o)}else{const u=Cc(r,hr(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,o)}else{const u=V(n);if(u===".priority"){N(Rn(n)===1,"Can't have a priority with additional path components");const c=s.getNode();l=t.serverCache.getNode();const f=sm(r,n,c,l);f!=null?a=e.filter.updatePriority(c,f):a=s.getNode()}else{const c=le(n);let f;if(s.isCompleteForChild(u)){l=t.serverCache.getNode();const d=sm(r,n,s.getNode(),l);d!=null?f=s.getNode().getImmediateChild(u).updateChild(c,d):f=s.getNode().getImmediateChild(u)}else f=rd(r,u,t.serverCache);f!=null?a=e.filter.updateChild(s.getNode(),u,f,c,i,o):a=s.getNode()}}return Yi(t,a,s.isFullyInitialized()||K(n),e.filter.filtersNodes())}}function ma(e,t,n,r,i,o,s,a){const l=t.serverCache;let u;const c=s?e.filter:e.filter.getIndexedFilter();if(K(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),h,null)}else{const h=V(n);if(!l.isCompleteForPath(n)&&Rn(n)>1)return t;const m=le(n),_=l.getNode().getImmediateChild(h).updateChild(m,r);h===".priority"?u=c.updatePriority(l.getNode(),_):u=c.updateChild(l.getNode(),h,_,m,r0,null)}const f=Q_(t,u,l.isFullyInitialized()||K(n),c.filtersNodes()),d=new id(i,f,o);return i0(e,f,n,i,d,a)}function kc(e,t,n,r,i,o,s){const a=t.eventCache;let l,u;const c=new id(i,t,o);if(K(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=Yi(t,u,!0,e.filter.filtersNodes());else{const f=V(n);if(f===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=Yi(t,u,a.isFullyInitialized(),a.isFiltered());else{const d=le(n),h=a.getNode().getImmediateChild(f);let m;if(K(d))m=r;else{const y=c.getCompleteChild(f);y!=null?D_(d)===".priority"&&y.getChild(M_(d)).isEmpty()?m=y:m=y.updateChild(d,r):m=J.EMPTY_NODE}if(h.equals(m))l=t;else{const y=e.filter.updateChild(a.getNode(),f,m,d,c,s);l=Yi(t,y,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function am(e,t){return e.eventCache.isCompleteForChild(t)}function s2(e,t,n,r,i,o,s){let a=t;return r.foreach((l,u)=>{const c=ke(n,l);am(t,V(c))&&(a=kc(e,a,c,u,i,o,s))}),r.foreach((l,u)=>{const c=ke(n,l);am(t,V(c))||(a=kc(e,a,c,u,i,o,s))}),a}function lm(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function bc(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;K(n)?u=r:u=new ae(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((f,d)=>{if(c.hasChild(f)){const h=t.serverCache.getNode().getImmediateChild(f),m=lm(e,h,d);l=ma(e,l,new de(f),m,i,o,s,a)}}),u.children.inorderTraversal((f,d)=>{const h=!t.serverCache.isCompleteForChild(f)&&d.value===null;if(!c.hasChild(f)&&!h){const m=t.serverCache.getNode().getImmediateChild(f),y=lm(e,m,d);l=ma(e,l,new de(f),y,i,o,s,a)}}),l}function a2(e,t,n,r,i,o,s){if(pa(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ma(e,t,n,l.getNode().getChild(n),i,o,a,s);if(K(n)){let u=new ae(null);return l.getNode().forEachChild(Gr,(c,f)=>{u=u.set(new de(c),f)}),bc(e,t,n,u,i,o,a,s)}else return t}else{let u=new ae(null);return r.foreach((c,f)=>{const d=ke(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),bc(e,t,n,u,i,o,a,s)}}function l2(e,t,n,r,i){const o=t.serverCache,s=Q_(t,o.getNode(),o.isFullyInitialized()||K(n),o.isFiltered());return i0(e,s,n,r,r0,i)}function u2(e,t,n,r,i,o){let s;if(pa(r,n)!=null)return t;{const a=new id(r,t,i),l=t.eventCache.getNode();let u;if(K(n)||V(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=Cc(r,hr(t));else{const f=t.serverCache.getNode();N(f instanceof J,"serverChildren would be complete if leaf node"),c=e0(r,f)}c=c,u=e.filter.updateFullNode(l,c,o)}else{const c=V(n);let f=rd(r,c,t.serverCache);f==null&&t.serverCache.isCompleteForChild(c)&&(f=l.getImmediateChild(c)),f!=null?u=e.filter.updateChild(l,c,f,le(n),a,o):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,J.EMPTY_NODE,le(n),a,o):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Cc(r,hr(t)),s.isLeafNode()&&(u=e.filter.updateFullNode(u,s,o)))}return s=t.serverCache.isFullyInitialized()||pa(r,ne())!=null,Yi(t,u,s,e.filter.filtersNodes())}}function c2(e,t){const n=hr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!K(t)&&!n.getImmediateChild(V(t)).isEmpty())?n.getChild(t):null}function um(e,t,n,r){t.type===Dt.MERGE&&t.source.queryId!==null&&(N(hr(e.viewCache_),"We should always have a full cache before handling merges"),N(wc(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=i2(e.processor_,i,t,n,r);return r2(e.processor_,o.viewCache),N(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,f2(e,o.changes,o.viewCache.eventCache.getNode(),null)}function f2(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return jI(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cm;function d2(e){N(!cm,"__referenceConstructor has already been defined"),cm=e}function od(e,t,n,r){const i=t.source.queryId;if(i!==null){const o=e.views.get(i);return N(o!=null,"SyncTree gave us an op for an invalid query."),um(o,t,n,r)}else{let o=[];for(const s of e.views.values())o=o.concat(um(s,t,n,r));return o}}function sd(e,t){let n=null;for(const r of e.views.values())n=n||c2(r,t);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fm;function h2(e){N(!fm,"__referenceConstructor has already been defined"),fm=e}class dm{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ae(null),this.pendingWriteTree_=ZI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function o0(e,t,n,r,i){return BI(e.pendingWriteTree_,t,n,r,i),i?Ga(e,new dr(V_(),t,n)):[]}function qn(e,t,n=!1){const r=WI(e.pendingWriteTree_,t);if(HI(e.pendingWriteTree_,t)){let o=new ae(null);return r.snap!=null?o=o.set(ne(),!0):vt(r.children,s=>{o=o.set(new de(s),!0)}),Ga(e,new ha(r.path,o,n))}else return[]}function Ya(e,t,n){return Ga(e,new dr(Y_(),t,n))}function p2(e,t,n){const r=ae.fromObject(n);return Ga(e,new Eo(Y_(),t,r))}function m2(e,t,n,r){const i=l0(e,r);if(i!=null){const o=u0(i),s=o.path,a=o.queryId,l=ht(s,t),u=new dr(G_(a),l,n);return c0(e,s,u)}else return[]}function g2(e,t,n,r){const i=l0(e,r);if(i){const o=u0(i),s=o.path,a=o.queryId,l=ht(s,t),u=ae.fromObject(n),c=new Eo(G_(a),l,u);return c0(e,s,c)}else return[]}function ad(e,t,n){const i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(s,a)=>{const l=ht(s,t),u=sd(a,l);if(u)return u});return Z_(i,t,o,n,!0)}function Ga(e,t){return s0(t,e.syncPointTree_,null,X_(e.pendingWriteTree_,ne()))}function s0(e,t,n,r){if(K(e.path))return a0(e,t,n,r);{const i=t.get(ne());n==null&&i!=null&&(n=sd(i,ne()));let o=[];const s=V(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const u=n?n.getImmediateChild(s):null,c=t0(r,s);o=o.concat(s0(a,l,u,c))}return i&&(o=o.concat(od(i,e,r,n))),o}}function a0(e,t,n,r){const i=t.get(ne());n==null&&i!=null&&(n=sd(i,ne()));let o=[];return t.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,u=t0(r,s),c=e.operationForChild(s);c&&(o=o.concat(a0(c,a,l,u)))}),i&&(o=o.concat(od(i,e,r,n))),o}function l0(e,t){return e.tagToQueryMap.get(t)}function u0(e){const t=e.indexOf("$");return N(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new de(e.substr(0,t))}}function c0(e,t,n){const r=e.syncPointTree_.get(t);N(r,"Missing sync point for query tag that we're tracking");const i=X_(e.pendingWriteTree_,t);return od(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new ld(n)}node(){return this.node_}}class ud{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=ke(this.path_,t);return new ud(this.syncTree_,n)}node(){return ad(this.syncTree_,this.path_)}}const v2=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},hm=function(e,t,n){if(!e||typeof e!="object")return e;if(N(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return y2(e[".sv"],t,n);if(typeof e[".sv"]=="object")return _2(e[".sv"],t);N(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},y2=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+e)}},_2=function(e,t,n){e.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=t.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},w2=function(e,t,n,r){return cd(t,new ud(n,e),r)},f0=function(e,t,n){return cd(e,new ld(t),n)};function cd(e,t,n){const r=e.getPriority().val(),i=hm(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const s=e,a=hm(s.getValue(),t,n);return a!==s.getValue()||i!==s.getPriority().val()?new Ie(a,Re(i)):e}else{const s=e;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new Ie(i))),s.forEachChild($e,(a,l)=>{const u=cd(l,t.getImmediateChild(a),n);u!==l&&(o=o.updateImmediateChild(a,u))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function dd(e,t){let n=t instanceof de?t:new de(t),r=e,i=V(n);for(;i!==null;){const o=ni(r.node.children,i)||{children:{},childCount:0};r=new fd(i,r,o),n=le(n),i=V(n)}return r}function pi(e){return e.node.value}function d0(e,t){e.node.value=t,xc(e)}function h0(e){return e.node.childCount>0}function S2(e){return pi(e)===void 0&&!h0(e)}function Ka(e,t){vt(e.node.children,(n,r)=>{t(new fd(n,e,r))})}function p0(e,t,n,r){n&&!r&&t(e),Ka(e,i=>{p0(i,t,!0,r)}),n&&r&&t(e)}function E2(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Mo(e){return new de(e.parent===null?e.name:Mo(e.parent)+"/"+e.name)}function xc(e){e.parent!==null&&C2(e.parent,e.name,e)}function C2(e,t,n){const r=S2(n),i=rn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,xc(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,xc(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=/[\[\].#$\/\u0000-\u001F\u007F]/,b2=/[\[\].#$\u0000-\u001F\u007F]/,Ql=10*1024*1024,m0=function(e){return typeof e=="string"&&e.length!==0&&!k2.test(e)},g0=function(e){return typeof e=="string"&&e.length!==0&&!b2.test(e)},x2=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),g0(e)},v0=function(e,t,n,r){r&&t===void 0||hd(Uf(e,"value"),t,n)},hd=function(e,t,n){const r=n instanceof de?new lI(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Bn(r));if(typeof t=="function")throw new Error(e+"contains a function "+Bn(r)+" with contents = "+t.toString());if(h_(t))throw new Error(e+"contains "+t.toString()+" "+Bn(r));if(typeof t=="string"&&t.length>Ql/3&&Ba(t)>Ql)throw new Error(e+"contains a string greater than "+Ql+" utf8 bytes "+Bn(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,o=!1;if(vt(t,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!m0(s)))throw new Error(e+" contains an invalid key ("+s+") "+Bn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uI(r,s),hd(e,a,r),cI(r)}),i&&o)throw new Error(e+' contains ".value" child '+Bn(r)+" in addition to actual children.")}},y0=function(e,t,n,r){if(!(r&&n===void 0)&&!g0(n))throw new Error(Uf(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},T2=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),y0(e,t,n,r)},_0=function(e,t){if(V(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},I2=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!m0(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!x2(n))throw new Error(Uf(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function w0(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();n!==null&&!F_(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function en(e,t,n){w0(e,n),A2(e,r=>kt(r,t)||kt(t,r))}function A2(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(P2(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function P2(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();er&&Ue("event: "+n.toString()),hi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="repo_interrupt",R2=25;class D2{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new N2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=da(),this.transactionQueueTree_=new fd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function L2(e,t,n){if(e.stats_=Xf(e.repoInfo_),e.forceRestClient_||RT())e.server_=new fa(e.repoInfo_,(r,i,o,s)=>{pm(e,r,i,o,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>mm(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Ht(e.repoInfo_,t,(r,i,o,s)=>{pm(e,r,i,o,s)},r=>{mm(e,r)},r=>{M2(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=jT(e.repoInfo_,()=>new FI(e.stats_,e.server_)),e.infoData_=new OI,e.infoSyncTree_=new dm({startListening:(r,i,o,s)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Ya(e.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),md(e,"connected",!1),e.serverSyncTree_=new dm({startListening:(r,i,o,s)=>(e.server_.listen(r,o,i,(a,l)=>{const u=s(a,l);en(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function S0(e){const n=e.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pd(e){return v2({timestamp:S0(e)})}function pm(e,t,n,r,i){e.dataUpdateCount++;const o=new de(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(i)if(r){const l=ra(n,u=>Re(u));s=g2(e.serverSyncTree_,o,l,i)}else{const l=Re(n);s=m2(e.serverSyncTree_,o,l,i)}else if(r){const l=ra(n,u=>Re(u));s=p2(e.serverSyncTree_,o,l)}else{const l=Re(n);s=Ya(e.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=Qa(e,o)),en(e.eventQueue_,a,s)}function mm(e,t){md(e,"connected",t),t===!1&&j2(e)}function M2(e,t){vt(t,(n,r)=>{md(e,n,r)})}function md(e,t,n){const r=new de("/.info/"+t),i=Re(n);e.infoData_.updateSnapshot(r,i);const o=Ya(e.infoSyncTree_,r,i);en(e.eventQueue_,r,o)}function E0(e){return e.nextWriteId_++}function F2(e,t,n,r,i){gd(e,"set",{path:t.toString(),value:n,priority:r});const o=pd(e),s=Re(n,r),a=ad(e.serverSyncTree_,t),l=f0(s,a,o),u=E0(e),c=o0(e.serverSyncTree_,t,l,u,!0);w0(e.eventQueue_,c),e.server_.put(t.toString(),s.val(!0),(d,h)=>{const m=d==="ok";m||et("set at "+t+" failed: "+d);const y=qn(e.serverSyncTree_,u,!m);en(e.eventQueue_,t,y),U2(e,i,d,h)});const f=T0(e,t);Qa(e,f),en(e.eventQueue_,f,[])}function j2(e){gd(e,"onDisconnectEvents");const t=pd(e),n=da();_c(e.onDisconnect_,ne(),(i,o)=>{const s=w2(i,o,e.serverSyncTree_,t);H_(n,i,s)});let r=[];_c(n,ne(),(i,o)=>{r=r.concat(Ya(e.serverSyncTree_,i,o));const s=T0(e,i);Qa(e,s)}),e.onDisconnect_=da(),en(e.eventQueue_,ne(),r)}function z2(e){e.persistentConnection_&&e.persistentConnection_.interrupt(O2)}function gd(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ue(n,...t)}function U2(e,t,n,r){t&&hi(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,t(s)}})}function C0(e,t,n){return ad(e.serverSyncTree_,t,n)||J.EMPTY_NODE}function vd(e,t=e.transactionQueueTree_){if(t||qa(e,t),pi(t)){const n=b0(e,t);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$2(e,Mo(t),n)}else h0(t)&&Ka(t,n=>{vd(e,n)})}function $2(e,t,n){const r=n.map(u=>u.currentWriteId),i=C0(e,t,r);let o=i;const s=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=ht(t,c.path);o=o.updateChild(f,c.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,u=>{gd(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(qn(e.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();qa(e,dd(e.transactionQueueTree_,t)),vd(e,e.transactionQueueTree_),en(e.eventQueue_,t,c);for(let d=0;d<f.length;d++)hi(f[d])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{et("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Qa(e,t)}},s)}function Qa(e,t){const n=k0(e,t),r=Mo(n),i=b0(e,n);return B2(e,i,r),r}function B2(e,t,n){if(t.length===0)return;const r=[];let i=[];const s=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=ht(n,l.path);let c=!1,f;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,f=l.abortReason,i=i.concat(qn(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=R2)c=!0,f="maxretry",i=i.concat(qn(e.serverSyncTree_,l.currentWriteId,!0));else{const d=C0(e,l.path,s);l.currentInputSnapshot=d;const h=t[a].update(d.val());if(h!==void 0){hd("transaction failed: Data returned ",h,l.path);let m=Re(h);typeof h=="object"&&h!=null&&rn(h,".priority")||(m=m.updatePriority(d.getPriority()));const _=l.currentWriteId,g=pd(e),p=f0(m,d,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=E0(e),s.splice(s.indexOf(_),1),i=i.concat(o0(e.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(qn(e.serverSyncTree_,_,!0))}else c=!0,f="nodata",i=i.concat(qn(e.serverSyncTree_,l.currentWriteId,!0))}en(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(d){setTimeout(d,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(f==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(f),!1,null))))}qa(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)hi(r[a]);vd(e,e.transactionQueueTree_)}function k0(e,t){let n,r=e.transactionQueueTree_;for(n=V(t);n!==null&&pi(r)===void 0;)r=dd(r,n),t=le(t),n=V(t);return r}function b0(e,t){const n=[];return x0(e,t,n),n.sort((r,i)=>r.order-i.order),n}function x0(e,t,n){const r=pi(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ka(t,i=>{x0(e,i,n)})}function qa(e,t){const n=pi(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,d0(t,n.length>0?n:void 0)}Ka(t,r=>{qa(e,r)})}function T0(e,t){const n=Mo(k0(e,t)),r=dd(e.transactionQueueTree_,t);return E2(r,i=>{ql(e,i)}),ql(e,r),p0(r,i=>{ql(e,i)}),n}function ql(e,t){const n=pi(t);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(N(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(N(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(qn(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?d0(t,void 0):n.length=o+1,en(e.eventQueue_,Mo(t),i);for(let s=0;s<r.length;s++)hi(r[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function H2(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):et(`Invalid query segment '${n}' in query '${e}'`)}return t}const gm=function(e,t){const n=V2(e),r=n.namespace;n.domain==="firebase.com"&&Zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new b_(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new de(n.pathString)}},V2=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let f=e.indexOf("?");f===-1&&(f=e.length),t=e.substring(0,Math.min(c,f)),c<f&&(i=W2(e.substring(c,f)));const d=H2(e.substring(Math.min(e.length,f)));u=t.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const h=t.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const m=t.indexOf(".");r=t.substring(0,m).toLowerCase(),n=t.substring(m+1),o=r}"ns"in d&&(o=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Y2=function(){let e=0;const t=[];return function(n){const r=n===e;e=n;let i;const o=new Array(8);for(i=7;i>=0;i--)o[i]=vm.charAt(n%64),n=Math.floor(n/64);N(n===0,"Cannot push at time == 0");let s=o.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)s+=vm.charAt(t[i]);return N(s.length===20,"nextPushId: Length should be 20."),s}}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:D_(this._path)}get ref(){return new yr(this._repo,this._path)}get _queryIdentifier(){const t=tm(this._queryParams),n=Qf(t);return n==="{}"?"default":n}get _queryObject(){return tm(this._queryParams)}isEqual(t){if(t=Fn(t),!(t instanceof yd))return!1;const n=this._repo===t._repo,r=F_(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+aI(this._path)}}class yr extends yd{constructor(t,n){super(t,n,new td,!1)}get parent(){const t=M_(this._path);return t===null?null:new yr(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}function G2(e,t){return e=Fn(e),e._checkNotDeleted("ref"),t!==void 0?Tc(e._root,t):e._root}function Tc(e,t){return e=Fn(e),V(e._path)===null?T2("child","path",t,!1):y0("child","path",t,!1),new yr(e._repo,ke(e._path,t))}function K2(e,t){e=Fn(e),_0("push",e._path),v0("push",t,e._path,!0);const n=S0(e._repo),r=Y2(n),i=Tc(e,r),o=Tc(e,r);let s;return t!=null?s=I0(o,t).then(()=>o):s=Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}function I0(e,t){e=Fn(e),_0("set",e._path),v0("set",t,e._path,!1);const n=new Ua;return F2(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}d2(yr);h2(yr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2="FIREBASE_DATABASE_EMULATOR_HOST",Ic={};let q2=!1;function X2(e,t,n,r){e.repoInfo_=new b_(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function J2(e,t,n,r,i){let o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||Zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s=gm(o,i),a=s.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[Q2]),u?(l=!0,o=`http://${u}?ns=${a.namespace}`,s=gm(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const c=i&&l?new Yr(Yr.OWNER):new LT(e.name,e.options,t);I2("Invalid Firebase Database URL",s),K(s.path)||Zt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=eN(a,e,c,new DT(e.name,n));return new tN(f,e)}function Z2(e,t){const n=Ic[t];(!n||n[e.key]!==e)&&Zt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),z2(e),delete n[e.key]}function eN(e,t,n,r){let i=Ic[t.name];i||(i={},Ic[t.name]=i);let o=i[e.toURLString()];return o&&Zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new D2(e,q2,n,r),i[e.toURLString()]=o,o}class tN{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(L2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yr(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Z2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Zt("Cannot call "+t+" on a deleted database.")}}function nN(e=Fy(),t){const n=Oo(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=yk("database");r&&rN(n,...r)}return n}function rN(e,t,n,r={}){e=Fn(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Zt("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Yr(Yr.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:_k(r.mockUserToken,e.app.options.projectId);o=new Yr(s)}X2(i,t,n,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(e){wT(Ob),On(new Jt("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return J2(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),Ft(Fp,jp,e),Ft(Fp,jp,"esm2017")}Ht.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Ht.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};iN();zC.add($C,BC);const oN={apiKey:"AIzaSyBYOLsLlqNQTFgwWO1fyHUTgTHQ4JRgA-A",authDomain:"wmcyn-online-web.firebaseapp.com",projectId:"wmcyn-online-web",storageBucket:"wmcyn-online-web.appspot.com",messagingSenderId:"552241957320",appId:"1:552241957320:web:c32590238a5e7ec06858fd",measurementId:"G-KGVGX3LN7P"},N0=My(oN);gT(N0);const sN=nN(N0);function aN(e){const t=G2(sN,"emailList"),n=K2(t);I0(n,{email:e})}const lN=()=>B.jsxs("div",{children:[B.jsx("h1",{children:"Welcome to the Friends and Family Shop"}),B.jsx("p",{children:"This is where exclusive items are available for family members."})]}),uN=()=>{const[e,t]=L.useState(""),[n,r]=L.useState(!1),[i,o]=L.useState(!0),[s,a]=L.useState(""),[l,u]=L.useState(!1),[c,f]=L.useState(""),d=US(),h=w=>{t(w.target.value),c&&f("")},m=()=>{i&&o(!1)},y=w=>{a(w.target.value)},_=w=>{if(w.preventDefault(),!e){f("email is required.");return}aN(e),r(!0)},g=w=>{w.preventDefault(),s==="familyshop"?d("/shop"):f("incorrect password.")},p=()=>{const w=document.getElementById("friendsAndFamilySection"),C=document.getElementById("aboutSection"),S=(l?w:C).offsetTop-100;window.scrollTo({top:S,behavior:"smooth"}),u(!l)},v=()=>{window.scrollTo({top:0,behavior:"smooth"}),u(!1)};return L.useEffect(()=>{const w=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight?u(!0):window.scrollY===0&&u(!1)};return window.addEventListener("scroll",w),()=>{window.removeEventListener("scroll",w)}},[]),B.jsxs("div",{children:[B.jsxs("div",{className:"container",children:[B.jsx("img",{src:ak,alt:"Logo",className:"logo"}),n?B.jsxs(B.Fragment,{children:[B.jsx("h1",{className:"typewriter",children:B.jsx(Bh,{options:{strings:["WMCYN WELCOMES YOU"],autoStart:!0,loop:!0}})}),B.jsx("p",{children:"subscribed."})]}):B.jsxs(B.Fragment,{children:[B.jsx("h1",{className:"typewriter",children:B.jsx(Bh,{options:{strings:["YOU'RE EARLY...","SIGN UP FOR OUR NEWSLETTER"],autoStart:!0,loop:!0}})}),B.jsxs("form",{onSubmit:_,children:[B.jsx("input",{type:"email",placeholder:i?"enter your email":"",value:e,onChange:h,onClick:m,className:"input-field"}),B.jsx("button",{type:"submit",className:"submit-button",children:"subscribe"})]}),c&&B.jsx("p",{className:"error",children:c})]})]}),B.jsxs("div",{id:"friendsAndFamilySection",className:"container friends-and-family-section",children:[B.jsx("h2",{className:"section-heading",children:"FRIENDS AND FAMILY SHOP"}),B.jsxs("form",{onSubmit:g,children:[B.jsx("input",{type:"password",placeholder:"password",value:s,onChange:y,className:"input-field"}),B.jsx("button",{type:"submit",className:"submit-button",children:"enter store"})]}),c&&B.jsx("p",{className:"error",children:c})]}),B.jsxs("div",{className:"container",id:"aboutSection",children:[B.jsx("h2",{className:"section-heading",children:"ABOUT WMCYN"}),B.jsx("p",{className:"section-text",children:"future forward start-up built on the advancement of modern technology intertwined with the basics of everyday lifestyle"}),B.jsx("div",{className:"instagram-container",children:B.jsx("a",{href:"https://instagram.com/whatmorecouldyouneed",className:"instagram-link",children:B.jsx("img",{src:lk,alt:"Instagram",className:"instagram-logo"})})})]}),B.jsx("div",{className:"scroll-button-container",children:B.jsx("button",{className:`scroll-button ${l?"up":"down"}`,onClick:l?v:p,children:B.jsx(Po,{icon:l?"arrow-up":"arrow-down"})})}),B.jsx(nE,{children:B.jsx(Bv,{path:"/shop",element:B.jsx(lN,{})})})]})};Xl.createRoot(document.getElementById("root")).render(B.jsx(va.StrictMode,{children:B.jsxs(oE,{children:[" ",B.jsx(uN,{})]})}));
