/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/createNode.ts":
/*!***************************!*\
  !*** ./lib/createNode.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNode": () => (/* binding */ createNode)
/* harmony export */ });
/* harmony import */ var _types_nodes_frameNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/nodes/frameNode */ "./lib/types/nodes/frameNode.ts");
/* harmony import */ var _types_nodes_textNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/nodes/textNode */ "./lib/types/nodes/textNode.ts");


function createNode(node) {
    if (_types_nodes_frameNode__WEBPACK_IMPORTED_MODULE_0__.FrameNodeModel.checkForNode(node)) {
        return new _types_nodes_frameNode__WEBPACK_IMPORTED_MODULE_0__.FrameNodeModel(node);
    }
    if (_types_nodes_textNode__WEBPACK_IMPORTED_MODULE_1__.TextNodeModel.checkForNode(node)) {
        return new _types_nodes_textNode__WEBPACK_IMPORTED_MODULE_1__.TextNodeModel(node);
    }
    return null;
}
;


/***/ }),

/***/ "./lib/styles/createBackground.ts":
/*!****************************************!*\
  !*** ./lib/styles/createBackground.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBackground": () => (/* binding */ createBackground)
/* harmony export */ });
/* harmony import */ var _lowCode_utills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lowCode/utills */ "../utills/lib/utills.js");
/* harmony import */ var _lowCode_utills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lowCode_utills__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/Style */ "./lib/types/Style.ts");


function createBackground(node) {
    if (node.fills && node.fills.length) {
        return node.fills.reduce((acc, paint) => {
            if (paint.type === "SOLID") {
                return new _types_Style__WEBPACK_IMPORTED_MODULE_1__.Style({
                    name: 'background-color',
                    value: `rgb(${_lowCode_utills__WEBPACK_IMPORTED_MODULE_0___default().createRGB(paint.color)})`
                });
            }
            return acc;
        }, null);
    }
    return null;
}


/***/ }),

/***/ "./lib/styles/createBorderRadius.ts":
/*!******************************************!*\
  !*** ./lib/styles/createBorderRadius.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBorderRadius": () => (/* binding */ createBorderRadius)
/* harmony export */ });
/* harmony import */ var _types_Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/Style */ "./lib/types/Style.ts");

function createBorderRadius(node) {
    if (typeof node.cornerRadius === "number" && node.cornerRadius > 0) {
        return new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'border-radius',
            value: `${node.cornerRadius}px`
        });
    }
    return null;
}


/***/ }),

/***/ "./lib/styles/createFlex.ts":
/*!**********************************!*\
  !*** ./lib/styles/createFlex.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFlex": () => (/* binding */ createFlex)
/* harmony export */ });
/* harmony import */ var _types_Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/Style */ "./lib/types/Style.ts");

const primaryAxisMapping = {
    MIN: 'flex-start',
    MAX: 'flex-end',
    CENTER: 'center',
    SPACE_BETWEEN: 'space-between'
};
const counterAxisMapping = {
    MIN: 'flex-start',
    MAX: 'flex-end',
    CENTER: 'center',
    BASELINE: 'baseline'
};
function createFlex(node) {
    if (node.layoutMode === 'NONE') {
        return null;
    }
    const ret = [];
    ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
        name: 'display',
        value: 'flex',
    }));
    if (node.layoutMode === 'VERTICAL') {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'flex-direction',
            value: 'column',
        }));
        if (node.itemSpacing) {
            ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
                name: 'row-gap',
                value: `${node.itemSpacing}px`,
            }));
        }
    }
    else {
        if (node.itemSpacing) {
            ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
                name: 'column-gap',
                value: `${node.itemSpacing}px`,
            }));
        }
    }
    if (node.paddingLeft) {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'padding-left',
            value: `${node.paddingLeft}px`,
        }));
    }
    if (node.paddingRight) {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'padding-right',
            value: `${node.paddingRight}px`,
        }));
    }
    if (node.paddingTop) {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'padding-top',
            value: `${node.paddingTop}px`,
        }));
    }
    if (node.paddingBottom) {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'padding-bottom',
            value: `${node.paddingBottom}px`,
        }));
    }
    ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
        name: 'justify-content',
        value: primaryAxisMapping[node.primaryAxisAlignItems],
    }));
    ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
        name: 'align-items',
        value: counterAxisMapping[node.counterAxisAlignItems],
    }));
    return ret;
}


/***/ }),

/***/ "./lib/styles/createStyles.ts":
/*!************************************!*\
  !*** ./lib/styles/createStyles.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStyles": () => (/* binding */ createStyles)
/* harmony export */ });
/* harmony import */ var _createBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBackground */ "./lib/styles/createBackground.ts");
/* harmony import */ var _createBorderRadius__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBorderRadius */ "./lib/styles/createBorderRadius.ts");
/* harmony import */ var _createFlex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFlex */ "./lib/styles/createFlex.ts");



function createStyles(node) {
    const ret = [];
    const color = (0,_createBackground__WEBPACK_IMPORTED_MODULE_0__.createBackground)(node);
    if (color) {
        ret.push(color);
    }
    const br = (0,_createBorderRadius__WEBPACK_IMPORTED_MODULE_1__.createBorderRadius)(node);
    if (br) {
        ret.push(br);
    }
    const fl = (0,_createFlex__WEBPACK_IMPORTED_MODULE_2__.createFlex)(node);
    if (fl) {
        ret.push(...fl);
    }
    return ret;
}


/***/ }),

/***/ "./lib/types/Style.ts":
/*!****************************!*\
  !*** ./lib/types/Style.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Style": () => (/* binding */ Style)
/* harmony export */ });
class Style {
    constructor(val) {
        this.name = val.name;
        this.value = val.value;
    }
}


/***/ }),

/***/ "./lib/types/nodes/frameNode.ts":
/*!**************************************!*\
  !*** ./lib/types/nodes/frameNode.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameNodeModel": () => (/* binding */ FrameNodeModel)
/* harmony export */ });
/* harmony import */ var _createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createNode */ "./lib/createNode.ts");
/* harmony import */ var _styles_createStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/createStyles */ "./lib/styles/createStyles.ts");


class FrameNodeModel {
    constructor(node) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Frame";
        this.children = node.children.map(_createNode__WEBPACK_IMPORTED_MODULE_0__.createNode).filter(n => n);
        this.styles = (0,_styles_createStyles__WEBPACK_IMPORTED_MODULE_1__.createStyles)(node);
    }
    static checkForNode(node) {
        return node.type === 'FRAME';
    }
}


/***/ }),

/***/ "./lib/types/nodes/textNode.ts":
/*!*************************************!*\
  !*** ./lib/types/nodes/textNode.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextNodeModel": () => (/* binding */ TextNodeModel)
/* harmony export */ });
/* harmony import */ var _styles_createStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/createStyles */ "./lib/styles/createStyles.ts");

class TextNodeModel {
    constructor(node) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Text";
        this.styles = (0,_styles_createStyles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(node).map(style => {
            if (style.name === 'background-color') {
                style.name = 'color';
            }
            return style;
        });
    }
    static checkForNode(node) {
        return node.type === 'TEXT';
    }
}


/***/ }),

/***/ "../utills/lib/utills.js":
/*!*******************************!*\
  !*** ../utills/lib/utills.js ***!
  \*******************************/
/***/ ((module) => {

module.exports = {
    clone(value) {
        if (typeof value === 'object') {
            if (value) {
                return JSON.parse(JSON.stringify(val.value));
            }
        } else {
            return value;
        }
    },
    createRGB({ r, g, b }) {
        return `${Math.floor(r * 255)}, ${Math.floor(g * 255)}, ${Math.floor(b * 255)}`;
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./lib/plugin.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNode */ "./lib/createNode.ts");

figma.on("selectionchange", () => {
    const selections = figma.currentPage.selection;
    if (!selections.length) {
        return;
    }
    const selection = selections[0];
    console.log((0,_createNode__WEBPACK_IMPORTED_MODULE_0__.createNode)(selection));
});
figma.showUI(__html__, {
    width: 400,
    height: 600,
    title: "LowCode"
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1REFBVTtBQUMxQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9jcmVhdGVOb2RlLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZUJhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9zdHlsZXMvY3JlYXRlQm9yZGVyUmFkaXVzLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZUZsZXgudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9zdHlsZXMvY3JlYXRlU3R5bGVzLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvdHlwZXMvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9ub2Rlcy9mcmFtZU5vZGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9ub2Rlcy90ZXh0Tm9kZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4uL3V0aWxscy9saWIvdXRpbGxzLmpzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvcGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTm9kZU1vZGVsIH0gZnJvbSBcIi4vdHlwZXMvbm9kZXMvZnJhbWVOb2RlXCI7XHJcbmltcG9ydCB7IFRleHROb2RlTW9kZWwgfSBmcm9tIFwiLi90eXBlcy9ub2Rlcy90ZXh0Tm9kZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShub2RlKSB7XHJcbiAgICBpZiAoRnJhbWVOb2RlTW9kZWwuY2hlY2tGb3JOb2RlKG5vZGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGcmFtZU5vZGVNb2RlbChub2RlKTtcclxuICAgIH1cclxuICAgIGlmIChUZXh0Tm9kZU1vZGVsLmNoZWNrRm9yTm9kZShub2RlKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGV4dE5vZGVNb2RlbChub2RlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbjtcclxuIiwiaW1wb3J0IHV0aWxscyBmcm9tICdAbG93Q29kZS91dGlsbHMnO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi90eXBlcy9TdHlsZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZChub2RlKSB7XHJcbiAgICBpZiAobm9kZS5maWxscyAmJiBub2RlLmZpbGxzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBub2RlLmZpbGxzLnJlZHVjZSgoYWNjLCBwYWludCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFpbnQudHlwZSA9PT0gXCJTT0xJRFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYmFja2dyb3VuZC1jb2xvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGByZ2IoJHt1dGlsbHMuY3JlYXRlUkdCKHBhaW50LmNvbG9yKX0pYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9LCBudWxsKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL3R5cGVzL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3JkZXJSYWRpdXMobm9kZSkge1xyXG4gICAgaWYgKHR5cGVvZiBub2RlLmNvcm5lclJhZGl1cyA9PT0gXCJudW1iZXJcIiAmJiBub2RlLmNvcm5lclJhZGl1cyA+IDApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2JvcmRlci1yYWRpdXMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5jb3JuZXJSYWRpdXN9cHhgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi90eXBlcy9TdHlsZVwiO1xyXG5jb25zdCBwcmltYXJ5QXhpc01hcHBpbmcgPSB7XHJcbiAgICBNSU46ICdmbGV4LXN0YXJ0JyxcclxuICAgIE1BWDogJ2ZsZXgtZW5kJyxcclxuICAgIENFTlRFUjogJ2NlbnRlcicsXHJcbiAgICBTUEFDRV9CRVRXRUVOOiAnc3BhY2UtYmV0d2VlbidcclxufTtcclxuY29uc3QgY291bnRlckF4aXNNYXBwaW5nID0ge1xyXG4gICAgTUlOOiAnZmxleC1zdGFydCcsXHJcbiAgICBNQVg6ICdmbGV4LWVuZCcsXHJcbiAgICBDRU5URVI6ICdjZW50ZXInLFxyXG4gICAgQkFTRUxJTkU6ICdiYXNlbGluZSdcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZsZXgobm9kZSkge1xyXG4gICAgaWYgKG5vZGUubGF5b3V0TW9kZSA9PT0gJ05PTkUnKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgbmFtZTogJ2Rpc3BsYXknLFxyXG4gICAgICAgIHZhbHVlOiAnZmxleCcsXHJcbiAgICB9KSk7XHJcbiAgICBpZiAobm9kZS5sYXlvdXRNb2RlID09PSAnVkVSVElDQUwnKSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2ZsZXgtZGlyZWN0aW9uJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdjb2x1bW4nLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBpZiAobm9kZS5pdGVtU3BhY2luZykge1xyXG4gICAgICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jvdy1nYXAnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGAke25vZGUuaXRlbVNwYWNpbmd9cHhgLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKG5vZGUuaXRlbVNwYWNpbmcpIHtcclxuICAgICAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdjb2x1bW4tZ2FwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLml0ZW1TcGFjaW5nfXB4YCxcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChub2RlLnBhZGRpbmdMZWZ0KSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3BhZGRpbmctbGVmdCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLnBhZGRpbmdMZWZ0fXB4YCxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5wYWRkaW5nUmlnaHQpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFkZGluZy1yaWdodCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLnBhZGRpbmdSaWdodH1weGAsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucGFkZGluZ1RvcCkge1xyXG4gICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWRkaW5nLXRvcCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLnBhZGRpbmdUb3B9cHhgLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnBhZGRpbmdCb3R0b20pIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFkZGluZy1ib3R0b20nLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5wYWRkaW5nQm90dG9tfXB4YCxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgIG5hbWU6ICdqdXN0aWZ5LWNvbnRlbnQnLFxyXG4gICAgICAgIHZhbHVlOiBwcmltYXJ5QXhpc01hcHBpbmdbbm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXNdLFxyXG4gICAgfSkpO1xyXG4gICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICBuYW1lOiAnYWxpZ24taXRlbXMnLFxyXG4gICAgICAgIHZhbHVlOiBjb3VudGVyQXhpc01hcHBpbmdbbm9kZS5jb3VudGVyQXhpc0FsaWduSXRlbXNdLFxyXG4gICAgfSkpO1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vY3JlYXRlQmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi9jcmVhdGVCb3JkZXJSYWRpdXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRmxleCB9IGZyb20gXCIuL2NyZWF0ZUZsZXhcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhub2RlKSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIGNvbnN0IGNvbG9yID0gY3JlYXRlQmFja2dyb3VuZChub2RlKTtcclxuICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgIHJldC5wdXNoKGNvbG9yKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJyID0gY3JlYXRlQm9yZGVyUmFkaXVzKG5vZGUpO1xyXG4gICAgaWYgKGJyKSB7XHJcbiAgICAgICAgcmV0LnB1c2goYnIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmwgPSBjcmVhdGVGbGV4KG5vZGUpO1xyXG4gICAgaWYgKGZsKSB7XHJcbiAgICAgICAgcmV0LnB1c2goLi4uZmwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU3R5bGUge1xyXG4gICAgY29uc3RydWN0b3IodmFsKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdmFsLm5hbWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbC52YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZU5vZGVcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9jcmVhdGVTdHlsZXNcIjtcclxuZXhwb3J0IGNsYXNzIEZyYW1lTm9kZU1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gbm9kZS5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJGcmFtZVwiO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLm1hcChjcmVhdGVOb2RlKS5maWx0ZXIobiA9PiBuKTtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhub2RlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaGVja0Zvck5vZGUobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdGUkFNRSc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9jcmVhdGVTdHlsZXNcIjtcclxuZXhwb3J0IGNsYXNzIFRleHROb2RlTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBub2RlLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5vZGUubmFtZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRcIjtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhub2RlKS5tYXAoc3R5bGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUubmFtZSA9PT0gJ2JhY2tncm91bmQtY29sb3InKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5uYW1lID0gJ2NvbG9yJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hlY2tGb3JOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnVEVYVCc7XHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2xvbmUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbC52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVSR0IoeyByLCBnLCBiIH0pIHtcbiAgICAgICAgcmV0dXJuIGAke01hdGguZmxvb3IociAqIDI1NSl9LCAke01hdGguZmxvb3IoZyAqIDI1NSl9LCAke01hdGguZmxvb3IoYiAqIDI1NSl9YDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuL2NyZWF0ZU5vZGVcIjtcclxuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9ucyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcclxuICAgIGlmICghc2VsZWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBzZWxlY3Rpb25zWzBdO1xyXG4gICAgY29uc29sZS5sb2coY3JlYXRlTm9kZShzZWxlY3Rpb24pKTtcclxufSk7XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xyXG4gICAgd2lkdGg6IDQwMCxcclxuICAgIGhlaWdodDogNjAwLFxyXG4gICAgdGl0bGU6IFwiTG93Q29kZVwiXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=