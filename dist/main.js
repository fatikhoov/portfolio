/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ (() => {

eval("let innerContactsCard=`\n<form id=\"form-contact\">\n<img id=\"close-form-contact\" class=\"close-form-contact\" src=\"img/header/close.svg\" />\n                <span class=\"contact_title\"\n                  >Заполните форму, я свяжусь с вами в ближайшее время</span\n                >\n\n                <div class=\"form__left\">\n                  <div class=\"chips chips-autocomplete\">\n                    <input class=\"custom-class\" />\n                  </div>\n                  <div class=\"form_datepicker input-field\">\n                    <input id=\"my-datepicker\" type=\"text\" class=\"datepicker\" />\n                    <label for=\"my-datepicker\">Удобная дата</label>\n                  </div>\n                  <div class=\"form_timepicker input-field\">\n                    <input id=\"my-timepicker\" type=\"text\" class=\"timepicker\" />\n                    <label for=\"my-timepicker\">Удобное время</label>\n                  </div>\n                </div>\n\n                <div class=\"form__right\">\n                  <div class=\"form__contact-inputs\">\n                    <div class=\"input-field\">\n                      <input\n                        class=\"contact-input check-width\"\n                        type=\"text\"\n                        name=\"contact\"\n                        id=\"name-contact\"\n                      /><label for=\"name-contact\">Ваше имя</label>\n                    </div>\n\n                    <div class=\"input-field\">\n                      <input\n                        class=\"contact-input check-width\"\n                        type=\"text\"\n                        name=\"contact\"\n                        id=\"phone-contact\"\n                      /><label for=\"phone-contact\">Ваш телефон</label>\n                    </div>\n\n                    <div class=\"input-field\">\n                      <input\n                        class=\"contact-input check-width\"\n                        type=\"text\"\n                        name=\"contact\"\n                        id=\"email-contact\"\n                      /><label for=\"email-contact\">Ваша почта</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form__checkbox-contact\">\n                  <p>\n                    <label>\n                      <input\n                        id=\"checkbox-contact\"\n                        type=\"checkbox\"\n                        checked=\"checked\"\n                        class=\"check-width\"\n                      />\n                      <span> галочка добра</span>\n                    </label>\n                  </p>\n                </div>\n                <div class=\"progress\">\n                  <div\n                    id=\"determinate\"\n                    class=\"determinate\"\n                    style=\"width: 0%\"\n                  ></div>\n                </div>\n                <button\n                  id=\"form_contact-button\"\n                  type=\"submit\"\n                  name=\"action\"\n                  disabled=\"disabled\"\n                >\n                  ОТПРАВИТЬ\n                </button>\n              </form>\n`;const contactCard=document.getElementById(\"contact-card\");let inner=!1;const innerFunc=()=>{inner||(contactCard.innerHTML=innerContactsCard,inner=!0)};innerFunc();let formContant,determinate,formContactButton,checkboxContact,nameContact,phoneContact,emailContact,accountHeader,closeFormContact,aboutСontact,countWidth=0,newArr=[],indInp0=!1,indInp=!1,indInp2=!1,indInp3=!1;const upCount=()=>{determinate.style.width=countWidth+100/newArr.length+\"%\",countWidth+=100/newArr.length,console.log(\"up\",determinate.style.width,countWidth),100===countWidth&&formContactButton.removeAttribute(\"disabled\")},downCount=()=>{determinate.style.width=countWidth-100/newArr.length+\"%\",countWidth-=100/newArr.length,console.log(\"down\"),100!=countWidth&&formContactButton.setAttribute(\"disabled\",\"disabled\")},actionForm=()=>{\"1\"!=contactCard.style.opacity?(contactCard.style.opacity=\"1\",contactCard.style.height=\"100vh\",contactCard.style.background=\"white\",contactCard.style.marginTop=\"0px\"):(contactCard.style.opacity=\"0\",contactCard.style.height=\"0vh\",contactCard.style.background=\"transparent\",contactCard.style.marginTop=\"-200px\")},clicksContact=()=>{closeFormContact.addEventListener(\"click\",()=>{actionForm()}),accountHeader.addEventListener(\"click\",()=>{actionForm()}),aboutСontact.addEventListener(\"click\",()=>{actionForm()}),checkboxContact.addEventListener(\"click\",t=>{(t.target.checked?upCount:downCount)()}),nameContact.oninput=t=>{t=t.target.value;0<t.length&&!indInp?(upCount(),indInp=!0):t.length<=0&&(downCount(),indInp=!1)},phoneContact.oninput=t=>{t=t.target.value;0<t.length&&!indInp2?(upCount(),indInp2=!0):t.length<=0&&(downCount(),indInp2=!1)},emailContact.oninput=t=>{t=t.target.value;0<t.length&&!indInp3?(upCount(),indInp3=!0):t.length<=0&&(downCount(),indInp3=!1)},formContant.addEventListener(\"submit\",t=>{t.preventDefault(),console.log(\"click\",t)})},startForm=()=>{formContant=document.getElementById(\"form-contact\"),determinate=document.getElementById(\"determinate\"),formContactButton=document.getElementById(\"form_contact-button\"),checkboxContact=document.getElementById(\"checkbox-contact\"),nameContact=document.getElementById(\"name-contact\"),phoneContact=document.getElementById(\"phone-contact\"),emailContact=document.getElementById(\"email-contact\"),accountHeader=document.getElementById(\"account\"),closeFormContact=document.getElementById(\"close-form-contact\"),aboutСontact=document.getElementById(\"about_contact\");for(const t of formContant)\"checkbox\"!==t.type&&\"contact\"!==t.name||(newArr.push(t),console.log(\"заполнено\",t.value));checkboxContact.defaultChecked&&!indInp0?(upCount(),indInp0=!0,console.log(\"checkboxContact\",checkboxContact.defaultChecked)):console.log(\"indInp0 = true\")};inner&&(startForm(),clicksContact());\n\n//# sourceURL=webpack://portfolio/./src/js/contact.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ (() => {

eval("const loaderContainer=document.getElementById(\"loader-container\"),overlay=document.getElementById(\"overlay\"),selectCity=document.getElementById(\"select_city\"),cardCity=document.getElementById(\"city-card\"),ccbSelectCity=document.getElementById(\"ccb-select-city\"),ccbTags=document.getElementById(\"ccb-tags\"),cardCityBtn=document.getElementById(\"card-city-btn\"),inputSearchCity=document.getElementById(\"input-search-city\"),ccbInputImg=document.getElementById(\"ccb-input-img\"),areas=document.getElementById(\"ccb-select-city\");var arrowCity,tagsItem,arrowCountry=[],sendArrowCountry=[],arrowTags=[],newArrowTags=[],loaderCity=!1,textInput=[];const apiCountry=async()=>{await fetch(\"https://studika.ru/api/areas\",{method:\"POST\"}).then(e=>{200!==e.status?console.log(\"Проблема загрузки городов. Статус: \"+e.status):e.json().then(e=>{sendArrowCountry=arrowCountry=e})}).catch(e=>{console.log(\"e\",e)})},clicks=()=>{selectCity.addEventListener(\"click\",()=>{cardCity.style.display=\"flex\",overlay.style.display=\"block\",eachInner()}),overlay.addEventListener(\"click\",()=>{cardCity.style.display=\"none\",overlay.style.display=\"none\"}),cardCityBtn.addEventListener(\"click\",e=>{arrowTags.forEach(t=>{sendArrowCountry.filter(e=>{e.name==t&&newArrowTags.push(e)}),document.cookie+=\"city=\"+JSON.stringify(newArrowTags),console.log(document.cookie)}),cardCity.style.display=\"none\",overlay.style.display=\"none\"}),inputSearchCity.addEventListener(\"click\",e=>{ccbInputImg.style.display=\"block\",inputSearchCity.oninput=async e=>{textInput=e.target.value,arrowCountry=arrowCountry.filter(e=>{if(e.name.toLowerCase().includes(textInput.toLowerCase()))return e.name}),areas.innerHTML=\"\",arrowCountry.forEach(e=>{areas.innerHTML+=`\n                      <div id=\"arrow-city\" class=\"arrow-city\">\n                     ${e.name}\n                       </div>`,arrowCity=document.querySelectorAll(\"#arrow-city\")}),startApp(),await apiCountry()}}),ccbInputImg.addEventListener(\"click\",async e=>{inputSearchCity.value=\"\",areas.innerHTML=\"\",arrowCountry.forEach(e=>{areas.innerHTML+=`\n                    <div id=\"arrow-city\" class=\"arrow-city\">\n                   ${e.name}\n                     </div>`,arrowCity=document.querySelectorAll(\"#arrow-city\")}),startApp(),await apiCountry(),console.log(\"text input close\",inputSearchCity.value)})},eachInner=()=>{try{console.log(\"areas\",areas.children.length);const e=()=>{console.log(\"start\"),areas.children.length<=0&&(arrowCountry.forEach(e=>{areas.innerHTML+=`\n                                <div id=\"arrow-city\" class=\"arrow-city\">\n                               ${e.name}\n                                 </div>`,arrowCity=document.querySelectorAll(\"#arrow-city\"),loaderCity=!0}),startApp())};loaderCity?e():(loaderContainer.style.display=\"flex\",ccbSelectCity.style.display=\"none\",setTimeout(()=>{e(),loaderContainer.style.display=\"none\",ccbSelectCity.style.display=\"block\"},500))}catch(e){console.log(\"e\",e)}},clickSetCity=()=>{arrowCity.forEach(e=>{e.addEventListener(\"click\",e=>{let t=e.target.childNodes[0].data.trim();arrowTags.includes(t)?(arrowTags=arrowTags.filter(e=>e!==t),console.log(\"удалил тег\",arrowTags.length)):(arrowTags.push(t),console.log(\"Добавил тег\",arrowTags.length)),tagsInner()})})},tagsInner=()=>{try{ccbTags.innerHTML=\"\",arrowTags.forEach(e=>{ccbTags.innerHTML+=`\n          <div id=\"tags-item\" class=\"tags-item\">\n                    <span class=\"tags-item-span\">${e}</span>\n                    <img class=\"tags-item-img\" src=\"/img/header/close.svg\" alt=\"\" />\n                  </div>  `}),1<=arrowTags.length?cardCityBtn.children[0].disabled=!1:arrowTags.length<=0&&(cardCityBtn.children[0].disabled=!0),clickRemoveTags()}catch(e){console.log(\"e\",e)}},clickRemoveTags=()=>{(tagsItem=document.querySelectorAll(\"#tags-item\")).forEach(a=>{a.addEventListener(\"click\",e=>{if(\"img\"===e.target.localName){const t=e.target.nextSibling.parentElement.children[0].innerText;arrowTags=arrowTags.filter(e=>e.trim()!==t.trim()),tagsInner()}else\"span\"===e.target.localName&&(a.style.background=\"wheat\")})})},startApp=async()=>{arrowCountry.length<=0&&await apiCountry(),loaderCity&&clickSetCity()};startApp(),clicks();\n\n//# sourceURL=webpack://portfolio/./src/js/header.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/js/header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/js/contact.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_js__WEBPACK_IMPORTED_MODULE_2__);\ndocument.addEventListener(\"DOMContentLoaded\",function(){var e=document.querySelectorAll(\".chips\"),e=(M.Chips.init(e,{placeholder:\"Ваши комментарии\",secondaryPlaceholder:\"+Комментарий\",limit:5,minLength:3,data:[{tag:\"Написать в телеграмм\"},{tag:\"Во вторник, после 14:00\"}],autocompleteOptions:{data:{Telegram:null,WhatsApp:null,Email:null},minLength:1}}),document.querySelectorAll(\".datepicker\")),e=(M.Datepicker.init(e),document.querySelectorAll(\".timepicker\"));M.Timepicker.init(e)});\n\n//# sourceURL=webpack://portfolio/./src/js/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("let container=document.getElementById(\"container\"),imgs_containers=document.getElementsByClassName(\"img_container\"),imgsContainers=document.getElementById(\"inner_container\");const overl=document.getElementById(\"overlay-btns\"),checkAutoplay=document.getElementById(\"checkbox-autoplay\"),loaderSl=document.getElementById(\"loader-slider\");let imgs_count=imgs_containers.length,current_img_index=0,autoScroll_enabled=!0,autoScroll_interval=3e3,autoScroll_dir=1,loaderSlider=!0;function setup(){if(imgsContainers.style.display=\"none\",loaderSlider=!0,loaderSl.style.display=\"flex\",loaderSlider)setTimeout(()=>{var t=container.clientWidth;for(let e=0;e<imgs_count;e++){var n=imgs_containers[e],i=t*e-container.clientWidth;n.style.left=i+\"px\"}loaderSl.style.display=\"none\",imgsContainers.style.display=\"block\",loaderSlider=!1},500);else{var t=container.clientWidth;for(let e=0;e<imgs_count;e++){var n=imgs_containers[e],i=t*e-container.clientWidth;n.style.left=i+\"px\"}}}function autoScroll(){if(autoScroll_enabled)if(0==current_img_index?autoScroll_dir=1:current_img_index==imgs_count-1&&(autoScroll_dir=-1),autoScroll_dir<0){var t=container.clientWidth;current_img_index--;for(let e=0;e<imgs_count;e++){var n=imgs_containers[e],i=t*(e-current_img_index);n.style.left=i+\"px\"}}else{var r=container.clientWidth;current_img_index++;for(let e=0;e<imgs_count;e++){var l=imgs_containers[e],o=-r*(current_img_index-e);l.style.left=o+\"px\"}}}overl.addEventListener(\"click\",e=>{if(\"right_button\"===e.target.id){if(current_img_index<imgs_count-1){var t=container.clientWidth;current_img_index++;for(let e=0;e<imgs_count;e++){var n=imgs_containers[e],i=-t*(current_img_index-e);n.style.left=i+\"px\"}}}else if(\"left_button\"===e.target.id&&0<current_img_index){var r=container.clientWidth;current_img_index--;for(let e=0;e<imgs_count;e++){var l=imgs_containers[e],o=r*(e-current_img_index);l.style.left=o+\"px\"}}}),checkAutoplay.addEventListener(\"click\",e=>{e.target.checked?autoScroll_enabled=!0:(autoScroll_enabled=!1,setup())}),setup(),setInterval(autoScroll,autoScroll_interval);\n\n//# sourceURL=webpack://portfolio/./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;