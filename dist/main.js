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

/***/ "./src/js/cancelEvent.js":
/*!*******************************!*\
  !*** ./src/js/cancelEvent.js ***!
  \*******************************/
/***/ (() => {

eval("window.addEventListener('DOMContentLoaded', function () {\n  document.getElementById('cancelButton').addEventListener('click', function (e) {\n    e.preventDefault();\n    location.href = 'index.html';\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js/cancelEvent.js?");

/***/ }),

/***/ "./src/js/createEvent.js":
/*!*******************************!*\
  !*** ./src/js/createEvent.js ***!
  \*******************************/
/***/ (() => {

eval("var meeting;\nvar itemKey;\nwindow.addEventListener('DOMContentLoaded', function () {\n  document.getElementById('createButton').addEventListener('click', function (e) {\n    var d = document.getElementById('inputDay');\n    var selectedDay = d.options[d.selectedIndex].text;\n    var t = document.getElementById('inputTime');\n    var selectedTime = t.options[t.selectedIndex].text;\n    var p = document.getElementById('inputParticipants');\n    var selectedParticipants = [];\n    var n = document.getElementById('eventName');\n    var meetingName = n.value;\n    var a = document.getElementById('errorAlert');\n    var s = document.querySelector('#errorAlert span');\n    var b = document.querySelector('#errorAlert button');\n    e.preventDefault();\n    b.addEventListener('click', function () {\n      window.location.reload();\n    });\n\n    if (selectedDay && selectedTime && meetingName && p.options.length > 0) {\n      itemKey = selectedDay + selectedTime;\n\n      if (localStorage.getItem(itemKey) === null) {\n        for (var i = 0; i < p.options.length; i++) {\n          if (p.options[i].selected) {\n            selectedParticipants.push(p.options[i].value);\n          }\n        }\n\n        meeting = {\n          'name': meetingName,\n          'day': selectedDay,\n          'time': selectedTime,\n          'participant': selectedParticipants\n        };\n        localStorage.setItem(itemKey, JSON.stringify(meeting));\n        location.href = 'index.html';\n      } else {\n        s.innerText = 'Failed to create an event. Time slot is already booked.';\n        a.style.visibility = 'visible';\n      }\n    } else {\n      s.innerText = 'Failed to create an event. Please fill out all fields.';\n      a.style.visibility = 'visible';\n    }\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js/createEvent.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cancelEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancelEvent */ \"./src/js/cancelEvent.js\");\n/* harmony import */ var _cancelEvent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cancelEvent__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEvent */ \"./src/js/createEvent.js\");\n/* harmony import */ var _createEvent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_createEvent__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _showCalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showCalendar */ \"./src/js/showCalendar.js\");\n/* harmony import */ var _showCalendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_showCalendar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/index.js?");

/***/ }),

/***/ "./src/js/showCalendar.js":
/*!********************************!*\
  !*** ./src/js/showCalendar.js ***!
  \********************************/
/***/ (() => {

eval("var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];\nvar time = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];\nvar table = document.querySelectorAll('#table td');\nvar clickedCell;\nvar chooseButton;\nchooseButton = document.getElementById('chooseButton');\nvar selectedParticipant = chooseButton.options[chooseButton.selectedIndex].text;\nchooseButton.addEventListener('change', function () {\n  var selectedParticipant = chooseButton.options[chooseButton.selectedIndex].text;\n  calendarShow(selectedParticipant);\n}, false);\n\nfunction calendarShow(participants) {\n  var meetings = [];\n  var cells = document.querySelectorAll('td');\n\n  for (var i = 0; i < cells.length; i++) {\n    cells[i].textContent = '';\n    cells[i].classList = '';\n  }\n\n  for (var _i = 0; _i < localStorage.length; _i++) {\n    var m = void 0;\n    var record = void 0;\n    m = localStorage.getItem(localStorage.key(_i));\n    record = JSON.parse(m);\n\n    if (participants === 'All members') {\n      meetings.push(JSON.parse(m));\n    } else {\n      for (var j = 0; j < record.participant.length; j++) {\n        if (record.participant[j] === participants || record.participant[j] === 'All members') {\n          meetings.push(JSON.parse(m));\n          break;\n        }\n      }\n    }\n  }\n\n  for (var _i2 = 0; _i2 < meetings.length; _i2++) {\n    var col = void 0;\n    var row = void 0;\n    var deleteButton = document.createElement('a');\n    var cellText = document.createElement('span');\n    var icon = document.createElement('span');\n    var wrap = document.createElement('div');\n\n    for (var _j = 0; _j < days.length; _j++) {\n      if (meetings[_i2].day === days[_j]) {\n        col = _j + 1;\n      }\n    }\n\n    for (var k = 0; k < time.length; k++) {\n      if (meetings[_i2].time === time[k]) {\n        row = k + 1;\n      }\n    }\n\n    deleteButton.setAttribute('id', meetings[_i2].day + meetings[_i2].time);\n    deleteButton.addEventListener('click', openModal);\n    cellText.innerText = meetings[_i2].name;\n    deleteButton.setAttribute('href', '#');\n    deleteButton.classList += 'del-button float-right';\n    icon.classList += 'material-icons';\n    deleteButton.setAttribute('data-toggle', 'modal');\n    deleteButton.setAttribute('data-target', '#deleteModal');\n    icon.innerText = 'clear';\n    table[col - 1 + (row - 1) * 5].classList += 'selectedCell';\n    table[col - 1 + (row - 1) * 5].appendChild(wrap);\n    wrap.appendChild(cellText);\n    deleteButton.appendChild(icon);\n    wrap.appendChild(deleteButton);\n  }\n}\n\nfunction openModal(event) {\n  var title;\n  var modalDiv;\n  var deleteModalButton;\n  clickedCell = event.target.parentElement.parentElement;\n  title = clickedCell.firstChild.innerText;\n  modalDiv = document.getElementById('modal-message');\n  modalDiv.innerText = 'Are you sure you want to delete ' + '\"' + title + '\"' + ' event?';\n  deleteModalButton = document.getElementById('deleteModalButton');\n  deleteModalButton.addEventListener('click', deleteEvent);\n}\n\nfunction deleteEvent() {\n  var childA = clickedCell.getElementsByTagName('a')[0];\n  clickedCell.textContent = '';\n  clickedCell.parentElement.classList = '';\n  localStorage.removeItem(childA.id);\n}\n\ncalendarShow(selectedParticipant);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/showCalendar.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;