!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var s=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t,n=0;const s=()=>{e[n].style.display="none",n++,n>=e.length&&(n=0),((e,t)=>{e[t].style.display="flex"})(e,n)};((e=5e3)=>{t=setInterval(s,e)})()};var i=()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".popup-menu"),n=document.querySelector(".top-menu");n.style.position="static",n.style.zIndex="500",e.addEventListener("click",e=>{e.target.parentNode.matches(".menu-button")&&(t.style.display="block")}),t.addEventListener("click",e=>{let n=e.target;(n.closest(".close-menu-btn")||n.closest("a"))&&(t.style.display="none")}),window.addEventListener("resize",()=>{n.style.position="static"}),window.addEventListener("scroll",()=>{document.documentElement.offsetWidth<=768&&(window.scrollY>=200?n.style.position="fixed":(window.scrollY<=400||document.documentElement.offsetWidth<=768)&&(n.style.position="static"))})};var o=()=>{new class{constructor({main:e,wrap:t,infinity:n=!1,position:s=0,slidesToShow:i=3,responsive:o=[]}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.slidesToShow=i,this.options={position:s,infinity:n,widthSlide:Math.floor(100/i),maxPosition:this.slides.length-this.slidesToShow},this.responsive=o}addGloClass(){this.main.classList.add("fit-slider"),this.wrap.classList.add("fit-slider__wrap");for(const e of this.slides)e.classList.add("fit-slider__item")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n                .fit-slider {\n                    overflow: hidden !important;\n                    position: relative;\n                }\n                .fit-slider__wrap {\n                    display: flex !important;\n                    transition: transform 0.5s !important;\n                    will-change: transform !important;\n                    padding: 0;\n                }\n                .fit-slider__item {\n                    align-items: center;\n                    justify-content: center;\n                    flex: 0 0 ${this.options.widthSLide}% !important;\n                    margin: 0 auto !important;\n                }\n            `,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.position>0||this.options.infinity)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSLide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSLide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.textContent="<",this.next.textContent=">",this.prev.className="slider__prev",this.next.className="slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const e=document.createElement("style");e.textContent="\n                .slider__prev {\n                    position: absolute;\n                    left: 34px ;\n                    top: 45%; \n                    background: #ffd11a;          \n                    border-radius: 100%;\n                }\n                .slider__next {\n                    position: absolute;\n                    right: 34px;\n                    top: 45%;\n                    background: #ffd11a;          \n                    border-radius: 50%;\n                                \n                }\n                .slider__next:hover,\n                .slider__prev:hover{                     \n                    box-shadow: 0px 0px 10px \t#708090; \n                    border: solid 3px #ffe900;  \n                    \n                }\n                .slider__prev:focus,\n                .slider__next:focus {                    \n                    outline: transparent;\n                }\n                ",document.head.appendChild(e)}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),n=Math.max(...t),s=()=>{const s=document.documentElement.clientWidth;if(s<n)for(let e=0;e<t.length;e++)s<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSLide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSLide=Math.floor(100/this.slidesToShow),this.addStyle()};s(),window.addEventListener("resize",s)}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}}({main:"#services .wrapper",wrap:".services-slider",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:820,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()};var l=()=>{const e=document.querySelector(".gallery-slider"),t=document.querySelectorAll(".gallery-slider .slide");let n,s=0;t[0].classList.add("slide_active");(()=>{let n=document.createElement("ul");n.classList.add("slider-dots"),e.appendChild(n);for(let e=0;e<t.length;e++){let t=document.createElement("li");0===e?t.classList.add("dot","dot-active"):t.classList.add("dot"),n.append(t)}})();const i=document.querySelectorAll(".dot");(()=>{let e=document.getElementById("sliderGallery-style");e||(e=document.createElement("style"),e.id="sliderGallery-style"),e.textContent="\n        .gallery-slider {\n            position: relative;\n          }\n          .gallery-slider .slide {\n            display: none;\n          }\n          \n        .gallery-slider .slide_active {                \n              display:flex !important;\n        }\n        \n        .slider-dots {                     \n            background-color: transparent !important;\n              \n        }\n        .dot { \n            margin: 10px;\n            height: 10px;\n            width: 10px;\n            background-color: #d2d4d6;\n            border-radius: 100%;\n            cursor: pointer;\n        }\n        .dot-active {\n            background-color: #ffd11a;\n        }\n        .dot:hover {\n            box-shadow: 0px 0px 10px \t#ffd11a;\n        }\n       \n      ",document.head.appendChild(e)})();(()=>{let t=document.createElement("button"),n=document.createElement("button");t.textContent="<<",n.textContent=">>",t.className="slider_prev",n.className="slider_next",e.appendChild(t),e.appendChild(n);const s=document.createElement("style");s.textContent="\n                .slider_prev {\n                    position: absolute;\n                    left: 34px ;\n                    top: 45%; \n                    background: #ffd11a;          \n                    border-radius: 100%;\n                }\n                .slider_next {\n                    position: absolute;\n                    right: 34px;\n                    top: 45%;\n                    background: #ffd11a;          \n                    border-radius: 100%;\n                                \n                }\n                .slider_next:hover,\n                .slider_prev:hover{                     \n                    box-shadow: 0px 0px 30px \t#708090; \n                    border: solid 3px #ffe900;  \n                    \n                }\n                .slider_prev:focus,\n                .slider_next:focus {                    \n                    outline: transparent;\n                }\n                ",document.head.append(s)})();const o=(e,t,n)=>{e[t].classList.remove(n)},l=(e,t,n)=>{e[t].classList.add(n)},r=()=>{o(t,s,"slide_active"),o(i,s,"dot-active"),s++,s>=t.length&&(s=0),l(t,s,"slide_active"),l(i,s,"dot-active")},d=(e=5e3)=>{n=setInterval(r,e)};e.addEventListener("click",e=>{e.preventDefault();let n=e.target;n.matches(".slider_prev, .slider_next, .dot")&&(o(t,s,"slide_active"),o(i,s,"dot-active"),n.matches(".slider_prev")?s--:n.matches(".slider_next")?s++:n.matches(".dot")&&i.forEach((e,t)=>{e===n&&(s=t)}),s>=t.length&&(s=0),s<0&&(s=t.length-1),l(t,s,"slide_active"),l(i,s,"dot-active"))}),e.addEventListener("mouseover",e=>{(e.target.matches(".slider_prev")||e.target.matches(".dot")||e.target.matches(".slider_next"))&&clearInterval(n)}),e.addEventListener("mouseout",e=>{(e.target.matches(".slider_prev")||e.target.matches(".dot")||e.target.matches(".slider_next"))&&d()}),d(5e3)};var r=()=>{const e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");null!==e&&(e.addEventListener("click",()=>{t.style.display="block",e.style.display="none"}),t.addEventListener("click",e=>{let n=e.target;n.matches(".close_icon, .close-btn")?t.style.display="none":n||(t.style.display="none")}))};var d=()=>{const e=document.querySelector("#cards .right"),t=e.querySelectorAll('input[name="card-type"]'),n=e.querySelector("#price-total"),s=e.querySelector(".price-message input");if(null===n)return;const i={mozaika:[1999,9900,13900,19900],schelkovo:[2999,14990,21990,24990]};let o=i.mozaika;n.textContent=o[0];const l=()=>{t.forEach((e,t)=>{e.checked&&("ТЕЛО2019"===s.value.trim()?n.textContent=Math.ceil(.7*o[t]):n.textContent=o[t])})};s.addEventListener("input",()=>{l()}),e.addEventListener("click",e=>{let n=e.target;n.matches('input[name="club-name"]')&&(o=i[n.value],l()),n.matches('input[name="card-type"]')&&t.forEach(e=>{e.removeAttribute("checked"),n===e&&(n.setAttribute("checked",""),l())})})};var a=()=>{const e=document.querySelector("body"),t=document.getElementById("free_visit_form"),n=document.getElementById("thanks"),s=document.getElementById("callback_form");e.addEventListener("click",e=>{let i=e.target;i.matches(".open-popup")?t.style.display="block":i.matches(".open-btn")?s.style.display="block":i.matches(".close_icon")||i.matches(".close-btn")?(s.style.display="none",t.style.display="none",n.style.display="none"):(i=i.closest(".form-wrapper"),i||(s.style.display="none",t.style.display="none",n.style.display="none"))})};var c=()=>{!function(e,t="+7 (___) ___-__-__"){const n=document.querySelectorAll(e);function s(e){const n=e.keyCode,s=t,i=s.replace(/\D/g,""),o=this.value.replace(/\D/g,"");let l=0,r=s.replace(/[_\d]/g,e=>l<o.length?o.charAt(l++)||i.charAt(l):e);l=r.indexOf("_"),-1!==l&&(r=r.slice(0,l));let d=s.substr(0,this.value.length).replace(/_+/g,e=>"\\d{1,"+e.length+"}").replace(/[+()]/g,"\\$&");d=new RegExp("^"+d+"$"),(!d.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=r),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",s),e.addEventListener("focus",s),e.addEventListener("blur",s)}('input[name="phone"]');document.querySelectorAll('input[name="name"]').forEach(e=>{e.addEventListener("input",()=>e.value=e.value.replace(/[^а-яА-Я \  ]/g,""))})};var p=()=>{const e=document.querySelector(".hidden-small"),t=document.getElementById("totop");t.style.display="none",t.addEventListener("click",e=>window.scrollBy(pageXOffset,0)),e.addEventListener("click",e=>{e.preventDefault();let t=e.target;const n=t.getAttribute("href");t.matches(".fa")||t.matches(".clubs-href")||document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}),window.addEventListener("scroll",()=>{window.scrollY>=800?t.style.display="block":window.scrollY<=600&&(t.style.display="none")})};var u=()=>{try{const e=document.getElementById("thanks"),t=document.querySelector("body"),n=e.querySelector(".form-content"),s=document.getElementById("free_visit_form"),i=document.createElement("div"),o=document.createElement("div"),l=document.createElement("img"),r=document.getElementById("callback_form");o.style.cssText="position: fixed;\n                                display: none;\n                                left: 0;\n                                top: 0;\n                                right: 0;\n                                bottom: 0;\n                                z-index: 99999;",l.style.cssText="position: absolute;\n                                left: 50%;top: 48%;\n                                margin-left:-125px;\n                                margin-top:-75px;                              \n                                ",l.src="/images/spinner.gif",o.appendChild(l),t.appendChild(o),i.style.cssText="font-size: 1.1rem; margin: 10px; color: #FF0000";let d={};const a=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});document.querySelectorAll("form").forEach(t=>{t.addEventListener("submit",l=>{l.preventDefault(),t.appendChild(i);const c=t.querySelector('input[type="checkbox"]'),p=t.querySelector("#footer_leto_mozaika"),u=t.querySelector("#footer_leto_schelkovo");if(c&&!c.checked||p&&!p.checked&&u&&!u.checked)i.textContent="Вы должны дать согласие на обработку данных";else{o.style.display="block",r.style.display="none",s.style.display="none",i.textContent="";new FormData(t).forEach((e,t)=>{d[t]=e}),a(d).then(t=>{if(200!==t.status)throw i.textContent="",new Error("Что-то пошло не так...");e.style.display="block",i.textContent="",o.style.display="none"}).catch(t=>{n.innerHTML="\n                            <h4>Ошибка отправки!</h4>\n                            <p>\n                            Пожалуйста, попробуйте позже...</p>\n                            <br>\n                        ",o.style.display="none",e.style.display="block"}).finally(()=>{setTimeout(()=>{e.style.display="none"},7e3),t.querySelectorAll("input").forEach(e=>{"radio"!==e.getAttribute("type")&&(e.value=""),e.checked=""}),d={}})}})})}catch(e){console.warn("sendForm.js",e)}};var m=()=>{if(document.documentElement.offsetWidth>=768){const e=document.querySelector(".logo"),t=document.querySelector(".fixed-gift"),n=document.querySelector('button[name="send"]'),s=document.querySelectorAll(".callback-btn"),i=document.querySelector(".right>.image"),o=document.querySelector(".image"),l=document.querySelectorAll(".gallery-slider .slide"),r=document.querySelector(".main-slider").querySelectorAll(".slide");t.style.display="none",i.style.display="none",o.style.display="none",e.style.zIndex="-1",setTimeout(()=>{t.style.display="block",t.classList.add("magictime","twisterInUp")},2e3);setTimeout(()=>{e.style.zIndex="1",e.classList.add("magictime","vanishIn")},1500),window.addEventListener("scroll",()=>{s.forEach(e=>{window.scrollY>=2790&&e.classList.add("magictime","swashIn"),window.scrollY>=720&&n.classList.add("magictime","tinRightIn"),window.scrollY>=350&&(i.style.display="block",o.style.display="block",i.classList.add("magictime","slideRightReturn"),o.classList.add("magictime","slideLeftReturn"))})}),l.forEach(e=>{e.classList.add("magictime","puffIn")}),r.forEach(e=>{e.classList.add("magictime","swashIn")})}};(()=>{const e=document.querySelector(".clubs-list"),t=document.querySelector("body"),n=e.querySelector("ul");t.addEventListener("click",e=>{let t=e.target.parentNode;t.matches(".clubs-list")?"block"===n.style.display?n.style.display="none":n.style.display="block":t.closest(".clubs-list")||(n.style.display="none")})})(),s(),i(),o(),l(),r(),d(),a(),c(),p(),u(),m()}]);