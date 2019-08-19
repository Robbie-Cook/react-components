import{faCircleNotch as n}from"@fortawesome/free-solid-svg-icons";import{FontAwesomeIcon as e}from"@fortawesome/react-fontawesome";import t,{PureComponent as r,Component as o,useContext as i,useState as a,useEffect as c}from"react";import l from"react-pose";import u from"styled-components";import{Helmet as s}from"react-helmet";import{Button as f}from"grommet";import{Carousel as p}from"react-responsive-carousel";import"react-responsive-carousel/lib/styles/carousel.min.css";function d(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function y(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function h(n,e,t){return e&&y(n.prototype,e),t&&y(n,t),n}function m(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function v(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&g(n,e)}function b(n){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function g(n,e){return(g=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function x(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function w(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?x(n):e}function E(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function S(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var k=function n(){d(this,n)};m(k,"textColor","#dcd6ce"),m(k,"backgroundColor","#0f0f0f"),m(k,"link",{color:"#6385a9",colorActive:"#1565c0",colorHighlight:"#6385a9"}),m(k,"text",{color:k.textColor,font:"'Roboto', sans-serif"}),m(k,"page",{backgroundColor:"#0f0f0f",secondaryColor:"#EB6D6D"}),m(k,"navbar",{backgroundColor:k.backgroundColor,height:"60px",button:{backgroundColor:k.backgroundColor,color:k.textColor,borderColor:"transparent",activeColor:k.link.color}}),m(k,"button",{backgroundColor:k.link.color,color:k.text.color,borderColor:k.textColor});var O=t.createContext(k);function C(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function P(n,e){return n(e={exports:{}},e.exports),e.exports}var j=P(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,c=t?Symbol.for("react.profiler"):60114,l=t?Symbol.for("react.provider"):60109,u=t?Symbol.for("react.context"):60110,s=t?Symbol.for("react.async_mode"):60111,f=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,y=t?Symbol.for("react.suspense_list"):60120,h=t?Symbol.for("react.memo"):60115,m=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118;function g(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case r:switch(n=n.type){case s:case f:case i:case c:case a:case d:return n;default:switch(n=n&&n.$$typeof){case u:case p:case l:return n;default:return e}}case m:case h:case o:return e}}}function x(n){return g(n)===f}e.typeOf=g,e.AsyncMode=s,e.ConcurrentMode=f,e.ContextConsumer=u,e.ContextProvider=l,e.Element=r,e.ForwardRef=p,e.Fragment=i,e.Lazy=m,e.Memo=h,e.Portal=o,e.Profiler=c,e.StrictMode=a,e.Suspense=d,e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===i||n===f||n===c||n===a||n===d||n===y||"object"==typeof n&&null!==n&&(n.$$typeof===m||n.$$typeof===h||n.$$typeof===l||n.$$typeof===u||n.$$typeof===p||n.$$typeof===v||n.$$typeof===b)},e.isAsyncMode=function(n){return x(n)||g(n)===s},e.isConcurrentMode=x,e.isContextConsumer=function(n){return g(n)===u},e.isContextProvider=function(n){return g(n)===l},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===r},e.isForwardRef=function(n){return g(n)===p},e.isFragment=function(n){return g(n)===i},e.isLazy=function(n){return g(n)===m},e.isMemo=function(n){return g(n)===h},e.isPortal=function(n){return g(n)===o},e.isProfiler=function(n){return g(n)===c},e.isStrictMode=function(n){return g(n)===a},e.isSuspense=function(n){return g(n)===d}});C(j);j.typeOf,j.AsyncMode,j.ConcurrentMode,j.ContextConsumer,j.ContextProvider,j.Element,j.ForwardRef,j.Fragment,j.Lazy,j.Memo,j.Portal,j.Profiler,j.StrictMode,j.Suspense,j.isValidElementType,j.isAsyncMode,j.isConcurrentMode,j.isContextConsumer,j.isContextProvider,j.isElement,j.isForwardRef,j.isFragment,j.isLazy,j.isMemo,j.isPortal,j.isProfiler,j.isStrictMode,j.isSuspense;var T=P(function(n,e){"production"!==process.env.NODE_ENV&&function(){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,t=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,s=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118;var b=function(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=0,i="Warning: "+n.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(n){}},g=function(n,e){if(void 0===e)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];b.apply(void 0,[e].concat(r))}};function x(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case t:var d=n.type;switch(d){case u:case s:case o:case a:case i:case p:return d;default:var m=d&&d.$$typeof;switch(m){case l:case f:case c:return m;default:return e}}case h:case y:case r:return e}}}var w=u,E=s,S=l,k=c,O=t,C=f,P=o,j=h,T=y,M=r,_=a,R=i,$=p,z=!1;function N(n){return x(n)===s}e.typeOf=x,e.AsyncMode=w,e.ConcurrentMode=E,e.ContextConsumer=S,e.ContextProvider=k,e.Element=O,e.ForwardRef=C,e.Fragment=P,e.Lazy=j,e.Memo=T,e.Portal=M,e.Profiler=_,e.StrictMode=R,e.Suspense=$,e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===o||n===s||n===a||n===i||n===p||n===d||"object"==typeof n&&null!==n&&(n.$$typeof===h||n.$$typeof===y||n.$$typeof===c||n.$$typeof===l||n.$$typeof===f||n.$$typeof===m||n.$$typeof===v)},e.isAsyncMode=function(n){return z||(z=!0,g(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),N(n)||x(n)===u},e.isConcurrentMode=N,e.isContextConsumer=function(n){return x(n)===l},e.isContextProvider=function(n){return x(n)===c},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===t},e.isForwardRef=function(n){return x(n)===f},e.isFragment=function(n){return x(n)===o},e.isLazy=function(n){return x(n)===h},e.isMemo=function(n){return x(n)===y},e.isPortal=function(n){return x(n)===r},e.isProfiler=function(n){return x(n)===a},e.isStrictMode=function(n){return x(n)===i},e.isSuspense=function(n){return x(n)===p}}()});C(T);T.typeOf,T.AsyncMode,T.ConcurrentMode,T.ContextConsumer,T.ContextProvider,T.Element,T.ForwardRef,T.Fragment,T.Lazy,T.Memo,T.Portal,T.Profiler,T.StrictMode,T.Suspense,T.isValidElementType,T.isAsyncMode,T.isConcurrentMode,T.isContextConsumer,T.isContextProvider,T.isElement,T.isForwardRef,T.isFragment,T.isLazy,T.isMemo,T.isPortal,T.isProfiler,T.isStrictMode,T.isSuspense;var M=P(function(n){"production"===process.env.NODE_ENV?n.exports=j:n.exports=T}),_=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;function z(n){if(null==n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}var N=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(n){return e[n]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(n){r[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(n,e){for(var t,r,o=z(n),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))R.call(t,a)&&(o[a]=t[a]);if(_){r=_(t);for(var c=0;c<r.length;c++)$.call(t,r[c])&&(o[r[c]]=t[r[c]])}}return o},A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",D=function(){};if("production"!==process.env.NODE_ENV){var I=A,F={},V=Function.call.bind(Object.prototype.hasOwnProperty);D=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}}}function W(n,e,t,r,o){if("production"!==process.env.NODE_ENV)for(var i in n)if(V(n,i)){var a;try{if("function"!=typeof n[i]){var c=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[i]+"`.");throw c.name="Invariant Violation",c}a=n[i](e,i,r,t,null,I)}catch(n){a=n}if(!a||a instanceof Error||D((r||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in F)){F[a.message]=!0;var l=o?o():"";D("Failed "+t+" type: "+a.message+(null!=l?l:""))}}}W.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(F={})};var L=W,q=Function.call.bind(Object.prototype.hasOwnProperty),H=function(){};function U(){return null}"production"!==process.env.NODE_ENV&&(H=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}});var B=function(n,e){var t="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";var o="<<anonymous>>",i={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:l(U),arrayOf:function(n){return l(function(e,t,r,o,i){if("function"!=typeof n)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=e[t];if(!Array.isArray(a))return new c("Invalid "+o+" `"+i+"` of type `"+f(a)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<a.length;l++){var u=n(a,l,r,o,i+"["+l+"]",A);if(u instanceof Error)return u}return null})},element:l(function(e,t,r,o,i){var a=e[t];return n(a)?null:new c("Invalid "+o+" `"+i+"` of type `"+f(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:l(function(n,e,t,r,o){var i=n[e];return M.isValidElementType(i)?null:new c("Invalid "+r+" `"+o+"` of type `"+f(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(n){return l(function(e,t,r,i,a){if(!(e[t]instanceof n)){var l=n.name||o;return new c("Invalid "+i+" `"+a+"` of type `"+function(n){if(!n.constructor||!n.constructor.name)return o;return n.constructor.name}(e[t])+"` supplied to `"+r+"`, expected instance of `"+l+"`.")}return null})},node:l(function(n,e,t,r,o){return s(n[e])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(n){return l(function(e,t,r,o,i){if("function"!=typeof n)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in a)if(q(a,u)){var s=n(a,u,r,o,i+"."+u,A);if(s instanceof Error)return s}return null})},oneOf:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&(arguments.length>1?H("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):H("Invalid argument supplied to oneOf, expected an array.")),U;return l(function(e,t,r,o,i){for(var l=e[t],u=0;u<n.length;u++)if(a(l,n[u]))return null;var s=JSON.stringify(n,function(n,e){return"symbol"===p(e)?String(e):e});return new c("Invalid "+o+" `"+i+"` of value `"+String(l)+"` supplied to `"+r+"`, expected one of "+s+".")})},oneOfType:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&H("Invalid argument supplied to oneOfType, expected an instance of array."),U;for(var e=0;e<n.length;e++){var t=n[e];if("function"!=typeof t)return H("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(t)+" at index "+e+"."),U}return l(function(e,t,r,o,i){for(var a=0;a<n.length;a++){if(null==(0,n[a])(e,t,r,o,i,A))return null}return new c("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(n){return l(function(e,t,r,o,i){var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var u in n){var s=n[u];if(s){var p=s(a,u,r,o,i+"."+u,A);if(p)return p}}return null})},exact:function(n){return l(function(e,t,r,o,i){var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var u=N({},e[t],n);for(var s in u){var p=n[s];if(!p)return new c("Invalid "+o+" `"+i+"` key `"+s+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(e[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(n),null,"  "));var d=p(a,s,r,o,i+"."+s,A);if(d)return d}return null})}};function a(n,e){return n===e?0!==n||1/n==1/e:n!=n&&e!=e}function c(n){this.message=n,this.stack=""}function l(n){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,a,l,u,s,f,p){if(u=u||o,f=f||l,p!==A){if(e){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var y=u+":"+l;!t[y]&&r<3&&(H("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[y]=!0,r++)}}return null==a[l]?i?null===a[l]?new c("The "+s+" `"+f+"` is marked as required in `"+u+"`, but its value is `null`."):new c("The "+s+" `"+f+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:n(a,l,u,s,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function u(n){return l(function(e,t,r,o,i,a){var l=e[t];return f(l)!==n?new c("Invalid "+o+" `"+i+"` of type `"+p(l)+"` supplied to `"+r+"`, expected `"+n+"`."):null})}function s(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(s);if(null===e||n(e))return!0;var o=function(n){var e=n&&(t&&n[t]||n[r]);if("function"==typeof e)return e}(e);if(!o)return!1;var i,a=o.call(e);if(o!==e.entries){for(;!(i=a.next()).done;)if(!s(i.value))return!1}else for(;!(i=a.next()).done;){var c=i.value;if(c&&!s(c[1]))return!1}return!0;default:return!1}}function f(n){var e=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":function(n,e){return"symbol"===n||!!e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}(e,n)?"symbol":e}function p(n){if(null==n)return""+n;var e=f(n);if("object"===e){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return e}function d(n){var e=p(n);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}return c.prototype=Error.prototype,i.checkPropTypes=L,i.resetWarningCache=L.resetWarningCache,i.PropTypes=i,i};function Y(){}function J(){}J.resetWarningCache=Y;var G=P(function(n){if("production"!==process.env.NODE_ENV){var e=M;n.exports=B(e.isElement,!0)}else n.exports=function(){function n(n,e,t,r,o,i){if(i!==A){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:J,resetWarningCache:Y};return t.PropTypes=t,t}()}),K=function n(){d(this,n)};function Q(){var n=E(["\n    animation-name: spin; \n    align-items: center;\n    max-width: 200px;\n    animation-duration: 2500ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  \n    @keyframes spin {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  "]);return Q=function(){return n},n}function X(){var n=E(["\n    min-width: 100px;\n    width: 100%;\n    color: ","\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  "]);return X=function(){return n},n}function Z(){var n=E(["\n  "]);return Z=function(){return n},n}m(K,"navbar",{height:"64"}),m(K,"page",{sideMargin:"90px"});var nn=function(n){function e(n){var t;return d(this,e),m(x(t=w(this,b(e).call(this,n))),"PosedDiv",l.div({visible:{opacity:1,height:"auto"},hidden:{opacity:0,height:"0px",transition:{default:{ease:"linear",duration:100}}}})),m(x(t),"StyledDiv",u(t.PosedDiv)(Z())),t.state={loaded:!1},t}return v(e,r),h(e,[{key:"render",value:function(){return t.createElement(t.Fragment,null,t.createElement(this.StyledDiv,{pose:this.props.loaded?"hidden":"visible"},t.createElement(en,{color:this.context.text.color})),t.createElement(this.StyledDiv,{pose:this.props.loaded?"visible":"hidden"},this.state.loaded&&this.props.children))}}]),e}();function en(r){var o=u.div(X(),r.color),i=u.div(Q());return t.createElement(o,null,t.createElement(i,null,t.createElement(e,{style:{fontSize:"65px",display:"flex",margin:"auto"},icon:n})))}function tn(n){return t.createElement(t.Fragment,null)}function rn(){var n=E(["\n      border: 8px solid ",";\n      border-radius: 4px;\n      padding: 20px;\n      display: flex;\n      flex-direction: ",";\n      ",";\n      ",";\n      ",";\n\n      ",";\n      ",";\n\n      &::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n        background-color: #2b2b2b;\n      }\n\n      &::-webkit-scrollbar {\n        width: 10px;\n        background-color: ",";\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background-color: ",";\n        );\n      }\n    "]);return rn=function(){return n},n}nn.contextType=O,nn.defaultProps={loaded:!0},en.defaultProps={color:"white"},tn.defaultProps={optionalWidth:"20px"};var on=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,o),h(e,[{key:"render",value:function(){var n=u.div(rn(),k.text.color,this.props.horizontalScroll?"row":"column",this.props.width?"width: ".concat(this.props.width):"",this.props.height?"height: ".concat(this.props.height):"",this.props.style,this.props.horizontalScroll?"overflow-x: auto":"",this.props.verticalScroll?"overflow-y: auto":"",k.backgroundColor,k.text.color);return t.createElement(n,null,this.props.children)}}]),e}();on.propTypes={width:G.string,height:G.string,horizontalScroll:G.bool,verticalScroll:G.bool};var an=function n(){d(this,n)};m(an,"mobileSize","900");var cn=function(){function n(e){d(this,n),this.style=e}return h(n,[{key:"toString",value:function(){return"\n      @media (max-width: ".concat(an.mobileSize,"px) {\n        ").concat(this.style,";\n      }")}}]),n}();function ln(){var n=E(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 40px 20px 0;\n    width: ",";\n\n    ","\n  "]);return ln=function(){return n},n}function un(){var n=E(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n\n  ","\n"]);return un=function(){return n},n}function sn(){var n=E(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return sn=function(){return n},n}var fn=u.div(sn()),pn=u.div(un(),new cn("\n    flex-direction: column;\n  "));function dn(n){var e=u.div(ln(),n.width,new cn("\n        width: 100%;\n      "));return t.createElement(e,null,n.children)}dn.propTypes={width:G.string};var yn=function(){function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;d(this,n),"string"==typeof e?(this.top=e,this.right=t,this.bottom=r,this.left=o):(this.top="".concat(e,"px"),this.right="".concat(t,"px"),this.bottom="".concat(r,"px"),this.left="".concat(o,"px"))}return h(n,[{key:"toString",value:function(){return"".concat(this.top," ").concat(this.right," ").concat(this.bottom," ").concat(this.left)}}]),n}(),hn=function(){function n(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d(this,n),this.name=e,this.path=t,this.exact=o}return h(n,[{key:"isActive",value:function(){}}]),n}(),mn=function n(){d(this,n)};m(mn,"name","My Website"),m(mn,"links",[new hn("Home","/"),new hn("News","/news")]);var vn=t.createContext(mn);function bn(){var n=E(["\n    height: ",";\n    width: ",";\n  "]);return bn=function(){return n},n}function gn(n){var e=u.div(bn(),n.height,n.width);return t.createElement(e,null)}function xn(){var n=E(["\n      font-size: ",';\n      font-weight: bold;\n      font-family: "Roboto Slab", sans-serif;\n      color: ',";\n      opacity: ",";\n    "]);return xn=function(){return n},n}function wn(){var n=E(["\n      display: flex;\n      align-items: center;\n    "]);return wn=function(){return n},n}gn.propTypes={width:G.string,height:G.string};var En=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,o),h(e,[{key:"render",value:function(){return t.createElement(t.Fragment,null,this.props.content)}}]),e}();En.propTypes={position:G.string};var Sn=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,o),h(e,[{key:"render",value:function(){var n=u.div(wn()),e=u.span(xn(),this.props.fontSize,this.props.color,this.props.opacity),r=t.createElement(e,null,"<"),o=t.createElement(t.Fragment,null,t.createElement(gn,{width:this.props.rightTagSpacing}),t.createElement(e,null," />"));return t.createElement(n,null,t.createElement(En,{position:"left",content:r}),this.props.children,t.createElement(En,{position:"right",content:o}))}}]),e}();function kn(){var n=E(['\n    font-family: "Roboto", sans-serif;\n    color: ',";\n    ",";\n  "]);return kn=function(){return n},n}function On(){var n=E(["\n    margin: 12px 0;\n    color: ",';\n\n    /* Local to this politics */\n    font-family: "Roboto", sans-serif;\n    ',";\n  "]);return On=function(){return n},n}function Cn(){var n=E(["\n      display: flex;\n      width: fit-content;\n      & * {\n        align-self: center;\n      }\n      ",";\n      ",";\n    "]);return Cn=function(){return n},n}function Pn(){var n=E(["\n      ","\n      font-size: 20px;\n    "]);return Pn=function(){return n},n}function jn(){var n=E(["\n      ","\n      font-size: 25px;\n    "]);return jn=function(){return n},n}function Tn(){var n=E(["\n      ","\n      font-size: 30px;\n    "]);return Tn=function(){return n},n}function Mn(){var n=E(["\n      ","\n      font-size: 40px;\n    "]);return Mn=function(){return n},n}function _n(){var n=E(["\n      ","\n      font-size: ",";\n      line-height: ",";\n    "]);return _n=function(){return n},n}Sn.propTypes={color:G.string,fontSize:G.string,rightTagSpacing:G.string,opacity:G.string},Sn.defaultProps={color:k.page.secondaryColor,fontSize:"69px",rightTagSpacing:"13px",opacity:"1"};var Rn=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,o),h(e,[{key:"getHeading",value:function(n,e,r){var o='\n      font-family: "Roboto Slab", sans-serif;\n      font-weight: bold;\n      margin: '.concat(this.props.margin,";\n      text-transform: lowercase;\n      color: ").concat(k.text.color,";\n    "),i=u.h1(_n(),o,"53px","53px"),a=u.h2(Mn(),o),c=u.h3(Tn(),o),l=u.h4(jn(),o),s=u.h5(Pn(),o),f=u.div(Cn(),this.props.center&&"align-self: center",this.props.style),p="";"h1"===n||void 0===n?p=i:"h2"===n?p=a:"h3"===n?p=c:"h4"===n?p=l:"h5"===n&&(p=s);var d=t.createElement(p,{className:r},this.props.children);return t.createElement(f,null,this.props.codify?t.createElement(Sn,null,d):d)}},{key:"render",value:function(){return this.getHeading(this.props.type,this.props.style,this.props.className,this.props.codify,this.props.margin)}}]),e}();function $n(n){var e=i(O).text,r=u.p(On(),e.color,n.style);return t.createElement(r,null,n.children)}function zn(n){var e=u.a(kn(),k.link.color,n.style);return t.createElement(e,{href:n.href},n.children)}function Nn(){var n=i(O);return t.createElement("div",{className:"application"},t.createElement(s,null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap",rel:"stylesheet"}),t.createElement("title",null,"Robbie Cook"),t.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.createElement("style",null,"\n              body {\n                background-color: ".concat(n.backgroundColor,";\n                margin: 0;\n              }\n            "))))}function An(){var n=E(["\n      ","\n      display: flex;\n      ",";\n    "]);return An=function(){return n},n}function Dn(){var n=E(["\n    color: ",";\n    margin: 0;\n    text-decoration: none;\n    line-height: 20px;\n  "]);return Dn=function(){return n},n}function In(){var n=E(["\n    border: 3px solid ",";\n    border-radius: 6px;\n    color: ",";\n    transition: 0.03s;\n    height: 36px;\n\n    /* for svg icons */\n    fill: ",";\n    stroke: ",";\n\n    &:hover {\n      & p {\n        border-bottom: 1px solid transparent;\n      }\n      background-color: ",";\n    }\n\n    & p {\n      color: ","\n    }\n\n    margin: ",";\n    color: ",";\n    line-height: 27px;\n    font-size: 16px;\n    padding: 5px 12px;\n    font-weight: normal;\n\n    // Styles for active links\n    background-color: ",";\n\n    ",";\n  "]);return In=function(){return n},n}function Fn(n){var e=n.navbar?i(O).navbar.button:i(O).button;console.log(e);var r=u(f)(In(),e.backgroundColor,e.color,e.color,e.color,e.backgroundColor,e.color,n.margin,e.color,e.backgroundColor,n.style),o=u.p(Dn(),e.color);return t.createElement(r,{icon:n.icon,label:t.createElement(o,null,n.label),onClick:n.function,href:n.to})}Rn.propTypes={type:G.string,codify:G.bool,style:G.string,margin:G.string,center:G.bool},Rn.defaultProps={margin:"0 0 20px 0;",center:!1},$n.defaultProps={style:""},Fn.defaultProps={to:"/",label:"My name",active:!1};var Vn=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,o),h(e,[{key:"render",value:function(){var n=this;return t.createElement(Wn,{buttonRow:this.props.buttonRow},this.props.labels.map(function(e,r){return t.createElement(Fn,{function:n.props.functions[r],margin:n.props.buttonMargin,style:n.props.buttonStyle,label:e})}))}}]),e}();Vn.propTypes={labels:G.array.isRequired,functions:G.array,buttonRow:G.bool,buttonStyle:G.string,activeColor:G.string};var Wn=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,o),h(e,[{key:"render",value:function(){var n=this,e=u.div(An(),"flex-direction: "+(!1!==n.props.buttonRow?"row":"column")+";",this.props.style);return t.createElement(e,null,this.props.children)}}]),e}();function Ln(n){var e=i(O).navbar.button,r="\n    & * {\n      color: ".concat(e.activeColor,"!important;\n    }\n  "),o="\n    background-color: ".concat(e.backgroundColor,";\n    border-color: ").concat(e.borderColor,";\n\n    &:hover {\n      background-color: ").concat(e.backgroundColor,";\n    }\n    ").concat(n.active&&r,"\n  ");return t.createElement(Fn,{style:o,label:n.label,to:n.link},n.children)}function qn(){var n=E([""]);return qn=function(){return n},n}function Hn(){var n=E(["\n    height: ",";\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-color: ",";\n    padding-left: 40px;\n    padding-right: 40px;\n    box-sizing: border-box;\n  "]);return Hn=function(){return n},n}function Un(n){var e=S(a(!1),2),r=(e[0],e[1]);c(function(){r(!0)});var o,l=i(O).navbar,s=u.div(Hn(),l.height,l.backgroundColor),f=(o=[],n.links.forEach(function(n){o.push(t.createElement(Ln,{to:n.path,label:n.name,active:n.isActive()}))}),o),p=u($n)(qn());return t.createElement(s,null,t.createElement(p,null,n.title),t.createElement(gn,{width:"30px"}),f)}function Bn(n){var e=S(a(!1),2),r=(e[0],e[1]);c(function(){r(!0)},[]);i(O).navbar;var o=i(vn);return t.createElement(t.Fragment,null,t.createElement(Un,{title:o.name,links:o.links}))}function Yn(){var n=E(["\n    display: flex;\n    flex-direction: column;\n    padding: ",";\n\n    // Mobile styles\n    ","\n  "]);return Yn=function(){return n},n}function Jn(n){var e=S(a(!1),2),r=e[0],o=e[1];c(function(){o(!0)},[]);i(O);var l=u.div(Yn(),new yn(40,90,0,90),new cn("\n      flex-direction: column;\n      padding: ".concat(new yn(20,30),"; \n    ")));return t.createElement(t.Fragment,null,t.createElement(Nn,null),t.createElement(nn,{loaded:r},t.createElement("div",null,t.createElement(Bn,null),t.createElement("div",{style:n.style},t.createElement(l,{style:n.style},n.children)))))}function Gn(){var n=E(["\n      min-height: ","px;\n      display: flex;\n      ",";\n    "]);return Gn=function(){return n},n}Wn.propTypes={buttonRow:G.bool},Ln.defaultProps={label:"My label",link:"/",active:!1},Un.defaultProps={title:"Testing title",links:k.navbar.links};var Kn=function(n){function e(n){var t;return d(this,e),(t=w(this,b(e).call(this,n))).state={width:0,height:0},t.updateWindowDimensions=t.updateWindowDimensions.bind(x(t)),t}return v(e,o),h(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var n=u.div(Gn(),this.state.height-K.navbar.height,this.props.style);return t.createElement(n,null,this.props.children)}}]),e}();function Qn(){var n=E(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%"]);return Qn=function(){return n},n}var Xn=u.div(Qn());function Zn(n){return t.createElement(Jn,null,t.createElement(fn,null,t.createElement(Rn,{type:"h1"},"Sample"),t.createElement(pn,null,t.createElement(dn,null),t.createElement(dn,null))))}function ne(){var n=E(["\n      display: flex;\n      height: 100%;\n      align-items: center;\n      & > div {\n        overflow: hidden!important;\n        width: 100%;\n        border: 4px solid ",";\n      }\n      \n      // Make arrows bigger on carousel\n\n      & .control-next:before {\n        border-top: "," solid transparent!important;\n        border-bottom: "," solid transparent!important;\n        border-left: "," solid #fff!important;\n      }\n\n      & .control-prev:before {\n        border-top: "," solid transparent!important;\n        border-bottom: "," solid transparent!important;\n        border-right: "," solid #fff!important;\n      }\n    "]);return ne=function(){return n},n}function ee(){var n=E(["\n      max-height: 300px;\n      width: auto !important;\n    "]);return ee=function(){return n},n}var te=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,o),h(e,[{key:"getCarouselPhotoElement",value:function(n){var e=u.img(ee()),r=[],o=!0,i=!1,a=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var s=c.value;r.push(t.createElement("div",null,t.createElement(e,{src:s})))}}catch(n){i=!0,a=n}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return r}},{key:"render",value:function(){var n=u.div(ne(),k.text.color,"20px","20px","20px","20px","20px","20px");return t.createElement(n,null,t.createElement(p,{showThumbs:!1},this.getCarouselPhotoElement(this.props.photos)))}}]),e}();function re(){var n=E(["\n      color: inherit;\n      &:hover {\n        color: inherit;\n      }\n    "]);return re=function(){return n},n}function oe(){var n=E(["\n      width: ","px;\n      height: ","px;\n      border-radius: ","px;\n      line-height: ","px;\n      text-align: center;\n      font-size: ","px;\n      cursor: pointer;\n      background-color: ",";\n      margin: 0 9px;\n      color: ",";\n      transition: 0.1s;\n      transition-timing-function: ease-out;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n    "]);return oe=function(){return n},n}function ie(){var n=E(["\n      display: flex;\n      margin-top: 17px;\n      align-items: center;\n    "]);return ie=function(){return n},n}p.propTypes={photos:G.any};var ae=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,o),h(e,[{key:"render",value:function(){var n=u.div(ie());return t.createElement(n,null,this.props.children)}}]),e}();ae.propTypes={};var ce=function(n){function e(){return d(this,e),w(this,b(e).apply(this,arguments))}return v(e,o),h(e,[{key:"render",value:function(){var n=u.div(oe(),50,50,25,50,35,k.text.color,k.backgroundColor,k.link.color,k.text.color,k.link.color,k.text.color),e=u.a(re());return t.createElement(n,null,t.createElement(e,{href:this.props.href},this.props.children))}}]),e}();ce.propTypes={};export{on as BorderBox,Fn as Button,Vn as ButtonGenerator,Wn as ButtonWrapper,te as Carousel,Sn as Codify,dn as Col,Xn as Container,mn as DefaultSiteContext,k as DefaultTheme,yn as Dimensions,Rn as Heading,ce as Icon,ae as IconsWrapper,fn as LayoutWrapper,zn as Link,cn as MobileView,Nn as MyHelmet,hn as MyLink,Bn as NavigationBar,Jn as Page,pn as Row,tn as SampleComponent,Zn as SamplePage,Kn as Section,vn as SiteContext,K as Sizes,gn as Spacer,$n as Text,O as ThemeContext,nn as Transition};
//# sourceMappingURL=index.es.js.map
