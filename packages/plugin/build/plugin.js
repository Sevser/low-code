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

/***/ "./lib/messages/PostMessage.ts":
/*!*************************************!*\
  !*** ./lib/messages/PostMessage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostMessage": () => (/* binding */ PostMessage)
/* harmony export */ });
class PostMessage {
    constructor(params) {
        this.type = params.type;
        this.payload = params.payload;
    }
}


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
    },
    createQuadriplet() {
        const rand = Math.random();
        return Math.floor(rand * (16 ** 4)).toString(16);
    },
    createGUID() {
        return `${this.createQuadriplet()}${this.createQuadriplet()}-${this.createQuadriplet()}-${this.createQuadriplet()}-${this.createQuadriplet()}-${this.createQuadriplet()}${this.createQuadriplet()}${this.createQuadriplet()}`;
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
/* harmony import */ var _messages_PostMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages/PostMessage */ "./lib/messages/PostMessage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const selectionChange = () => __awaiter(void 0, void 0, void 0, function* () {
    const selections = figma.currentPage.selection;
    let message = new _messages_PostMessage__WEBPACK_IMPORTED_MODULE_1__.PostMessage({
        type: 'selectionChange',
        payload: null,
    });
    if (selections.length !== 0) {
        const selection = selections[0];
        try {
            message.payload = yield (0,_createNode__WEBPACK_IMPORTED_MODULE_0__.createNode)(selection);
        }
        catch (_a) { }
    }
    figma.ui.postMessage(message);
});
figma.on("selectionchange", selectionChange);
figma.showUI(__html__, {
    width: 400,
    height: 600,
    title: "LowCode"
});
selectionChange();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL2NyZWF0ZU5vZGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9tZXNzYWdlcy9Qb3N0TWVzc2FnZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3N0eWxlcy9jcmVhdGVCYWNrZ3JvdW5kLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZUJvcmRlclJhZGl1cy50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3N0eWxlcy9jcmVhdGVGbGV4LnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZVN0eWxlcy50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3R5cGVzL1Byb3BlcnR5LnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvdHlwZXMvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9ub2Rlcy9mcmFtZU5vZGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9ub2Rlcy90ZXh0Tm9kZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3R5cGVzL25vZGVzL3ZlY3Rvck5vZGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uLi91dGlsbHMvbGliL3V0aWxscy5qcyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3BsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IEZyYW1lTm9kZU1vZGVsIH0gZnJvbSBcIi4vdHlwZXMvbm9kZXMvZnJhbWVOb2RlXCI7XHJcbmltcG9ydCB7IFRleHROb2RlTW9kZWwgfSBmcm9tIFwiLi90eXBlcy9ub2Rlcy90ZXh0Tm9kZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3JOb2RlTW9kZWwgfSBmcm9tIFwiLi90eXBlcy9ub2Rlcy92ZWN0b3JOb2RlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKG5vZGUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgaWYgKEZyYW1lTm9kZU1vZGVsLmNoZWNrRm9yTm9kZShub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geWllbGQgRnJhbWVOb2RlTW9kZWwuY3JlYXRlTm9kZShub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFRleHROb2RlTW9kZWwuY2hlY2tGb3JOb2RlKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBUZXh0Tm9kZU1vZGVsLmNyZWF0ZU5vZGUobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChWZWN0b3JOb2RlTW9kZWwuY2hlY2tGb3JOb2RlKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBWZWN0b3JOb2RlTW9kZWwuY3JlYXRlTm9kZShub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9KTtcclxufVxyXG47XHJcbiIsImV4cG9ydCBjbGFzcyBQb3N0TWVzc2FnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSBwYXJhbXMudHlwZTtcclxuICAgICAgICB0aGlzLnBheWxvYWQgPSBwYXJhbXMucGF5bG9hZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdXRpbGxzIGZyb20gJ0Bsb3dDb2RlL3V0aWxscyc7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL3R5cGVzL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYWNrZ3JvdW5kKG5vZGUpIHtcclxuICAgIGlmIChub2RlLmZpbGxzICYmIG5vZGUuZmlsbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuZmlsbHMucmVkdWNlKChhY2MsIHBhaW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYWludC50eXBlID09PSBcIlNPTElEXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdiYWNrZ3JvdW5kLWNvbG9yJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYHJnYigke3V0aWxscy5jcmVhdGVSR0IocGFpbnQuY29sb3IpfSlgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIG51bGwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3R5bGUgfSBmcm9tIFwiLi4vdHlwZXMvU3R5bGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvcmRlclJhZGl1cyhub2RlKSB7XHJcbiAgICBpZiAodHlwZW9mIG5vZGUuY29ybmVyUmFkaXVzID09PSBcIm51bWJlclwiICYmIG5vZGUuY29ybmVyUmFkaXVzID4gMCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYm9yZGVyLXJhZGl1cycsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLmNvcm5lclJhZGl1c31weGBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL3R5cGVzL1N0eWxlXCI7XHJcbmNvbnN0IHByaW1hcnlBeGlzTWFwcGluZyA9IHtcclxuICAgIE1JTjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgTUFYOiAnZmxleC1lbmQnLFxyXG4gICAgQ0VOVEVSOiAnY2VudGVyJyxcclxuICAgIFNQQUNFX0JFVFdFRU46ICdzcGFjZS1iZXR3ZWVuJ1xyXG59O1xyXG5jb25zdCBjb3VudGVyQXhpc01hcHBpbmcgPSB7XHJcbiAgICBNSU46ICdmbGV4LXN0YXJ0JyxcclxuICAgIE1BWDogJ2ZsZXgtZW5kJyxcclxuICAgIENFTlRFUjogJ2NlbnRlcicsXHJcbiAgICBCQVNFTElORTogJ2Jhc2VsaW5lJ1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmxleChub2RlKSB7XHJcbiAgICBpZiAobm9kZS5sYXlvdXRNb2RlID09PSAnTk9ORScpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJldCA9IFtdO1xyXG4gICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICBuYW1lOiAnZGlzcGxheScsXHJcbiAgICAgICAgdmFsdWU6ICdmbGV4JyxcclxuICAgIH0pKTtcclxuICAgIGlmIChub2RlLmxheW91dE1vZGUgPT09ICdWRVJUSUNBTCcpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnZmxleC1kaXJlY3Rpb24nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2NvbHVtbicsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGlmIChub2RlLml0ZW1TcGFjaW5nKSB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncm93LWdhcCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5pdGVtU3BhY2luZ31weGAsXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAobm9kZS5pdGVtU3BhY2luZykge1xyXG4gICAgICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvbHVtbi1nYXAnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGAke25vZGUuaXRlbVNwYWNpbmd9cHhgLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucGFkZGluZ0xlZnQpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFkZGluZy1sZWZ0JyxcclxuICAgICAgICAgICAgdmFsdWU6IGAke25vZGUucGFkZGluZ0xlZnR9cHhgLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnBhZGRpbmdSaWdodCkge1xyXG4gICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWRkaW5nLXJpZ2h0JyxcclxuICAgICAgICAgICAgdmFsdWU6IGAke25vZGUucGFkZGluZ1JpZ2h0fXB4YCxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5wYWRkaW5nVG9wKSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3BhZGRpbmctdG9wJyxcclxuICAgICAgICAgICAgdmFsdWU6IGAke25vZGUucGFkZGluZ1RvcH1weGAsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucGFkZGluZ0JvdHRvbSkge1xyXG4gICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWRkaW5nLWJvdHRvbScsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLnBhZGRpbmdCb3R0b219cHhgLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtcykge1xyXG4gICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdqdXN0aWZ5LWNvbnRlbnQnLFxyXG4gICAgICAgICAgICB2YWx1ZTogcHJpbWFyeUF4aXNNYXBwaW5nW25vZGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zXSxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5jb3VudGVyQXhpc0FsaWduSXRlbXMpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYWxpZ24taXRlbXMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnRlckF4aXNNYXBwaW5nW25vZGUuY291bnRlckF4aXNBbGlnbkl0ZW1zXSxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUJhY2tncm91bmQgfSBmcm9tIFwiLi9jcmVhdGVCYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJvcmRlclJhZGl1cyB9IGZyb20gXCIuL2NyZWF0ZUJvcmRlclJhZGl1c1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVGbGV4IH0gZnJvbSBcIi4vY3JlYXRlRmxleFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3R5bGVzKG5vZGUpIHtcclxuICAgIGNvbnN0IHJldCA9IFtdO1xyXG4gICAgY29uc3QgY29sb3IgPSBjcmVhdGVCYWNrZ3JvdW5kKG5vZGUpO1xyXG4gICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgcmV0LnB1c2goY29sb3IpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnIgPSBjcmVhdGVCb3JkZXJSYWRpdXMobm9kZSk7XHJcbiAgICBpZiAoYnIpIHtcclxuICAgICAgICByZXQucHVzaChicik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmbCA9IGNyZWF0ZUZsZXgobm9kZSk7XHJcbiAgICBpZiAoZmwpIHtcclxuICAgICAgICByZXQucHVzaCguLi5mbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbiIsImltcG9ydCB1dGlsbHMgZnJvbSBcIkBsb3dDb2RlL3V0aWxsc1wiO1xyXG5leHBvcnQgY2xhc3MgUHJvcGVydHkge1xyXG4gICAgY29uc3RydWN0b3IodmFsKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHZhbC5sYWJlbDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdXRpbGxzLmNsb25lKHZhbC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdmFsLnR5cGU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFN0eWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHZhbC5uYW1lO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWwudmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZU5vZGVcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9jcmVhdGVTdHlsZXNcIjtcclxuZXhwb3J0IGNsYXNzIEZyYW1lTm9kZU1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gbm9kZS5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJGcmFtZVwiO1xyXG4gICAgICAgIHRoaXMuc3R5bGVzID0gY3JlYXRlU3R5bGVzKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZU5vZGUobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IG5ldyBGcmFtZU5vZGVNb2RlbChub2RlKTtcclxuICAgICAgICAgICAgcmV0LmNoaWxkcmVuID0gKHlpZWxkIFByb21pc2UuYWxsKG5vZGUuY2hpbGRyZW4ubWFwKGNyZWF0ZU5vZGUpKSkuZmlsdGVyKG4gPT4gbik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hlY2tGb3JOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnRlJBTUUnO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9jcmVhdGVTdHlsZXNcIjtcclxuaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcclxuZXhwb3J0IGNsYXNzIFRleHROb2RlTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBub2RlLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5vZGUubmFtZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRcIjtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhub2RlKS5tYXAoc3R5bGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUubmFtZSA9PT0gJ2JhY2tncm91bmQtY29sb3InKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5uYW1lID0gJ2NvbG9yJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgICAgICBuZXcgUHJvcGVydHkoe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdjb250ZW50JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuY2hhcmFjdGVycyxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSBuZXcgVGV4dE5vZGVNb2RlbChub2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaGVja0Zvck5vZGUobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdURVhUJztcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvY3JlYXRlU3R5bGVzXCI7XHJcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XHJcbmV4cG9ydCBjbGFzcyBWZWN0b3JOb2RlTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBub2RlLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5vZGUubmFtZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBcIlZlY3RvclwiO1xyXG4gICAgICAgIHRoaXMuc3R5bGVzID0gY3JlYXRlU3R5bGVzKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZU5vZGUobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IG5ldyBWZWN0b3JOb2RlTW9kZWwobm9kZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVpbnQ4QXJyYXlTdmcgPSB5aWVsZCBub2RlLmV4cG9ydEFzeW5jKHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ1NWRycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXQucHJvcGVydGllcyA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdjb250ZW50JyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB1aW50OEFycmF5U3ZnKSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoZWNrRm9yTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0dST1VQJyAmJiBub2RlLm5hbWUgPT09IFwiVmVjdG9yXCI7XHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2xvbmUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbC52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVSR0IoeyByLCBnLCBiIH0pIHtcbiAgICAgICAgcmV0dXJuIGAke01hdGguZmxvb3IociAqIDI1NSl9LCAke01hdGguZmxvb3IoZyAqIDI1NSl9LCAke01hdGguZmxvb3IoYiAqIDI1NSl9YDtcbiAgICB9LFxuICAgIGNyZWF0ZVF1YWRyaXBsZXQoKSB7XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kICogKDE2ICoqIDQpKS50b1N0cmluZygxNik7XG4gICAgfSxcbiAgICBjcmVhdGVHVUlEKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jcmVhdGVRdWFkcmlwbGV0KCl9JHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0tJHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0tJHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0tJHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0tJHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0ke3RoaXMuY3JlYXRlUXVhZHJpcGxldCgpfSR7dGhpcy5jcmVhdGVRdWFkcmlwbGV0KCl9YDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4vY3JlYXRlTm9kZVwiO1xyXG5pbXBvcnQgeyBQb3N0TWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2VzL1Bvc3RNZXNzYWdlXCI7XHJcbmNvbnN0IHNlbGVjdGlvbkNoYW5nZSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9ucyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcclxuICAgIGxldCBtZXNzYWdlID0gbmV3IFBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiAnc2VsZWN0aW9uQ2hhbmdlJyxcclxuICAgICAgICBwYXlsb2FkOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoc2VsZWN0aW9ucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBzZWxlY3Rpb25zWzBdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UucGF5bG9hZCA9IHlpZWxkIGNyZWF0ZU5vZGUoc2VsZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgIH1cclxuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xyXG59KTtcclxuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgc2VsZWN0aW9uQ2hhbmdlKTtcclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XHJcbiAgICB3aWR0aDogNDAwLFxyXG4gICAgaGVpZ2h0OiA2MDAsXHJcbiAgICB0aXRsZTogXCJMb3dDb2RlXCJcclxufSk7XHJcbnNlbGVjdGlvbkNoYW5nZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=