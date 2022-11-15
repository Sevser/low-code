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
/* harmony import */ var _types_nodes_imageNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/nodes/imageNode */ "./lib/types/nodes/imageNode.ts");
/* harmony import */ var _types_nodes_textNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/nodes/textNode */ "./lib/types/nodes/textNode.ts");
/* harmony import */ var _types_nodes_vectorNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/nodes/vectorNode */ "./lib/types/nodes/vectorNode.ts");
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
        if (_types_nodes_textNode__WEBPACK_IMPORTED_MODULE_2__.TextNodeModel.checkForNode(node)) {
            return yield _types_nodes_textNode__WEBPACK_IMPORTED_MODULE_2__.TextNodeModel.createNode(node);
        }
        if (_types_nodes_vectorNode__WEBPACK_IMPORTED_MODULE_3__.VectorNodeModel.checkForNode(node)) {
            return yield _types_nodes_vectorNode__WEBPACK_IMPORTED_MODULE_3__.VectorNodeModel.createNode(node);
        }
        if (_types_nodes_imageNode__WEBPACK_IMPORTED_MODULE_1__.ImageNodeModel.checkForNode(node)) {
            return yield _types_nodes_imageNode__WEBPACK_IMPORTED_MODULE_1__.ImageNodeModel.createNode(node);
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

/***/ "./lib/types/nodes/imageNode.ts":
/*!**************************************!*\
  !*** ./lib/types/nodes/imageNode.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageNodeModel": () => (/* binding */ ImageNodeModel)
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


class ImageNodeModel {
    constructor(node) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Image";
        this.styles = (0,_styles_createStyles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(node);
    }
    static createNode(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = new ImageNodeModel(node);
            const uint8ArrayPng = yield node.exportAsync({
                format: 'PNG',
            });
            ret.properties = [
                new _Property__WEBPACK_IMPORTED_MODULE_1__.Property({
                    label: 'content',
                    type: 'custom',
                    value: String.fromCharCode.apply(null, uint8ArrayPng),
                }),
            ];
            return ret;
        });
    }
    static checkForNode(node) {
        return node.type === 'RECTANGLE' && node.fills && node.fills.length && node.fills[0].type === 'IMAGE';
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

/***/ "../utills/lib/base64.js":
/*!*******************************!*\
  !*** ../utills/lib/base64.js ***!
  \*******************************/
/***/ ((module) => {

/*
MIT License

Copyright (c) 2020 Egor Nepomnyaschih

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*
// This constant can also be computed with the following algorithm:
const base64abc = [],
	A = "A".charCodeAt(0),
	a = "a".charCodeAt(0),
	n = "0".charCodeAt(0);
for (let i = 0; i < 26; ++i) {
	base64abc.push(String.fromCharCode(A + i));
}
for (let i = 0; i < 26; ++i) {
	base64abc.push(String.fromCharCode(a + i));
}
for (let i = 0; i < 10; ++i) {
	base64abc.push(String.fromCharCode(n + i));
}
base64abc.push("+");
base64abc.push("/");
*/
const base64abc = [
	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
	"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"
];

/*
// This constant can also be computed with the following algorithm:
const l = 256, base64codes = new Uint8Array(l);
for (let i = 0; i < l; ++i) {
	base64codes[i] = 255; // invalid character
}
base64abc.forEach((char, index) => {
	base64codes[char.charCodeAt(0)] = index;
});
base64codes["=".charCodeAt(0)] = 0; // ignored anyway, so we just need to prevent an error
*/
const base64codes = [
	255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
	255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
	255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63,
	52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255,
	255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
	15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
	255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
	41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
];

function getBase64Code(charCode) {
	if (charCode >= base64codes.length) {
		throw new Error("Unable to parse base64 string.");
	}
	const code = base64codes[charCode];
	if (code === 255) {
		throw new Error("Unable to parse base64 string.");
	}
	return code;
}

module.exports = {
	bytesToBase64(bytes) {
		let result = '', i, l = bytes.length;
		for (i = 2; i < l; i += 3) {
			result += base64abc[bytes[i - 2] >> 2];
			result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
			result += base64abc[((bytes[i - 1] & 0x0F) << 2) | (bytes[i] >> 6)];
			result += base64abc[bytes[i] & 0x3F];
		}
		if (i === l + 1) { // 1 octet yet to write
			result += base64abc[bytes[i - 2] >> 2];
			result += base64abc[(bytes[i - 2] & 0x03) << 4];
			result += "==";
		}
		if (i === l) { // 2 octets yet to write
			result += base64abc[bytes[i - 2] >> 2];
			result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
			result += base64abc[(bytes[i - 1] & 0x0F) << 2];
			result += "=";
		}
		return result;
	},
	base64ToBytes(str) {
		if (str.length % 4 !== 0) {
			throw new Error("Unable to parse base64 string.");
		}
		const index = str.indexOf("=");
		if (index !== -1 && index < str.length - 2) {
			throw new Error("Unable to parse base64 string.");
		}
		let missingOctets = str.endsWith("==") ? 2 : str.endsWith("=") ? 1 : 0,
			n = str.length,
			result = new Uint8Array(3 * (n / 4)),
			buffer;
		for (let i = 0, j = 0; i < n; i += 4, j += 3) {
			buffer =
				getBase64Code(str.charCodeAt(i)) << 18 |
				getBase64Code(str.charCodeAt(i + 1)) << 12 |
				getBase64Code(str.charCodeAt(i + 2)) << 6 |
				getBase64Code(str.charCodeAt(i + 3));
			result[j] = buffer >> 16;
			result[j + 1] = (buffer >> 8) & 0xFF;
			result[j + 2] = buffer & 0xFF;
		}
		return result.subarray(0, result.length - missingOctets);
	},
	base64encode(str, encoder = new TextEncoder()) {
		return bytesToBase64(encoder.encode(str));
	},
	base64decode(str, decoder = new TextDecoder()) {
		return decoder.decode(base64ToBytes(str));
	},
	toUTF8Array(str = '') {
		var data = [];
		for (var i = 0; i < str.length; i++){  
			data.push(str.charCodeAt(i));
		}
		return data;
	}
}

/***/ }),

/***/ "../utills/lib/utills.js":
/*!*******************************!*\
  !*** ../utills/lib/utills.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const base64 = __webpack_require__(/*! ./base64 */ "../utills/lib/base64.js");

module.exports = Object.assign({
    clone(value) {
        if (value && value.constructor && value.constructor === Uint8Array) {
            return value;
        }
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
    },
}, base64);


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
    console.log('selected node:', message.payload);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDMEM7QUFDVztBQUNyRDtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFXO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVEQUFVO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvY3JlYXRlTm9kZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL21lc3NhZ2VzL1Bvc3RNZXNzYWdlLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZUJhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9zdHlsZXMvY3JlYXRlQm9yZGVyUmFkaXVzLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZUZsZXgudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9zdHlsZXMvY3JlYXRlU3R5bGVzLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvdHlwZXMvUHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9TdHlsZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3R5cGVzL25vZGVzL2ZyYW1lTm9kZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3R5cGVzL25vZGVzL2ltYWdlTm9kZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3R5cGVzL25vZGVzL3RleHROb2RlLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvdHlwZXMvbm9kZXMvdmVjdG9yTm9kZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4uL3V0aWxscy9saWIvYmFzZTY0LmpzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi4vdXRpbGxzL2xpYi91dGlsbHMuanMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9wbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBGcmFtZU5vZGVNb2RlbCB9IGZyb20gXCIuL3R5cGVzL25vZGVzL2ZyYW1lTm9kZVwiO1xyXG5pbXBvcnQgeyBJbWFnZU5vZGVNb2RlbCB9IGZyb20gXCIuL3R5cGVzL25vZGVzL2ltYWdlTm9kZVwiO1xyXG5pbXBvcnQgeyBUZXh0Tm9kZU1vZGVsIH0gZnJvbSBcIi4vdHlwZXMvbm9kZXMvdGV4dE5vZGVcIjtcclxuaW1wb3J0IHsgVmVjdG9yTm9kZU1vZGVsIH0gZnJvbSBcIi4vdHlwZXMvbm9kZXMvdmVjdG9yTm9kZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShub2RlKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGlmIChGcmFtZU5vZGVNb2RlbC5jaGVja0Zvck5vZGUobm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIEZyYW1lTm9kZU1vZGVsLmNyZWF0ZU5vZGUobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChUZXh0Tm9kZU1vZGVsLmNoZWNrRm9yTm9kZShub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geWllbGQgVGV4dE5vZGVNb2RlbC5jcmVhdGVOb2RlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoVmVjdG9yTm9kZU1vZGVsLmNoZWNrRm9yTm9kZShub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geWllbGQgVmVjdG9yTm9kZU1vZGVsLmNyZWF0ZU5vZGUobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJbWFnZU5vZGVNb2RlbC5jaGVja0Zvck5vZGUobm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIEltYWdlTm9kZU1vZGVsLmNyZWF0ZU5vZGUobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSk7XHJcbn1cclxuO1xyXG4iLCJleHBvcnQgY2xhc3MgUG9zdE1lc3NhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gcGFyYW1zLnR5cGU7XHJcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gcGFyYW1zLnBheWxvYWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHV0aWxscyBmcm9tICdAbG93Q29kZS91dGlsbHMnO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi90eXBlcy9TdHlsZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZChub2RlKSB7XHJcbiAgICBpZiAobm9kZS5maWxscyAmJiBub2RlLmZpbGxzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBub2RlLmZpbGxzLnJlZHVjZSgoYWNjLCBwYWludCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFpbnQudHlwZSA9PT0gXCJTT0xJRFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYmFja2dyb3VuZC1jb2xvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGByZ2IoJHt1dGlsbHMuY3JlYXRlUkdCKHBhaW50LmNvbG9yKX0pYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9LCBudWxsKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL3R5cGVzL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3JkZXJSYWRpdXMobm9kZSkge1xyXG4gICAgaWYgKHR5cGVvZiBub2RlLmNvcm5lclJhZGl1cyA9PT0gXCJudW1iZXJcIiAmJiBub2RlLmNvcm5lclJhZGl1cyA+IDApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2JvcmRlci1yYWRpdXMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5jb3JuZXJSYWRpdXN9cHhgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi90eXBlcy9TdHlsZVwiO1xyXG5jb25zdCBwcmltYXJ5QXhpc01hcHBpbmcgPSB7XHJcbiAgICBNSU46ICdmbGV4LXN0YXJ0JyxcclxuICAgIE1BWDogJ2ZsZXgtZW5kJyxcclxuICAgIENFTlRFUjogJ2NlbnRlcicsXHJcbiAgICBTUEFDRV9CRVRXRUVOOiAnc3BhY2UtYmV0d2VlbidcclxufTtcclxuY29uc3QgY291bnRlckF4aXNNYXBwaW5nID0ge1xyXG4gICAgTUlOOiAnZmxleC1zdGFydCcsXHJcbiAgICBNQVg6ICdmbGV4LWVuZCcsXHJcbiAgICBDRU5URVI6ICdjZW50ZXInLFxyXG4gICAgQkFTRUxJTkU6ICdiYXNlbGluZSdcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZsZXgobm9kZSkge1xyXG4gICAgaWYgKG5vZGUubGF5b3V0TW9kZSA9PT0gJ05PTkUnKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgbmFtZTogJ2Rpc3BsYXknLFxyXG4gICAgICAgIHZhbHVlOiAnZmxleCcsXHJcbiAgICB9KSk7XHJcbiAgICBpZiAobm9kZS5sYXlvdXRNb2RlID09PSAnVkVSVElDQUwnKSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2ZsZXgtZGlyZWN0aW9uJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdjb2x1bW4nLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBpZiAobm9kZS5pdGVtU3BhY2luZykge1xyXG4gICAgICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jvdy1nYXAnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGAke25vZGUuaXRlbVNwYWNpbmd9cHhgLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKG5vZGUuaXRlbVNwYWNpbmcpIHtcclxuICAgICAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdjb2x1bW4tZ2FwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLml0ZW1TcGFjaW5nfXB4YCxcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChub2RlLnBhZGRpbmdMZWZ0KSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3BhZGRpbmctbGVmdCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLnBhZGRpbmdMZWZ0fXB4YCxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5wYWRkaW5nUmlnaHQpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFkZGluZy1yaWdodCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLnBhZGRpbmdSaWdodH1weGAsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucGFkZGluZ1RvcCkge1xyXG4gICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWRkaW5nLXRvcCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLnBhZGRpbmdUb3B9cHhgLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnBhZGRpbmdCb3R0b20pIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFkZGluZy1ib3R0b20nLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5wYWRkaW5nQm90dG9tfXB4YCxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnanVzdGlmeS1jb250ZW50JyxcclxuICAgICAgICAgICAgdmFsdWU6IHByaW1hcnlBeGlzTWFwcGluZ1tub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtc10sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUuY291bnRlckF4aXNBbGlnbkl0ZW1zKSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2FsaWduLWl0ZW1zJyxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ZXJBeGlzTWFwcGluZ1tub2RlLmNvdW50ZXJBeGlzQWxpZ25JdGVtc10sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vY3JlYXRlQmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi9jcmVhdGVCb3JkZXJSYWRpdXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlRmxleCB9IGZyb20gXCIuL2NyZWF0ZUZsZXhcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhub2RlKSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIGNvbnN0IGNvbG9yID0gY3JlYXRlQmFja2dyb3VuZChub2RlKTtcclxuICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgIHJldC5wdXNoKGNvbG9yKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJyID0gY3JlYXRlQm9yZGVyUmFkaXVzKG5vZGUpO1xyXG4gICAgaWYgKGJyKSB7XHJcbiAgICAgICAgcmV0LnB1c2goYnIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmwgPSBjcmVhdGVGbGV4KG5vZGUpO1xyXG4gICAgaWYgKGZsKSB7XHJcbiAgICAgICAgcmV0LnB1c2goLi4uZmwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4iLCJpbXBvcnQgdXRpbGxzIGZyb20gXCJAbG93Q29kZS91dGlsbHNcIjtcclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5IHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbCkge1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSB2YWwubGFiZWw7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHV0aWxscy5jbG9uZSh2YWwudmFsdWUpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHZhbC50eXBlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTdHlsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWwpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB2YWwubmFtZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi8uLi9jcmVhdGVOb2RlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvY3JlYXRlU3R5bGVzXCI7XHJcbmV4cG9ydCBjbGFzcyBGcmFtZU5vZGVNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5vZGUuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbm9kZS5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiRnJhbWVcIjtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhub2RlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSBuZXcgRnJhbWVOb2RlTW9kZWwobm9kZSk7XHJcbiAgICAgICAgICAgIHJldC5jaGlsZHJlbiA9ICh5aWVsZCBQcm9taXNlLmFsbChub2RlLmNoaWxkcmVuLm1hcChjcmVhdGVOb2RlKSkpLmZpbHRlcihuID0+IG4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoZWNrRm9yTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0ZSQU1FJztcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvY3JlYXRlU3R5bGVzXCI7XHJcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XHJcbmV4cG9ydCBjbGFzcyBJbWFnZU5vZGVNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5vZGUuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbm9kZS5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiSW1hZ2VcIjtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhub2RlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSBuZXcgSW1hZ2VOb2RlTW9kZWwobm9kZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVpbnQ4QXJyYXlQbmcgPSB5aWVsZCBub2RlLmV4cG9ydEFzeW5jKHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ1BORycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXQucHJvcGVydGllcyA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdjb250ZW50JyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB1aW50OEFycmF5UG5nKSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoZWNrRm9yTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1JFQ1RBTkdMRScgJiYgbm9kZS5maWxscyAmJiBub2RlLmZpbGxzLmxlbmd0aCAmJiBub2RlLmZpbGxzWzBdLnR5cGUgPT09ICdJTUFHRSc7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NyZWF0ZVN0eWxlc1wiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgY2xhc3MgVGV4dE5vZGVNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5vZGUuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbm9kZS5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dFwiO1xyXG4gICAgICAgIHRoaXMuc3R5bGVzID0gY3JlYXRlU3R5bGVzKG5vZGUpLm1hcChzdHlsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdHlsZS5uYW1lID09PSAnYmFja2dyb3VuZC1jb2xvcicpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlLm5hbWUgPSAnY29sb3InO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBQcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ2NvbnRlbnQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZS5jaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZU5vZGUobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IG5ldyBUZXh0Tm9kZU1vZGVsKG5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoZWNrRm9yTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1RFWFQnO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9jcmVhdGVTdHlsZXNcIjtcclxuaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcclxuZXhwb3J0IGNsYXNzIFZlY3Rvck5vZGVNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5vZGUuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbm9kZS5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiVmVjdG9yXCI7XHJcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBjcmVhdGVTdHlsZXMobm9kZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmV0ID0gbmV3IFZlY3Rvck5vZGVNb2RlbChub2RlKTtcclxuICAgICAgICAgICAgY29uc3QgdWludDhBcnJheVN2ZyA9IHlpZWxkIG5vZGUuZXhwb3J0QXN5bmMoe1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAnU1ZHJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldC5wcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgICAgICAgICAgbmV3IFByb3BlcnR5KHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ2NvbnRlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHVpbnQ4QXJyYXlTdmcpLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hlY2tGb3JOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnR1JPVVAnICYmIG5vZGUubmFtZSA9PT0gXCJWZWN0b3JcIjtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG5NSVQgTGljZW5zZVxyXG5cclxuQ29weXJpZ2h0IChjKSAyMDIwIEVnb3IgTmVwb21ueWFzY2hpaFxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuU09GVFdBUkUuXHJcbiovXHJcblxyXG4vKlxyXG4vLyBUaGlzIGNvbnN0YW50IGNhbiBhbHNvIGJlIGNvbXB1dGVkIHdpdGggdGhlIGZvbGxvd2luZyBhbGdvcml0aG06XHJcbmNvbnN0IGJhc2U2NGFiYyA9IFtdLFxyXG5cdEEgPSBcIkFcIi5jaGFyQ29kZUF0KDApLFxyXG5cdGEgPSBcImFcIi5jaGFyQ29kZUF0KDApLFxyXG5cdG4gPSBcIjBcIi5jaGFyQ29kZUF0KDApO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDI2OyArK2kpIHtcclxuXHRiYXNlNjRhYmMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKEEgKyBpKSk7XHJcbn1cclxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNjsgKytpKSB7XHJcblx0YmFzZTY0YWJjLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShhICsgaSkpO1xyXG59XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xyXG5cdGJhc2U2NGFiYy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUobiArIGkpKTtcclxufVxyXG5iYXNlNjRhYmMucHVzaChcIitcIik7XHJcbmJhc2U2NGFiYy5wdXNoKFwiL1wiKTtcclxuKi9cclxuY29uc3QgYmFzZTY0YWJjID0gW1xyXG5cdFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiLCBcIktcIiwgXCJMXCIsIFwiTVwiLFxyXG5cdFwiTlwiLCBcIk9cIiwgXCJQXCIsIFwiUVwiLCBcIlJcIiwgXCJTXCIsIFwiVFwiLCBcIlVcIiwgXCJWXCIsIFwiV1wiLCBcIlhcIiwgXCJZXCIsIFwiWlwiLFxyXG5cdFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJpXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwibVwiLFxyXG5cdFwiblwiLCBcIm9cIiwgXCJwXCIsIFwicVwiLCBcInJcIiwgXCJzXCIsIFwidFwiLCBcInVcIiwgXCJ2XCIsIFwid1wiLCBcInhcIiwgXCJ5XCIsIFwielwiLFxyXG5cdFwiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIitcIiwgXCIvXCJcclxuXTtcclxuXHJcbi8qXHJcbi8vIFRoaXMgY29uc3RhbnQgY2FuIGFsc28gYmUgY29tcHV0ZWQgd2l0aCB0aGUgZm9sbG93aW5nIGFsZ29yaXRobTpcclxuY29uc3QgbCA9IDI1NiwgYmFzZTY0Y29kZXMgPSBuZXcgVWludDhBcnJheShsKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBsOyArK2kpIHtcclxuXHRiYXNlNjRjb2Rlc1tpXSA9IDI1NTsgLy8gaW52YWxpZCBjaGFyYWN0ZXJcclxufVxyXG5iYXNlNjRhYmMuZm9yRWFjaCgoY2hhciwgaW5kZXgpID0+IHtcclxuXHRiYXNlNjRjb2Rlc1tjaGFyLmNoYXJDb2RlQXQoMCldID0gaW5kZXg7XHJcbn0pO1xyXG5iYXNlNjRjb2Rlc1tcIj1cIi5jaGFyQ29kZUF0KDApXSA9IDA7IC8vIGlnbm9yZWQgYW55d2F5LCBzbyB3ZSBqdXN0IG5lZWQgdG8gcHJldmVudCBhbiBlcnJvclxyXG4qL1xyXG5jb25zdCBiYXNlNjRjb2RlcyA9IFtcclxuXHQyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsXHJcblx0MjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LFxyXG5cdDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCA2MiwgMjU1LCAyNTUsIDI1NSwgNjMsXHJcblx0NTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNTgsIDU5LCA2MCwgNjEsIDI1NSwgMjU1LCAyNTUsIDAsIDI1NSwgMjU1LFxyXG5cdDI1NSwgMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LFxyXG5cdDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsXHJcblx0MjU1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLFxyXG5cdDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwLCA1MVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0QmFzZTY0Q29kZShjaGFyQ29kZSkge1xyXG5cdGlmIChjaGFyQ29kZSA+PSBiYXNlNjRjb2Rlcy5sZW5ndGgpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBiYXNlNjQgc3RyaW5nLlwiKTtcclxuXHR9XHJcblx0Y29uc3QgY29kZSA9IGJhc2U2NGNvZGVzW2NoYXJDb2RlXTtcclxuXHRpZiAoY29kZSA9PT0gMjU1KSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcGFyc2UgYmFzZTY0IHN0cmluZy5cIik7XHJcblx0fVxyXG5cdHJldHVybiBjb2RlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRieXRlc1RvQmFzZTY0KGJ5dGVzKSB7XHJcblx0XHRsZXQgcmVzdWx0ID0gJycsIGksIGwgPSBieXRlcy5sZW5ndGg7XHJcblx0XHRmb3IgKGkgPSAyOyBpIDwgbDsgaSArPSAzKSB7XHJcblx0XHRcdHJlc3VsdCArPSBiYXNlNjRhYmNbYnl0ZXNbaSAtIDJdID4+IDJdO1xyXG5cdFx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjWygoYnl0ZXNbaSAtIDJdICYgMHgwMykgPDwgNCkgfCAoYnl0ZXNbaSAtIDFdID4+IDQpXTtcclxuXHRcdFx0cmVzdWx0ICs9IGJhc2U2NGFiY1soKGJ5dGVzW2kgLSAxXSAmIDB4MEYpIDw8IDIpIHwgKGJ5dGVzW2ldID4+IDYpXTtcclxuXHRcdFx0cmVzdWx0ICs9IGJhc2U2NGFiY1tieXRlc1tpXSAmIDB4M0ZdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGkgPT09IGwgKyAxKSB7IC8vIDEgb2N0ZXQgeWV0IHRvIHdyaXRlXHJcblx0XHRcdHJlc3VsdCArPSBiYXNlNjRhYmNbYnl0ZXNbaSAtIDJdID4+IDJdO1xyXG5cdFx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjWyhieXRlc1tpIC0gMl0gJiAweDAzKSA8PCA0XTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiPT1cIjtcclxuXHRcdH1cclxuXHRcdGlmIChpID09PSBsKSB7IC8vIDIgb2N0ZXRzIHlldCB0byB3cml0ZVxyXG5cdFx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjW2J5dGVzW2kgLSAyXSA+PiAyXTtcclxuXHRcdFx0cmVzdWx0ICs9IGJhc2U2NGFiY1soKGJ5dGVzW2kgLSAyXSAmIDB4MDMpIDw8IDQpIHwgKGJ5dGVzW2kgLSAxXSA+PiA0KV07XHJcblx0XHRcdHJlc3VsdCArPSBiYXNlNjRhYmNbKGJ5dGVzW2kgLSAxXSAmIDB4MEYpIDw8IDJdO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI9XCI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0sXHJcblx0YmFzZTY0VG9CeXRlcyhzdHIpIHtcclxuXHRcdGlmIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcGFyc2UgYmFzZTY0IHN0cmluZy5cIik7XHJcblx0XHR9XHJcblx0XHRjb25zdCBpbmRleCA9IHN0ci5pbmRleE9mKFwiPVwiKTtcclxuXHRcdGlmIChpbmRleCAhPT0gLTEgJiYgaW5kZXggPCBzdHIubGVuZ3RoIC0gMikge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcGFyc2UgYmFzZTY0IHN0cmluZy5cIik7XHJcblx0XHR9XHJcblx0XHRsZXQgbWlzc2luZ09jdGV0cyA9IHN0ci5lbmRzV2l0aChcIj09XCIpID8gMiA6IHN0ci5lbmRzV2l0aChcIj1cIikgPyAxIDogMCxcclxuXHRcdFx0biA9IHN0ci5sZW5ndGgsXHJcblx0XHRcdHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KDMgKiAobiAvIDQpKSxcclxuXHRcdFx0YnVmZmVyO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgbjsgaSArPSA0LCBqICs9IDMpIHtcclxuXHRcdFx0YnVmZmVyID1cclxuXHRcdFx0XHRnZXRCYXNlNjRDb2RlKHN0ci5jaGFyQ29kZUF0KGkpKSA8PCAxOCB8XHJcblx0XHRcdFx0Z2V0QmFzZTY0Q29kZShzdHIuY2hhckNvZGVBdChpICsgMSkpIDw8IDEyIHxcclxuXHRcdFx0XHRnZXRCYXNlNjRDb2RlKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSkgPDwgNiB8XHJcblx0XHRcdFx0Z2V0QmFzZTY0Q29kZShzdHIuY2hhckNvZGVBdChpICsgMykpO1xyXG5cdFx0XHRyZXN1bHRbal0gPSBidWZmZXIgPj4gMTY7XHJcblx0XHRcdHJlc3VsdFtqICsgMV0gPSAoYnVmZmVyID4+IDgpICYgMHhGRjtcclxuXHRcdFx0cmVzdWx0W2ogKyAyXSA9IGJ1ZmZlciAmIDB4RkY7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LnN1YmFycmF5KDAsIHJlc3VsdC5sZW5ndGggLSBtaXNzaW5nT2N0ZXRzKTtcclxuXHR9LFxyXG5cdGJhc2U2NGVuY29kZShzdHIsIGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKSkge1xyXG5cdFx0cmV0dXJuIGJ5dGVzVG9CYXNlNjQoZW5jb2Rlci5lbmNvZGUoc3RyKSk7XHJcblx0fSxcclxuXHRiYXNlNjRkZWNvZGUoc3RyLCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCkpIHtcclxuXHRcdHJldHVybiBkZWNvZGVyLmRlY29kZShiYXNlNjRUb0J5dGVzKHN0cikpO1xyXG5cdH0sXHJcblx0dG9VVEY4QXJyYXkoc3RyID0gJycpIHtcclxuXHRcdHZhciBkYXRhID0gW107XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKyl7ICBcclxuXHRcdFx0ZGF0YS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxufSIsImNvbnN0IGJhc2U2NCA9IHJlcXVpcmUoJy4vYmFzZTY0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgY2xvbmUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbC52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVSR0IoeyByLCBnLCBiIH0pIHtcbiAgICAgICAgcmV0dXJuIGAke01hdGguZmxvb3IociAqIDI1NSl9LCAke01hdGguZmxvb3IoZyAqIDI1NSl9LCAke01hdGguZmxvb3IoYiAqIDI1NSl9YDtcbiAgICB9LFxuICAgIGNyZWF0ZVF1YWRyaXBsZXQoKSB7XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kICogKDE2ICoqIDQpKS50b1N0cmluZygxNik7XG4gICAgfSxcbiAgICBjcmVhdGVHVUlEKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jcmVhdGVRdWFkcmlwbGV0KCl9JHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0tJHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0tJHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0tJHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0tJHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0ke3RoaXMuY3JlYXRlUXVhZHJpcGxldCgpfSR7dGhpcy5jcmVhdGVRdWFkcmlwbGV0KCl9YDtcbiAgICB9LFxufSwgYmFzZTY0KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi9jcmVhdGVOb2RlXCI7XHJcbmltcG9ydCB7IFBvc3RNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZXMvUG9zdE1lc3NhZ2VcIjtcclxuY29uc3Qgc2VsZWN0aW9uQ2hhbmdlID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25zID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBuZXcgUG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6ICdzZWxlY3Rpb25DaGFuZ2UnLFxyXG4gICAgICAgIHBheWxvYWQ6IG51bGwsXHJcbiAgICB9KTtcclxuICAgIGlmIChzZWxlY3Rpb25zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHNlbGVjdGlvbnNbMF07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbWVzc2FnZS5wYXlsb2FkID0geWllbGQgY3JlYXRlTm9kZShzZWxlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoX2EpIHsgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIG5vZGU6JywgbWVzc2FnZS5wYXlsb2FkKTtcclxuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xyXG59KTtcclxuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgc2VsZWN0aW9uQ2hhbmdlKTtcclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XHJcbiAgICB3aWR0aDogNDAwLFxyXG4gICAgaGVpZ2h0OiA2MDAsXHJcbiAgICB0aXRsZTogXCJMb3dDb2RlXCJcclxufSk7XHJcbnNlbGVjdGlvbkNoYW5nZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=