!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,l=setTimeout(j,t),s?y(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function j(){var e=p();if(h(e))return T(e);l=setTimeout(j,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function T(e){return l=void 0,m&&r?y(e):(r=o=void 0,u)}function w(){var e=p(),n=h(e);if(r=arguments,o=this,f=e,n){if(void 0===l)return S(f);if(d)return l=setTimeout(j,t),y(f)}return void 0===l&&(l=setTimeout(j,t)),u}return t=O(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(O(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=o=l=void 0},w.flush=function(){return void 0===l?u:T(p())},w}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||l.test(e)?f(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S={feedbackFormEl:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),messageTextarea:document.querySelector('textarea[name="message"]')},h={},j="feedback-form-state",T=localStorage.getItem(j),w=JSON.parse(T);document.addEventListener("DOMContentLoaded",(function(e){try{h.email=w.email,h.message=w.message,w.email&&(S.emailInput.value=w.email),w.message&&(S.messageTextarea.value=w.message)}catch(e){console.log("localStorage пустой")}})),S.feedbackFormEl.addEventListener("input",n((function(e){switch(e.target.name){case"email":h.email=e.target.value;break;case"message":h.message=e.target.value}localStorage.setItem(j,JSON.stringify(h))}),1e3)),document.addEventListener("submit",(function(e){e.preventDefault(),"{}"===JSON.stringify(h)||console.log("Конечные данные ",h);S.emailInput.value=null,S.messageTextarea.value=null,localStorage.removeItem(j),Object.keys(h).forEach((function(e){return delete h[e]}))}))}();
//# sourceMappingURL=03-feedback.3eb1b865.js.map
