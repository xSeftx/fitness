!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t,n=0;const l=()=>{e[n].style.display="none",n++,n>=e.length&&(n=0),((e,t)=>{e[t].style.display="flex"})(e,n)};((e=5e3)=>{t=setInterval(l,e)})()};var o=()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".popup-menu");e.addEventListener("click",()=>t.style.display="block"),t.addEventListener("click",e=>{let n=e.target;(n.closest(".close-menu-btn")||n.closest(".scroll"))&&(t.style.display="none")}),window.addEventListener("scroll",()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".fixed-gift");window.scrollY>=200?(e.style.position="fixed",t.style.display="none"):window.scrollY<=400&&(e.style.position="relative",t.style.display="block")})};(()=>{const e=document.querySelector(".clubs-list"),t=document.querySelector("body"),n=e.querySelector("ul");t.addEventListener("click",e=>{let t=e.target.parentNode;t.matches(".clubs-list")?"block"===n.style.display?n.style.display="none":n.style.display="block":t.closest(".clubs-list")||(n.style.display="none")})})(),l(),o()}]);