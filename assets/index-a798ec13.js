(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var n0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kp={exports:{}},la={},Qp={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),r0=Symbol.for("react.portal"),i0=Symbol.for("react.fragment"),o0=Symbol.for("react.strict_mode"),s0=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),l0=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),c0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),d0=Symbol.for("react.lazy"),ud=Symbol.iterator;function h0(e){return e===null||typeof e!="object"?null:(e=ud&&e[ud]||e["@@iterator"],typeof e=="function"?e:null)}var qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xp=Object.assign,Jp={};function ni(e,t,n){this.props=e,this.context=t,this.refs=Jp,this.updater=n||qp}ni.prototype.isReactComponent={};ni.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ni.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zp(){}Zp.prototype=ni.prototype;function mc(e,t,n){this.props=e,this.context=t,this.refs=Jp,this.updater=n||qp}var gc=mc.prototype=new Zp;gc.constructor=mc;Xp(gc,ni.prototype);gc.isPureReactComponent=!0;var cd=Array.isArray,em=Object.prototype.hasOwnProperty,vc={current:null},tm={key:!0,ref:!0,__self:!0,__source:!0};function nm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)em.call(t,r)&&!tm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:go,type:e,key:o,ref:s,props:i,_owner:vc.current}}function p0(e,t){return{$$typeof:go,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yc(e){return typeof e=="object"&&e!==null&&e.$$typeof===go}function m0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fd=/\/+/g;function Ha(e,t){return typeof e=="object"&&e!==null&&e.key!=null?m0(""+e.key):t.toString(36)}function ss(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case go:case r0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ha(s,0):r,cd(i)?(n="",e!=null&&(n=e.replace(fd,"$&/")+"/"),ss(i,t,n,"",function(u){return u})):i!=null&&(yc(i)&&(i=p0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(fd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",cd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ha(o,a);s+=ss(o,t,n,l,i)}else if(l=h0(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ha(o,a++),s+=ss(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Po(e,t,n){if(e==null)return e;var r=[],i=0;return ss(e,r,"","",function(o){return t.call(n,o,i++)}),r}function g0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},as={transition:null},v0={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:as,ReactCurrentOwner:vc};H.Children={map:Po,forEach:function(e,t,n){Po(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Po(e,function(){t++}),t},toArray:function(e){return Po(e,function(t){return t})||[]},only:function(e){if(!yc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=ni;H.Fragment=i0;H.Profiler=s0;H.PureComponent=mc;H.StrictMode=o0;H.Suspense=c0;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=vc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)em.call(t,l)&&!tm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:go,type:e.type,key:i,ref:o,props:r,_owner:s}};H.createContext=function(e){return e={$$typeof:l0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:a0,_context:e},e.Consumer=e};H.createElement=nm;H.createFactory=function(e){var t=nm.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:u0,render:e}};H.isValidElement=yc;H.lazy=function(e){return{$$typeof:d0,_payload:{_status:-1,_result:e},_init:g0}};H.memo=function(e,t){return{$$typeof:f0,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=as.transition;as.transition={};try{e()}finally{as.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return We.current.useCallback(e,t)};H.useContext=function(e){return We.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return We.current.useDeferredValue(e)};H.useEffect=function(e,t){return We.current.useEffect(e,t)};H.useId=function(){return We.current.useId()};H.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return We.current.useMemo(e,t)};H.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};H.useRef=function(e){return We.current.useRef(e)};H.useState=function(e){return We.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return We.current.useTransition()};H.version="18.2.0";Qp.exports=H;var un=Qp.exports;const _c=pc(un);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=un,_0=Symbol.for("react.element"),w0=Symbol.for("react.fragment"),S0=Object.prototype.hasOwnProperty,E0=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C0={key:!0,ref:!0,__self:!0,__source:!0};function rm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)S0.call(t,r)&&!C0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_0,type:e,key:o,ref:s,props:i,_owner:E0.current}}la.Fragment=w0;la.jsx=rm;la.jsxs=rm;Kp.exports=la;var de=Kp.exports,jl={},im={exports:{}},it={},om={exports:{}},sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,x){var P=T.length;T.push(x);e:for(;0<P;){var M=P-1>>>1,Z=T[M];if(0<i(Z,x))T[M]=x,T[P]=Z,P=M;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var x=T[0],P=T.pop();if(P!==x){T[0]=P;e:for(var M=0,Z=T.length,E=Z>>>1;M<E;){var It=2*(M+1)-1,F=T[It],G=It+1,_e=T[G];if(0>i(F,P))G<Z&&0>i(_e,F)?(T[M]=_e,T[G]=P,M=G):(T[M]=F,T[It]=P,M=It);else if(G<Z&&0>i(_e,P))T[M]=_e,T[G]=P,M=G;else break e}}return x}function i(T,x){var P=T.sortIndex-x.sortIndex;return P!==0?P:T.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,h=!1,m=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=T)r(u),x.sortIndex=x.expirationTime,t(l,x);else break;x=n(u)}}function _(T){if(y=!1,v(T),!m)if(n(l)!==null)m=!0,$(k);else{var x=n(u);x!==null&&Ln(_,x.startTime-T)}}function k(T,x){m=!1,y&&(y=!1,g(b),b=-1),h=!0;var P=d;try{for(v(x),f=n(l);f!==null&&(!(f.expirationTime>x)||T&&!j());){var M=f.callback;if(typeof M=="function"){f.callback=null,d=f.priorityLevel;var Z=M(f.expirationTime<=x);x=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&r(l),v(x)}else r(l);f=n(l)}if(f!==null)var E=!0;else{var It=n(u);It!==null&&Ln(_,It.startTime-x),E=!1}return E}finally{f=null,d=P,h=!1}}var C=!1,S=null,b=-1,A=5,O=-1;function j(){return!(e.unstable_now()-O<A)}function V(){if(S!==null){var T=e.unstable_now();O=T;var x=!0;try{x=S(!0,T)}finally{x?z():(C=!1,S=null)}}else C=!1}var z;if(typeof p=="function")z=function(){p(V)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,X=U.port2;U.port1.onmessage=V,z=function(){X.postMessage(null)}}else z=function(){w(V,0)};function $(T){S=T,C||(C=!0,z())}function Ln(T,x){b=w(function(){T(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,$(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(d){case 1:case 2:case 3:var x=3;break;default:x=d}var P=d;d=x;try{return T()}finally{d=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,x){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var P=d;d=T;try{return x()}finally{d=P}},e.unstable_scheduleCallback=function(T,x,P){var M=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?M+P:M):P=M,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=P+Z,T={id:c++,callback:x,priorityLevel:T,startTime:P,expirationTime:Z,sortIndex:-1},P>M?(T.sortIndex=P,t(u,T),n(l)===null&&T===n(u)&&(y?(g(b),b=-1):y=!0,Ln(_,P-M))):(T.sortIndex=Z,t(l,T),m||h||(m=!0,$(k))),T},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(T){var x=d;return function(){var P=d;d=x;try{return T.apply(this,arguments)}finally{d=P}}}})(sm);om.exports=sm;var k0=om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am=un,rt=k0;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lm=new Set,Wi={};function fr(e,t){Vr(e,t),Vr(e+"Capture",t)}function Vr(e,t){for(Wi[e]=t,e=0;e<t.length;e++)lm.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,b0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dd={},hd={};function T0(e){return zl.call(hd,e)?!0:zl.call(dd,e)?!1:b0.test(e)?hd[e]=!0:(dd[e]=!0,!1)}function I0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function x0(e,t,n,r){if(t===null||typeof t>"u"||I0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var wc=/[\-:]([a-z])/g;function Sc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wc,Sc);De[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wc,Sc);De[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wc,Sc);De[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ec(e,t,n,r){var i=De.hasOwnProperty(t)?De[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(x0(t,n,i,r)&&(n=null),r||i===null?T0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),_r=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),cm=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),bc=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),fm=Symbol.for("react.offscreen"),pd=Symbol.iterator;function fi(e){return e===null||typeof e!="object"?null:(e=pd&&e[pd]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Va;function Ci(e){if(Va===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Va=t&&t[1]||""}return`
`+Va+e}var Ya=!1;function Ga(e,t){if(!e||Ya)return"";Ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ya=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ci(e):""}function N0(e){switch(e.tag){case 5:return Ci(e.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return e=Ga(e.type,!1),e;case 11:return e=Ga(e.type.render,!1),e;case 1:return e=Ga(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case _r:return"Portal";case Ul:return"Profiler";case Cc:return"StrictMode";case $l:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cm:return(e.displayName||"Context")+".Consumer";case um:return(e._context.displayName||"Context")+".Provider";case kc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bc:return t=e.displayName||null,t!==null?t:Wl(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Wl(e(t))}catch{}}return null}function A0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(t);case 8:return t===Cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O0(e){var t=dm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Do(e){e._valueTracker||(e._valueTracker=O0(e))}function hm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function md(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pm(e,t){t=t.checked,t!=null&&Ec(e,"checked",t,!1)}function Vl(e,t){pm(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yl(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yl(e,t,n){(t!=="number"||ws(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ki=Array.isArray;function Mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(ki(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function mm(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mo,vm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P0=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(e){P0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xi[t]=xi[e]})});function ym(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xi.hasOwnProperty(e)&&xi[e]?(""+t).trim():t+"px"}function _m(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ym(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var R0=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(e,t){if(t){if(R0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xl=null;function Tc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,Lr=null,Fr=null;function _d(e){if(e=_o(e)){if(typeof Jl!="function")throw Error(I(280));var t=e.stateNode;t&&(t=ha(t),Jl(e.stateNode,e.type,t))}}function wm(e){Lr?Fr?Fr.push(e):Fr=[e]:Lr=e}function Sm(){if(Lr){var e=Lr,t=Fr;if(Fr=Lr=null,_d(e),t)for(e=0;e<t.length;e++)_d(t[e])}}function Em(e,t){return e(t)}function Cm(){}var Ka=!1;function km(e,t,n){if(Ka)return e(t,n);Ka=!0;try{return Em(e,t,n)}finally{Ka=!1,(Lr!==null||Fr!==null)&&(Cm(),Sm())}}function Vi(e,t){var n=e.stateNode;if(n===null)return null;var r=ha(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Zl=!1;if(Wt)try{var di={};Object.defineProperty(di,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{Zl=!1}function D0(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ni=!1,Ss=null,Es=!1,eu=null,M0={onError:function(e){Ni=!0,Ss=e}};function L0(e,t,n,r,i,o,s,a,l){Ni=!1,Ss=null,D0.apply(M0,arguments)}function F0(e,t,n,r,i,o,s,a,l){if(L0.apply(this,arguments),Ni){if(Ni){var u=Ss;Ni=!1,Ss=null}else throw Error(I(198));Es||(Es=!0,eu=u)}}function dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wd(e){if(dr(e)!==e)throw Error(I(188))}function j0(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return wd(i),e;if(o===r)return wd(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Tm(e){return e=j0(e),e!==null?Im(e):null}function Im(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Im(e);if(t!==null)return t;e=e.sibling}return null}var xm=rt.unstable_scheduleCallback,Sd=rt.unstable_cancelCallback,z0=rt.unstable_shouldYield,U0=rt.unstable_requestPaint,ye=rt.unstable_now,$0=rt.unstable_getCurrentPriorityLevel,Ic=rt.unstable_ImmediatePriority,Nm=rt.unstable_UserBlockingPriority,Cs=rt.unstable_NormalPriority,B0=rt.unstable_LowPriority,Am=rt.unstable_IdlePriority,ua=null,Rt=null;function W0(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(ua,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Y0,H0=Math.log,V0=Math.LN2;function Y0(e){return e>>>=0,e===0?32:31-(H0(e)/V0|0)|0}var Lo=64,Fo=4194304;function bi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ks(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=bi(a):(o&=s,o!==0&&(r=bi(o)))}else s=n&~i,s!==0?r=bi(s):o!==0&&(r=bi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),i=1<<n,r|=e[n],t&=~i;return r}function G0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ct(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=G0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function tu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Om(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function Qa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function Q0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Pm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rm,Nc,Dm,Mm,Lm,nu=!1,jo=[],hn=null,pn=null,mn=null,Yi=new Map,Gi=new Map,an=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ed(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(t.pointerId)}}function hi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=_o(t),t!==null&&Nc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function X0(e,t,n,r,i){switch(t){case"focusin":return hn=hi(hn,e,t,n,r,i),!0;case"dragenter":return pn=hi(pn,e,t,n,r,i),!0;case"mouseover":return mn=hi(mn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Yi.set(o,hi(Yi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gi.set(o,hi(Gi.get(o)||null,e,t,n,r,i)),!0}return!1}function Fm(e){var t=$n(e.target);if(t!==null){var n=dr(t);if(n!==null){if(t=n.tag,t===13){if(t=bm(n),t!==null){e.blockedOn=t,Lm(e.priority,function(){Dm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ru(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xl=r,n.target.dispatchEvent(r),Xl=null}else return t=_o(n),t!==null&&Nc(t),e.blockedOn=n,!1;t.shift()}return!0}function Cd(e,t,n){ls(e)&&n.delete(t)}function J0(){nu=!1,hn!==null&&ls(hn)&&(hn=null),pn!==null&&ls(pn)&&(pn=null),mn!==null&&ls(mn)&&(mn=null),Yi.forEach(Cd),Gi.forEach(Cd)}function pi(e,t){e.blockedOn===t&&(e.blockedOn=null,nu||(nu=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,J0)))}function Ki(e){function t(i){return pi(i,e)}if(0<jo.length){pi(jo[0],e);for(var n=1;n<jo.length;n++){var r=jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&pi(hn,e),pn!==null&&pi(pn,e),mn!==null&&pi(mn,e),Yi.forEach(t),Gi.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)Fm(n),n.blockedOn===null&&an.shift()}var jr=Zt.ReactCurrentBatchConfig,bs=!0;function Z0(e,t,n,r){var i=J,o=jr.transition;jr.transition=null;try{J=1,Ac(e,t,n,r)}finally{J=i,jr.transition=o}}function e1(e,t,n,r){var i=J,o=jr.transition;jr.transition=null;try{J=4,Ac(e,t,n,r)}finally{J=i,jr.transition=o}}function Ac(e,t,n,r){if(bs){var i=ru(e,t,n,r);if(i===null)ol(e,t,r,Ts,n),Ed(e,r);else if(X0(i,e,t,n,r))r.stopPropagation();else if(Ed(e,r),t&4&&-1<q0.indexOf(e)){for(;i!==null;){var o=_o(i);if(o!==null&&Rm(o),o=ru(e,t,n,r),o===null&&ol(e,t,r,Ts,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var Ts=null;function ru(e,t,n,r){if(Ts=null,e=Tc(r),e=$n(e),e!==null)if(t=dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ts=e,null}function jm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($0()){case Ic:return 1;case Nm:return 4;case Cs:case B0:return 16;case Am:return 536870912;default:return 16}default:return 16}}var cn=null,Oc=null,us=null;function zm(){if(us)return us;var e,t=Oc,n=t.length,r,i="value"in cn?cn.value:cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return us=i.slice(e,1<r?1-r:void 0)}function cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function kd(){return!1}function ot(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zo:kd,this.isPropagationStopped=kd,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=ot(ri),yo=me({},ri,{view:0,detail:0}),t1=ot(yo),qa,Xa,mi,ca=me({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(qa=e.screenX-mi.screenX,Xa=e.screenY-mi.screenY):Xa=qa=0,mi=e),qa)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),bd=ot(ca),n1=me({},ca,{dataTransfer:0}),r1=ot(n1),i1=me({},yo,{relatedTarget:0}),Ja=ot(i1),o1=me({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),s1=ot(o1),a1=me({},ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l1=ot(a1),u1=me({},ri,{data:0}),Td=ot(u1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d1[e])?!!t[e]:!1}function Rc(){return h1}var p1=me({},yo,{key:function(e){if(e.key){var t=c1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(e){return e.type==="keypress"?cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m1=ot(p1),g1=me({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=ot(g1),v1=me({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),y1=ot(v1),_1=me({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),w1=ot(_1),S1=me({},ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E1=ot(S1),C1=[9,13,27,32],Dc=Wt&&"CompositionEvent"in window,Ai=null;Wt&&"documentMode"in document&&(Ai=document.documentMode);var k1=Wt&&"TextEvent"in window&&!Ai,Um=Wt&&(!Dc||Ai&&8<Ai&&11>=Ai),xd=String.fromCharCode(32),Nd=!1;function $m(e,t){switch(e){case"keyup":return C1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function b1(e,t){switch(e){case"compositionend":return Bm(t);case"keypress":return t.which!==32?null:(Nd=!0,xd);case"textInput":return e=t.data,e===xd&&Nd?null:e;default:return null}}function T1(e,t){if(Sr)return e==="compositionend"||!Dc&&$m(e,t)?(e=zm(),us=Oc=cn=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Um&&t.locale!=="ko"?null:t.data;default:return null}}var I1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!I1[e.type]:t==="textarea"}function Wm(e,t,n,r){wm(r),t=Is(t,"onChange"),0<t.length&&(n=new Pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Oi=null,Qi=null;function x1(e){eg(e,0)}function fa(e){var t=kr(e);if(hm(t))return e}function N1(e,t){if(e==="change")return t}var Hm=!1;if(Wt){var Za;if(Wt){var el="oninput"in document;if(!el){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),el=typeof Od.oninput=="function"}Za=el}else Za=!1;Hm=Za&&(!document.documentMode||9<document.documentMode)}function Pd(){Oi&&(Oi.detachEvent("onpropertychange",Vm),Qi=Oi=null)}function Vm(e){if(e.propertyName==="value"&&fa(Qi)){var t=[];Wm(t,Qi,e,Tc(e)),km(x1,t)}}function A1(e,t,n){e==="focusin"?(Pd(),Oi=t,Qi=n,Oi.attachEvent("onpropertychange",Vm)):e==="focusout"&&Pd()}function O1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fa(Qi)}function P1(e,t){if(e==="click")return fa(t)}function R1(e,t){if(e==="input"||e==="change")return fa(t)}function D1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:D1;function qi(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zl.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function Rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dd(e,t){var n=Rd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rd(n)}}function Ym(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ym(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gm(){for(var e=window,t=ws();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ws(e.document)}return t}function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function M1(e){var t=Gm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ym(n.ownerDocument.documentElement,n)){if(r!==null&&Mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Dd(n,o);var s=Dd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L1=Wt&&"documentMode"in document&&11>=document.documentMode,Er=null,iu=null,Pi=null,ou=!1;function Md(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||Er==null||Er!==ws(r)||(r=Er,"selectionStart"in r&&Mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&qi(Pi,r)||(Pi=r,r=Is(iu,"onSelect"),0<r.length&&(t=new Pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function Uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cr={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},tl={},Km={};Wt&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function da(e){if(tl[e])return tl[e];if(!Cr[e])return e;var t=Cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Km)return tl[e]=t[n];return e}var Qm=da("animationend"),qm=da("animationiteration"),Xm=da("animationstart"),Jm=da("transitionend"),Zm=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){Zm.set(e,t),fr(t,[e])}for(var nl=0;nl<Ld.length;nl++){var rl=Ld[nl],F1=rl.toLowerCase(),j1=rl[0].toUpperCase()+rl.slice(1);Pn(F1,"on"+j1)}Pn(Qm,"onAnimationEnd");Pn(qm,"onAnimationIteration");Pn(Xm,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Jm,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));function Fd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,F0(r,t,void 0,e),e.currentTarget=null}function eg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Fd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Fd(i,a,u),o=l}}}if(Es)throw e=eu,Es=!1,eu=null,e}function ie(e,t){var n=t[cu];n===void 0&&(n=t[cu]=new Set);var r=e+"__bubble";n.has(r)||(tg(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),tg(n,e,r,t)}var $o="_reactListening"+Math.random().toString(36).slice(2);function Xi(e){if(!e[$o]){e[$o]=!0,lm.forEach(function(n){n!=="selectionchange"&&(z1.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$o]||(t[$o]=!0,il("selectionchange",!1,t))}}function tg(e,t,n,r){switch(jm(t)){case 1:var i=Z0;break;case 4:i=e1;break;default:i=Ac}n=i.bind(null,t,n,e),i=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=$n(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}km(function(){var u=o,c=Tc(n),f=[];e:{var d=Zm.get(e);if(d!==void 0){var h=Pc,m=e;switch(e){case"keypress":if(cs(n)===0)break e;case"keydown":case"keyup":h=m1;break;case"focusin":m="focus",h=Ja;break;case"focusout":m="blur",h=Ja;break;case"beforeblur":case"afterblur":h=Ja;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=r1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=y1;break;case Qm:case qm:case Xm:h=s1;break;case Jm:h=w1;break;case"scroll":h=t1;break;case"wheel":h=E1;break;case"copy":case"cut":case"paste":h=l1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Id}var y=(t&4)!==0,w=!y&&e==="scroll",g=y?d!==null?d+"Capture":null:d;y=[];for(var p=u,v;p!==null;){v=p;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,g!==null&&(_=Vi(p,g),_!=null&&y.push(Ji(p,_,v)))),w)break;p=p.return}0<y.length&&(d=new h(d,m,null,n,c),f.push({event:d,listeners:y}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==Xl&&(m=n.relatedTarget||n.fromElement)&&($n(m)||m[Ht]))break e;if((h||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?$n(m):null,m!==null&&(w=dr(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(y=bd,_="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Id,_="onPointerLeave",g="onPointerEnter",p="pointer"),w=h==null?d:kr(h),v=m==null?d:kr(m),d=new y(_,p+"leave",h,n,c),d.target=w,d.relatedTarget=v,_=null,$n(c)===u&&(y=new y(g,p+"enter",m,n,c),y.target=v,y.relatedTarget=w,_=y),w=_,h&&m)t:{for(y=h,g=m,p=0,v=y;v;v=vr(v))p++;for(v=0,_=g;_;_=vr(_))v++;for(;0<p-v;)y=vr(y),p--;for(;0<v-p;)g=vr(g),v--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=vr(y),g=vr(g)}y=null}else y=null;h!==null&&jd(f,d,h,y,!1),m!==null&&w!==null&&jd(f,w,m,y,!0)}}e:{if(d=u?kr(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var k=N1;else if(Ad(d))if(Hm)k=R1;else{k=O1;var C=A1}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=P1);if(k&&(k=k(e,u))){Wm(f,k,n,c);break e}C&&C(e,d,u),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Yl(d,"number",d.value)}switch(C=u?kr(u):window,e){case"focusin":(Ad(C)||C.contentEditable==="true")&&(Er=C,iu=u,Pi=null);break;case"focusout":Pi=iu=Er=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Md(f,n,c);break;case"selectionchange":if(L1)break;case"keydown":case"keyup":Md(f,n,c)}var S;if(Dc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Sr?$m(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Um&&n.locale!=="ko"&&(Sr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Sr&&(S=zm()):(cn=c,Oc="value"in cn?cn.value:cn.textContent,Sr=!0)),C=Is(u,b),0<C.length&&(b=new Td(b,e,null,n,c),f.push({event:b,listeners:C}),S?b.data=S:(S=Bm(n),S!==null&&(b.data=S)))),(S=k1?b1(e,n):T1(e,n))&&(u=Is(u,"onBeforeInput"),0<u.length&&(c=new Td("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=S))}eg(f,t)})}function Ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Is(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vi(e,n),o!=null&&r.unshift(Ji(e,o,i)),o=Vi(e,t),o!=null&&r.push(Ji(e,o,i))),e=e.return}return r}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Vi(n,o),l!=null&&s.unshift(Ji(n,l,a))):i||(l=Vi(n,o),l!=null&&s.push(Ji(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var U1=/\r\n?/g,$1=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(U1,`
`).replace($1,"")}function Bo(e,t,n){if(t=zd(t),zd(e)!==t&&n)throw Error(I(425))}function xs(){}var su=null,au=null;function lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,B1=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(e){return Ud.resolve(null).then(e).catch(H1)}:uu;function H1(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ki(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ki(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ii=Math.random().toString(36).slice(2),At="__reactFiber$"+ii,Zi="__reactProps$"+ii,Ht="__reactContainer$"+ii,cu="__reactEvents$"+ii,V1="__reactListeners$"+ii,Y1="__reactHandles$"+ii;function $n(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$d(e);e!==null;){if(n=e[At])return n;e=$d(e)}return t}e=n,n=e.parentNode}return null}function _o(e){return e=e[At]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function ha(e){return e[Zi]||null}var fu=[],br=-1;function Rn(e){return{current:e}}function le(e){0>br||(e.current=fu[br],fu[br]=null,br--)}function re(e,t){br++,fu[br]=e.current,e.current=t}var Tn={},Ue=Rn(Tn),Ke=Rn(!1),Jn=Tn;function Yr(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function Ns(){le(Ke),le(Ue)}function Bd(e,t,n){if(Ue.current!==Tn)throw Error(I(168));re(Ue,t),re(Ke,n)}function ng(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,A0(e)||"Unknown",i));return me({},n,r)}function As(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Jn=Ue.current,re(Ue,e),re(Ke,Ke.current),!0}function Wd(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=ng(e,t,Jn),r.__reactInternalMemoizedMergedChildContext=e,le(Ke),le(Ue),re(Ue,e)):le(Ke),re(Ke,n)}var Ft=null,pa=!1,al=!1;function rg(e){Ft===null?Ft=[e]:Ft.push(e)}function G1(e){pa=!0,rg(e)}function Dn(){if(!al&&Ft!==null){al=!0;var e=0,t=J;try{var n=Ft;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,pa=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),xm(Ic,Dn),i}finally{J=t,al=!1}}return null}var Tr=[],Ir=0,Os=null,Ps=0,lt=[],ut=0,Zn=null,jt=1,zt="";function Fn(e,t){Tr[Ir++]=Ps,Tr[Ir++]=Os,Os=e,Ps=t}function ig(e,t,n){lt[ut++]=jt,lt[ut++]=zt,lt[ut++]=Zn,Zn=e;var r=jt;e=zt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var o=32-Ct(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,jt=1<<32-Ct(t)+i|n<<i|r,zt=o+e}else jt=1<<o|n<<i|r,zt=e}function Lc(e){e.return!==null&&(Fn(e,1),ig(e,1,0))}function Fc(e){for(;e===Os;)Os=Tr[--Ir],Tr[Ir]=null,Ps=Tr[--Ir],Tr[Ir]=null;for(;e===Zn;)Zn=lt[--ut],lt[ut]=null,zt=lt[--ut],lt[ut]=null,jt=lt[--ut],lt[ut]=null}var tt=null,et=null,fe=!1,_t=null;function og(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:jt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function du(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hu(e){if(fe){var t=et;if(t){var n=t;if(!Hd(e,t)){if(du(e))throw Error(I(418));t=gn(n.nextSibling);var r=tt;t&&Hd(e,t)?og(r,n):(e.flags=e.flags&-4097|2,fe=!1,tt=e)}}else{if(du(e))throw Error(I(418));e.flags=e.flags&-4097|2,fe=!1,tt=e}}}function Vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Wo(e){if(e!==tt)return!1;if(!fe)return Vd(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!lu(e.type,e.memoizedProps)),t&&(t=et)){if(du(e))throw sg(),Error(I(418));for(;t;)og(e,t),t=gn(t.nextSibling)}if(Vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?gn(e.stateNode.nextSibling):null;return!0}function sg(){for(var e=et;e;)e=gn(e.nextSibling)}function Gr(){et=tt=null,fe=!1}function jc(e){_t===null?_t=[e]:_t.push(e)}var K1=Zt.ReactCurrentBatchConfig;function vt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Rs=Rn(null),Ds=null,xr=null,zc=null;function Uc(){zc=xr=Ds=null}function $c(e){var t=Rs.current;le(Rs),e._currentValue=t}function pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){Ds=e,zc=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(zc!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(Ds===null)throw Error(I(308));xr=e,Ds.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Bn=null;function Bc(e){Bn===null?Bn=[e]:Bn.push(e)}function ag(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function Wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Bc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vt(e,n)}function fs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}function Yd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ms(e,t,n,r){var i=e.updateQueue;sn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,h=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,y=a;switch(d=t,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){f=m.call(h,f,d);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(h,f,d):m,d==null)break e;f=me({},f,d);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tr|=s,e.lanes=s,e.memoizedState=f}}function Gd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var ug=new am.Component().refs;function mu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ma={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=_n(e),o=$t(r,i);o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,i),t!==null&&(kt(t,e,i,r),fs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=_n(e),o=$t(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,i),t!==null&&(kt(t,e,i,r),fs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=_n(e),i=$t(n,r);i.tag=2,t!=null&&(i.callback=t),t=vn(e,i,r),t!==null&&(kt(t,e,r,n),fs(t,e,r))}};function Kd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!qi(n,r)||!qi(i,o):!0}function cg(e,t,n){var r=!1,i=Tn,o=t.contextType;return typeof o=="object"&&o!==null?o=ht(o):(i=Qe(t)?Jn:Ue.current,r=t.contextTypes,o=(r=r!=null)?Yr(e,i):Tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ma,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Qd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ma.enqueueReplaceState(t,t.state,null)}function gu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ug,Wc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ht(o):(o=Qe(t)?Jn:Ue.current,i.context=Yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(mu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ma.enqueueReplaceState(i,i.state,null),Ms(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===ug&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ho(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qd(e){var t=e._init;return t(e._payload)}function fg(e){function t(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=wn(g,p),g.index=0,g.sibling=null,g}function o(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,_){return p===null||p.tag!==6?(p=pl(v,g.mode,_),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,_){var k=v.type;return k===wr?c(g,p,v.props.children,_,v.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===on&&qd(k)===p.type)?(_=i(p,v.props),_.ref=gi(g,p,v),_.return=g,_):(_=vs(v.type,v.key,v.props,null,g.mode,_),_.ref=gi(g,p,v),_.return=g,_)}function u(g,p,v,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=ml(v,g.mode,_),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function c(g,p,v,_,k){return p===null||p.tag!==7?(p=qn(v,g.mode,_,k),p.return=g,p):(p=i(p,v),p.return=g,p)}function f(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=pl(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ro:return v=vs(p.type,p.key,p.props,null,g.mode,v),v.ref=gi(g,null,p),v.return=g,v;case _r:return p=ml(p,g.mode,v),p.return=g,p;case on:var _=p._init;return f(g,_(p._payload),v)}if(ki(p)||fi(p))return p=qn(p,g.mode,v,null),p.return=g,p;Ho(g,p)}return null}function d(g,p,v,_){var k=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(g,p,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ro:return v.key===k?l(g,p,v,_):null;case _r:return v.key===k?u(g,p,v,_):null;case on:return k=v._init,d(g,p,k(v._payload),_)}if(ki(v)||fi(v))return k!==null?null:c(g,p,v,_,null);Ho(g,v)}return null}function h(g,p,v,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(v)||null,a(p,g,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ro:return g=g.get(_.key===null?v:_.key)||null,l(p,g,_,k);case _r:return g=g.get(_.key===null?v:_.key)||null,u(p,g,_,k);case on:var C=_._init;return h(g,p,v,C(_._payload),k)}if(ki(_)||fi(_))return g=g.get(v)||null,c(p,g,_,k,null);Ho(p,_)}return null}function m(g,p,v,_){for(var k=null,C=null,S=p,b=p=0,A=null;S!==null&&b<v.length;b++){S.index>b?(A=S,S=null):A=S.sibling;var O=d(g,S,v[b],_);if(O===null){S===null&&(S=A);break}e&&S&&O.alternate===null&&t(g,S),p=o(O,p,b),C===null?k=O:C.sibling=O,C=O,S=A}if(b===v.length)return n(g,S),fe&&Fn(g,b),k;if(S===null){for(;b<v.length;b++)S=f(g,v[b],_),S!==null&&(p=o(S,p,b),C===null?k=S:C.sibling=S,C=S);return fe&&Fn(g,b),k}for(S=r(g,S);b<v.length;b++)A=h(S,g,b,v[b],_),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?b:A.key),p=o(A,p,b),C===null?k=A:C.sibling=A,C=A);return e&&S.forEach(function(j){return t(g,j)}),fe&&Fn(g,b),k}function y(g,p,v,_){var k=fi(v);if(typeof k!="function")throw Error(I(150));if(v=k.call(v),v==null)throw Error(I(151));for(var C=k=null,S=p,b=p=0,A=null,O=v.next();S!==null&&!O.done;b++,O=v.next()){S.index>b?(A=S,S=null):A=S.sibling;var j=d(g,S,O.value,_);if(j===null){S===null&&(S=A);break}e&&S&&j.alternate===null&&t(g,S),p=o(j,p,b),C===null?k=j:C.sibling=j,C=j,S=A}if(O.done)return n(g,S),fe&&Fn(g,b),k;if(S===null){for(;!O.done;b++,O=v.next())O=f(g,O.value,_),O!==null&&(p=o(O,p,b),C===null?k=O:C.sibling=O,C=O);return fe&&Fn(g,b),k}for(S=r(g,S);!O.done;b++,O=v.next())O=h(S,g,b,O.value,_),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?b:O.key),p=o(O,p,b),C===null?k=O:C.sibling=O,C=O);return e&&S.forEach(function(V){return t(g,V)}),fe&&Fn(g,b),k}function w(g,p,v,_){if(typeof v=="object"&&v!==null&&v.type===wr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ro:e:{for(var k=v.key,C=p;C!==null;){if(C.key===k){if(k=v.type,k===wr){if(C.tag===7){n(g,C.sibling),p=i(C,v.props.children),p.return=g,g=p;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===on&&qd(k)===C.type){n(g,C.sibling),p=i(C,v.props),p.ref=gi(g,C,v),p.return=g,g=p;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===wr?(p=qn(v.props.children,g.mode,_,v.key),p.return=g,g=p):(_=vs(v.type,v.key,v.props,null,g.mode,_),_.ref=gi(g,p,v),_.return=g,g=_)}return s(g);case _r:e:{for(C=v.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=ml(v,g.mode,_),p.return=g,g=p}return s(g);case on:return C=v._init,w(g,p,C(v._payload),_)}if(ki(v))return m(g,p,v,_);if(fi(v))return y(g,p,v,_);Ho(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=pl(v,g.mode,_),p.return=g,g=p),s(g)):n(g,p)}return w}var Kr=fg(!0),dg=fg(!1),wo={},Dt=Rn(wo),eo=Rn(wo),to=Rn(wo);function Wn(e){if(e===wo)throw Error(I(174));return e}function Hc(e,t){switch(re(to,t),re(eo,e),re(Dt,wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}le(Dt),re(Dt,t)}function Qr(){le(Dt),le(eo),le(to)}function hg(e){Wn(to.current);var t=Wn(Dt.current),n=Kl(t,e.type);t!==n&&(re(eo,e),re(Dt,n))}function Vc(e){eo.current===e&&(le(Dt),le(eo))}var he=Rn(0);function Ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function Yc(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var ds=Zt.ReactCurrentDispatcher,ul=Zt.ReactCurrentBatchConfig,er=0,pe=null,Ee=null,Ie=null,Fs=!1,Ri=!1,no=0,Q1=0;function Me(){throw Error(I(321))}function Gc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Kc(e,t,n,r,i,o){if(er=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ds.current=e===null||e.memoizedState===null?Z1:ew,e=n(r,i),Ri){o=0;do{if(Ri=!1,no=0,25<=o)throw Error(I(301));o+=1,Ie=Ee=null,t.updateQueue=null,ds.current=tw,e=n(r,i)}while(Ri)}if(ds.current=js,t=Ee!==null&&Ee.next!==null,er=0,Ie=Ee=pe=null,Fs=!1,t)throw Error(I(300));return e}function Qc(){var e=no!==0;return no=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?pe.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function pt(){if(Ee===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ie===null?pe.memoizedState:Ie.next;if(t!==null)Ie=t,Ee=e;else{if(e===null)throw Error(I(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ie===null?pe.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function ro(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=pt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((er&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,pe.lanes|=c,tr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Tt(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,pe.lanes|=o,tr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fl(e){var t=pt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Tt(o,t.memoizedState)||(Ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pg(){}function mg(e,t){var n=pe,r=pt(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ye=!0),r=r.queue,qc(yg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,io(9,vg.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(I(349));er&30||gg(n,t,i)}return i}function gg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vg(e,t,n,r){t.value=n,t.getSnapshot=r,_g(t)&&wg(e)}function yg(e,t,n){return n(function(){_g(t)&&wg(e)})}function _g(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function wg(e){var t=Vt(e,1);t!==null&&kt(t,e,1,-1)}function Xd(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=J1.bind(null,pe,e),[t.memoizedState,e]}function io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sg(){return pt().memoizedState}function hs(e,t,n,r){var i=Nt();pe.flags|=e,i.memoizedState=io(1|t,n,void 0,r===void 0?null:r)}function ga(e,t,n,r){var i=pt();r=r===void 0?null:r;var o=void 0;if(Ee!==null){var s=Ee.memoizedState;if(o=s.destroy,r!==null&&Gc(r,s.deps)){i.memoizedState=io(t,n,o,r);return}}pe.flags|=e,i.memoizedState=io(1|t,n,o,r)}function Jd(e,t){return hs(8390656,8,e,t)}function qc(e,t){return ga(2048,8,e,t)}function Eg(e,t){return ga(4,2,e,t)}function Cg(e,t){return ga(4,4,e,t)}function kg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bg(e,t,n){return n=n!=null?n.concat([e]):null,ga(4,4,kg.bind(null,t,e),n)}function Xc(){}function Tg(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ig(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xg(e,t,n){return er&21?(Tt(n,t)||(n=Om(),pe.lanes|=n,tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n)}function q1(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=ul.transition;ul.transition={};try{e(!1),t()}finally{J=n,ul.transition=r}}function Ng(){return pt().memoizedState}function X1(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ag(e))Og(t,n);else if(n=ag(e,t,n,r),n!==null){var i=Be();kt(n,e,r,i),Pg(n,t,r)}}function J1(e,t,n){var r=_n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ag(e))Og(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,s)){var l=t.interleaved;l===null?(i.next=i,Bc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ag(e,t,i,r),n!==null&&(i=Be(),kt(n,e,r,i),Pg(n,t,r))}}function Ag(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Og(e,t){Ri=Fs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}var js={readContext:ht,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},Z1={readContext:ht,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Jd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hs(4194308,4,kg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hs(4194308,4,e,t)},useInsertionEffect:function(e,t){return hs(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=X1.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:Xd,useDebugValue:Xc,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=Xd(!1),t=e[0];return e=q1.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=Nt();if(fe){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Ne===null)throw Error(I(349));er&30||gg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Jd(yg.bind(null,r,o,e),[e]),r.flags|=2048,io(9,vg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Nt(),t=Ne.identifierPrefix;if(fe){var n=zt,r=jt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Q1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ew={readContext:ht,useCallback:Tg,useContext:ht,useEffect:qc,useImperativeHandle:bg,useInsertionEffect:Eg,useLayoutEffect:Cg,useMemo:Ig,useReducer:cl,useRef:Sg,useState:function(){return cl(ro)},useDebugValue:Xc,useDeferredValue:function(e){var t=pt();return xg(t,Ee.memoizedState,e)},useTransition:function(){var e=cl(ro)[0],t=pt().memoizedState;return[e,t]},useMutableSource:pg,useSyncExternalStore:mg,useId:Ng,unstable_isNewReconciler:!1},tw={readContext:ht,useCallback:Tg,useContext:ht,useEffect:qc,useImperativeHandle:bg,useInsertionEffect:Eg,useLayoutEffect:Cg,useMemo:Ig,useReducer:fl,useRef:Sg,useState:function(){return fl(ro)},useDebugValue:Xc,useDeferredValue:function(e){var t=pt();return Ee===null?t.memoizedState=e:xg(t,Ee.memoizedState,e)},useTransition:function(){var e=fl(ro)[0],t=pt().memoizedState;return[e,t]},useMutableSource:pg,useSyncExternalStore:mg,useId:Ng,unstable_isNewReconciler:!1};function qr(e,t){try{var n="",r=t;do n+=N0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nw=typeof WeakMap=="function"?WeakMap:Map;function Rg(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Us||(Us=!0,Iu=r),vu(e,t)},n}function Dg(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){vu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vu(e,t),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Zd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gw.bind(null,e,t,n),t.then(e,e))}function eh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function th(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e)}var rw=Zt.ReactCurrentOwner,Ye=!1;function $e(e,t,n,r){t.child=e===null?dg(t,null,n,r):Kr(t,e.child,n,r)}function nh(e,t,n,r,i){n=n.render;var o=t.ref;return zr(t,i),r=Kc(e,t,n,r,o,i),n=Qc(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(fe&&n&&Lc(t),t.flags|=1,$e(e,t,r,i),t.child)}function rh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!sf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mg(e,t,o,r,i)):(e=vs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:qi,n(s,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=wn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(qi(o,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return yu(e,t,n,r,i)}function Lg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Ar,Ze),Ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Ar,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,re(Ar,Ze),Ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,re(Ar,Ze),Ze|=r;return $e(e,t,i,n),t.child}function Fg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yu(e,t,n,r,i){var o=Qe(n)?Jn:Ue.current;return o=Yr(t,o),zr(t,i),n=Kc(e,t,n,r,o,i),r=Qc(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(fe&&r&&Lc(t),t.flags|=1,$e(e,t,n,i),t.child)}function ih(e,t,n,r,i){if(Qe(n)){var o=!0;As(t)}else o=!1;if(zr(t,i),t.stateNode===null)ps(e,t),cg(t,n,r),gu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ht(u):(u=Qe(n)?Jn:Ue.current,u=Yr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Qd(t,s,r,u),sn=!1;var d=t.memoizedState;s.state=d,Ms(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Ke.current||sn?(typeof c=="function"&&(mu(t,n,c,r),l=t.memoizedState),(a=sn||Kd(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,lg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:vt(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ht(l):(l=Qe(n)?Jn:Ue.current,l=Yr(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Qd(t,s,r,l),sn=!1,d=t.memoizedState,s.state=d,Ms(t,r,s,i);var m=t.memoizedState;a!==f||d!==m||Ke.current||sn?(typeof h=="function"&&(mu(t,n,h,r),m=t.memoizedState),(u=sn||Kd(t,n,u,r,d,m,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return _u(e,t,n,r,o,i)}function _u(e,t,n,r,i,o){Fg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Wd(t,n,!1),Yt(e,t,o);r=t.stateNode,rw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Kr(t,e.child,null,o),t.child=Kr(t,null,a,o)):$e(e,t,a,o),t.memoizedState=r.state,i&&Wd(t,n,!0),t.child}function jg(e){var t=e.stateNode;t.pendingContext?Bd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bd(e,t.context,!1),Hc(e,t.containerInfo)}function oh(e,t,n,r,i){return Gr(),jc(i),t.flags|=256,$e(e,t,n,r),t.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Su(e){return{baseLanes:e,cachePool:null,transitions:null}}function zg(e,t,n){var r=t.pendingProps,i=he.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(he,i&1),e===null)return hu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_a(s,r,0,null),e=qn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Su(n),t.memoizedState=wu,e):Jc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iw(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=wn(a,o):(o=qn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Su(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=wu,r}return o=e.child,e=o.sibling,r=wn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jc(e,t){return t=_a({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vo(e,t,n,r){return r!==null&&jc(r),Kr(t,e.child,null,n),e=Jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iw(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=dl(Error(I(422))),Vo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=_a({mode:"visible",children:r.children},i,0,null),o=qn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Kr(t,e.child,null,s),t.child.memoizedState=Su(s),t.memoizedState=wu,o);if(!(t.mode&1))return Vo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=dl(o,r,void 0),Vo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ye||a){if(r=Ne,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Vt(e,i),kt(r,e,i,-1))}return of(),r=dl(Error(I(421))),Vo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,et=gn(i.nextSibling),tt=t,fe=!0,_t=null,e!==null&&(lt[ut++]=jt,lt[ut++]=zt,lt[ut++]=Zn,jt=e.id,zt=e.overflow,Zn=t),t=Jc(t,r.children),t.flags|=4096,t)}function sh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pu(e.return,t,n)}function hl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ug(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if($e(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sh(e,n,t);else if(e.tag===19)sh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(he,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ls(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ls(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hl(t,!0,n,null,o);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ps(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ow(e,t,n){switch(t.tag){case 3:jg(t),Gr();break;case 5:hg(t);break;case 1:Qe(t.type)&&As(t);break;case 4:Hc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Rs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?zg(e,t,n):(re(he,he.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);re(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ug(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,Lg(e,t,n)}return Yt(e,t,n)}var $g,Eu,Bg,Wg;$g=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eu=function(){};Bg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wn(Dt.current);var o=null;switch(n){case"input":i=Hl(e,i),r=Hl(e,r),o=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),o=[];break;case"textarea":i=Gl(e,i),r=Gl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xs)}Ql(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Wg=function(e,t,n,r){n!==r&&(t.flags|=4)};function vi(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sw(e,t,n){var r=t.pendingProps;switch(Fc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Qe(t.type)&&Ns(),Le(t),null;case 3:return r=t.stateNode,Qr(),le(Ke),le(Ue),Yc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_t!==null&&(Au(_t),_t=null))),Eu(e,t),Le(t),null;case 5:Vc(t);var i=Wn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)Bg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Le(t),null}if(e=Wn(Dt.current),Wo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[At]=t,r[Zi]=o,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Ti.length;i++)ie(Ti[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":md(r,o),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ie("invalid",r);break;case"textarea":vd(r,o),ie("invalid",r)}Ql(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),i=["children",""+a]):Wi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ie("scroll",r)}switch(n){case"input":Do(r),gd(r,o,!0);break;case"textarea":Do(r),yd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[At]=t,e[Zi]=r,$g(e,t,!1,!1),t.stateNode=e;e:{switch(s=ql(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ti.length;i++)ie(Ti[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":md(e,r),i=Hl(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ie("invalid",e);break;case"textarea":vd(e,r),i=Gl(e,r),ie("invalid",e);break;default:i=r}Ql(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?_m(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hi(e,l):typeof l=="number"&&Hi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ie("scroll",e):l!=null&&Ec(e,o,l,s))}switch(n){case"input":Do(e),gd(e,r,!1);break;case"textarea":Do(e),yd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Wg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Wn(to.current),Wn(Dt.current),Wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(o=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Le(t),null;case 13:if(le(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&et!==null&&t.mode&1&&!(t.flags&128))sg(),Gr(),t.flags|=98560,o=!1;else if(o=Wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[At]=t}else Gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else _t!==null&&(Au(_t),_t=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?ke===0&&(ke=3):of())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Qr(),Eu(e,t),e===null&&Xi(t.stateNode.containerInfo),Le(t),null;case 10:return $c(t.type._context),Le(t),null;case 17:return Qe(t.type)&&Ns(),Le(t),null;case 19:if(le(he),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)vi(o,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ls(e),s!==null){for(t.flags|=128,vi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(he,he.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>Xr&&(t.flags|=128,r=!0,vi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ls(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!fe)return Le(t),null}else 2*ye()-o.renderingStartTime>Xr&&n!==1073741824&&(t.flags|=128,r=!0,vi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=he.current,re(he,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return rf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function aw(e,t){switch(Fc(t),t.tag){case 1:return Qe(t.type)&&Ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qr(),le(Ke),le(Ue),Yc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vc(t),null;case 13:if(le(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(he),null;case 4:return Qr(),null;case 10:return $c(t.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var Yo=!1,Fe=!1,lw=typeof WeakSet=="function"?WeakSet:Set,D=null;function Nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Cu(e,t,n){try{n()}catch(r){ge(e,t,r)}}var ah=!1;function uw(e,t){if(su=bs,e=Gm(),Mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(au={focusedElem:e,selectionRange:n},bs=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,w=m.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:vt(t.type,y),w);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(_){ge(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return m=ah,ah=!1,m}function Di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Cu(t,n,o)}i=i.next}while(i!==r)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ku(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hg(e){var t=e.alternate;t!==null&&(e.alternate=null,Hg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[Zi],delete t[cu],delete t[V1],delete t[Y1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vg(e){return e.tag===5||e.tag===3||e.tag===4}function lh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xs));else if(r!==4&&(e=e.child,e!==null))for(bu(e,t,n),e=e.sibling;e!==null;)bu(e,t,n),e=e.sibling}function Tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tu(e,t,n),e=e.sibling;e!==null;)Tu(e,t,n),e=e.sibling}var Ae=null,yt=!1;function nn(e,t,n){for(n=n.child;n!==null;)Yg(e,t,n),n=n.sibling}function Yg(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(ua,n)}catch{}switch(n.tag){case 5:Fe||Nr(n,t);case 6:var r=Ae,i=yt;Ae=null,nn(e,t,n),Ae=r,yt=i,Ae!==null&&(yt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(yt?(e=Ae,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Ki(e)):sl(Ae,n.stateNode));break;case 4:r=Ae,i=yt,Ae=n.stateNode.containerInfo,yt=!0,nn(e,t,n),Ae=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Cu(n,t,s),i=i.next}while(i!==r)}nn(e,t,n);break;case 1:if(!Fe&&(Nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,t,a)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,nn(e,t,n),Fe=r):nn(e,t,n);break;default:nn(e,t,n)}}function uh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lw),t.forEach(function(r){var i=yw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,yt=!1;break e;case 3:Ae=a.stateNode.containerInfo,yt=!0;break e;case 4:Ae=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(Ae===null)throw Error(I(160));Yg(o,s,i),Ae=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gg(t,e),t=t.sibling}function Gg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),xt(e),r&4){try{Di(3,e,e.return),va(3,e)}catch(y){ge(e,e.return,y)}try{Di(5,e,e.return)}catch(y){ge(e,e.return,y)}}break;case 1:gt(t,e),xt(e),r&512&&n!==null&&Nr(n,n.return);break;case 5:if(gt(t,e),xt(e),r&512&&n!==null&&Nr(n,n.return),e.flags&32){var i=e.stateNode;try{Hi(i,"")}catch(y){ge(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&pm(i,o),ql(a,s);var u=ql(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?_m(i,f):c==="dangerouslySetInnerHTML"?vm(i,f):c==="children"?Hi(i,f):Ec(i,c,f,u)}switch(a){case"input":Vl(i,o);break;case"textarea":mm(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Mr(i,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?Mr(i,!!o.multiple,o.defaultValue,!0):Mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zi]=o}catch(y){ge(e,e.return,y)}}break;case 6:if(gt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ge(e,e.return,y)}}break;case 3:if(gt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ki(t.containerInfo)}catch(y){ge(e,e.return,y)}break;case 4:gt(t,e),xt(e);break;case 13:gt(t,e),xt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(tf=ye())),r&4&&uh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||c,gt(t,e),Fe=u):gt(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(D=e,c=e.child;c!==null;){for(f=D=c;D!==null;){switch(d=D,h=d.child,d.tag){case 0:case 11:case 14:case 15:Di(4,d,d.return);break;case 1:Nr(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){ge(r,n,y)}}break;case 5:Nr(d,d.return);break;case 22:if(d.memoizedState!==null){fh(f);continue}}h!==null?(h.return=d,D=h):fh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ym("display",s))}catch(y){ge(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ge(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gt(t,e),xt(e),r&4&&uh(e);break;case 21:break;default:gt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vg(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var o=lh(e);Tu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=lh(e);bu(e,a,s);break;default:throw Error(I(161))}}catch(l){ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cw(e,t,n){D=e,Kg(e)}function Kg(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Yo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=Yo;var u=Fe;if(Yo=s,(Fe=l)&&!u)for(D=i;D!==null;)s=D,l=s.child,s.tag===22&&s.memoizedState!==null?dh(i):l!==null?(l.return=s,D=l):dh(i);for(;o!==null;)D=o,Kg(o),o=o.sibling;D=i,Yo=a,Fe=u}ch(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):ch(e)}}function ch(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Fe||va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ki(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Fe||t.flags&512&&ku(t)}catch(d){ge(t,t.return,d)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function fh(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function dh(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{va(4,t)}catch(l){ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ge(t,i,l)}}var o=t.return;try{ku(t)}catch(l){ge(t,o,l)}break;case 5:var s=t.return;try{ku(t)}catch(l){ge(t,s,l)}}}catch(l){ge(t,t.return,l)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var fw=Math.ceil,zs=Zt.ReactCurrentDispatcher,Zc=Zt.ReactCurrentOwner,dt=Zt.ReactCurrentBatchConfig,Q=0,Ne=null,we=null,Re=0,Ze=0,Ar=Rn(0),ke=0,oo=null,tr=0,ya=0,ef=0,Mi=null,Ve=null,tf=0,Xr=1/0,Lt=null,Us=!1,Iu=null,yn=null,Go=!1,fn=null,$s=0,Li=0,xu=null,ms=-1,gs=0;function Be(){return Q&6?ye():ms!==-1?ms:ms=ye()}function _n(e){return e.mode&1?Q&2&&Re!==0?Re&-Re:K1.transition!==null?(gs===0&&(gs=Om()),gs):(e=J,e!==0||(e=window.event,e=e===void 0?16:jm(e.type)),e):1}function kt(e,t,n,r){if(50<Li)throw Li=0,xu=null,Error(I(185));vo(e,n,r),(!(Q&2)||e!==Ne)&&(e===Ne&&(!(Q&2)&&(ya|=n),ke===4&&ln(e,Re)),qe(e,r),n===1&&Q===0&&!(t.mode&1)&&(Xr=ye()+500,pa&&Dn()))}function qe(e,t){var n=e.callbackNode;K0(e,t);var r=ks(e,e===Ne?Re:0);if(r===0)n!==null&&Sd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sd(n),t===1)e.tag===0?G1(hh.bind(null,e)):rg(hh.bind(null,e)),W1(function(){!(Q&6)&&Dn()}),n=null;else{switch(Pm(r)){case 1:n=Ic;break;case 4:n=Nm;break;case 16:n=Cs;break;case 536870912:n=Am;break;default:n=Cs}n=nv(n,Qg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qg(e,t){if(ms=-1,gs=0,Q&6)throw Error(I(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var r=ks(e,e===Ne?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bs(e,r);else{t=r;var i=Q;Q|=2;var o=Xg();(Ne!==e||Re!==t)&&(Lt=null,Xr=ye()+500,Qn(e,t));do try{pw();break}catch(a){qg(e,a)}while(1);Uc(),zs.current=o,Q=i,we!==null?t=0:(Ne=null,Re=0,t=ke)}if(t!==0){if(t===2&&(i=tu(e),i!==0&&(r=i,t=Nu(e,i))),t===1)throw n=oo,Qn(e,0),ln(e,r),qe(e,ye()),n;if(t===6)ln(e,r);else{if(i=e.current.alternate,!(r&30)&&!dw(i)&&(t=Bs(e,r),t===2&&(o=tu(e),o!==0&&(r=o,t=Nu(e,o))),t===1))throw n=oo,Qn(e,0),ln(e,r),qe(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:jn(e,Ve,Lt);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=tf+500-ye(),10<t)){if(ks(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=uu(jn.bind(null,e,Ve,Lt),t);break}jn(e,Ve,Lt);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ct(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fw(r/1960))-r,10<r){e.timeoutHandle=uu(jn.bind(null,e,Ve,Lt),r);break}jn(e,Ve,Lt);break;case 5:jn(e,Ve,Lt);break;default:throw Error(I(329))}}}return qe(e,ye()),e.callbackNode===n?Qg.bind(null,e):null}function Nu(e,t){var n=Mi;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=Bs(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&Au(t)),e}function Au(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function dw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~ef,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function hh(e){if(Q&6)throw Error(I(327));Ur();var t=ks(e,0);if(!(t&1))return qe(e,ye()),null;var n=Bs(e,t);if(e.tag!==0&&n===2){var r=tu(e);r!==0&&(t=r,n=Nu(e,r))}if(n===1)throw n=oo,Qn(e,0),ln(e,t),qe(e,ye()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,Ve,Lt),qe(e,ye()),null}function nf(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Xr=ye()+500,pa&&Dn())}}function nr(e){fn!==null&&fn.tag===0&&!(Q&6)&&Ur();var t=Q;Q|=1;var n=dt.transition,r=J;try{if(dt.transition=null,J=1,e)return e()}finally{J=r,dt.transition=n,Q=t,!(Q&6)&&Dn()}}function rf(){Ze=Ar.current,le(Ar)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,B1(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ns();break;case 3:Qr(),le(Ke),le(Ue),Yc();break;case 5:Vc(r);break;case 4:Qr();break;case 13:le(he);break;case 19:le(he);break;case 10:$c(r.type._context);break;case 22:case 23:rf()}n=n.return}if(Ne=e,we=e=wn(e.current,null),Re=Ze=t,ke=0,oo=null,ef=ya=tr=0,Ve=Mi=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Bn=null}return e}function qg(e,t){do{var n=we;try{if(Uc(),ds.current=js,Fs){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fs=!1}if(er=0,Ie=Ee=pe=null,Ri=!1,no=0,Zc.current=null,n===null||n.return===null){ke=1,oo=t,we=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=eh(s);if(h!==null){h.flags&=-257,th(h,s,a,o,t),h.mode&1&&Zd(o,u,t),t=h,l=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(l),t.updateQueue=y}else m.add(l);break e}else{if(!(t&1)){Zd(o,u,t),of();break e}l=Error(I(426))}}else if(fe&&a.mode&1){var w=eh(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),th(w,s,a,o,t),jc(qr(l,a));break e}}o=l=qr(l,a),ke!==4&&(ke=2),Mi===null?Mi=[o]:Mi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Rg(o,l,t);Yd(o,g);break e;case 1:a=l;var p=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yn===null||!yn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=Dg(o,a,t);Yd(o,_);break e}}o=o.return}while(o!==null)}Zg(n)}catch(k){t=k,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function Xg(){var e=zs.current;return zs.current=js,e===null?js:e}function of(){(ke===0||ke===3||ke===2)&&(ke=4),Ne===null||!(tr&268435455)&&!(ya&268435455)||ln(Ne,Re)}function Bs(e,t){var n=Q;Q|=2;var r=Xg();(Ne!==e||Re!==t)&&(Lt=null,Qn(e,t));do try{hw();break}catch(i){qg(e,i)}while(1);if(Uc(),Q=n,zs.current=r,we!==null)throw Error(I(261));return Ne=null,Re=0,ke}function hw(){for(;we!==null;)Jg(we)}function pw(){for(;we!==null&&!z0();)Jg(we)}function Jg(e){var t=tv(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Zg(e):we=t,Zc.current=null}function Zg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=aw(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,we=null;return}}else if(n=sw(n,t,Ze),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);ke===0&&(ke=5)}function jn(e,t,n){var r=J,i=dt.transition;try{dt.transition=null,J=1,mw(e,t,n,r)}finally{dt.transition=i,J=r}return null}function mw(e,t,n,r){do Ur();while(fn!==null);if(Q&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Q0(e,o),e===Ne&&(we=Ne=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,nv(Cs,function(){return Ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dt.transition,dt.transition=null;var s=J;J=1;var a=Q;Q|=4,Zc.current=null,uw(e,n),Gg(n,e),M1(au),bs=!!su,au=su=null,e.current=n,cw(n),U0(),Q=a,J=s,dt.transition=o}else e.current=n;if(Go&&(Go=!1,fn=e,$s=i),o=e.pendingLanes,o===0&&(yn=null),W0(n.stateNode),qe(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Us)throw Us=!1,e=Iu,Iu=null,e;return $s&1&&e.tag!==0&&Ur(),o=e.pendingLanes,o&1?e===xu?Li++:(Li=0,xu=e):Li=0,Dn(),null}function Ur(){if(fn!==null){var e=Pm($s),t=dt.transition,n=J;try{if(dt.transition=null,J=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,$s=0,Q&6)throw Error(I(331));var i=Q;for(Q|=4,D=e.current;D!==null;){var o=D,s=o.child;if(D.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Di(8,c,o)}var f=c.child;if(f!==null)f.return=c,D=f;else for(;D!==null;){c=D;var d=c.sibling,h=c.return;if(Hg(c),c===u){D=null;break}if(d!==null){d.return=h,D=d;break}D=h}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}D=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,D=s;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Di(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,D=g;break e}D=o.return}}var p=e.current;for(D=p;D!==null;){s=D;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,D=v;else e:for(s=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:va(9,a)}}catch(k){ge(a,a.return,k)}if(a===s){D=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,D=_;break e}D=a.return}}if(Q=i,Dn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(ua,e)}catch{}r=!0}return r}finally{J=n,dt.transition=t}}return!1}function ph(e,t,n){t=qr(n,t),t=Rg(e,t,1),e=vn(e,t,1),t=Be(),e!==null&&(vo(e,1,t),qe(e,t))}function ge(e,t,n){if(e.tag===3)ph(e,e,n);else for(;t!==null;){if(t.tag===3){ph(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=qr(n,e),e=Dg(t,e,1),t=vn(t,e,1),e=Be(),t!==null&&(vo(t,1,e),qe(t,e));break}}t=t.return}}function gw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Re&n)===n&&(ke===4||ke===3&&(Re&130023424)===Re&&500>ye()-tf?Qn(e,0):ef|=n),qe(e,t)}function ev(e,t){t===0&&(e.mode&1?(t=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):t=1);var n=Be();e=Vt(e,t),e!==null&&(vo(e,t,n),qe(e,n))}function vw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ev(e,n)}function yw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),ev(e,n)}var tv;tv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ye=!1,ow(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,fe&&t.flags&1048576&&ig(t,Ps,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ps(e,t),e=t.pendingProps;var i=Yr(t,Ue.current);zr(t,n),i=Kc(null,t,r,e,i,n);var o=Qc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(o=!0,As(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wc(t),i.updater=ma,t.stateNode=i,i._reactInternals=t,gu(t,r,e,n),t=_u(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&Lc(t),$e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ps(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ww(r),e=vt(r,e),i){case 0:t=yu(null,t,r,e,n);break e;case 1:t=ih(null,t,r,e,n);break e;case 11:t=nh(null,t,r,e,n);break e;case 14:t=rh(null,t,r,vt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),yu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),ih(e,t,r,i,n);case 3:e:{if(jg(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,lg(e,t),Ms(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=qr(Error(I(423)),t),t=oh(e,t,r,n,i);break e}else if(r!==i){i=qr(Error(I(424)),t),t=oh(e,t,r,n,i);break e}else for(et=gn(t.stateNode.containerInfo.firstChild),tt=t,fe=!0,_t=null,n=dg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gr(),r===i){t=Yt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return hg(t),e===null&&hu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,lu(r,i)?s=null:o!==null&&lu(r,o)&&(t.flags|=32),Fg(e,t),$e(e,t,s,n),t.child;case 6:return e===null&&hu(t),null;case 13:return zg(e,t,n);case 4:return Hc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),nh(e,t,r,i,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,re(Rs,r._currentValue),r._currentValue=s,o!==null)if(Tt(o.value,s)){if(o.children===i.children&&!Ke.current){t=Yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=$t(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}$e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zr(t,n),i=ht(i),r=r(i),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,i=vt(r,t.pendingProps),i=vt(r.type,i),rh(e,t,r,i,n);case 15:return Mg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),ps(e,t),t.tag=1,Qe(r)?(e=!0,As(t)):e=!1,zr(t,n),cg(t,r,i),gu(t,r,i,n),_u(null,t,r,!0,e,n);case 19:return Ug(e,t,n);case 22:return Lg(e,t,n)}throw Error(I(156,t.tag))};function nv(e,t){return xm(e,t)}function _w(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new _w(e,t,n,r)}function sf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ww(e){if(typeof e=="function")return sf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kc)return 11;if(e===bc)return 14}return 2}function wn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")sf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wr:return qn(n.children,i,o,t);case Cc:s=8,i|=8;break;case Ul:return e=ct(12,n,t,i|2),e.elementType=Ul,e.lanes=o,e;case $l:return e=ct(13,n,t,i),e.elementType=$l,e.lanes=o,e;case Bl:return e=ct(19,n,t,i),e.elementType=Bl,e.lanes=o,e;case fm:return _a(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case um:s=10;break e;case cm:s=9;break e;case kc:s=11;break e;case bc:s=14;break e;case on:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=ct(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function _a(e,t,n,r){return e=ct(22,e,r,t),e.elementType=fm,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qa(0),this.expirationTimes=Qa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function af(e,t,n,r,i,o,s,a,l){return e=new Sw(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(o),e}function Ew(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rv(e){if(!e)return Tn;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Qe(n))return ng(e,n,t)}return t}function iv(e,t,n,r,i,o,s,a,l){return e=af(n,r,!0,e,i,o,s,a,l),e.context=rv(null),n=e.current,r=Be(),i=_n(n),o=$t(r,i),o.callback=t??null,vn(n,o,i),e.current.lanes=i,vo(e,i,r),qe(e,r),e}function wa(e,t,n,r){var i=t.current,o=Be(),s=_n(i);return n=rv(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(i,t,s),e!==null&&(kt(e,i,s,o),fs(e,i,s)),s}function Ws(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lf(e,t){mh(e,t),(e=e.alternate)&&mh(e,t)}function Cw(){return null}var ov=typeof reportError=="function"?reportError:function(e){console.error(e)};function uf(e){this._internalRoot=e}Sa.prototype.render=uf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));wa(e,t,null,null)};Sa.prototype.unmount=uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){wa(null,e,null,null)}),t[Ht]=null}};function Sa(e){this._internalRoot=e}Sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&Fm(e)}};function cf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gh(){}function kw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ws(s);o.call(u)}}var s=iv(t,r,e,0,null,!1,!1,"",gh);return e._reactRootContainer=s,e[Ht]=s.current,Xi(e.nodeType===8?e.parentNode:e),nr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ws(l);a.call(u)}}var l=af(e,0,!1,null,null,!1,!1,"",gh);return e._reactRootContainer=l,e[Ht]=l.current,Xi(e.nodeType===8?e.parentNode:e),nr(function(){wa(t,l,n,r)}),l}function Ca(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ws(s);a.call(l)}}wa(t,s,e,i)}else s=kw(n,t,e,i,r);return Ws(s)}Rm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bi(t.pendingLanes);n!==0&&(xc(t,n|1),qe(t,ye()),!(Q&6)&&(Xr=ye()+500,Dn()))}break;case 13:nr(function(){var r=Vt(e,1);if(r!==null){var i=Be();kt(r,e,1,i)}}),lf(e,1)}};Nc=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=Be();kt(t,e,134217728,n)}lf(e,134217728)}};Dm=function(e){if(e.tag===13){var t=_n(e),n=Vt(e,t);if(n!==null){var r=Be();kt(n,e,t,r)}lf(e,t)}};Mm=function(){return J};Lm=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Jl=function(e,t,n){switch(t){case"input":if(Vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ha(r);if(!i)throw Error(I(90));hm(r),Vl(r,i)}}}break;case"textarea":mm(e,n);break;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}};Em=nf;Cm=nr;var bw={usingClientEntryPoint:!1,Events:[_o,kr,ha,wm,Sm,nf]},yi={findFiberByHostInstance:$n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Tw={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tm(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||Cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{ua=Ko.inject(Tw),Rt=Ko}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bw;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(t))throw Error(I(200));return Ew(e,t,null,n)};it.createRoot=function(e,t){if(!cf(e))throw Error(I(299));var n=!1,r="",i=ov;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=af(e,1,!1,null,null,n,!1,r,i),e[Ht]=t.current,Xi(e.nodeType===8?e.parentNode:e),new uf(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Tm(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return nr(e)};it.hydrate=function(e,t,n){if(!Ea(t))throw Error(I(200));return Ca(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!cf(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=iv(t,null,e,1,n??null,i,!1,o,s),e[Ht]=t.current,Xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Sa(t)};it.render=function(e,t,n){if(!Ea(t))throw Error(I(200));return Ca(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(I(40));return e._reactRootContainer?(nr(function(){Ca(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};it.unstable_batchedUpdates=nf;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ea(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Ca(e,t,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";function sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv)}catch(e){console.error(e)}}sv(),im.exports=it;var Iw=im.exports,vh=Iw;jl.createRoot=vh.createRoot,jl.hydrateRoot=vh.hydrateRoot;var av={exports:{}};(function(e,t){(function(n,r){e.exports=r(un)})(typeof self<"u"?self:n0,n=>(()=>{var r={7403:(a,l,u)=>{u.d(l,{default:()=>Ln});var c=u(4087),f=u.n(c);const d=function(T){return new RegExp(/<[a-z][\s\S]*>/i).test(T)},h=function(T){var x=document.createElement("div");return x.innerHTML=T,x.childNodes},m=function(T,x){return Math.floor(Math.random()*(x-T+1))+T};var y="TYPE_CHARACTER",w="REMOVE_CHARACTER",g="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",_="CALL_FUNCTION",k="ADD_HTML_TAG_ELEMENT",C="CHANGE_DELETE_SPEED",S="CHANGE_DELAY",b="CHANGE_CURSOR",A="PASTE_STRING",O="HTML_TAG";function j(T,x){var P=Object.keys(T);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(T);x&&(M=M.filter(function(Z){return Object.getOwnPropertyDescriptor(T,Z).enumerable})),P.push.apply(P,M)}return P}function V(T){for(var x=1;x<arguments.length;x++){var P=arguments[x]!=null?arguments[x]:{};x%2?j(Object(P),!0).forEach(function(M){$(T,M,P[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(P)):j(Object(P)).forEach(function(M){Object.defineProperty(T,M,Object.getOwnPropertyDescriptor(P,M))})}return T}function z(T){return function(x){if(Array.isArray(x))return U(x)}(T)||function(x){if(typeof Symbol<"u"&&x[Symbol.iterator]!=null||x["@@iterator"]!=null)return Array.from(x)}(T)||function(x,P){if(x){if(typeof x=="string")return U(x,P);var M=Object.prototype.toString.call(x).slice(8,-1);return M==="Object"&&x.constructor&&(M=x.constructor.name),M==="Map"||M==="Set"?Array.from(x):M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?U(x,P):void 0}}(T)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function U(T,x){(x==null||x>T.length)&&(x=T.length);for(var P=0,M=new Array(x);P<x;P++)M[P]=T[P];return M}function X(T,x){for(var P=0;P<x.length;P++){var M=x[P];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(T,M.key,M)}}function $(T,x,P){return x in T?Object.defineProperty(T,x,{value:P,enumerable:!0,configurable:!0,writable:!0}):T[x]=P,T}const Ln=function(){function T(M,Z){var E=this;if(function(F,G){if(!(F instanceof G))throw new TypeError("Cannot call a class as a function")}(this,T),$(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),$(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),$(this,"setupWrapperElement",function(){E.state.elements.container&&(E.state.elements.wrapper.className=E.options.wrapperClassName,E.state.elements.cursor.className=E.options.cursorClassName,E.state.elements.cursor.innerHTML=E.options.cursor,E.state.elements.container.innerHTML="",E.state.elements.container.appendChild(E.state.elements.wrapper),E.state.elements.container.appendChild(E.state.elements.cursor))}),$(this,"start",function(){return E.state.eventLoopPaused=!1,E.runEventLoop(),E}),$(this,"pause",function(){return E.state.eventLoopPaused=!0,E}),$(this,"stop",function(){return E.state.eventLoop&&((0,c.cancel)(E.state.eventLoop),E.state.eventLoop=null),E}),$(this,"pauseFor",function(F){return E.addEventToQueue(v,{ms:F}),E}),$(this,"typeOutAllStrings",function(){return typeof E.options.strings=="string"?(E.typeString(E.options.strings).pauseFor(E.options.pauseFor),E):(E.options.strings.forEach(function(F){E.typeString(F).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed)}),E)}),$(this,"typeString",function(F){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(d(F))return E.typeOutHTMLString(F,G);if(F){var _e=E.options||{},Se=_e.stringSplitter,te=typeof Se=="function"?Se(F):F.split("");E.typeCharacters(te,G)}return E}),$(this,"pasteString",function(F){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return d(F)?E.typeOutHTMLString(F,G,!0):(F&&E.addEventToQueue(A,{character:F,node:G}),E)}),$(this,"typeOutHTMLString",function(F){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,_e=arguments.length>2?arguments[2]:void 0,Se=h(F);if(Se.length>0)for(var te=0;te<Se.length;te++){var at=Se[te],gr=at.innerHTML;at&&at.nodeType!==3?(at.innerHTML="",E.addEventToQueue(k,{node:at,parentNode:G}),_e?E.pasteString(gr,at):E.typeString(gr,at)):at.textContent&&(_e?E.pasteString(at.textContent,G):E.typeString(at.textContent,G))}return E}),$(this,"deleteAll",function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return E.addEventToQueue(g,{speed:F}),E}),$(this,"changeDeleteSpeed",function(F){if(!F)throw new Error("Must provide new delete speed");return E.addEventToQueue(C,{speed:F}),E}),$(this,"changeDelay",function(F){if(!F)throw new Error("Must provide new delay");return E.addEventToQueue(S,{delay:F}),E}),$(this,"changeCursor",function(F){if(!F)throw new Error("Must provide new cursor");return E.addEventToQueue(b,{cursor:F}),E}),$(this,"deleteChars",function(F){if(!F)throw new Error("Must provide amount of characters to delete");for(var G=0;G<F;G++)E.addEventToQueue(w);return E}),$(this,"callFunction",function(F,G){if(!F||typeof F!="function")throw new Error("Callbak must be a function");return E.addEventToQueue(_,{cb:F,thisArg:G}),E}),$(this,"typeCharacters",function(F){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(_e){E.addEventToQueue(y,{character:_e,node:G})}),E}),$(this,"removeCharacters",function(F){if(!F||!Array.isArray(F))throw new Error("Characters must be an array");return F.forEach(function(){E.addEventToQueue(w)}),E}),$(this,"addEventToQueue",function(F,G){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return E.addEventToStateProperty(F,G,_e,"eventQueue")}),$(this,"addReverseCalledEvent",function(F,G){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Se=E.options.loop;return Se?E.addEventToStateProperty(F,G,_e,"reverseCalledEvents"):E}),$(this,"addEventToStateProperty",function(F,G){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Se=arguments.length>3?arguments[3]:void 0,te={eventName:F,eventArgs:G||{}};return E.state[Se]=_e?[te].concat(z(E.state[Se])):[].concat(z(E.state[Se]),[te]),E}),$(this,"runEventLoop",function(){E.state.lastFrameTime||(E.state.lastFrameTime=Date.now());var F=Date.now(),G=F-E.state.lastFrameTime;if(!E.state.eventQueue.length){if(!E.options.loop)return;E.state.eventQueue=z(E.state.calledEvents),E.state.calledEvents=[],E.options=V({},E.state.initialOptions)}if(E.state.eventLoop=f()(E.runEventLoop),!E.state.eventLoopPaused){if(E.state.pauseUntil){if(F<E.state.pauseUntil)return;E.state.pauseUntil=null}var _e,Se=z(E.state.eventQueue),te=Se.shift();if(!(G<=(_e=te.eventName===p||te.eventName===w?E.options.deleteSpeed==="natural"?m(40,80):E.options.deleteSpeed:E.options.delay==="natural"?m(120,160):E.options.delay))){var at=te.eventName,gr=te.eventArgs;switch(E.logInDevMode({currentEvent:te,state:E.state,delay:_e}),at){case A:case y:var za=gr.character,id=gr.node,od=document.createTextNode(za),ci=od;E.options.onCreateTextNode&&typeof E.options.onCreateTextNode=="function"&&(ci=E.options.onCreateTextNode(za,od)),ci&&(id?id.appendChild(ci):E.state.elements.wrapper.appendChild(ci)),E.state.visibleNodes=[].concat(z(E.state.visibleNodes),[{type:"TEXT_NODE",character:za,node:ci}]);break;case w:Se.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case v:var K_=te.eventArgs.ms;E.state.pauseUntil=Date.now()+parseInt(K_);break;case _:var sd=te.eventArgs,Q_=sd.cb,q_=sd.thisArg;Q_.call(q_,{elements:E.state.elements});break;case k:var ad=te.eventArgs,Ua=ad.node,$a=ad.parentNode;$a?$a.appendChild(Ua):E.state.elements.wrapper.appendChild(Ua),E.state.visibleNodes=[].concat(z(E.state.visibleNodes),[{type:O,node:Ua,parentNode:$a||E.state.elements.wrapper}]);break;case g:var X_=E.state.visibleNodes,Ba=gr.speed,Ao=[];Ba&&Ao.push({eventName:C,eventArgs:{speed:Ba,temp:!0}});for(var ld=0,J_=X_.length;ld<J_;ld++)Ao.push({eventName:p,eventArgs:{removingCharacterNode:!1}});Ba&&Ao.push({eventName:C,eventArgs:{speed:E.options.deleteSpeed,temp:!0}}),Se.unshift.apply(Se,Ao);break;case p:var Z_=te.eventArgs.removingCharacterNode;if(E.state.visibleNodes.length){var Wa=E.state.visibleNodes.pop(),e0=Wa.type,Oo=Wa.node,t0=Wa.character;E.options.onRemoveNode&&typeof E.options.onRemoveNode=="function"&&E.options.onRemoveNode({node:Oo,character:t0}),Oo&&Oo.parentNode.removeChild(Oo),e0===O&&Z_&&Se.unshift({eventName:p,eventArgs:{}})}break;case C:E.options.deleteSpeed=te.eventArgs.speed;break;case S:E.options.delay=te.eventArgs.delay;break;case b:E.options.cursor=te.eventArgs.cursor,E.state.elements.cursor.innerHTML=te.eventArgs.cursor}E.options.loop&&(te.eventName===p||te.eventArgs&&te.eventArgs.temp||(E.state.calledEvents=[].concat(z(E.state.calledEvents),[te]))),E.state.eventQueue=Se,E.state.lastFrameTime=F}}}),M)if(typeof M=="string"){var It=document.querySelector(M);if(!It)throw new Error("Could not find container element");this.state.elements.container=It}else this.state.elements.container=M;Z&&(this.options=V(V({},this.options),Z)),this.state.initialOptions=V({},this.options),this.init()}var x,P;return x=T,(P=[{key:"init",value:function(){var M,Z;this.setupWrapperElement(),this.addEventToQueue(b,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(M=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Z=document.createElement("style")).appendChild(document.createTextNode(M)),document.head.appendChild(Z),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(M){this.options.devMode&&console.log(M)}}])&&X(x.prototype,P),Object.defineProperty(x,"prototype",{writable:!1}),T}()},8552:(a,l,u)=>{var c=u(852)(u(5639),"DataView");a.exports=c},1989:(a,l,u)=>{var c=u(1789),f=u(401),d=u(7667),h=u(1327),m=u(1866);function y(w){var g=-1,p=w==null?0:w.length;for(this.clear();++g<p;){var v=w[g];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=f,y.prototype.get=d,y.prototype.has=h,y.prototype.set=m,a.exports=y},8407:(a,l,u)=>{var c=u(7040),f=u(4125),d=u(2117),h=u(7518),m=u(4705);function y(w){var g=-1,p=w==null?0:w.length;for(this.clear();++g<p;){var v=w[g];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=f,y.prototype.get=d,y.prototype.has=h,y.prototype.set=m,a.exports=y},7071:(a,l,u)=>{var c=u(852)(u(5639),"Map");a.exports=c},3369:(a,l,u)=>{var c=u(4785),f=u(1285),d=u(6e3),h=u(9916),m=u(5265);function y(w){var g=-1,p=w==null?0:w.length;for(this.clear();++g<p;){var v=w[g];this.set(v[0],v[1])}}y.prototype.clear=c,y.prototype.delete=f,y.prototype.get=d,y.prototype.has=h,y.prototype.set=m,a.exports=y},3818:(a,l,u)=>{var c=u(852)(u(5639),"Promise");a.exports=c},8525:(a,l,u)=>{var c=u(852)(u(5639),"Set");a.exports=c},8668:(a,l,u)=>{var c=u(3369),f=u(619),d=u(2385);function h(m){var y=-1,w=m==null?0:m.length;for(this.__data__=new c;++y<w;)this.add(m[y])}h.prototype.add=h.prototype.push=f,h.prototype.has=d,a.exports=h},6384:(a,l,u)=>{var c=u(8407),f=u(7465),d=u(3779),h=u(7599),m=u(4758),y=u(4309);function w(g){var p=this.__data__=new c(g);this.size=p.size}w.prototype.clear=f,w.prototype.delete=d,w.prototype.get=h,w.prototype.has=m,w.prototype.set=y,a.exports=w},2705:(a,l,u)=>{var c=u(5639).Symbol;a.exports=c},1149:(a,l,u)=>{var c=u(5639).Uint8Array;a.exports=c},577:(a,l,u)=>{var c=u(852)(u(5639),"WeakMap");a.exports=c},4963:a=>{a.exports=function(l,u){for(var c=-1,f=l==null?0:l.length,d=0,h=[];++c<f;){var m=l[c];u(m,c,l)&&(h[d++]=m)}return h}},4636:(a,l,u)=>{var c=u(2545),f=u(5694),d=u(1469),h=u(4144),m=u(5776),y=u(6719),w=Object.prototype.hasOwnProperty;a.exports=function(g,p){var v=d(g),_=!v&&f(g),k=!v&&!_&&h(g),C=!v&&!_&&!k&&y(g),S=v||_||k||C,b=S?c(g.length,String):[],A=b.length;for(var O in g)!p&&!w.call(g,O)||S&&(O=="length"||k&&(O=="offset"||O=="parent")||C&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||m(O,A))||b.push(O);return b}},2488:a=>{a.exports=function(l,u){for(var c=-1,f=u.length,d=l.length;++c<f;)l[d+c]=u[c];return l}},2908:a=>{a.exports=function(l,u){for(var c=-1,f=l==null?0:l.length;++c<f;)if(u(l[c],c,l))return!0;return!1}},8470:(a,l,u)=>{var c=u(7813);a.exports=function(f,d){for(var h=f.length;h--;)if(c(f[h][0],d))return h;return-1}},8866:(a,l,u)=>{var c=u(2488),f=u(1469);a.exports=function(d,h,m){var y=h(d);return f(d)?y:c(y,m(d))}},4239:(a,l,u)=>{var c=u(2705),f=u(9607),d=u(2333),h=c?c.toStringTag:void 0;a.exports=function(m){return m==null?m===void 0?"[object Undefined]":"[object Null]":h&&h in Object(m)?f(m):d(m)}},9454:(a,l,u)=>{var c=u(4239),f=u(7005);a.exports=function(d){return f(d)&&c(d)=="[object Arguments]"}},939:(a,l,u)=>{var c=u(2492),f=u(7005);a.exports=function d(h,m,y,w,g){return h===m||(h==null||m==null||!f(h)&&!f(m)?h!=h&&m!=m:c(h,m,y,w,d,g))}},2492:(a,l,u)=>{var c=u(6384),f=u(7114),d=u(8351),h=u(6096),m=u(4160),y=u(1469),w=u(4144),g=u(6719),p="[object Arguments]",v="[object Array]",_="[object Object]",k=Object.prototype.hasOwnProperty;a.exports=function(C,S,b,A,O,j){var V=y(C),z=y(S),U=V?v:m(C),X=z?v:m(S),$=(U=U==p?_:U)==_,Ln=(X=X==p?_:X)==_,T=U==X;if(T&&w(C)){if(!w(S))return!1;V=!0,$=!1}if(T&&!$)return j||(j=new c),V||g(C)?f(C,S,b,A,O,j):d(C,S,U,b,A,O,j);if(!(1&b)){var x=$&&k.call(C,"__wrapped__"),P=Ln&&k.call(S,"__wrapped__");if(x||P){var M=x?C.value():C,Z=P?S.value():S;return j||(j=new c),O(M,Z,b,A,j)}}return!!T&&(j||(j=new c),h(C,S,b,A,O,j))}},8458:(a,l,u)=>{var c=u(3560),f=u(5346),d=u(3218),h=u(346),m=/^\[object .+?Constructor\]$/,y=Function.prototype,w=Object.prototype,g=y.toString,p=w.hasOwnProperty,v=RegExp("^"+g.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(_){return!(!d(_)||f(_))&&(c(_)?v:m).test(h(_))}},8749:(a,l,u)=>{var c=u(4239),f=u(1780),d=u(7005),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,a.exports=function(m){return d(m)&&f(m.length)&&!!h[c(m)]}},280:(a,l,u)=>{var c=u(5726),f=u(6916),d=Object.prototype.hasOwnProperty;a.exports=function(h){if(!c(h))return f(h);var m=[];for(var y in Object(h))d.call(h,y)&&y!="constructor"&&m.push(y);return m}},2545:a=>{a.exports=function(l,u){for(var c=-1,f=Array(l);++c<l;)f[c]=u(c);return f}},1717:a=>{a.exports=function(l){return function(u){return l(u)}}},4757:a=>{a.exports=function(l,u){return l.has(u)}},4429:(a,l,u)=>{var c=u(5639)["__core-js_shared__"];a.exports=c},7114:(a,l,u)=>{var c=u(8668),f=u(2908),d=u(4757);a.exports=function(h,m,y,w,g,p){var v=1&y,_=h.length,k=m.length;if(_!=k&&!(v&&k>_))return!1;var C=p.get(h),S=p.get(m);if(C&&S)return C==m&&S==h;var b=-1,A=!0,O=2&y?new c:void 0;for(p.set(h,m),p.set(m,h);++b<_;){var j=h[b],V=m[b];if(w)var z=v?w(V,j,b,m,h,p):w(j,V,b,h,m,p);if(z!==void 0){if(z)continue;A=!1;break}if(O){if(!f(m,function(U,X){if(!d(O,X)&&(j===U||g(j,U,y,w,p)))return O.push(X)})){A=!1;break}}else if(j!==V&&!g(j,V,y,w,p)){A=!1;break}}return p.delete(h),p.delete(m),A}},8351:(a,l,u)=>{var c=u(2705),f=u(1149),d=u(7813),h=u(7114),m=u(8776),y=u(1814),w=c?c.prototype:void 0,g=w?w.valueOf:void 0;a.exports=function(p,v,_,k,C,S,b){switch(_){case"[object DataView]":if(p.byteLength!=v.byteLength||p.byteOffset!=v.byteOffset)return!1;p=p.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=v.byteLength||!S(new f(p),new f(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return d(+p,+v);case"[object Error]":return p.name==v.name&&p.message==v.message;case"[object RegExp]":case"[object String]":return p==v+"";case"[object Map]":var A=m;case"[object Set]":var O=1&k;if(A||(A=y),p.size!=v.size&&!O)return!1;var j=b.get(p);if(j)return j==v;k|=2,b.set(p,v);var V=h(A(p),A(v),k,C,S,b);return b.delete(p),V;case"[object Symbol]":if(g)return g.call(p)==g.call(v)}return!1}},6096:(a,l,u)=>{var c=u(8234),f=Object.prototype.hasOwnProperty;a.exports=function(d,h,m,y,w,g){var p=1&m,v=c(d),_=v.length;if(_!=c(h).length&&!p)return!1;for(var k=_;k--;){var C=v[k];if(!(p?C in h:f.call(h,C)))return!1}var S=g.get(d),b=g.get(h);if(S&&b)return S==h&&b==d;var A=!0;g.set(d,h),g.set(h,d);for(var O=p;++k<_;){var j=d[C=v[k]],V=h[C];if(y)var z=p?y(V,j,C,h,d,g):y(j,V,C,d,h,g);if(!(z===void 0?j===V||w(j,V,m,y,g):z)){A=!1;break}O||(O=C=="constructor")}if(A&&!O){var U=d.constructor,X=h.constructor;U==X||!("constructor"in d)||!("constructor"in h)||typeof U=="function"&&U instanceof U&&typeof X=="function"&&X instanceof X||(A=!1)}return g.delete(d),g.delete(h),A}},1957:(a,l,u)=>{var c=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g;a.exports=c},8234:(a,l,u)=>{var c=u(8866),f=u(9551),d=u(3674);a.exports=function(h){return c(h,d,f)}},5050:(a,l,u)=>{var c=u(7019);a.exports=function(f,d){var h=f.__data__;return c(d)?h[typeof d=="string"?"string":"hash"]:h.map}},852:(a,l,u)=>{var c=u(8458),f=u(7801);a.exports=function(d,h){var m=f(d,h);return c(m)?m:void 0}},9607:(a,l,u)=>{var c=u(2705),f=Object.prototype,d=f.hasOwnProperty,h=f.toString,m=c?c.toStringTag:void 0;a.exports=function(y){var w=d.call(y,m),g=y[m];try{y[m]=void 0;var p=!0}catch{}var v=h.call(y);return p&&(w?y[m]=g:delete y[m]),v}},9551:(a,l,u)=>{var c=u(4963),f=u(479),d=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,m=h?function(y){return y==null?[]:(y=Object(y),c(h(y),function(w){return d.call(y,w)}))}:f;a.exports=m},4160:(a,l,u)=>{var c=u(8552),f=u(7071),d=u(3818),h=u(8525),m=u(577),y=u(4239),w=u(346),g="[object Map]",p="[object Promise]",v="[object Set]",_="[object WeakMap]",k="[object DataView]",C=w(c),S=w(f),b=w(d),A=w(h),O=w(m),j=y;(c&&j(new c(new ArrayBuffer(1)))!=k||f&&j(new f)!=g||d&&j(d.resolve())!=p||h&&j(new h)!=v||m&&j(new m)!=_)&&(j=function(V){var z=y(V),U=z=="[object Object]"?V.constructor:void 0,X=U?w(U):"";if(X)switch(X){case C:return k;case S:return g;case b:return p;case A:return v;case O:return _}return z}),a.exports=j},7801:a=>{a.exports=function(l,u){return l==null?void 0:l[u]}},1789:(a,l,u)=>{var c=u(4536);a.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:a=>{a.exports=function(l){var u=this.has(l)&&delete this.__data__[l];return this.size-=u?1:0,u}},7667:(a,l,u)=>{var c=u(4536),f=Object.prototype.hasOwnProperty;a.exports=function(d){var h=this.__data__;if(c){var m=h[d];return m==="__lodash_hash_undefined__"?void 0:m}return f.call(h,d)?h[d]:void 0}},1327:(a,l,u)=>{var c=u(4536),f=Object.prototype.hasOwnProperty;a.exports=function(d){var h=this.__data__;return c?h[d]!==void 0:f.call(h,d)}},1866:(a,l,u)=>{var c=u(4536);a.exports=function(f,d){var h=this.__data__;return this.size+=this.has(f)?0:1,h[f]=c&&d===void 0?"__lodash_hash_undefined__":d,this}},5776:a=>{var l=/^(?:0|[1-9]\d*)$/;a.exports=function(u,c){var f=typeof u;return!!(c=c??9007199254740991)&&(f=="number"||f!="symbol"&&l.test(u))&&u>-1&&u%1==0&&u<c}},7019:a=>{a.exports=function(l){var u=typeof l;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?l!=="__proto__":l===null}},5346:(a,l,u)=>{var c,f=u(4429),d=(c=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";a.exports=function(h){return!!d&&d in h}},5726:a=>{var l=Object.prototype;a.exports=function(u){var c=u&&u.constructor;return u===(typeof c=="function"&&c.prototype||l)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,l,u)=>{var c=u(8470),f=Array.prototype.splice;a.exports=function(d){var h=this.__data__,m=c(h,d);return!(m<0||(m==h.length-1?h.pop():f.call(h,m,1),--this.size,0))}},2117:(a,l,u)=>{var c=u(8470);a.exports=function(f){var d=this.__data__,h=c(d,f);return h<0?void 0:d[h][1]}},7518:(a,l,u)=>{var c=u(8470);a.exports=function(f){return c(this.__data__,f)>-1}},4705:(a,l,u)=>{var c=u(8470);a.exports=function(f,d){var h=this.__data__,m=c(h,f);return m<0?(++this.size,h.push([f,d])):h[m][1]=d,this}},4785:(a,l,u)=>{var c=u(1989),f=u(8407),d=u(7071);a.exports=function(){this.size=0,this.__data__={hash:new c,map:new(d||f),string:new c}}},1285:(a,l,u)=>{var c=u(5050);a.exports=function(f){var d=c(this,f).delete(f);return this.size-=d?1:0,d}},6e3:(a,l,u)=>{var c=u(5050);a.exports=function(f){return c(this,f).get(f)}},9916:(a,l,u)=>{var c=u(5050);a.exports=function(f){return c(this,f).has(f)}},5265:(a,l,u)=>{var c=u(5050);a.exports=function(f,d){var h=c(this,f),m=h.size;return h.set(f,d),this.size+=h.size==m?0:1,this}},8776:a=>{a.exports=function(l){var u=-1,c=Array(l.size);return l.forEach(function(f,d){c[++u]=[d,f]}),c}},4536:(a,l,u)=>{var c=u(852)(Object,"create");a.exports=c},6916:(a,l,u)=>{var c=u(5569)(Object.keys,Object);a.exports=c},1167:(a,l,u)=>{a=u.nmd(a);var c=u(1957),f=l&&!l.nodeType&&l,d=f&&a&&!a.nodeType&&a,h=d&&d.exports===f&&c.process,m=function(){try{return d&&d.require&&d.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();a.exports=m},2333:a=>{var l=Object.prototype.toString;a.exports=function(u){return l.call(u)}},5569:a=>{a.exports=function(l,u){return function(c){return l(u(c))}}},5639:(a,l,u)=>{var c=u(1957),f=typeof self=="object"&&self&&self.Object===Object&&self,d=c||f||Function("return this")();a.exports=d},619:a=>{a.exports=function(l){return this.__data__.set(l,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(l){return this.__data__.has(l)}},1814:a=>{a.exports=function(l){var u=-1,c=Array(l.size);return l.forEach(function(f){c[++u]=f}),c}},7465:(a,l,u)=>{var c=u(8407);a.exports=function(){this.__data__=new c,this.size=0}},3779:a=>{a.exports=function(l){var u=this.__data__,c=u.delete(l);return this.size=u.size,c}},7599:a=>{a.exports=function(l){return this.__data__.get(l)}},4758:a=>{a.exports=function(l){return this.__data__.has(l)}},4309:(a,l,u)=>{var c=u(8407),f=u(7071),d=u(3369);a.exports=function(h,m){var y=this.__data__;if(y instanceof c){var w=y.__data__;if(!f||w.length<199)return w.push([h,m]),this.size=++y.size,this;y=this.__data__=new d(w)}return y.set(h,m),this.size=y.size,this}},346:a=>{var l=Function.prototype.toString;a.exports=function(u){if(u!=null){try{return l.call(u)}catch{}try{return u+""}catch{}}return""}},7813:a=>{a.exports=function(l,u){return l===u||l!=l&&u!=u}},5694:(a,l,u)=>{var c=u(9454),f=u(7005),d=Object.prototype,h=d.hasOwnProperty,m=d.propertyIsEnumerable,y=c(function(){return arguments}())?c:function(w){return f(w)&&h.call(w,"callee")&&!m.call(w,"callee")};a.exports=y},1469:a=>{var l=Array.isArray;a.exports=l},8612:(a,l,u)=>{var c=u(3560),f=u(1780);a.exports=function(d){return d!=null&&f(d.length)&&!c(d)}},4144:(a,l,u)=>{a=u.nmd(a);var c=u(5639),f=u(5062),d=l&&!l.nodeType&&l,h=d&&a&&!a.nodeType&&a,m=h&&h.exports===d?c.Buffer:void 0,y=(m?m.isBuffer:void 0)||f;a.exports=y},8446:(a,l,u)=>{var c=u(939);a.exports=function(f,d){return c(f,d)}},3560:(a,l,u)=>{var c=u(4239),f=u(3218);a.exports=function(d){if(!f(d))return!1;var h=c(d);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1780:a=>{a.exports=function(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=9007199254740991}},3218:a=>{a.exports=function(l){var u=typeof l;return l!=null&&(u=="object"||u=="function")}},7005:a=>{a.exports=function(l){return l!=null&&typeof l=="object"}},6719:(a,l,u)=>{var c=u(8749),f=u(1717),d=u(1167),h=d&&d.isTypedArray,m=h?f(h):c;a.exports=m},3674:(a,l,u)=>{var c=u(4636),f=u(280),d=u(8612);a.exports=function(h){return d(h)?c(h):f(h)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var l,u,c,f,d,h;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(l()-d)/1e6},u=process.hrtime,f=(l=function(){var m;return 1e9*(m=u())[0]+m[1]})(),h=1e9*process.uptime(),d=f-h):Date.now?(a.exports=function(){return Date.now()-c},c=Date.now()):(a.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(a,l,u)=>{for(var c=u(75),f=typeof window>"u"?u.g:window,d=["moz","webkit"],h="AnimationFrame",m=f["request"+h],y=f["cancel"+h]||f["cancelRequest"+h],w=0;!m&&w<d.length;w++)m=f[d[w]+"Request"+h],y=f[d[w]+"Cancel"+h]||f[d[w]+"CancelRequest"+h];if(!m||!y){var g=0,p=0,v=[];m=function(_){if(v.length===0){var k=c(),C=Math.max(0,16.666666666666668-(k-g));g=C+k,setTimeout(function(){var S=v.slice(0);v.length=0;for(var b=0;b<S.length;b++)if(!S[b].cancelled)try{S[b].callback(g)}catch(A){setTimeout(function(){throw A},0)}},Math.round(C))}return v.push({handle:++p,callback:_,cancelled:!1}),p},y=function(_){for(var k=0;k<v.length;k++)v[k].handle===_&&(v[k].cancelled=!0)}}a.exports=function(_){return m.call(f,_)},a.exports.cancel=function(){y.apply(f,arguments)},a.exports.polyfill=function(_){_||(_=f),_.requestAnimationFrame=m,_.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},i={};function o(a){var l=i[a];if(l!==void 0)return l.exports;var u=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}o.n=a=>{var l=a&&a.__esModule?()=>a.default:()=>a;return o.d(l,{a:l}),l},o.d=(a,l)=>{for(var u in l)o.o(l,u)&&!o.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),o.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var s={};return(()=>{o.d(s,{default:()=>k});var a=o(8156),l=o.n(a),u=o(7403),c=o(8446),f=o.n(c);function d(C){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},d(C)}function h(C,S){if(!(C instanceof S))throw new TypeError("Cannot call a class as a function")}function m(C,S){for(var b=0;b<S.length;b++){var A=S[b];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(C,A.key,A)}}function y(C,S){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,A){return b.__proto__=A,b},y(C,S)}function w(C,S){if(S&&(d(S)==="object"||typeof S=="function"))return S;if(S!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(C)}function g(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}function p(C){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(S){return S.__proto__||Object.getPrototypeOf(S)},p(C)}function v(C,S,b){return S in C?Object.defineProperty(C,S,{value:b,enumerable:!0,configurable:!0,writable:!0}):C[S]=b,C}var _=function(C){(function(z,U){if(typeof U!="function"&&U!==null)throw new TypeError("Super expression must either be null or a function");z.prototype=Object.create(U&&U.prototype,{constructor:{value:z,writable:!0,configurable:!0}}),Object.defineProperty(z,"prototype",{writable:!1}),U&&y(z,U)})(V,C);var S,b,A,O,j=(A=V,O=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var z,U=p(A);if(O){var X=p(this).constructor;z=Reflect.construct(U,arguments,X)}else z=U.apply(this,arguments);return w(this,z)});function V(){var z;h(this,V);for(var U=arguments.length,X=new Array(U),$=0;$<U;$++)X[$]=arguments[$];return v(g(z=j.call.apply(j,[this].concat(X))),"state",{instance:null}),z}return S=V,(b=[{key:"componentDidMount",value:function(){var z=this,U=new u.default(this.typewriter,this.props.options);this.setState({instance:U},function(){var X=z.props.onInit;X&&X(U)})}},{key:"componentDidUpdate",value:function(z){f()(this.props.options,z.options)||this.setState({instance:new u.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var z=this,U=this.props.component;return l().createElement(U,{ref:function(X){return z.typewriter=X},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(S.prototype,b),Object.defineProperty(S,"prototype",{writable:!1}),V}(a.Component);_.defaultProps={component:"div"};const k=_})(),s.default})())})(av);var xw=av.exports;const yh=pc(xw);function _h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_h(Object(n),!0).forEach(function(r){be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_h(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hs(e){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hs(e)}function Nw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Aw(e,t,n){return t&&wh(e.prototype,t),n&&wh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ff(e,t){return Pw(e)||Dw(e,t)||lv(e,t)||Lw()}function So(e){return Ow(e)||Rw(e)||lv(e)||Mw()}function Ow(e){if(Array.isArray(e))return Ou(e)}function Pw(e){if(Array.isArray(e))return e}function Rw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function lv(e,t){if(e){if(typeof e=="string")return Ou(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ou(e,t)}}function Ou(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sh=function(){},df={},uv={},cv=null,fv={mark:Sh,measure:Sh};try{typeof window<"u"&&(df=window),typeof document<"u"&&(uv=document),typeof MutationObserver<"u"&&(cv=MutationObserver),typeof performance<"u"&&(fv=performance)}catch{}var Fw=df.navigator||{},Eh=Fw.userAgent,Ch=Eh===void 0?"":Eh,In=df,ue=uv,kh=cv,Qo=fv;In.document;var en=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",dv=~Ch.indexOf("MSIE")||~Ch.indexOf("Trident/"),qo,Xo,Jo,Zo,es,Gt="___FONT_AWESOME___",Pu=16,hv="fa",pv="svg-inline--fa",rr="data-fa-i2svg",Ru="data-fa-pseudo-element",jw="data-fa-pseudo-element-pending",hf="data-prefix",pf="data-icon",bh="fontawesome-i2svg",zw="async",Uw=["HTML","HEAD","STYLE","SCRIPT"],mv=function(){try{return!0}catch{return!1}}(),ae="classic",ve="sharp",mf=[ae,ve];function Eo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ae]}})}var so=Eo((qo={},be(qo,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),be(qo,ve,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),qo)),ao=Eo((Xo={},be(Xo,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),be(Xo,ve,{solid:"fass",regular:"fasr",light:"fasl"}),Xo)),lo=Eo((Jo={},be(Jo,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),be(Jo,ve,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Jo)),$w=Eo((Zo={},be(Zo,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),be(Zo,ve,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Zo)),Bw=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,gv="fa-layers-text",Ww=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Hw=Eo((es={},be(es,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),be(es,ve,{900:"fass",400:"fasr",300:"fasl"}),es)),vv=[1,2,3,4,5,6,7,8,9,10],Vw=vv.concat([11,12,13,14,15,16,17,18,19,20]),Yw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},uo=new Set;Object.keys(ao[ae]).map(uo.add.bind(uo));Object.keys(ao[ve]).map(uo.add.bind(uo));var Gw=[].concat(mf,So(uo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Hn.GROUP,Hn.SWAP_OPACITY,Hn.PRIMARY,Hn.SECONDARY]).concat(vv.map(function(e){return"".concat(e,"x")})).concat(Vw.map(function(e){return"w-".concat(e)})),Fi=In.FontAwesomeConfig||{};function Kw(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qw(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ue&&typeof ue.querySelector=="function"){var qw=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qw.forEach(function(e){var t=ff(e,2),n=t[0],r=t[1],i=Qw(Kw(n));i!=null&&(Fi[r]=i)})}var yv={styleDefault:"solid",familyDefault:"classic",cssPrefix:hv,replacementClass:pv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fi.familyPrefix&&(Fi.cssPrefix=Fi.familyPrefix);var Jr=R(R({},yv),Fi);Jr.autoReplaceSvg||(Jr.observeMutations=!1);var L={};Object.keys(yv).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){Jr[e]=n,ji.forEach(function(r){return r(L)})},get:function(){return Jr[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){Jr.cssPrefix=t,ji.forEach(function(n){return n(L)})},get:function(){return Jr.cssPrefix}});In.FontAwesomeConfig=L;var ji=[];function Xw(e){return ji.push(e),function(){ji.splice(ji.indexOf(e),1)}}var rn=Pu,Ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Jw(e){if(!(!e||!en)){var t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return ue.head.insertBefore(t,r),e}}var Zw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function co(){for(var e=12,t="";e-- >0;)t+=Zw[Math.random()*62|0];return t}function oi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function gf(e){return e.classList?oi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function _v(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function eS(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(_v(e[n]),'" ')},"").trim()}function ka(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function vf(e){return e.size!==Ot.size||e.x!==Ot.x||e.y!==Ot.y||e.rotate!==Ot.rotate||e.flipX||e.flipY}function tS(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function nS(e){var t=e.transform,n=e.width,r=n===void 0?Pu:n,i=e.height,o=i===void 0?Pu:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&dv?l+="translate(".concat(t.x/rn-r/2,"em, ").concat(t.y/rn-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/rn,"em), calc(-50% + ").concat(t.y/rn,"em)) "):l+="translate(".concat(t.x/rn,"em, ").concat(t.y/rn,"em) "),l+="scale(".concat(t.size/rn*(t.flipX?-1:1),", ").concat(t.size/rn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var rS=`:root, :host {
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
}`;function wv(){var e=hv,t=pv,n=L.cssPrefix,r=L.replacementClass,i=rS;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Th=!1;function gl(){L.autoAddCss&&!Th&&(Jw(wv()),Th=!0)}var iS={mixout:function(){return{dom:{css:wv,insertCss:gl}}},hooks:function(){return{beforeDOMElementCreation:function(){gl()},beforeI2svg:function(){gl()}}}},Kt=In||{};Kt[Gt]||(Kt[Gt]={});Kt[Gt].styles||(Kt[Gt].styles={});Kt[Gt].hooks||(Kt[Gt].hooks={});Kt[Gt].shims||(Kt[Gt].shims=[]);var St=Kt[Gt],Sv=[],oS=function e(){ue.removeEventListener("DOMContentLoaded",e),Vs=1,Sv.map(function(t){return t()})},Vs=!1;en&&(Vs=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),Vs||ue.addEventListener("DOMContentLoaded",oS));function sS(e){en&&(Vs?setTimeout(e,0):Sv.push(e))}function Co(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?_v(e):"<".concat(t," ").concat(eS(r),">").concat(o.map(Co).join(""),"</").concat(t,">")}function Ih(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var aS=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},vl=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?aS(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function lS(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Du(e){var t=lS(e);return t.length===1?t[0].toString(16):null}function uS(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function xh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Mu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=xh(t);typeof St.hooks.addPack=="function"&&!i?St.hooks.addPack(e,xh(t)):St.styles[e]=R(R({},St.styles[e]||{}),o),e==="fas"&&Mu("fa",t)}var ts,ns,rs,Or=St.styles,cS=St.shims,fS=(ts={},be(ts,ae,Object.values(lo[ae])),be(ts,ve,Object.values(lo[ve])),ts),yf=null,Ev={},Cv={},kv={},bv={},Tv={},dS=(ns={},be(ns,ae,Object.keys(so[ae])),be(ns,ve,Object.keys(so[ve])),ns);function hS(e){return~Gw.indexOf(e)}function pS(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!hS(i)?i:null}var Iv=function(){var t=function(o){return vl(Or,function(s,a,l){return s[l]=vl(a,o,{}),s},{})};Ev=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),Cv=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),Tv=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in Or||L.autoFetchSvg,r=vl(cS,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});kv=r.names,bv=r.unicodes,yf=ba(L.styleDefault,{family:L.familyDefault})};Xw(function(e){yf=ba(e.styleDefault,{family:L.familyDefault})});Iv();function _f(e,t){return(Ev[e]||{})[t]}function mS(e,t){return(Cv[e]||{})[t]}function Vn(e,t){return(Tv[e]||{})[t]}function xv(e){return kv[e]||{prefix:null,iconName:null}}function gS(e){var t=bv[e],n=_f("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xn(){return yf}var wf=function(){return{prefix:null,iconName:null,rest:[]}};function ba(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ae:n,i=so[r][e],o=ao[r][e]||ao[r][i],s=e in St.styles?e:null;return o||s||null}var Nh=(rs={},be(rs,ae,Object.keys(lo[ae])),be(rs,ve,Object.keys(lo[ve])),rs);function Ta(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},be(t,ae,"".concat(L.cssPrefix,"-").concat(ae)),be(t,ve,"".concat(L.cssPrefix,"-").concat(ve)),t),s=null,a=ae;(e.includes(o[ae])||e.some(function(u){return Nh[ae].includes(u)}))&&(a=ae),(e.includes(o[ve])||e.some(function(u){return Nh[ve].includes(u)}))&&(a=ve);var l=e.reduce(function(u,c){var f=pS(L.cssPrefix,c);if(Or[c]?(c=fS[a].includes(c)?$w[a][c]:c,s=c,u.prefix=c):dS[a].indexOf(c)>-1?(s=c,u.prefix=ba(c,{family:a})):f?u.iconName=f:c!==L.replacementClass&&c!==o[ae]&&c!==o[ve]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=s==="fa"?xv(u.iconName):{},h=Vn(u.prefix,u.iconName);d.prefix&&(s=null),u.iconName=d.iconName||h||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Or.far&&Or.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},wf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ve&&(Or.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=Vn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=xn()||"fas"),l}var vS=function(){function e(){Nw(this,e),this.definitions={}}return Aw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=R(R({},n.definitions[a]||{}),s[a]),Mu(a,s[a]);var l=lo[ae][a];l&&Mu(l,s[a]),Iv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),Ah=[],Pr={},$r={},yS=Object.keys($r);function _S(e,t){var n=t.mixoutsTo;return Ah=e,Pr={},Object.keys($r).forEach(function(r){yS.indexOf(r)===-1&&delete $r[r]}),Ah.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Hs(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Pr[s]||(Pr[s]=[]),Pr[s].push(o[s])})}r.provides&&r.provides($r)}),n}function Lu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Pr[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ir(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Pr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Qt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $r[e]?$r[e].apply(null,t):void 0}function Fu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||xn();if(t)return t=Vn(n,t)||t,Ih(Nv.definitions,n,t)||Ih(St.styles,n,t)}var Nv=new vS,wS=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,ir("noAuto")},SS={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return en?(ir("beforeI2svg",t),Qt("pseudoElements2svg",t),Qt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,sS(function(){CS({autoReplaceSvgRoot:n}),ir("watch",t)})}},ES={icon:function(t){if(t===null)return null;if(Hs(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Vn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ba(t[0]);return{prefix:r,iconName:Vn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(Bw))){var i=Ta(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||xn(),iconName:Vn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=xn();return{prefix:o,iconName:Vn(o,t)||t}}}},st={noAuto:wS,config:L,dom:SS,parse:ES,library:Nv,findIconDefinition:Fu,toHtml:Co},CS=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(St.styles).length>0||L.autoFetchSvg)&&en&&L.autoReplaceSvg&&st.dom.i2svg({node:r})};function Ia(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Co(r)})}}),Object.defineProperty(e,"node",{get:function(){if(en){var r=ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function kS(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(vf(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=ka(R(R({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function bS(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:s}),children:r}]}]}function Sf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,h=d===void 0?!1:d,m=r.found?r:n,y=m.width,w=m.height,g=i==="fak",p=[L.replacementClass,o?"".concat(L.cssPrefix,"-").concat(o):""].filter(function(A){return f.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(f.classes).join(" "),v={children:[],attributes:R(R({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(w)})},_=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/w*16*.0625,"em")}:{};h&&(v.attributes[rr]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||co())},children:[l]}),delete v.attributes.title);var k=R(R({},v),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:R(R({},_),f.styles)}),C=r.found&&n.found?Qt("generateAbstractMask",k)||{children:[],attributes:{}}:Qt("generateAbstractIcon",k)||{children:[],attributes:{}},S=C.children,b=C.attributes;return k.children=S,k.attributes=b,a?bS(k):kS(k)}function Oh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=R(R(R({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[rr]="");var c=R({},s.styles);vf(i)&&(c.transform=nS({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=ka(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function TS(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=ka(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var yl=St.styles;function ju(e){var t=e[0],n=e[1],r=e.slice(4),i=ff(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Hn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Hn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Hn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var IS={found:!1,width:512,height:512};function xS(e,t){!mv&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zu(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=xn()),new Promise(function(r,i){if(Qt("missingIconAbstract"),n==="fa"){var o=xv(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&yl[t]&&yl[t][e]){var s=yl[t][e];return r(ju(s))}xS(e,t),r(R(R({},IS),{},{icon:L.showMissingIcons&&e?Qt("missingIconAbstract")||{}:{}}))})}var Ph=function(){},Uu=L.measurePerformance&&Qo&&Qo.mark&&Qo.measure?Qo:{mark:Ph,measure:Ph},Ii='FA "6.4.0"',NS=function(t){return Uu.mark("".concat(Ii," ").concat(t," begins")),function(){return Av(t)}},Av=function(t){Uu.mark("".concat(Ii," ").concat(t," ends")),Uu.measure("".concat(Ii," ").concat(t),"".concat(Ii," ").concat(t," begins"),"".concat(Ii," ").concat(t," ends"))},Ef={begin:NS,end:Av},ys=function(){};function Rh(e){var t=e.getAttribute?e.getAttribute(rr):null;return typeof t=="string"}function AS(e){var t=e.getAttribute?e.getAttribute(hf):null,n=e.getAttribute?e.getAttribute(pf):null;return t&&n}function OS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function PS(){if(L.autoReplaceSvg===!0)return _s.replace;var e=_s[L.autoReplaceSvg];return e||_s.replace}function RS(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function DS(e){return ue.createElement(e)}function Ov(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?RS:DS:n;if(typeof e=="string")return ue.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(Ov(s,{ceFn:r}))}),i}function MS(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var _s={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Ov(i),n)}),n.getAttribute(rr)===null&&L.keepOriginalSource){var r=ue.createComment(MS(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~gf(n).indexOf(L.replacementClass))return _s.replace(t);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===L.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Co(a)}).join(`
`);n.setAttribute(rr,""),n.innerHTML=s}};function Dh(e){e()}function Pv(e,t){var n=typeof t=="function"?t:ys;if(e.length===0)n();else{var r=Dh;L.mutateApproach===zw&&(r=In.requestAnimationFrame||Dh),r(function(){var i=PS(),o=Ef.begin("mutate");e.map(i),o(),n()})}}var Cf=!1;function Rv(){Cf=!0}function $u(){Cf=!1}var Ys=null;function Mh(e){if(kh&&L.observeMutations){var t=e.treeCallback,n=t===void 0?ys:t,r=e.nodeCallback,i=r===void 0?ys:r,o=e.pseudoElementsCallback,s=o===void 0?ys:o,a=e.observeMutationsRoot,l=a===void 0?ue:a;Ys=new kh(function(u){if(!Cf){var c=xn();oi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Rh(f.addedNodes[0])&&(L.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&L.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&Rh(f.target)&&~Yw.indexOf(f.attributeName))if(f.attributeName==="class"&&AS(f.target)){var d=Ta(gf(f.target)),h=d.prefix,m=d.iconName;f.target.setAttribute(hf,h||c),m&&f.target.setAttribute(pf,m)}else OS(f.target)&&i(f.target)})}}),en&&Ys.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function LS(){Ys&&Ys.disconnect()}function FS(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function jS(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ta(gf(e));return i.prefix||(i.prefix=xn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=mS(i.prefix,e.innerText)||_f(i.prefix,Du(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function zS(e){var t=oi(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||co()):(t["aria-hidden"]="true",t.focusable="false")),t}function US(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Lh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=jS(e),r=n.iconName,i=n.prefix,o=n.rest,s=zS(e),a=Lu("parseNodeAttributes",{},e),l=t.styleParser?FS(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var $S=St.styles;function Dv(e){var t=L.autoReplaceSvg==="nest"?Lh(e,{styleParser:!1}):Lh(e);return~t.extra.classes.indexOf(gv)?Qt("generateLayersText",e,t):Qt("generateSvgReplacementMutation",e,t)}var Nn=new Set;mf.map(function(e){Nn.add("fa-".concat(e))});Object.keys(so[ae]).map(Nn.add.bind(Nn));Object.keys(so[ve]).map(Nn.add.bind(Nn));Nn=So(Nn);function Fh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!en)return Promise.resolve();var n=ue.documentElement.classList,r=function(f){return n.add("".concat(bh,"-").concat(f))},i=function(f){return n.remove("".concat(bh,"-").concat(f))},o=L.autoFetchSvg?Nn:mf.map(function(c){return"fa-".concat(c)}).concat(Object.keys($S));o.includes("fa")||o.push("fa");var s=[".".concat(gv,":not([").concat(rr,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(rr,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=oi(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ef.begin("onTree"),u=a.reduce(function(c,f){try{var d=Dv(f);d&&c.push(d)}catch(h){mv||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Pv(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function BS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dv(e).then(function(n){n&&Pv([n],t)})}function WS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Fu(i||{})),e(r,R(R({},n),{},{mask:i}))}}var HS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ot:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,h=n.titleId,m=h===void 0?null:h,y=n.classes,w=y===void 0?[]:y,g=n.attributes,p=g===void 0?{}:g,v=n.styles,_=v===void 0?{}:v;if(t){var k=t.prefix,C=t.iconName,S=t.icon;return Ia(R({type:"icon"},t),function(){return ir("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(d?p["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(m||co()):(p["aria-hidden"]="true",p.focusable="false")),Sf({icons:{main:ju(S),mask:l?ju(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:R(R({},Ot),i),symbol:s,title:d,maskId:c,titleId:m,extra:{attributes:p,styles:_,classes:w}})})}},VS={mixout:function(){return{icon:WS(HS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fh,n.nodeCallback=BS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,o=n.callback,s=o===void 0?function(){}:o;return Fh(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(h,m){Promise.all([zu(i,a),c.iconName?zu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var w=ff(y,2),g=w[0],p=w[1];h([n,Sf({icons:{main:g,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:d,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=ka(a);l.length>0&&(i.style=l);var u;return vf(s)&&(u=Qt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},YS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Ia({type:"layer"},function(){ir("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(So(o)).join(" ")},children:s}]})}}}},GS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Ia({type:"counter",content:n},function(){return ir("beforeDOMElementCreation",{content:n,params:r}),TS({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(So(a))}})})}}}},KS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Ot:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,h=d===void 0?{}:d;return Ia({type:"text",content:n},function(){return ir("beforeDOMElementCreation",{content:n,params:r}),Oh({content:n,transform:R(R({},Ot),o),title:a,extra:{attributes:f,styles:h,classes:["".concat(L.cssPrefix,"-layers-text")].concat(So(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(dv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return L.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Oh({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},QS=new RegExp('"',"ug"),jh=[1105920,1112319];function qS(e){var t=e.replace(QS,""),n=uS(t,0),r=n>=jh[0]&&n<=jh[1],i=t.length===2?t[0]===t[1]:!1;return{value:Du(i?t[0]:t),isSecondary:r||i}}function zh(e,t){var n="".concat(jw).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=oi(e.children),s=o.filter(function(S){return S.getAttribute(Ru)===t})[0],a=In.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(Ww),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ve:ae,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ao[d][l[2].toLowerCase()]:Hw[d][u],m=qS(f),y=m.value,w=m.isSecondary,g=l[0].startsWith("FontAwesome"),p=_f(h,y),v=p;if(g){var _=gS(y);_.iconName&&_.prefix&&(p=_.iconName,h=_.prefix)}if(p&&!w&&(!s||s.getAttribute(hf)!==h||s.getAttribute(pf)!==v)){e.setAttribute(n,v),s&&e.removeChild(s);var k=US(),C=k.extra;C.attributes[Ru]=t,zu(p,h).then(function(S){var b=Sf(R(R({},k),{},{icons:{main:S,mask:wf()},prefix:h,iconName:v,extra:C,watchable:!0})),A=ue.createElement("svg");t==="::before"?e.insertBefore(A,e.firstChild):e.appendChild(A),A.outerHTML=b.map(function(O){return Co(O)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function XS(e){return Promise.all([zh(e,"::before"),zh(e,"::after")])}function JS(e){return e.parentNode!==document.head&&!~Uw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ru)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Uh(e){if(en)return new Promise(function(t,n){var r=oi(e.querySelectorAll("*")).filter(JS).map(XS),i=Ef.begin("searchPseudoElements");Rv(),Promise.all(r).then(function(){i(),$u(),t()}).catch(function(){i(),$u(),n()})})}var ZS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Uh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;L.searchPseudoElements&&Uh(i)}}},$h=!1,eE={mixout:function(){return{dom:{unwatch:function(){Rv(),$h=!0}}}},hooks:function(){return{bootstrap:function(){Mh(Lu("mutationObserverCallbacks",{}))},noAuto:function(){LS()},watch:function(n){var r=n.observeMutationsRoot;$h?$u():Mh(Lu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},tE={mixout:function(){return{parse:{transform:function(n){return Bh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Bh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},h={outer:a,inner:f,path:d};return{tag:"g",attributes:R({},h.outer),children:[{tag:"g",attributes:R({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),h.path)}]}]}}}},_l={x:0,y:0,width:"100%",height:"100%"};function Wh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function nE(e){return e.tag==="g"?e.children:[e]}var rE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Ta(i.split(" ").map(function(s){return s.trim()})):wf();return o.prefix||(o.prefix=xn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,d=s.icon,h=tS({transform:l,containerWidth:f,iconWidth:u}),m={tag:"rect",attributes:R(R({},_l),{},{fill:"white"})},y=c.children?{children:c.children.map(Wh)}:{},w={tag:"g",attributes:R({},h.inner),children:[Wh(R({tag:c.tag,attributes:R(R({},c.attributes),h.path)},y))]},g={tag:"g",attributes:R({},h.outer),children:[w]},p="mask-".concat(a||co()),v="clip-".concat(a||co()),_={tag:"mask",attributes:R(R({},_l),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:nE(d)},_]};return r.push(k,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},_l)}),{children:r,attributes:i}}}},iE={provides:function(t){var n=!1;In.matchMedia&&(n=In.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=R(R({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:R(R({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},oE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},sE=[iS,VS,YS,GS,KS,ZS,eE,tE,rE,iE,oE];_S(sE,{mixoutsTo:st});st.noAuto;st.config;var aE=st.library;st.dom;var Bu=st.parse;st.findIconDefinition;st.toHtml;var lE=st.icon;st.layer;st.text;st.counter;var uE={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},cE={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Mv={exports:{}},fE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dE=fE,hE=dE;function Lv(){}function Fv(){}Fv.resetWarningCache=Lv;var pE=function(){function e(r,i,o,s,a,l){if(l!==hE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Fv,resetWarningCache:Lv};return n.PropTypes=n,n};Mv.exports=pE();var mE=Mv.exports;const B=pc(mE);function Hh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function dn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hh(Object(n),!0).forEach(function(r){Rr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gs(e){"@babel/helpers - typeof";return Gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gs(e)}function Rr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function vE(e,t){if(e==null)return{};var n=gE(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wu(e){return yE(e)||_E(e)||wE(e)||SE()}function yE(e){if(Array.isArray(e))return Hu(e)}function _E(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wE(e,t){if(e){if(typeof e=="string")return Hu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hu(e,t)}}function Hu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function SE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EE(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,h=e.inverse,m=e.border,y=e.listItem,w=e.flip,g=e.size,p=e.rotation,v=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":h,"fa-border":m,"fa-li":y,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Rr(t,"fa-".concat(g),typeof g<"u"&&g!==null),Rr(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Rr(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Rr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(k){return _[k]?k:null}).filter(function(k){return k})}function CE(e){return e=e-0,e===e}function jv(e){return CE(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var kE=["style"];function bE(e){return e.charAt(0).toUpperCase()+e.slice(1)}function TE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=jv(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[bE(i)]=o:t[i]=o,t},{})}function zv(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return zv(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=TE(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[jv(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=vE(n,kE);return i.attrs.style=dn(dn({},i.attrs.style),s),e.apply(void 0,[t.tag,dn(dn({},i.attrs),a)].concat(Wu(r)))}var Uv=!1;try{Uv=!0}catch{}function IE(){if(!Uv&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Vh(e){if(e&&Gs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Bu.icon)return Bu.icon(e);if(e===null)return null;if(e&&Gs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function wl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Rr({},e,t):{}}var ko=_c.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=Vh(n),c=wl("classes",[].concat(Wu(EE(e)),Wu(o.split(" ")))),f=wl("transform",typeof e.transform=="string"?Bu.transform(e.transform):e.transform),d=wl("mask",Vh(r)),h=lE(u,dn(dn(dn(dn({},c),f),d),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!h)return IE("Could not find icon",u),null;var m=h.abstract,y={ref:t};return Object.keys(e).forEach(function(w){ko.defaultProps.hasOwnProperty(w)||(y[w]=e[w])}),xE(m[0],y)});ko.displayName="FontAwesomeIcon";ko.propTypes={beat:B.bool,border:B.bool,beatFade:B.bool,bounce:B.bool,className:B.string,fade:B.bool,flash:B.bool,mask:B.oneOfType([B.object,B.array,B.string]),maskId:B.string,fixedWidth:B.bool,inverse:B.bool,flip:B.oneOf([!0,!1,"horizontal","vertical","both"]),icon:B.oneOfType([B.object,B.array,B.string]),listItem:B.bool,pull:B.oneOf(["right","left"]),pulse:B.bool,rotation:B.oneOf([0,90,180,270]),shake:B.bool,size:B.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:B.bool,spinPulse:B.bool,spinReverse:B.bool,symbol:B.oneOfType([B.bool,B.string]),title:B.string,titleId:B.string,transform:B.oneOfType([B.string,B.object]),swapOpacity:B.bool};ko.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var xE=zv.bind(null,_c.createElement);const NE="/assets/WMCYN LOGO WHITE-b3ce33b8.png";/**
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
 */const $v={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const N=function(e,t){if(!e)throw si(t)},si=function(e){return new Error("Firebase Database ("+$v.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const Bv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},AE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},kf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,h=u&63;l||(h=64,s||(d=64)),r.push(n[c],n[f],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Bv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):AE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new OE;const d=o<<2|a>>4;if(r.push(d),u!==64){const h=a<<4&240|u>>2;if(r.push(h),f!==64){const m=u<<6&192|f;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class OE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wv=function(e){const t=Bv(e);return kf.encodeByteArray(t,!0)},Ks=function(e){return Wv(e).replace(/\./g,"")},Vu=function(e){try{return kf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function PE(e){return Hv(void 0,e)}function Hv(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!RE(n)||(e[n]=Hv(e[n],t[n]));return e}function RE(e){return e!=="__proto__"}/**
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
 */function DE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ME=()=>DE().__FIREBASE_DEFAULTS__,LE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},FE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Vu(e[1]);return t&&JSON.parse(t)},Vv=()=>{try{return ME()||LE()||FE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},jE=e=>{var t,n;return(n=(t=Vv())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},zE=e=>{const t=jE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Yv=()=>{var e;return(e=Vv())===null||e===void 0?void 0:e.config};/**
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
 */class xa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function UE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ks(JSON.stringify(n)),Ks(JSON.stringify(s)),a].join(".")}/**
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
 */function $E(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($E())}function BE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function WE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kv(){return $v.NODE_ADMIN===!0}function Qv(){try{return typeof indexedDB=="object"}catch{return!1}}function qv(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function HE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const VE="FirebaseError";class hr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=VE,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?YE(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new hr(i,a,r)}}function YE(e,t){return e.replace(GE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const GE=/\{\$([^}]+)}/g;/**
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
 */function fo(e){return JSON.parse(e)}function Pe(e){return JSON.stringify(e)}/**
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
 */const Xv=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=fo(Vu(o[0])||""),n=fo(Vu(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},KE=function(e){const t=Xv(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},QE=function(e){const t=Xv(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function tn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Zr(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Yh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Qs(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function qs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Gh(o)&&Gh(s)){if(!qs(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gh(e){return e!==null&&typeof e=="object"}/**
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
 */function qE(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
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
 */class XE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let f=0;f<16;f++)r[f]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=a^o&(s^a),c=1518500249):(u=o^s^a,c=1859775393):f<60?(u=o&s|a&(o|s),c=2400959708):(u=o^s^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[f]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=t[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)t[r]=this.chain_[i]>>o&255,++r;return t}}function bf(e,t){return`${e} failed: ${t} argument `}/**
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
 */const JE=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,N(r<e.length,"Surrogate pair missing trail surrogate.");const s=e.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Aa=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */const ZE=1e3,eC=2,tC=4*60*60*1e3,nC=.5;function Kh(e,t=ZE,n=eC){const r=t*Math.pow(n,e),i=Math.round(nC*r*(Math.random()-.5)*2);return Math.min(tC,r+i)}/**
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
 */function Mn(e){return e&&e._delegate?e._delegate:e}class qt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class rC{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new xa;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(oC(t))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=zn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zn){return this.instances.has(t)}getOptions(t=zn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iC(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zn){return this.component?this.component.multipleInstances?t:zn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iC(e){return e===zn?void 0:e}function oC(e){return e.instantiationMode==="EAGER"}/**
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
 */class sC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new rC(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ne||(ne={}));const aC={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},lC=ne.INFO,uC={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},cC=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=uC[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Tf{constructor(t){this.name=t,this._logLevel=lC,this._logHandler=cC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?aC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const fC=(e,t)=>t.some(n=>e instanceof n);let Qh,qh;function dC(){return Qh||(Qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hC(){return qh||(qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jv=new WeakMap,Yu=new WeakMap,Zv=new WeakMap,Sl=new WeakMap,If=new WeakMap;function pC(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Sn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Jv.set(n,e)}).catch(()=>{}),If.set(t,e),t}function mC(e){if(Yu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Yu.set(e,t)}let Gu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Yu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Zv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function gC(e){Gu=e(Gu)}function vC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(El(this),t,...n);return Zv.set(r,t.sort?t.sort():[t]),Sn(r)}:hC().includes(e)?function(...t){return e.apply(El(this),t),Sn(Jv.get(this))}:function(...t){return Sn(e.apply(El(this),t))}}function yC(e){return typeof e=="function"?vC(e):(e instanceof IDBTransaction&&mC(e),fC(e,dC())?new Proxy(e,Gu):e)}function Sn(e){if(e instanceof IDBRequest)return pC(e);if(Sl.has(e))return Sl.get(e);const t=yC(e);return t!==e&&(Sl.set(e,t),If.set(t,e)),t}const El=e=>If.get(e);function _C(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Sn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Sn(s.result),l.oldVersion,l.newVersion,Sn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const wC=["get","getKey","getAll","getAllKeys","count"],SC=["put","add","delete","clear"],Cl=new Map;function Xh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Cl.get(t))return Cl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=SC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wC.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cl.set(t,o),o}gC(e=>({...e,get:(t,n,r)=>Xh(t,n)||e.get(t,n,r),has:(t,n)=>!!Xh(t,n)||e.has(t,n)}));/**
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
 */class EC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ku="@firebase/app",Jh="0.9.15";/**
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
 */const or=new Tf("@firebase/app"),kC="@firebase/app-compat",bC="@firebase/analytics-compat",TC="@firebase/analytics",IC="@firebase/app-check-compat",xC="@firebase/app-check",NC="@firebase/auth",AC="@firebase/auth-compat",OC="@firebase/database",PC="@firebase/database-compat",RC="@firebase/functions",DC="@firebase/functions-compat",MC="@firebase/installations",LC="@firebase/installations-compat",FC="@firebase/messaging",jC="@firebase/messaging-compat",zC="@firebase/performance",UC="@firebase/performance-compat",$C="@firebase/remote-config",BC="@firebase/remote-config-compat",WC="@firebase/storage",HC="@firebase/storage-compat",VC="@firebase/firestore",YC="@firebase/firestore-compat",GC="firebase",KC="10.1.0";/**
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
 */const Qu="[DEFAULT]",QC={[Ku]:"fire-core",[kC]:"fire-core-compat",[TC]:"fire-analytics",[bC]:"fire-analytics-compat",[xC]:"fire-app-check",[IC]:"fire-app-check-compat",[NC]:"fire-auth",[AC]:"fire-auth-compat",[OC]:"fire-rtdb",[PC]:"fire-rtdb-compat",[RC]:"fire-fn",[DC]:"fire-fn-compat",[MC]:"fire-iid",[LC]:"fire-iid-compat",[FC]:"fire-fcm",[jC]:"fire-fcm-compat",[zC]:"fire-perf",[UC]:"fire-perf-compat",[$C]:"fire-rc",[BC]:"fire-rc-compat",[WC]:"fire-gcs",[HC]:"fire-gcs-compat",[VC]:"fire-fst",[YC]:"fire-fst-compat","fire-js":"fire-js",[GC]:"fire-js-all"};/**
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
 */const Xs=new Map,qu=new Map;function qC(e,t){try{e.container.addComponent(t)}catch(n){or.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function An(e){const t=e.name;if(qu.has(t))return or.debug(`There were multiple attempts to register component ${t}.`),!1;qu.set(t,e);for(const n of Xs.values())qC(n,e);return!0}function bo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const XC={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},En=new Na("app","Firebase",XC);/**
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
 */class JC{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
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
 */const ZC=KC;function ey(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw En.create("bad-app-name",{appName:String(i)});if(n||(n=Yv()),!n)throw En.create("no-options");const o=Xs.get(i);if(o){if(qs(n,o.options)&&qs(r,o.config))return o;throw En.create("duplicate-app",{appName:i})}const s=new sC(i);for(const l of qu.values())s.addComponent(l);const a=new JC(n,r,s);return Xs.set(i,a),a}function ty(e=Qu){const t=Xs.get(e);if(!t&&e===Qu&&Yv())return ey();if(!t)throw En.create("no-app",{appName:e});return t}function Mt(e,t,n){var r;let i=(r=QC[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}An(new qt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const ek="firebase-heartbeat-database",tk=1,ho="firebase-heartbeat-store";let kl=null;function ny(){return kl||(kl=_C(ek,tk,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ho)}}}).catch(e=>{throw En.create("idb-open",{originalErrorMessage:e.message})})),kl}async function nk(e){try{return await(await ny()).transaction(ho).objectStore(ho).get(ry(e))}catch(t){if(t instanceof hr)or.warn(t.message);else{const n=En.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});or.warn(n.message)}}}async function Zh(e,t){try{const r=(await ny()).transaction(ho,"readwrite");await r.objectStore(ho).put(t,ry(e)),await r.done}catch(n){if(n instanceof hr)or.warn(n.message);else{const r=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function ry(e){return`${e.name}!${e.options.appId}`}/**
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
 */const rk=1024,ik=30*24*60*60*1e3;class ok{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ak(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ep();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=ik}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ep(),{heartbeatsToSend:n,unsentEntries:r}=sk(this._heartbeatsCache.heartbeats),i=Ks(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ep(){return new Date().toISOString().substring(0,10)}function sk(e,t=rk){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),tp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ak{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qv()?qv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function tp(e){return Ks(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function lk(e){An(new qt("platform-logger",t=>new EC(t),"PRIVATE")),An(new qt("heartbeat",t=>new ok(t),"PRIVATE")),Mt(Ku,Jh,e),Mt(Ku,Jh,"esm2017"),Mt("fire-js","")}lk("");var uk="firebase",ck="10.1.0";/**
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
 */Mt(uk,ck,"app");const fk=(e,t)=>t.some(n=>e instanceof n);let np,rp;function dk(){return np||(np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hk(){return rp||(rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iy=new WeakMap,Xu=new WeakMap,oy=new WeakMap,bl=new WeakMap,xf=new WeakMap;function pk(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Cn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&iy.set(n,e)}).catch(()=>{}),xf.set(t,e),t}function mk(e){if(Xu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Xu.set(e,t)}let Ju={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||oy.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function gk(e){Ju=e(Ju)}function vk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Tl(this),t,...n);return oy.set(r,t.sort?t.sort():[t]),Cn(r)}:hk().includes(e)?function(...t){return e.apply(Tl(this),t),Cn(iy.get(this))}:function(...t){return Cn(e.apply(Tl(this),t))}}function yk(e){return typeof e=="function"?vk(e):(e instanceof IDBTransaction&&mk(e),fk(e,dk())?new Proxy(e,Ju):e)}function Cn(e){if(e instanceof IDBRequest)return pk(e);if(bl.has(e))return bl.get(e);const t=yk(e);return t!==e&&(bl.set(e,t),xf.set(t,e)),t}const Tl=e=>xf.get(e);function _k(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Cn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Cn(s.result),l.oldVersion,l.newVersion,Cn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const wk=["get","getKey","getAll","getAllKeys","count"],Sk=["put","add","delete","clear"],Il=new Map;function ip(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Il.get(t))return Il.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Sk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wk.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Il.set(t,o),o}gk(e=>({...e,get:(t,n,r)=>ip(t,n)||e.get(t,n,r),has:(t,n)=>!!ip(t,n)||e.has(t,n)}));const sy="@firebase/installations",Nf="0.6.4";/**
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
 */const ay=1e4,ly=`w:${Nf}`,uy="FIS_v2",Ek="https://firebaseinstallations.googleapis.com/v1",Ck=60*60*1e3,kk="installations",bk="Installations";/**
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
 */const Tk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},sr=new Na(kk,bk,Tk);function cy(e){return e instanceof hr&&e.code.includes("request-failed")}/**
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
 */function fy({projectId:e}){return`${Ek}/projects/${e}/installations`}function dy(e){return{token:e.token,requestStatus:2,expiresIn:xk(e.expiresIn),creationTime:Date.now()}}async function hy(e,t){const r=(await t.json()).error;return sr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function py({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ik(e,{refreshToken:t}){const n=py(e);return n.append("Authorization",Nk(t)),n}async function my(e){const t=await e();return t.status>=500&&t.status<600?e():t}function xk(e){return Number(e.replace("s","000"))}function Nk(e){return`${uy} ${e}`}/**
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
 */async function Ak({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=fy(e),i=py(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:uy,appId:e.appId,sdkVersion:ly},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await my(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:dy(u.authToken)}}else throw await hy("Create Installation",l)}/**
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
 */function gy(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Ok(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Pk=/^[cdef][\w-]{21}$/,Zu="";function Rk(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Dk(e);return Pk.test(n)?n:Zu}catch{return Zu}}function Dk(e){return Ok(e).substr(0,22)}/**
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
 */function Oa(e){return`${e.appName}!${e.appId}`}/**
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
 */const vy=new Map;function yy(e,t){const n=Oa(e);_y(n,t),Mk(n,t)}function _y(e,t){const n=vy.get(e);if(n)for(const r of n)r(t)}function Mk(e,t){const n=Lk();n&&n.postMessage({key:e,fid:t}),Fk()}let Yn=null;function Lk(){return!Yn&&"BroadcastChannel"in self&&(Yn=new BroadcastChannel("[Firebase] FID Change"),Yn.onmessage=e=>{_y(e.data.key,e.data.fid)}),Yn}function Fk(){vy.size===0&&Yn&&(Yn.close(),Yn=null)}/**
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
 */const jk="firebase-installations-database",zk=1,ar="firebase-installations-store";let xl=null;function Af(){return xl||(xl=_k(jk,zk,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ar)}}})),xl}async function Js(e,t){const n=Oa(e),i=(await Af()).transaction(ar,"readwrite"),o=i.objectStore(ar),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&yy(e,t.fid),t}async function wy(e){const t=Oa(e),r=(await Af()).transaction(ar,"readwrite");await r.objectStore(ar).delete(t),await r.done}async function Pa(e,t){const n=Oa(e),i=(await Af()).transaction(ar,"readwrite"),o=i.objectStore(ar),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&yy(e,a.fid),a}/**
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
 */async function Of(e){let t;const n=await Pa(e.appConfig,r=>{const i=Uk(r),o=$k(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Zu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Uk(e){const t=e||{fid:Rk(),registrationStatus:0};return Sy(t)}function $k(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(sr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Bk(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Wk(e)}:{installationEntry:t}}async function Bk(e,t){try{const n=await Ak(e,t);return Js(e.appConfig,n)}catch(n){throw cy(n)&&n.customData.serverCode===409?await wy(e.appConfig):await Js(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Wk(e){let t=await op(e.appConfig);for(;t.registrationStatus===1;)await gy(100),t=await op(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Of(e);return r||n}return t}function op(e){return Pa(e,t=>{if(!t)throw sr.create("installation-not-found");return Sy(t)})}function Sy(e){return Hk(e)?{fid:e.fid,registrationStatus:0}:e}function Hk(e){return e.registrationStatus===1&&e.registrationTime+ay<Date.now()}/**
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
 */async function Vk({appConfig:e,heartbeatServiceProvider:t},n){const r=Yk(e,n),i=Ik(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:ly,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await my(()=>fetch(r,a));if(l.ok){const u=await l.json();return dy(u)}else throw await hy("Generate Auth Token",l)}function Yk(e,{fid:t}){return`${fy(e)}/${t}/authTokens:generate`}/**
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
 */async function Pf(e,t=!1){let n;const r=await Pa(e.appConfig,o=>{if(!Ey(o))throw sr.create("not-registered");const s=o.authToken;if(!t&&Qk(s))return o;if(s.requestStatus===1)return n=Gk(e,t),o;{if(!navigator.onLine)throw sr.create("app-offline");const a=Xk(o);return n=Kk(e,a),a}});return n?await n:r.authToken}async function Gk(e,t){let n=await sp(e.appConfig);for(;n.authToken.requestStatus===1;)await gy(100),n=await sp(e.appConfig);const r=n.authToken;return r.requestStatus===0?Pf(e,t):r}function sp(e){return Pa(e,t=>{if(!Ey(t))throw sr.create("not-registered");const n=t.authToken;return Jk(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Kk(e,t){try{const n=await Vk(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Js(e.appConfig,r),n}catch(n){if(cy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wy(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Js(e.appConfig,r)}throw n}}function Ey(e){return e!==void 0&&e.registrationStatus===2}function Qk(e){return e.requestStatus===2&&!qk(e)}function qk(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ck}function Xk(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Jk(e){return e.requestStatus===1&&e.requestTime+ay<Date.now()}/**
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
 */async function Zk(e){const t=e,{installationEntry:n,registrationPromise:r}=await Of(t);return r?r.catch(console.error):Pf(t).catch(console.error),n.fid}/**
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
 */async function eb(e,t=!1){const n=e;return await tb(n),(await Pf(n,t)).token}async function tb(e){const{registrationPromise:t}=await Of(e);t&&await t}/**
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
 */function nb(e){if(!e||!e.options)throw Nl("App Configuration");if(!e.name)throw Nl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Nl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Nl(e){return sr.create("missing-app-config-values",{valueName:e})}/**
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
 */const Cy="installations",rb="installations-internal",ib=e=>{const t=e.getProvider("app").getImmediate(),n=nb(t),r=bo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ob=e=>{const t=e.getProvider("app").getImmediate(),n=bo(t,Cy).getImmediate();return{getId:()=>Zk(n),getToken:i=>eb(n,i)}};function sb(){An(new qt(Cy,ib,"PUBLIC")),An(new qt(rb,ob,"PRIVATE"))}sb();Mt(sy,Nf);Mt(sy,Nf,"esm2017");/**
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
 */const Zs="analytics",ab="firebase_id",lb="origin",ub=60*1e3,cb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Xe=new Tf("@firebase/analytics");/**
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
 */const fb={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new Na("analytics","Analytics",fb);/**
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
 */function db(e){if(!e.startsWith(Rf)){const t=nt.create("invalid-gtag-resource",{gtagURL:e});return Xe.warn(t.message),""}return e}function ky(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function hb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function pb(e,t){const n=hb("firebase-js-sdk-policy",{createScriptURL:db}),r=document.createElement("script"),i=`${Rf}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function mb(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function gb(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await ky(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Xe.error(a)}e("config",i,o)}async function vb(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await ky(n);for(const l of s){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)o.push(c);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Xe.error(o)}}function yb(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await vb(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await gb(e,t,n,r,a,l)}else if(o==="consent"){const[a]=s;e("consent","update",a)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){Xe.error(a)}}return i}function _b(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=yb(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function wb(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Rf)&&n.src.includes(e))return n;return null}/**
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
 */const Sb=30,Eb=1e3;class Cb{constructor(t={},n=Eb){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const by=new Cb;function kb(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function bb(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:kb(r)},o=cb.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw nt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function Tb(e,t=by,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw nt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw nt.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Nb;return setTimeout(async()=>{a.abort()},n!==void 0?n:ub),Ty({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Ty(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=by){var o;const{appId:s,measurementId:a}=e;try{await Ib(r,t)}catch(l){if(a)return Xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await bb(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!xb(u)){if(i.deleteThrottleMetadata(s),a)return Xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const c=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Kh(n,i.intervalMillis,Sb):Kh(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(s,f),Xe.debug(`Calling attemptFetch again in ${c} millis`),Ty(e,f,r,i)}}function Ib(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(nt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function xb(e){if(!(e instanceof hr)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Nb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ab(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function Ob(){if(Qv())try{await qv()}catch(e){return Xe.warn(nt.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Xe.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Pb(e,t,n,r,i,o,s){var a;const l=Tb(e);l.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&Xe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Xe.error(h)),t.push(l);const u=Ob().then(h=>{if(h)return r.getId()}),[c,f]=await Promise.all([l,u]);wb(o)||pb(o,c.measurementId),i("js",new Date);const d=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return d[lb]="firebase",d.update=!0,f!=null&&(d[ab]=f),i("config",c.measurementId,d),c.measurementId}/**
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
 */class Rb{constructor(t){this.app=t}_delete(){return delete zi[this.app.options.appId],Promise.resolve()}}let zi={},ap=[];const lp={};let Al="dataLayer",Db="gtag",up,Iy,cp=!1;function Mb(){const e=[];if(BE()&&e.push("This is a browser extension environment."),HE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:t});Xe.warn(n.message)}}function Lb(e,t,n){Mb();const r=e.options.appId;if(!r)throw nt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nt.create("no-api-key");if(zi[r]!=null)throw nt.create("already-exists",{id:r});if(!cp){mb(Al);const{wrappedGtag:o,gtagCore:s}=_b(zi,ap,lp,Al,Db);Iy=o,up=s,cp=!0}return zi[r]=Pb(e,ap,lp,t,up,Al,n),new Rb(e)}function Fb(e=ty()){e=Mn(e);const t=bo(e,Zs);return t.isInitialized()?t.getImmediate():jb(e)}function jb(e,t={}){const n=bo(e,Zs);if(n.isInitialized()){const i=n.getImmediate();if(qs(t,n.getOptions()))return i;throw nt.create("already-initialized")}return n.initialize({options:t})}function zb(e,t,n,r){e=Mn(e),Ab(Iy,zi[e.app.options.appId],t,n,r).catch(i=>Xe.error(i))}const fp="@firebase/analytics",dp="0.10.0";function Ub(){An(new qt(Zs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Lb(r,i,n)},"PUBLIC")),An(new qt("analytics-internal",e,"PRIVATE")),Mt(fp,dp),Mt(fp,dp,"esm2017");function e(t){try{const n=t.getProvider(Zs).getImmediate();return{logEvent:(r,i,o)=>zb(n,r,i,o)}}catch(n){throw nt.create("interop-component-reg-failed",{reason:n})}}}Ub();const hp="@firebase/database",pp="1.0.1";/**
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
 */let xy="";function $b(e){xy=e}/**
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
 */class Bb{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Pe(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:fo(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class Wb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return tn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const Ny=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Bb(t)}}catch{}return new Wb},Gn=Ny("localStorage"),ec=Ny("sessionStorage");/**
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
 */const Br=new Tf("@firebase/database"),Hb=function(){let e=1;return function(){return e++}}(),Ay=function(e){const t=JE(e),n=new XE;n.update(t);const r=n.digest();return kf.encodeByteArray(r)},To=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=To.apply(null,r):typeof r=="object"?t+=Pe(r):t+=r,t+=" "}return t};let Xn=null,mp=!0;const Vb=function(e,t){N(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Br.logLevel=ne.VERBOSE,Xn=Br.log.bind(Br),t&&ec.set("logging_enabled",!0)):typeof e=="function"?Xn=e:(Xn=null,ec.remove("logging_enabled"))},je=function(...e){if(mp===!0&&(mp=!1,Xn===null&&ec.get("logging_enabled")===!0&&Vb(!0)),Xn){const t=To.apply(null,e);Xn(t)}},Io=function(e){return function(...t){je(e,...t)}},tc=function(...e){const t="FIREBASE INTERNAL ERROR: "+To(...e);Br.error(t)},Xt=function(...e){const t=`FIREBASE FATAL ERROR: ${To(...e)}`;throw Br.error(t),new Error(t)},Je=function(...e){const t="FIREBASE WARNING: "+To(...e);Br.warn(t)},Yb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Oy=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Gb=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ei="[MIN_NAME]",lr="[MAX_NAME]",ai=function(e,t){if(e===t)return 0;if(e===ei||t===lr)return-1;if(t===ei||e===lr)return 1;{const n=gp(e),r=gp(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},Kb=function(e,t){return e===t?0:e<t?-1:1},_i=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Pe(t))},Df=function(e){if(typeof e!="object"||e===null)return Pe(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Pe(t[r]),n+=":",n+=Df(e[t[r]]);return n+="}",n},Py=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function mt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ry=function(e){N(!Oy(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,s,a,l;e===0?(o=0,s=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=a+r,s=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const c=u.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Qb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Xb=new RegExp("^-?(0*)\\d{1,10}$"),Jb=-2147483648,Zb=2147483647,gp=function(e){if(Xb.test(e)){const t=Number(e);if(t>=Jb&&t<=Zb)return t}return null},li=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Je("Exception was thrown by user callback.",n),t},Math.floor(0))}},eT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ui=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class tT{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class nT{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(t)}}class Wr{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Wr.OWNER="owner";/**
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
 */const Mf="5",Dy="v",My="s",Ly="r",Fy="f",jy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zy="ls",Uy="p",nc="ac",$y="websocket",By="long_polling";/**
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
 */class Wy{constructor(t,n,r,i,o=!1,s="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gn.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Gn.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function rT(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Hy(e,t,n){N(typeof t=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(t===$y)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===By)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);rT(e)&&(n.ns=e.namespace);const i=[];return mt(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
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
 */class iT{constructor(){this.counters_={}}incrementCounter(t,n=1){tn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return PE(this.counters_)}}/**
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
 */const Ol={},Pl={};function Lf(e){const t=e.toString();return Ol[t]||(Ol[t]=new iT),Ol[t]}function oT(e,t){const n=e.toString();return Pl[n]||(Pl[n]=t()),Pl[n]}/**
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
 */class sT{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&li(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const vp="start",aT="close",lT="pLPCommand",uT="pRTLPCB",Vy="id",Yy="pw",Gy="ser",cT="cb",fT="seg",dT="ts",hT="d",pT="dframe",Ky=1870,Qy=30,mT=Ky-Qy,gT=25e3,vT=3e4;class Dr{constructor(t,n,r,i,o,s,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Io(t),this.stats_=Lf(n),this.urlFn=l=>(this.appCheckToken&&(l[nc]=this.appCheckToken),Hy(n,By,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sT(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vT)),Gb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ff((...o)=>{const[s,a,l,u,c]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===vp)this.id=a,this.password=l;else if(s===aT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[vp]="t",r[Gy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[cT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Dy]=Mf,this.transportSessionId&&(r[My]=this.transportSessionId),this.lastSessionId&&(r[zy]=this.lastSessionId),this.applicationId&&(r[Uy]=this.applicationId),this.appCheckToken&&(r[nc]=this.appCheckToken),typeof location<"u"&&location.hostname&&jy.test(location.hostname)&&(r[Ly]=Fy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Dr.forceAllow_=!0}static forceDisallow(){Dr.forceDisallow_=!0}static isAvailable(){return Dr.forceAllow_?!0:!Dr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qb()&&!qb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Pe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Wv(n),i=Py(r,mT);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[pT]="t",r[Vy]=t,r[Yy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Pe(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ff{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Hb(),window[lT+this.uniqueCallbackIdentifier]=t,window[uT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ff.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||je("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Vy]=this.myID,t[Yy]=this.myPW,t[Gy]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qy+r.length<=Ky;){const s=this.pendingSegs.shift();r=r+"&"+fT+i+"="+s.seg+"&"+dT+i+"="+s.ts+"&"+hT+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(gT)),o=()=>{clearTimeout(i),r()};this.addTag(t,o)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{je("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const yT=16384,_T=45e3;let ea=null;typeof MozWebSocket<"u"?ea=MozWebSocket:typeof WebSocket<"u"&&(ea=WebSocket);class wt{constructor(t,n,r,i,o,s,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Io(this.connId),this.stats_=Lf(n),this.connURL=wt.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,o){const s={};return s[Dy]=Mf,typeof location<"u"&&location.hostname&&jy.test(location.hostname)&&(s[Ly]=Fy),n&&(s[My]=n),r&&(s[zy]=r),i&&(s[nc]=i),o&&(s[Uy]=o),Hy(t,$y,s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gn.set("previous_websocket_failure",!0);try{let r;Kv(),this.mySock=new ea(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&ea!==null&&!wt.forceDisallow_}static previouslyFailed(){return Gn.isInMemoryStorage||Gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gn.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=fo(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(N(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Pe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Py(n,yT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_T))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wt.responsesRequiredToBeHealthy=2;wt.healthyTimeout=3e4;/**
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
 */class po{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Dr,wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=wt&&wt.isAvailable();let r=n&&!wt.previouslyFailed();if(t.webSocketOnly&&(n||Je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wt];else{const i=this.transports_=[];for(const o of po.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);po.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}po.globalTransportInitialized_=!1;/**
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
 */const wT=6e4,ST=5e3,ET=10*1024,CT=100*1024,Rl="t",yp="d",kT="s",_p="r",bT="e",wp="o",Sp="a",Ep="n",Cp="p",TT="h";class IT{constructor(t,n,r,i,o,s,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Io("c:"+this.id+":"),this.transportManager_=new po(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ui(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ET?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Rl in t){const n=t[Rl];n===Sp?this.upgradeIfSecondaryHealthy_():n===_p?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===wp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=_i("t",t),r=_i("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ep,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=_i("t",t),r=_i("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=_i(Rl,t);if(yp in t){const r=t[yp];if(n===TT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ep){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kT?this.onConnectionShutdown_(r):n===_p?this.onReset_(r):n===bT?tc("Server Error: "+r):n===wp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tc("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mf!==r&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ui(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wT))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ui(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ST))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cp,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class qy{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class Xy{constructor(t){this.allowedEvents_=t,this.listeners_={},N(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(t){N(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class ta extends Xy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ta}getInitialEvent(t){return N(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const kp=32,bp=768;class ce{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function ee(){return new ce("")}function W(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function On(e){return e.pieces_.length-e.pieceNum_}function se(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ce(e.pieces_,t)}function Jy(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function xT(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Zy(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function e_(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ce(t,0)}function Ce(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ce)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ce(n,0)}function Y(e){return e.pieceNum_>=e.pieces_.length}function ft(e,t){const n=W(e),r=W(t);if(n===null)return t;if(n===r)return ft(se(e),se(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function t_(e,t){if(On(e)!==On(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Et(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(On(e)>On(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class NT{constructor(t,n){this.errorPrefix_=n,this.parts_=Zy(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Aa(this.parts_[r]);n_(this)}}function AT(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Aa(t),n_(e)}function OT(e){const t=e.parts_.pop();e.byteLength_-=Aa(t),e.parts_.length>0&&(e.byteLength_-=1)}function n_(e){if(e.byteLength_>bp)throw new Error(e.errorPrefix_+"has a key path longer than "+bp+" bytes ("+e.byteLength_+").");if(e.parts_.length>kp)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kp+") or object contains a cycle "+Un(e))}function Un(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class jf extends Xy{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new jf}getInitialEvent(t){return N(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const wi=1e3,PT=60*5*1e3,Tp=30*1e3,RT=1.3,DT=3e4,MT="server_kill",Ip=3;class Bt extends qy{constructor(t,n,r,i,o,s,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Bt.nextPersistentConnectionId_++,this.log_=Io("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wi,this.maxReconnectDelay_=PT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Kv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jf.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&ta.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,o={r:i,a:t,b:n};this.log_(Pe(o)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new xa,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(t,n,r,i){this.initConnection_();const o=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),N(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";t.tag&&(o.q=n._queryObject,o.t=t.tag),o.h=t.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,u=a.s;Bt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&tn(t,"w")){const r=Zr(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||QE(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tp)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=KE(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===t&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const o={p:t},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+t,o),this.sendRequest(t,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Pe(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):tc("Unrecognized action received from server: "+Pe(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>DT&&(this.reconnectDelay_=wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},u=function(f){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new IT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,h=>{Je(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(MT)},o))}catch(f){this.log_("Failed to get token: "+f),s||(this.repoInfo_.nodeAdmin&&Je(f),l())}}}interrupt(t){je("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){je("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Yh(this.interruptReasons_)&&(this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(o=>Df(o)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new ce(t).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){je("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ip&&(this.reconnectDelay_=Tp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){je("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ip&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+xy.replace(/\./g,"-")]=1,Gv()?t["framework.cordova"]=1:WE()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=ta.getInstance().currentlyOnline();return Yh(this.interruptReasons_)&&t}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
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
 */class K{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new K(t,n)}}/**
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
 */class Ra{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new K(ei,t),i=new K(ei,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
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
 */let is;class r_ extends Ra{static get __EMPTY_NODE(){return is}static set __EMPTY_NODE(t){is=t}compare(t,n){return ai(t.name,n.name)}isDefinedOn(t){throw si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return K.MIN}maxPost(){return new K(lr,is)}makePost(t,n){return N(typeof t=="string","KeyIndex indexValue must always be a string."),new K(t,is)}toString(){return".key"}}const Hr=new r_;/**
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
 */class os{constructor(t,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(t=t,s=n?r(t.key,n):1,i&&(s*=-1),s<0)this.isReverse_?t=t.left:t=t.right;else if(s===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class xe{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??xe.RED,this.left=i??Ge.EMPTY_NODE,this.right=o??Ge.EMPTY_NODE}copy(t,n,r,i,o){return new xe(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class LT{copy(t,n,r,i,o){return this}insert(t,n,r){return new xe(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(t,n=Ge.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Ge(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(t){return new Ge(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new os(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new os(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new os(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new os(this.root_,null,this.comparator_,!0,t)}}Ge.EMPTY_NODE=new LT;/**
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
 */function FT(e,t){return ai(e.name,t.name)}function zf(e,t){return ai(e,t)}/**
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
 */let rc;function jT(e){rc=e}const i_=function(e){return typeof e=="number"?"number:"+Ry(e):"string:"+e},o_=function(e){if(e.isLeafNode()){const t=e.val();N(typeof t=="string"||typeof t=="number"||typeof t=="object"&&tn(t,".sv"),"Priority must be a string or number.")}else N(e===rc||e.isEmpty(),"priority of unexpected type.");N(e===rc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xp;class Te{constructor(t,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),o_(this.priorityNode_)}static set __childrenNodeConstructor(t){xp=t}static get __childrenNodeConstructor(){return xp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Te(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Y(t)?this:W(t)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=W(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||On(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+i_(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=Ry(this.value_):t+=this.value_,this.lazyHash_=Ay(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Te.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Te.__childrenNodeConstructor?-1:(N(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Te.VALUE_TYPE_ORDER.indexOf(n),o=Te.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let s_,a_;function zT(e){s_=e}function UT(e){a_=e}class $T extends Ra{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?ai(t.name,n.name):o}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(lr,new Te("[PRIORITY-POST]",a_))}makePost(t,n){const r=s_(t);return new K(n,new Te("[PRIORITY-POST]",r))}toString(){return".priority"}}const ze=new $T;/**
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
 */const BT=Math.log(2);class WT{constructor(t){const n=o=>parseInt(Math.log(o)/BT,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const na=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let f,d;if(c===0)return null;if(c===1)return f=e[l],d=n?n(f):f,new xe(d,f.node,xe.BLACK,null,null);{const h=parseInt(c/2,10)+l,m=i(l,h),y=i(h+1,u);return f=e[h],d=n?n(f):f,new xe(d,f.node,xe.BLACK,m,y)}},o=function(l){let u=null,c=null,f=e.length;const d=function(m,y){const w=f-m,g=f;f-=m;const p=i(w+1,g),v=e[w],_=n?n(v):v;h(new xe(_,v.node,y,null,p))},h=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(m+1));y?d(w,xe.BLACK):(d(w,xe.BLACK),d(w,xe.RED))}return c},s=new WT(e.length),a=o(s);return new Ge(r||t,a)};/**
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
 */let Dl;const yr={};class Ut{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return N(yr&&ze,"ChildrenNode.ts has not been loaded"),Dl=Dl||new Ut({".priority":yr},{".priority":ze}),Dl}get(t){const n=Zr(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Ge?n:null}hasIndex(t){return tn(this.indexSet_,t.toString())}addIndex(t,n){N(t!==Hr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(K.Wrap);let s=o.getNext();for(;s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=na(r,t.getCompare()):a=yr;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Ut(c,u)}addToIndexes(t,n){const r=Qs(this.indexes_,(i,o)=>{const s=Zr(this.indexSet_,o);if(N(s,"Missing index implementation for "+o),i===yr)if(s.isDefinedOn(t.node)){const a=[],l=n.getIterator(K.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),na(a,s.getCompare())}else return yr;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new K(t.name,a))),l.insert(t,t.node)}});return new Ut(r,this.indexSet_)}removeFromIndexes(t,n){const r=Qs(this.indexes_,i=>{if(i===yr)return i;{const o=n.get(t.name);return o?i.remove(new K(t.name,o)):i}});return new Ut(r,this.indexSet_)}}/**
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
 */let Si;class q{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&o_(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Si||(Si=new q(new Ge(zf),null,Ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Si}updatePriority(t){return this.children_.isEmpty()?this:new q(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Si:n}}getChild(t){const n=W(t);return n===null?this:this.getImmediateChild(n).getChild(se(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(N(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new K(t,n);let i,o;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?Si:this.priorityNode_;return new q(i,s,o)}}updateChild(t,n){const r=W(t);if(r===null)return n;{N(W(t)!==".priority"||On(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(se(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(ze,(s,a)=>{n[s]=a.val(t),r++,o&&q.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!t&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+i_(this.getPriority().val())+":"),this.forEachChild(ze,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":Ay(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new K(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new K(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new K(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,K.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,K.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===xo?-1:0}withIndex(t){if(t===Hr||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Hr||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ze),i=n.getIterator(ze);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(t){return t===Hr?null:this.indexMap_.get(t.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class HT extends q{constructor(){super(new Ge(zf),q.EMPTY_NODE,Ut.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return q.EMPTY_NODE}isEmpty(){return!1}}const xo=new HT;Object.defineProperties(K,{MIN:{value:new K(ei,q.EMPTY_NODE)},MAX:{value:new K(lr,xo)}});r_.__EMPTY_NODE=q.EMPTY_NODE;Te.__childrenNodeConstructor=q;jT(xo);UT(xo);/**
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
 */const VT=!0;function Oe(e,t=null){if(e===null)return q.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),N(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Te(n,Oe(t))}if(!(e instanceof Array)&&VT){const n=[];let r=!1;if(mt(e,(s,a)=>{if(s.substring(0,1)!=="."){const l=Oe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new K(s,l)))}}),n.length===0)return q.EMPTY_NODE;const o=na(n,FT,s=>s.name,zf);if(r){const s=na(n,ze.getCompare());return new q(o,Oe(t),new Ut({".priority":s},{".priority":ze}))}else return new q(o,Oe(t),Ut.Default)}else{let n=q.EMPTY_NODE;return mt(e,(r,i)=>{if(tn(e,r)&&r.substring(0,1)!=="."){const o=Oe(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(Oe(t))}}zT(Oe);/**
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
 */class YT extends Ra{constructor(t){super(),this.indexPath_=t,N(!Y(t)&&W(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?ai(t.name,n.name):o}makePost(t,n){const r=Oe(t),i=q.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const t=q.EMPTY_NODE.updateChild(this.indexPath_,xo);return new K(lr,t)}toString(){return Zy(this.indexPath_,0).join("/")}}/**
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
 */class GT extends Ra{compare(t,n){const r=t.node.compareTo(n.node);return r===0?ai(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(t,n){const r=Oe(t);return new K(n,r)}toString(){return".value"}}const KT=new GT;/**
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
 */function QT(e){return{type:"value",snapshotNode:e}}function qT(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function XT(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Np(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function JT(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class Uf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ei}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:lr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const t=new Uf;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Ap(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ze?n="$priority":e.index_===KT?n="$value":e.index_===Hr?n="$key":(N(e.index_ instanceof YT,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Pe(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Pe(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Pe(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Pe(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Pe(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Op(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==ze&&(t.i=e.index_.toString()),t}/**
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
 */class ra extends qy{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Io("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(N(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const o=t._path.toString();this.log_("Listen called for "+o+" "+t._queryIdentifier);const s=ra.getListenId_(t,r),a={};this.listens_[s]=a;const l=Ap(t._queryParams);this.restRequest_(o+".json",l,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(o,f,!1,r),Zr(this.listens_,s)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(t,n){const r=ra.getListenId_(t,n);delete this.listens_[r]}get(t){const n=Ap(t._queryParams),r=t._path.toString(),i=new xa;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+qE(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fo(a.responseText)}catch{Je("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Je("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
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
 */class ZT{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function ia(){return{value:null,children:new Map}}function l_(e,t,n){if(Y(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=W(t);e.children.has(r)||e.children.set(r,ia());const i=e.children.get(r);t=se(t),l_(i,t,n)}}function ic(e,t,n){e.value!==null?n(t,e.value):eI(e,(r,i)=>{const o=new ce(t.toString()+"/"+r);ic(i,o,n)})}function eI(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
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
 */class tI{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&mt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
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
 */const Pp=10*1e3,nI=30*1e3,rI=5*60*1e3;class iI{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tI(t);const r=Pp+(nI-Pp)*Math.random();Ui(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;mt(t,(i,o)=>{o>0&&tn(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),Ui(this.reportStats_.bind(this),Math.floor(Math.random()*2*rI))}}/**
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
 */var Pt;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function u_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function c_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function f_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class oa{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Pt.ACK_USER_WRITE,this.source=u_()}operationForChild(t){if(Y(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(t));return new oa(ee(),n,this.revert)}}else return N(W(this.path)===t,"operationForChild called for unrelated child."),new oa(se(this.path),this.affectedTree,this.revert)}}/**
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
 */class ur{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=Pt.OVERWRITE}operationForChild(t){return Y(this.path)?new ur(this.source,ee(),this.snap.getImmediateChild(t)):new ur(this.source,se(this.path),this.snap)}}/**
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
 */class mo{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=Pt.MERGE}operationForChild(t){if(Y(this.path)){const n=this.children.subtree(new ce(t));return n.isEmpty()?null:n.value?new ur(this.source,ee(),n.value):new mo(this.source,ee(),n)}else return N(W(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new mo(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $f{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Y(t))return this.isFullyInitialized()&&!this.filtered_;const n=W(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function oI(e,t,n,r){const i=[],o=[];return t.forEach(s=>{s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(JT(s.childName,s.snapshotNode))}),Ei(e,i,"child_removed",t,r,n),Ei(e,i,"child_added",t,r,n),Ei(e,i,"child_moved",o,r,n),Ei(e,i,"child_changed",t,r,n),Ei(e,i,"value",t,r,n),i}function Ei(e,t,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>aI(e,a,l)),s.forEach(a=>{const l=sI(e,a,o);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function sI(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function aI(e,t,n){if(t.childName==null||n.childName==null)throw si("Should only compare child_ events.");const r=new K(t.childName,t.snapshotNode),i=new K(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function d_(e,t){return{eventCache:e,serverCache:t}}function $i(e,t,n,r){return d_(new $f(t,n,r),e.serverCache)}function h_(e,t,n,r){return d_(e.eventCache,new $f(t,n,r))}function oc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function cr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Ml;const lI=()=>(Ml||(Ml=new Ge(Kb)),Ml);class oe{constructor(t,n=lI()){this.value=t,this.children=n}static fromObject(t){let n=new oe(null);return mt(t,(r,i)=>{n=n.set(new ce(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(Y(t))return null;{const r=W(t),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(se(t),n);return o!=null?{path:Ce(new ce(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Y(t))return this;{const n=W(t),r=this.children.get(n);return r!==null?r.subtree(se(t)):new oe(null)}}set(t,n){if(Y(t))return new oe(n,this.children);{const r=W(t),o=(this.children.get(r)||new oe(null)).set(se(t),n),s=this.children.insert(r,o);return new oe(this.value,s)}}remove(t){if(Y(t))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=W(t),r=this.children.get(n);if(r){const i=r.remove(se(t));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new oe(null):new oe(this.value,o)}else return this}}get(t){if(Y(t))return this.value;{const n=W(t),r=this.children.get(n);return r?r.get(se(t)):null}}setTree(t,n){if(Y(t))return n;{const r=W(t),o=(this.children.get(r)||new oe(null)).setTree(se(t),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new oe(this.value,s)}}fold(t){return this.fold_(ee(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(Ce(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,ee(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Y(t))return null;{const o=W(t),s=this.children.get(o);return s?s.findOnPath_(se(t),Ce(n,o),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,ee(),n)}foreachOnPath_(t,n,r){if(Y(t))return this;{this.value&&r(n,this.value);const i=W(t),o=this.children.get(i);return o?o.foreachOnPath_(se(t),Ce(n,i),r):new oe(null)}}foreach(t){this.foreach_(ee(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ce(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
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
 */class bt{constructor(t){this.writeTree_=t}static empty(){return new bt(new oe(null))}}function Bi(e,t,n){if(Y(t))return new bt(new oe(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let o=r.value;const s=ft(i,t);return o=o.updateChild(s,n),new bt(e.writeTree_.set(i,o))}else{const i=new oe(n),o=e.writeTree_.setTree(t,i);return new bt(o)}}}function Rp(e,t,n){let r=e;return mt(n,(i,o)=>{r=Bi(r,Ce(t,i),o)}),r}function Dp(e,t){if(Y(t))return bt.empty();{const n=e.writeTree_.setTree(t,new oe(null));return new bt(n)}}function sc(e,t){return pr(e,t)!=null}function pr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(ft(n.path,t)):null}function Mp(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ze,(r,i)=>{t.push(new K(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new K(r,i.value))}),t}function kn(e,t){if(Y(t))return e;{const n=pr(e,t);return n!=null?new bt(new oe(n)):new bt(e.writeTree_.subtree(t))}}function ac(e){return e.writeTree_.isEmpty()}function ti(e,t){return p_(ee(),e.writeTree_,t)}function p_(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,o)=>{i===".priority"?(N(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=p_(Ce(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Ce(e,".priority"),r)),n}}/**
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
 */function m_(e,t){return w_(t,e)}function uI(e,t,n,r,i){N(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Bi(e.visibleWrites,t,n)),e.lastWriteId=r}function cI(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function fI(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);N(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,s=e.allWrites.length-1;for(;i&&s>=0;){const a=e.allWrites[s];a.visible&&(s>=n&&dI(a,r.path)?i=!1:Et(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return hI(e),!0;if(r.snap)e.visibleWrites=Dp(e.visibleWrites,r.path);else{const a=r.children;mt(a,l=>{e.visibleWrites=Dp(e.visibleWrites,Ce(r.path,l))})}return!0}else return!1}function dI(e,t){if(e.snap)return Et(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Et(Ce(e.path,n),t))return!0;return!1}function hI(e){e.visibleWrites=g_(e.allWrites,pI,ee()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function pI(e){return e.visible}function g_(e,t,n){let r=bt.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const s=o.path;let a;if(o.snap)Et(n,s)?(a=ft(n,s),r=Bi(r,a,o.snap)):Et(s,n)&&(a=ft(s,n),r=Bi(r,ee(),o.snap.getChild(a)));else if(o.children){if(Et(n,s))a=ft(n,s),r=Rp(r,a,o.children);else if(Et(s,n))if(a=ft(s,n),Y(a))r=Rp(r,ee(),o.children);else{const l=Zr(o.children,W(a));if(l){const u=l.getChild(se(a));r=Bi(r,ee(),u)}}}else throw si("WriteRecord should have .snap or .children")}}return r}function v_(e,t,n,r,i){if(!r&&!i){const o=pr(e.visibleWrites,t);if(o!=null)return o;{const s=kn(e.visibleWrites,t);if(ac(s))return n;if(n==null&&!sc(s,ee()))return null;{const a=n||q.EMPTY_NODE;return ti(s,a)}}}else{const o=kn(e.visibleWrites,t);if(!i&&ac(o))return n;if(!i&&n==null&&!sc(o,ee()))return null;{const s=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Et(u.path,t)||Et(t,u.path))},a=g_(e.allWrites,s,t),l=n||q.EMPTY_NODE;return ti(a,l)}}}function mI(e,t,n){let r=q.EMPTY_NODE;const i=pr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ze,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=kn(e.visibleWrites,t);return n.forEachChild(ze,(s,a)=>{const l=ti(kn(o,new ce(s)),a);r=r.updateImmediateChild(s,l)}),Mp(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=kn(e.visibleWrites,t);return Mp(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function gI(e,t,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=Ce(t,n);if(sc(e.visibleWrites,o))return null;{const s=kn(e.visibleWrites,o);return ac(s)?i.getChild(n):ti(s,i.getChild(n))}}function vI(e,t,n,r){const i=Ce(t,n),o=pr(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=kn(e.visibleWrites,i);return ti(s,r.getNode().getImmediateChild(n))}else return null}function yI(e,t){return pr(e.visibleWrites,t)}function _I(e,t,n,r,i,o,s){let a;const l=kn(e.visibleWrites,t),u=pr(l,ee());if(u!=null)a=u;else if(n!=null)a=ti(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const c=[],f=s.getCompare(),d=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let h=d.getNext();for(;h&&c.length<i;)f(h,r)!==0&&c.push(h),h=d.getNext();return c}else return[]}function wI(){return{visibleWrites:bt.empty(),allWrites:[],lastWriteId:-1}}function lc(e,t,n,r){return v_(e.writeTree,e.treePath,t,n,r)}function y_(e,t){return mI(e.writeTree,e.treePath,t)}function Lp(e,t,n,r){return gI(e.writeTree,e.treePath,t,n,r)}function sa(e,t){return yI(e.writeTree,Ce(e.treePath,t))}function SI(e,t,n,r,i,o){return _I(e.writeTree,e.treePath,t,n,r,i,o)}function Bf(e,t,n){return vI(e.writeTree,e.treePath,t,n)}function __(e,t){return w_(Ce(e.treePath,t),e.writeTree)}function w_(e,t){return{treePath:e,writeTree:t}}/**
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
 */class EI{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,Np(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,XT(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,qT(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,Np(r,t.snapshotNode,i.oldSnap));else throw si("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class CI{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const S_=new CI;class Wf{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new $f(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bf(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cr(this.viewCache_),o=SI(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]}}function kI(e,t){N(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),N(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function bI(e,t,n,r,i){const o=new EI;let s,a;if(n.type===Pt.OVERWRITE){const u=n;u.source.fromUser?s=uc(e,t,u.path,u.snap,r,i,o):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Y(u.path),s=aa(e,t,u.path,u.snap,r,i,a,o))}else if(n.type===Pt.MERGE){const u=n;u.source.fromUser?s=II(e,t,u.path,u.children,r,i,o):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),s=cc(e,t,u.path,u.children,r,i,a,o))}else if(n.type===Pt.ACK_USER_WRITE){const u=n;u.revert?s=AI(e,t,u.path,r,i,o):s=xI(e,t,u.path,u.affectedTree,r,i,o)}else if(n.type===Pt.LISTEN_COMPLETE)s=NI(e,t,n.path,r,o);else throw si("Unknown operation type: "+n.type);const l=o.getChanges();return TI(t,s,l),{viewCache:s,changes:l}}function TI(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=oc(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(QT(oc(t)))}}function E_(e,t,n,r,i,o){const s=t.eventCache;if(sa(r,n)!=null)return t;{let a,l;if(Y(n))if(N(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=cr(t),c=u instanceof q?u:q.EMPTY_NODE,f=y_(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),f,o)}else{const u=lc(r,cr(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,o)}else{const u=W(n);if(u===".priority"){N(On(n)===1,"Can't have a priority with additional path components");const c=s.getNode();l=t.serverCache.getNode();const f=Lp(r,n,c,l);f!=null?a=e.filter.updatePriority(c,f):a=s.getNode()}else{const c=se(n);let f;if(s.isCompleteForChild(u)){l=t.serverCache.getNode();const d=Lp(r,n,s.getNode(),l);d!=null?f=s.getNode().getImmediateChild(u).updateChild(c,d):f=s.getNode().getImmediateChild(u)}else f=Bf(r,u,t.serverCache);f!=null?a=e.filter.updateChild(s.getNode(),u,f,c,i,o):a=s.getNode()}}return $i(t,a,s.isFullyInitialized()||Y(n),e.filter.filtersNodes())}}function aa(e,t,n,r,i,o,s,a){const l=t.serverCache;let u;const c=s?e.filter:e.filter.getIndexedFilter();if(Y(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),h,null)}else{const h=W(n);if(!l.isCompleteForPath(n)&&On(n)>1)return t;const m=se(n),w=l.getNode().getImmediateChild(h).updateChild(m,r);h===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),h,w,m,S_,null)}const f=h_(t,u,l.isFullyInitialized()||Y(n),c.filtersNodes()),d=new Wf(i,f,o);return E_(e,f,n,i,d,a)}function uc(e,t,n,r,i,o,s){const a=t.eventCache;let l,u;const c=new Wf(i,t,o);if(Y(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=$i(t,u,!0,e.filter.filtersNodes());else{const f=W(n);if(f===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=$i(t,u,a.isFullyInitialized(),a.isFiltered());else{const d=se(n),h=a.getNode().getImmediateChild(f);let m;if(Y(d))m=r;else{const y=c.getCompleteChild(f);y!=null?Jy(d)===".priority"&&y.getChild(e_(d)).isEmpty()?m=y:m=y.updateChild(d,r):m=q.EMPTY_NODE}if(h.equals(m))l=t;else{const y=e.filter.updateChild(a.getNode(),f,m,d,c,s);l=$i(t,y,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Fp(e,t){return e.eventCache.isCompleteForChild(t)}function II(e,t,n,r,i,o,s){let a=t;return r.foreach((l,u)=>{const c=Ce(n,l);Fp(t,W(c))&&(a=uc(e,a,c,u,i,o,s))}),r.foreach((l,u)=>{const c=Ce(n,l);Fp(t,W(c))||(a=uc(e,a,c,u,i,o,s))}),a}function jp(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function cc(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;Y(n)?u=r:u=new oe(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((f,d)=>{if(c.hasChild(f)){const h=t.serverCache.getNode().getImmediateChild(f),m=jp(e,h,d);l=aa(e,l,new ce(f),m,i,o,s,a)}}),u.children.inorderTraversal((f,d)=>{const h=!t.serverCache.isCompleteForChild(f)&&d.value===null;if(!c.hasChild(f)&&!h){const m=t.serverCache.getNode().getImmediateChild(f),y=jp(e,m,d);l=aa(e,l,new ce(f),y,i,o,s,a)}}),l}function xI(e,t,n,r,i,o,s){if(sa(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return aa(e,t,n,l.getNode().getChild(n),i,o,a,s);if(Y(n)){let u=new oe(null);return l.getNode().forEachChild(Hr,(c,f)=>{u=u.set(new ce(c),f)}),cc(e,t,n,u,i,o,a,s)}else return t}else{let u=new oe(null);return r.foreach((c,f)=>{const d=Ce(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),cc(e,t,n,u,i,o,a,s)}}function NI(e,t,n,r,i){const o=t.serverCache,s=h_(t,o.getNode(),o.isFullyInitialized()||Y(n),o.isFiltered());return E_(e,s,n,r,S_,i)}function AI(e,t,n,r,i,o){let s;if(sa(r,n)!=null)return t;{const a=new Wf(r,t,i),l=t.eventCache.getNode();let u;if(Y(n)||W(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=lc(r,cr(t));else{const f=t.serverCache.getNode();N(f instanceof q,"serverChildren would be complete if leaf node"),c=y_(r,f)}c=c,u=e.filter.updateFullNode(l,c,o)}else{const c=W(n);let f=Bf(r,c,t.serverCache);f==null&&t.serverCache.isCompleteForChild(c)&&(f=l.getImmediateChild(c)),f!=null?u=e.filter.updateChild(l,c,f,se(n),a,o):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,q.EMPTY_NODE,se(n),a,o):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=lc(r,cr(t)),s.isLeafNode()&&(u=e.filter.updateFullNode(u,s,o)))}return s=t.serverCache.isFullyInitialized()||sa(r,ee())!=null,$i(t,u,s,e.filter.filtersNodes())}}function OI(e,t){const n=cr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Y(t)&&!n.getImmediateChild(W(t)).isEmpty())?n.getChild(t):null}function zp(e,t,n,r){t.type===Pt.MERGE&&t.source.queryId!==null&&(N(cr(e.viewCache_),"We should always have a full cache before handling merges"),N(oc(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=bI(e.processor_,i,t,n,r);return kI(e.processor_,o.viewCache),N(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,PI(e,o.changes,o.viewCache.eventCache.getNode(),null)}function PI(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return oI(e.eventGenerator_,t,n,i)}/**
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
 */let Up;function RI(e){N(!Up,"__referenceConstructor has already been defined"),Up=e}function Hf(e,t,n,r){const i=t.source.queryId;if(i!==null){const o=e.views.get(i);return N(o!=null,"SyncTree gave us an op for an invalid query."),zp(o,t,n,r)}else{let o=[];for(const s of e.views.values())o=o.concat(zp(s,t,n,r));return o}}function Vf(e,t){let n=null;for(const r of e.views.values())n=n||OI(r,t);return n}/**
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
 */let $p;function DI(e){N(!$p,"__referenceConstructor has already been defined"),$p=e}class Bp{constructor(t){this.listenProvider_=t,this.syncPointTree_=new oe(null),this.pendingWriteTree_=wI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function C_(e,t,n,r,i){return uI(e.pendingWriteTree_,t,n,r,i),i?Ma(e,new ur(u_(),t,n)):[]}function Kn(e,t,n=!1){const r=cI(e.pendingWriteTree_,t);if(fI(e.pendingWriteTree_,t)){let o=new oe(null);return r.snap!=null?o=o.set(ee(),!0):mt(r.children,s=>{o=o.set(new ce(s),!0)}),Ma(e,new oa(r.path,o,n))}else return[]}function Da(e,t,n){return Ma(e,new ur(c_(),t,n))}function MI(e,t,n){const r=oe.fromObject(n);return Ma(e,new mo(c_(),t,r))}function LI(e,t,n,r){const i=T_(e,r);if(i!=null){const o=I_(i),s=o.path,a=o.queryId,l=ft(s,t),u=new ur(f_(a),l,n);return x_(e,s,u)}else return[]}function FI(e,t,n,r){const i=T_(e,r);if(i){const o=I_(i),s=o.path,a=o.queryId,l=ft(s,t),u=oe.fromObject(n),c=new mo(f_(a),l,u);return x_(e,s,c)}else return[]}function Yf(e,t,n){const i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(s,a)=>{const l=ft(s,t),u=Vf(a,l);if(u)return u});return v_(i,t,o,n,!0)}function Ma(e,t){return k_(t,e.syncPointTree_,null,m_(e.pendingWriteTree_,ee()))}function k_(e,t,n,r){if(Y(e.path))return b_(e,t,n,r);{const i=t.get(ee());n==null&&i!=null&&(n=Vf(i,ee()));let o=[];const s=W(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const u=n?n.getImmediateChild(s):null,c=__(r,s);o=o.concat(k_(a,l,u,c))}return i&&(o=o.concat(Hf(i,e,r,n))),o}}function b_(e,t,n,r){const i=t.get(ee());n==null&&i!=null&&(n=Vf(i,ee()));let o=[];return t.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,u=__(r,s),c=e.operationForChild(s);c&&(o=o.concat(b_(c,a,l,u)))}),i&&(o=o.concat(Hf(i,e,r,n))),o}function T_(e,t){return e.tagToQueryMap.get(t)}function I_(e){const t=e.indexOf("$");return N(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ce(e.substr(0,t))}}function x_(e,t,n){const r=e.syncPointTree_.get(t);N(r,"Missing sync point for query tag that we're tracking");const i=m_(e.pendingWriteTree_,t);return Hf(r,n,i,null)}/**
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
 */class Gf{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Gf(n)}node(){return this.node_}}class Kf{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Ce(this.path_,t);return new Kf(this.syncTree_,n)}node(){return Yf(this.syncTree_,this.path_)}}const jI=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Wp=function(e,t,n){if(!e||typeof e!="object")return e;if(N(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return zI(e[".sv"],t,n);if(typeof e[".sv"]=="object")return UI(e[".sv"],t);N(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},zI=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+e)}},UI=function(e,t,n){e.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=t.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},$I=function(e,t,n,r){return Qf(t,new Kf(n,e),r)},N_=function(e,t,n){return Qf(e,new Gf(t),n)};function Qf(e,t,n){const r=e.getPriority().val(),i=Wp(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const s=e,a=Wp(s.getValue(),t,n);return a!==s.getValue()||i!==s.getPriority().val()?new Te(a,Oe(i)):e}else{const s=e;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new Te(i))),s.forEachChild(ze,(a,l)=>{const u=Qf(l,t.getImmediateChild(a),n);u!==l&&(o=o.updateImmediateChild(a,u))}),o}}/**
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
 */class qf{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function Xf(e,t){let n=t instanceof ce?t:new ce(t),r=e,i=W(n);for(;i!==null;){const o=Zr(r.node.children,i)||{children:{},childCount:0};r=new qf(i,r,o),n=se(n),i=W(n)}return r}function ui(e){return e.node.value}function A_(e,t){e.node.value=t,fc(e)}function O_(e){return e.node.childCount>0}function BI(e){return ui(e)===void 0&&!O_(e)}function La(e,t){mt(e.node.children,(n,r)=>{t(new qf(n,e,r))})}function P_(e,t,n,r){n&&!r&&t(e),La(e,i=>{P_(i,t,!0,r)}),n&&r&&t(e)}function WI(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function No(e){return new ce(e.parent===null?e.name:No(e.parent)+"/"+e.name)}function fc(e){e.parent!==null&&HI(e.parent,e.name,e)}function HI(e,t,n){const r=BI(n),i=tn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,fc(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,fc(e))}/**
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
 */const VI=/[\[\].#$\/\u0000-\u001F\u007F]/,YI=/[\[\].#$\u0000-\u001F\u007F]/,Ll=10*1024*1024,R_=function(e){return typeof e=="string"&&e.length!==0&&!VI.test(e)},D_=function(e){return typeof e=="string"&&e.length!==0&&!YI.test(e)},GI=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),D_(e)},M_=function(e,t,n,r){r&&t===void 0||Jf(bf(e,"value"),t,n)},Jf=function(e,t,n){const r=n instanceof ce?new NT(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Un(r));if(typeof t=="function")throw new Error(e+"contains a function "+Un(r)+" with contents = "+t.toString());if(Oy(t))throw new Error(e+"contains "+t.toString()+" "+Un(r));if(typeof t=="string"&&t.length>Ll/3&&Aa(t)>Ll)throw new Error(e+"contains a string greater than "+Ll+" utf8 bytes "+Un(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,o=!1;if(mt(t,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!R_(s)))throw new Error(e+" contains an invalid key ("+s+") "+Un(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AT(r,s),Jf(e,a,r),OT(r)}),i&&o)throw new Error(e+' contains ".value" child '+Un(r)+" in addition to actual children.")}},L_=function(e,t,n,r){if(!(r&&n===void 0)&&!D_(n))throw new Error(bf(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},KI=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),L_(e,t,n,r)},F_=function(e,t){if(W(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},QI=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!R_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!GI(n))throw new Error(bf(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class qI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function j_(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();n!==null&&!t_(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Jt(e,t,n){j_(e,n),XI(e,r=>Et(r,t)||Et(t,r))}function XI(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(JI(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function JI(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();Xn&&je("event: "+n.toString()),li(r)}}}/**
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
 */const ZI="repo_interrupt",ex=25;class tx{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ia(),this.transactionQueueTree_=new qf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nx(e,t,n){if(e.stats_=Lf(e.repoInfo_),e.forceRestClient_||eT())e.server_=new ra(e.repoInfo_,(r,i,o,s)=>{Hp(e,r,i,o,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Vp(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Bt(e.repoInfo_,t,(r,i,o,s)=>{Hp(e,r,i,o,s)},r=>{Vp(e,r)},r=>{rx(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=oT(e.repoInfo_,()=>new iI(e.stats_,e.server_)),e.infoData_=new ZT,e.infoSyncTree_=new Bp({startListening:(r,i,o,s)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Da(e.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),ed(e,"connected",!1),e.serverSyncTree_=new Bp({startListening:(r,i,o,s)=>(e.server_.listen(r,o,i,(a,l)=>{const u=s(a,l);Jt(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function z_(e){const n=e.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zf(e){return jI({timestamp:z_(e)})}function Hp(e,t,n,r,i){e.dataUpdateCount++;const o=new ce(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(i)if(r){const l=Qs(n,u=>Oe(u));s=FI(e.serverSyncTree_,o,l,i)}else{const l=Oe(n);s=LI(e.serverSyncTree_,o,l,i)}else if(r){const l=Qs(n,u=>Oe(u));s=MI(e.serverSyncTree_,o,l)}else{const l=Oe(n);s=Da(e.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=Fa(e,o)),Jt(e.eventQueue_,a,s)}function Vp(e,t){ed(e,"connected",t),t===!1&&ox(e)}function rx(e,t){mt(t,(n,r)=>{ed(e,n,r)})}function ed(e,t,n){const r=new ce("/.info/"+t),i=Oe(n);e.infoData_.updateSnapshot(r,i);const o=Da(e.infoSyncTree_,r,i);Jt(e.eventQueue_,r,o)}function U_(e){return e.nextWriteId_++}function ix(e,t,n,r,i){td(e,"set",{path:t.toString(),value:n,priority:r});const o=Zf(e),s=Oe(n,r),a=Yf(e.serverSyncTree_,t),l=N_(s,a,o),u=U_(e),c=C_(e.serverSyncTree_,t,l,u,!0);j_(e.eventQueue_,c),e.server_.put(t.toString(),s.val(!0),(d,h)=>{const m=d==="ok";m||Je("set at "+t+" failed: "+d);const y=Kn(e.serverSyncTree_,u,!m);Jt(e.eventQueue_,t,y),ax(e,i,d,h)});const f=V_(e,t);Fa(e,f),Jt(e.eventQueue_,f,[])}function ox(e){td(e,"onDisconnectEvents");const t=Zf(e),n=ia();ic(e.onDisconnect_,ee(),(i,o)=>{const s=$I(i,o,e.serverSyncTree_,t);l_(n,i,s)});let r=[];ic(n,ee(),(i,o)=>{r=r.concat(Da(e.serverSyncTree_,i,o));const s=V_(e,i);Fa(e,s)}),e.onDisconnect_=ia(),Jt(e.eventQueue_,ee(),r)}function sx(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ZI)}function td(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),je(n,...t)}function ax(e,t,n,r){t&&li(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,t(s)}})}function $_(e,t,n){return Yf(e.serverSyncTree_,t,n)||q.EMPTY_NODE}function nd(e,t=e.transactionQueueTree_){if(t||ja(e,t),ui(t)){const n=W_(e,t);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&lx(e,No(t),n)}else O_(t)&&La(t,n=>{nd(e,n)})}function lx(e,t,n){const r=n.map(u=>u.currentWriteId),i=$_(e,t,r);let o=i;const s=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=ft(t,c.path);o=o.updateChild(f,c.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,u=>{td(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Kn(e.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ja(e,Xf(e.transactionQueueTree_,t)),nd(e,e.transactionQueueTree_),Jt(e.eventQueue_,t,c);for(let d=0;d<f.length;d++)li(f[d])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Je("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Fa(e,t)}},s)}function Fa(e,t){const n=B_(e,t),r=No(n),i=W_(e,n);return ux(e,i,r),r}function ux(e,t,n){if(t.length===0)return;const r=[];let i=[];const s=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=ft(n,l.path);let c=!1,f;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,f=l.abortReason,i=i.concat(Kn(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ex)c=!0,f="maxretry",i=i.concat(Kn(e.serverSyncTree_,l.currentWriteId,!0));else{const d=$_(e,l.path,s);l.currentInputSnapshot=d;const h=t[a].update(d.val());if(h!==void 0){Jf("transaction failed: Data returned ",h,l.path);let m=Oe(h);typeof h=="object"&&h!=null&&tn(h,".priority")||(m=m.updatePriority(d.getPriority()));const w=l.currentWriteId,g=Zf(e),p=N_(m,d,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=U_(e),s.splice(s.indexOf(w),1),i=i.concat(C_(e.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Kn(e.serverSyncTree_,w,!0))}else c=!0,f="nodata",i=i.concat(Kn(e.serverSyncTree_,l.currentWriteId,!0))}Jt(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(d){setTimeout(d,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(f==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(f),!1,null))))}ja(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)li(r[a]);nd(e,e.transactionQueueTree_)}function B_(e,t){let n,r=e.transactionQueueTree_;for(n=W(t);n!==null&&ui(r)===void 0;)r=Xf(r,n),t=se(t),n=W(t);return r}function W_(e,t){const n=[];return H_(e,t,n),n.sort((r,i)=>r.order-i.order),n}function H_(e,t,n){const r=ui(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);La(t,i=>{H_(e,i,n)})}function ja(e,t){const n=ui(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,A_(t,n.length>0?n:void 0)}La(t,r=>{ja(e,r)})}function V_(e,t){const n=No(B_(e,t)),r=Xf(e.transactionQueueTree_,t);return WI(r,i=>{Fl(e,i)}),Fl(e,r),P_(r,i=>{Fl(e,i)}),n}function Fl(e,t){const n=ui(t);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(N(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(N(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(Kn(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?A_(t,void 0):n.length=o+1,Jt(e.eventQueue_,No(t),i);for(let s=0;s<r.length;s++)li(r[s])}}/**
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
 */function cx(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function fx(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Je(`Invalid query segment '${n}' in query '${e}'`)}return t}const Yp=function(e,t){const n=dx(e),r=n.namespace;n.domain==="firebase.com"&&Xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Yb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wy(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ce(n.pathString)}},dx=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let f=e.indexOf("?");f===-1&&(f=e.length),t=e.substring(0,Math.min(c,f)),c<f&&(i=cx(e.substring(c,f)));const d=fx(e.substring(Math.min(e.length,f)));u=t.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const h=t.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const m=t.indexOf(".");r=t.substring(0,m).toLowerCase(),n=t.substring(m+1),o=r}"ns"in d&&(o=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
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
 */const Gp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",hx=function(){let e=0;const t=[];return function(n){const r=n===e;e=n;let i;const o=new Array(8);for(i=7;i>=0;i--)o[i]=Gp.charAt(n%64),n=Math.floor(n/64);N(n===0,"Cannot push at time == 0");let s=o.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)s+=Gp.charAt(t[i]);return N(s.length===20,"nextPushId: Length should be 20."),s}}();/**
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
 */class rd{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:Jy(this._path)}get ref(){return new mr(this._repo,this._path)}get _queryIdentifier(){const t=Op(this._queryParams),n=Df(t);return n==="{}"?"default":n}get _queryObject(){return Op(this._queryParams)}isEqual(t){if(t=Mn(t),!(t instanceof rd))return!1;const n=this._repo===t._repo,r=t_(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+xT(this._path)}}class mr extends rd{constructor(t,n){super(t,n,new Uf,!1)}get parent(){const t=e_(this._path);return t===null?null:new mr(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}function px(e,t){return e=Mn(e),e._checkNotDeleted("ref"),t!==void 0?dc(e._root,t):e._root}function dc(e,t){return e=Mn(e),W(e._path)===null?KI("child","path",t,!1):L_("child","path",t,!1),new mr(e._repo,Ce(e._path,t))}function mx(e,t){e=Mn(e),F_("push",e._path),M_("push",t,e._path,!0);const n=z_(e._repo),r=hx(n),i=dc(e,r),o=dc(e,r);let s;return t!=null?s=Y_(o,t).then(()=>o):s=Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}function Y_(e,t){e=Mn(e),F_("set",e._path),M_("set",t,e._path,!1);const n=new xa;return ix(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}RI(mr);DI(mr);/**
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
 */const gx="FIREBASE_DATABASE_EMULATOR_HOST",hc={};let vx=!1;function yx(e,t,n,r){e.repoInfo_=new Wy(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function _x(e,t,n,r,i){let o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||Xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s=Yp(o,i),a=s.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[gx]),u?(l=!0,o=`http://${u}?ns=${a.namespace}`,s=Yp(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const c=i&&l?new Wr(Wr.OWNER):new nT(e.name,e.options,t);QI("Invalid Firebase Database URL",s),Y(s.path)||Xt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Sx(a,e,c,new tT(e.name,n));return new Ex(f,e)}function wx(e,t){const n=hc[t];(!n||n[e.key]!==e)&&Xt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),sx(e),delete n[e.key]}function Sx(e,t,n,r){let i=hc[t.name];i||(i={},hc[t.name]=i);let o=i[e.toURLString()];return o&&Xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new tx(e,vx,n,r),i[e.toURLString()]=o,o}class Ex{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mr(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Xt("Cannot call "+t+" on a deleted database.")}}function Cx(e=ty(),t){const n=bo(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=zE("database");r&&kx(n,...r)}return n}function kx(e,t,n,r={}){e=Mn(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Xt("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Wr(Wr.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:UE(r.mockUserToken,e.app.options.projectId);o=new Wr(s)}yx(i,t,n,o)}/**
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
 */function bx(e){$b(ZC),An(new qt("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return _x(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),Mt(hp,pp,e),Mt(hp,pp,"esm2017")}Bt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Bt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};bx();aE.add(uE,cE);const Tx={apiKey:"AIzaSyBYOLsLlqNQTFgwWO1fyHUTgTHQ4JRgA-A",authDomain:"wmcyn-online-web.firebaseapp.com",projectId:"wmcyn-online-web",storageBucket:"wmcyn-online-web.appspot.com",messagingSenderId:"552241957320",appId:"1:552241957320:web:c32590238a5e7ec06858fd",measurementId:"G-KGVGX3LN7P"},G_=ey(Tx);Fb(G_);const Ix=Cx(G_);function xx(e){const t=px(Ix,"emailList"),n=mx(t);Y_(n,{email:e})}const Nx=()=>{const[e,t]=un.useState(""),[n,r]=un.useState(!1),[i,o]=un.useState(!0),[s,a]=un.useState(!1),l=h=>{t(h.target.value)},u=()=>{i&&o(!1)},c=h=>{h.preventDefault(),xx(e),r(!0),console.log("Email submitted:",e)},f=()=>{const h=document.getElementById("friendsAndFamilySection"),m=document.getElementById("aboutSection"),w=(s?h:m).offsetTop-100;window.scrollTo({top:w,behavior:"smooth"}),a(!s)},d=()=>{window.scrollTo({top:0,behavior:"smooth"}),a(!1)};return de.jsxs("div",{children:[de.jsxs("div",{className:"container",children:[de.jsx("img",{src:NE,alt:"Logo",className:"logo"}),n?de.jsxs(de.Fragment,{children:[de.jsx("h1",{className:"typewriter",children:de.jsx(yh,{options:{strings:["WMCYN WELCOMES YOU"],autoStart:!0,loop:!0}})}),de.jsx("p",{children:"Subscribed."})]}):de.jsxs(de.Fragment,{children:[de.jsx("h1",{className:"typewriter",children:de.jsx(yh,{options:{strings:["YOU'RE EARLY...","SIGN UP FOR OUR NEWSLETTER"],autoStart:!0,loop:!0}})}),de.jsxs("form",{onSubmit:c,children:[de.jsx("input",{type:"email",placeholder:i?"Enter your email":"",value:e,onChange:l,onClick:u,className:"input-field"}),de.jsx("button",{type:"submit",className:"submit-button",children:"Subscribe"})]})]})]}),de.jsxs("div",{className:"container",id:"aboutSection",children:[de.jsx("h2",{className:"section-heading",children:"ABOUT WMCYN"}),de.jsx("p",{className:"section-text",children:"future forward start-up built on the advancement of modern technology intertwined with the basics of everyday lifestyle"})]}),de.jsx("div",{className:"scroll-button-container",children:de.jsx("button",{className:`scroll-button ${s?"up":"down"}`,onClick:s?d:f,children:de.jsx(ko,{icon:s?"arrow-up":"arrow-down"})})})]})};jl.createRoot(document.getElementById("root")).render(de.jsx(_c.StrictMode,{children:de.jsx(Nx,{})}));
