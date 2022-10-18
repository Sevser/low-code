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
/* harmony import */ var _types_nodes_vectorNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/nodes/vectorNode */ "./lib/types/nodes/vectorNode.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function createNode(node) {
    return __awaiter(this, void 0, void 0, function* () {
        if (_types_nodes_frameNode__WEBPACK_IMPORTED_MODULE_0__.FrameNodeModel.checkForNode(node)) {
            return yield _types_nodes_frameNode__WEBPACK_IMPORTED_MODULE_0__.FrameNodeModel.createNode(node);
        }
        if (_types_nodes_textNode__WEBPACK_IMPORTED_MODULE_1__.TextNodeModel.checkForNode(node)) {
            return yield _types_nodes_textNode__WEBPACK_IMPORTED_MODULE_1__.TextNodeModel.createNode(node);
        }
        if (_types_nodes_vectorNode__WEBPACK_IMPORTED_MODULE_2__.VectorNodeModel.checkForNode(node)) {
            return yield _types_nodes_vectorNode__WEBPACK_IMPORTED_MODULE_2__.VectorNodeModel.createNode(node);
        }
        return null;
    });
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
    if (node.primaryAxisAlignItems) {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'justify-content',
            value: primaryAxisMapping[node.primaryAxisAlignItems],
        }));
    }
    if (node.counterAxisAlignItems) {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'align-items',
            value: counterAxisMapping[node.counterAxisAlignItems],
        }));
    }
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

/***/ "./lib/types/Property.ts":
/*!*******************************!*\
  !*** ./lib/types/Property.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Property": () => (/* binding */ Property)
/* harmony export */ });
/* harmony import */ var _lowCode_utills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lowCode/utills */ "../utills/lib/utills.js");
/* harmony import */ var _lowCode_utills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lowCode_utills__WEBPACK_IMPORTED_MODULE_0__);

class Property {
    constructor(val) {
        this.label = val.label;
        this.value = _lowCode_utills__WEBPACK_IMPORTED_MODULE_0___default().clone(val.value);
        this.type = val.type;
    }
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class FrameNodeModel {
    constructor(node) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Frame";
        this.styles = (0,_styles_createStyles__WEBPACK_IMPORTED_MODULE_1__.createStyles)(node);
    }
    static createNode(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = new FrameNodeModel(node);
            ret.children = (yield Promise.all(node.children.map(_createNode__WEBPACK_IMPORTED_MODULE_0__.createNode))).filter(n => n);
            return ret;
        });
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
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./lib/types/Property.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


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
        this.properties = [
            new _Property__WEBPACK_IMPORTED_MODULE_1__.Property({
                label: 'content',
                type: 'custom',
                value: node.characters,
            }),
        ];
    }
    static createNode(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = new TextNodeModel(node);
            return ret;
        });
    }
    static checkForNode(node) {
        return node.type === 'TEXT';
    }
}


/***/ }),

/***/ "./lib/types/nodes/vectorNode.ts":
/*!***************************************!*\
  !*** ./lib/types/nodes/vectorNode.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorNodeModel": () => (/* binding */ VectorNodeModel)
/* harmony export */ });
/* harmony import */ var _styles_createStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/createStyles */ "./lib/styles/createStyles.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./lib/types/Property.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class VectorNodeModel {
    constructor(node) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Vector";
        this.styles = (0,_styles_createStyles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(node);
    }
    static createNode(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = new VectorNodeModel(node);
            const uint8ArraySvg = yield node.exportAsync({
                format: 'SVG',
            });
            ret.properties = [
                new _Property__WEBPACK_IMPORTED_MODULE_1__.Property({
                    label: 'content',
                    type: 'custom',
                    value: String.fromCharCode.apply(null, uint8ArraySvg),
                }),
            ];
            return ret;
        });
    }
    static checkForNode(node) {
        return node.type === 'GROUP' && node.name === "Vector";
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

figma.on("selectionchange", () => __awaiter(void 0, void 0, void 0, function* () {
    const selections = figma.currentPage.selection;
    if (!selections.length) {
        return;
    }
    const selection = selections[0];
    console.log(yield (0,_createNode__WEBPACK_IMPORTED_MODULE_0__.createNode)(selection));
}));
figma.showUI(__html__, {
    width: 400,
    height: 600,
    title: "LowCode"
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMLGdCQUFnQixTQUFTO0FBQ3pCLGtCQUFrQixvQkFBb0IsSUFBSSxvQkFBb0IsSUFBSSxvQkFBb0I7QUFDdEY7QUFDQTs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1REFBVTtBQUNoQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9jcmVhdGVOb2RlLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZUJhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9zdHlsZXMvY3JlYXRlQm9yZGVyUmFkaXVzLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZUZsZXgudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9zdHlsZXMvY3JlYXRlU3R5bGVzLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvdHlwZXMvUHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9TdHlsZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3R5cGVzL25vZGVzL2ZyYW1lTm9kZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3R5cGVzL25vZGVzL3RleHROb2RlLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvdHlwZXMvbm9kZXMvdmVjdG9yTm9kZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4uL3V0aWxscy9saWIvdXRpbGxzLmpzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvcGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgRnJhbWVOb2RlTW9kZWwgfSBmcm9tIFwiLi90eXBlcy9ub2Rlcy9mcmFtZU5vZGVcIjtcclxuaW1wb3J0IHsgVGV4dE5vZGVNb2RlbCB9IGZyb20gXCIuL3R5cGVzL25vZGVzL3RleHROb2RlXCI7XHJcbmltcG9ydCB7IFZlY3Rvck5vZGVNb2RlbCB9IGZyb20gXCIuL3R5cGVzL25vZGVzL3ZlY3Rvck5vZGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUobm9kZSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBpZiAoRnJhbWVOb2RlTW9kZWwuY2hlY2tGb3JOb2RlKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBGcmFtZU5vZGVNb2RlbC5jcmVhdGVOb2RlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoVGV4dE5vZGVNb2RlbC5jaGVja0Zvck5vZGUobm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIFRleHROb2RlTW9kZWwuY3JlYXRlTm9kZShub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFZlY3Rvck5vZGVNb2RlbC5jaGVja0Zvck5vZGUobm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIFZlY3Rvck5vZGVNb2RlbC5jcmVhdGVOb2RlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0pO1xyXG59XHJcbjtcclxuIiwiaW1wb3J0IHV0aWxscyBmcm9tICdAbG93Q29kZS91dGlsbHMnO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi90eXBlcy9TdHlsZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZChub2RlKSB7XHJcbiAgICBpZiAobm9kZS5maWxscyAmJiBub2RlLmZpbGxzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBub2RlLmZpbGxzLnJlZHVjZSgoYWNjLCBwYWludCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFpbnQudHlwZSA9PT0gXCJTT0xJRFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYmFja2dyb3VuZC1jb2xvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGByZ2IoJHt1dGlsbHMuY3JlYXRlUkdCKHBhaW50LmNvbG9yKX0pYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9LCBudWxsKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL3R5cGVzL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3JkZXJSYWRpdXMobm9kZSkge1xyXG4gICAgaWYgKHR5cGVvZiBub2RlLmNvcm5lclJhZGl1cyA9PT0gXCJudW1iZXJcIiAmJiBub2RlLmNvcm5lclJhZGl1cyA+IDApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2JvcmRlci1yYWRpdXMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5jb3JuZXJSYWRpdXN9cHhgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi90eXBlcy9TdHlsZVwiO1xyXG5jb25zdCBwcmltYXJ5QXhpc01hcHBpbmcgPSB7XHJcbiAgICBNSU46ICdmbGV4LXN0YXJ0JyxcclxuICAgIE1BWDogJ2ZsZXgtZW5kJyxcclxuICAgIENFTlRFUjogJ2NlbnRlcicsXHJcbiAgICBTUEFDRV9CRVRXRUVOOiAnc3BhY2UtYmV0d2VlbidcclxufTtcclxuY29uc3QgY291bnRlckF4aXNNYXBwaW5nID0ge1xyXG4gICAgTUlOOiAnZmxleC1zdGFydCcsXHJcbiAgICBNQVg6ICdmbGV4LWVuZCcsXHJcbiAgICBDRU5URVI6ICdjZW50ZXInLFxyXG4gICAgQkFTRUxJTkU6ICdiYXNlbGluZSdcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZsZXgobm9kZSkge1xyXG4gICAgaWYgKG5vZGUubGF5b3V0TW9kZSA9PT0gJ05PTkUnKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgbmFtZTogJ2Rpc3BsYXknLFxyXG4gICAgICAgIHZhbHVlOiAnZmxleCcsXHJcbiAgICB9KSk7XHJcbiAgICBpZiAobm9kZS5sYXlvdXRNb2RlID09PSAnVkVSVElDQUwnKSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2ZsZXgtZGlyZWN0aW9uJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdjb2x1bW4nLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBpZiAobm9kZS5pdGVtU3BhY2luZykge1xyXG4gICAgICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jvdy1nYXAnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGAke25vZGUuaXRlbVNwYWNpbmd9cHhgLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKG5vZGUuaXRlbVNwYWNpbmcpIHtcclxuICAgICAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdjb2x1bW4tZ2FwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLml0ZW1TcGFjaW5nfXB4YCxcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChub2RlLnBhZGRpbmdMZWZ0KSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3BhZGRpbmctbGVmdCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLnBhZGRpbmdMZWZ0fXB4YCxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5wYWRkaW5nUmlnaHQpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFkZGluZy1yaWdodCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLnBhZGRpbmdSaWdodH1weGAsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucGFkZGluZ1RvcCkge1xyXG4gICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWRkaW5nLXRvcCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLnBhZGRpbmdUb3B9cHhgLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnBhZGRpbmdCb3R0b20pIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFkZGluZy1ib3R0b20nLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5wYWRkaW5nQm90dG9tfXB4YCxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnanVzdGlmeS1jb250ZW50JyxcclxuICAgICAgICAgICAgdmFsdWU6IHByaW1hcnlBeGlzTWFwcGluZ1tub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtc10sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUuY291bnRlckF4aXNBbGlnbkl0ZW1zKSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2FsaWduLWl0ZW1zJyxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ZXJBeGlzTWFwcGluZ1tub2RlLmNvdW50ZXJBeGlzQWxpZ25JdGVtc10sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vY3JlYXRlQmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi9jcmVhdGVCb3JkZXJSYWRpdXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRmxleCB9IGZyb20gXCIuL2NyZWF0ZUZsZXhcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhub2RlKSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIGNvbnN0IGNvbG9yID0gY3JlYXRlQmFja2dyb3VuZChub2RlKTtcclxuICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgIHJldC5wdXNoKGNvbG9yKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJyID0gY3JlYXRlQm9yZGVyUmFkaXVzKG5vZGUpO1xyXG4gICAgaWYgKGJyKSB7XHJcbiAgICAgICAgcmV0LnB1c2goYnIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmwgPSBjcmVhdGVGbGV4KG5vZGUpO1xyXG4gICAgaWYgKGZsKSB7XHJcbiAgICAgICAgcmV0LnB1c2goLi4uZmwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4iLCJpbXBvcnQgdXRpbGxzIGZyb20gXCJAbG93Q29kZS91dGlsbHNcIjtcclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5IHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbCkge1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSB2YWwubGFiZWw7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHV0aWxscy5jbG9uZSh2YWwudmFsdWUpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHZhbC50eXBlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTdHlsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWwpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB2YWwubmFtZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi8uLi9jcmVhdGVOb2RlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvY3JlYXRlU3R5bGVzXCI7XHJcbmV4cG9ydCBjbGFzcyBGcmFtZU5vZGVNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5vZGUuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbm9kZS5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiRnJhbWVcIjtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhub2RlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSBuZXcgRnJhbWVOb2RlTW9kZWwobm9kZSk7XHJcbiAgICAgICAgICAgIHJldC5jaGlsZHJlbiA9ICh5aWVsZCBQcm9taXNlLmFsbChub2RlLmNoaWxkcmVuLm1hcChjcmVhdGVOb2RlKSkpLmZpbHRlcihuID0+IG4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoZWNrRm9yTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0ZSQU1FJztcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvY3JlYXRlU3R5bGVzXCI7XHJcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XHJcbmV4cG9ydCBjbGFzcyBUZXh0Tm9kZU1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gbm9kZS5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0XCI7XHJcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBjcmVhdGVTdHlsZXMobm9kZSkubWFwKHN0eWxlID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0eWxlLm5hbWUgPT09ICdiYWNrZ3JvdW5kLWNvbG9yJykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUubmFtZSA9ICdjb2xvcic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IFtcclxuICAgICAgICAgICAgbmV3IFByb3BlcnR5KHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLmNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmV0ID0gbmV3IFRleHROb2RlTW9kZWwobm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hlY2tGb3JOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnVEVYVCc7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NyZWF0ZVN0eWxlc1wiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgY2xhc3MgVmVjdG9yTm9kZU1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gbm9kZS5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJWZWN0b3JcIjtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhub2RlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSBuZXcgVmVjdG9yTm9kZU1vZGVsKG5vZGUpO1xyXG4gICAgICAgICAgICBjb25zdCB1aW50OEFycmF5U3ZnID0geWllbGQgbm9kZS5leHBvcnRBc3luYyh7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdTVkcnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0LnByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvcGVydHkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdWludDhBcnJheVN2ZyksXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaGVja0Zvck5vZGUobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdHUk9VUCcgJiYgbm9kZS5uYW1lID09PSBcIlZlY3RvclwiO1xyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNsb25lKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwudmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlUkdCKHsgciwgZywgYiB9KSB7XG4gICAgICAgIHJldHVybiBgJHtNYXRoLmZsb29yKHIgKiAyNTUpfSwgJHtNYXRoLmZsb29yKGcgKiAyNTUpfSwgJHtNYXRoLmZsb29yKGIgKiAyNTUpfWA7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuL2NyZWF0ZU5vZGVcIjtcclxuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25zID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xyXG4gICAgaWYgKCFzZWxlY3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHNlbGVjdGlvbnNbMF07XHJcbiAgICBjb25zb2xlLmxvZyh5aWVsZCBjcmVhdGVOb2RlKHNlbGVjdGlvbikpO1xyXG59KSk7XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xyXG4gICAgd2lkdGg6IDQwMCxcclxuICAgIGhlaWdodDogNjAwLFxyXG4gICAgdGl0bGU6IFwiTG93Q29kZVwiXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=