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
/* harmony import */ var _types_nodes_groupNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/nodes/groupNode */ "./lib/types/nodes/groupNode.ts");
/* harmony import */ var _types_nodes_imageNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/nodes/imageNode */ "./lib/types/nodes/imageNode.ts");
/* harmony import */ var _types_nodes_instanceNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/nodes/instanceNode */ "./lib/types/nodes/instanceNode.ts");
/* harmony import */ var _types_nodes_textNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/nodes/textNode */ "./lib/types/nodes/textNode.ts");
/* harmony import */ var _types_nodes_vectorNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/nodes/vectorNode */ "./lib/types/nodes/vectorNode.ts");
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
        if (_types_nodes_textNode__WEBPACK_IMPORTED_MODULE_4__.TextNodeModel.checkForNode(node)) {
            return yield _types_nodes_textNode__WEBPACK_IMPORTED_MODULE_4__.TextNodeModel.createNode(node);
        }
        if (_types_nodes_vectorNode__WEBPACK_IMPORTED_MODULE_5__.VectorNodeModel.checkForNode(node)) {
            return yield _types_nodes_vectorNode__WEBPACK_IMPORTED_MODULE_5__.VectorNodeModel.createNode(node);
        }
        if (_types_nodes_imageNode__WEBPACK_IMPORTED_MODULE_2__.ImageNodeModel.checkForNode(node)) {
            return yield _types_nodes_imageNode__WEBPACK_IMPORTED_MODULE_2__.ImageNodeModel.createNode(node);
        }
        if (_types_nodes_instanceNode__WEBPACK_IMPORTED_MODULE_3__.InstanceNodeModel.checkForNode(node)) {
            return yield _types_nodes_instanceNode__WEBPACK_IMPORTED_MODULE_3__.InstanceNodeModel.createNode(node);
        }
        if (_types_nodes_groupNode__WEBPACK_IMPORTED_MODULE_1__.GroupNodeModel.checkForNode(node)) {
            return yield _types_nodes_groupNode__WEBPACK_IMPORTED_MODULE_1__.GroupNodeModel.createNode(node);
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
    if (node.layoutGrow) {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'justify-self',
            value: 'normal',
        }));
    }
    if (node.layoutAlign === 'STRETCH') {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'align-self',
            value: 'normal',
        }));
    }
    return ret;
}


/***/ }),

/***/ "./lib/styles/createFonts.ts":
/*!***********************************!*\
  !*** ./lib/styles/createFonts.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFonts": () => (/* binding */ createFonts)
/* harmony export */ });
/* harmony import */ var _types_Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/Style */ "./lib/types/Style.ts");

function createFonts(node) {
    const tnode = node;
    const ret = [];
    if (tnode.fontSize !== figma.mixed) {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'font-size',
            value: `${tnode.fontSize}px`,
        }));
    }
    if (tnode.fontWeight !== figma.mixed) {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'font-weight',
            value: '' + tnode.fontWeight,
        }));
    }
    if (tnode.fontName !== undefined && tnode.fontName !== figma.mixed) {
        ret.push(new _types_Style__WEBPACK_IMPORTED_MODULE_0__.Style({
            name: 'font-family',
            value: tnode.fontName.family,
        }));
    }
    return ret.length ? ret : null;
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
/* harmony import */ var _createFonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createFonts */ "./lib/styles/createFonts.ts");




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
    const fonts = (0,_createFonts__WEBPACK_IMPORTED_MODULE_3__.createFonts)(node);
    if (fonts) {
        ret.push(...fonts);
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

/***/ "./lib/types/nodes/groupNode.ts":
/*!**************************************!*\
  !*** ./lib/types/nodes/groupNode.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupNodeModel": () => (/* binding */ GroupNodeModel)
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


class GroupNodeModel {
    constructor(node) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Group";
        this.styles = (0,_styles_createStyles__WEBPACK_IMPORTED_MODULE_1__.createStyles)(node);
    }
    static createNode(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = new GroupNodeModel(node);
            ret.children = (yield Promise.all(node.children.map(_createNode__WEBPACK_IMPORTED_MODULE_0__.createNode))).filter(n => n);
            return ret;
        });
    }
    static checkForNode(node) {
        return node.type === 'GROUP' && node.name !== "Vector";
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

/***/ "./lib/types/nodes/instanceNode.ts":
/*!*****************************************!*\
  !*** ./lib/types/nodes/instanceNode.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstanceNodeModel": () => (/* binding */ InstanceNodeModel)
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


class InstanceNodeModel {
    constructor(node) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Instance";
        this.styles = (0,_styles_createStyles__WEBPACK_IMPORTED_MODULE_1__.createStyles)(node);
    }
    static createNode(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = new InstanceNodeModel(node);
            ret.children = (yield Promise.all(node.children.map(_createNode__WEBPACK_IMPORTED_MODULE_0__.createNode))).filter(n => n);
            return ret;
        });
    }
    static checkForNode(node) {
        return node.type === 'INSTANCE';
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
        if (node.hyperlink && node.hyperlink.type === 'URL') {
            this.properties.push(new _Property__WEBPACK_IMPORTED_MODULE_1__.Property({
                label: 'link',
                type: 'custom',
                value: node.hyperlink.value,
            }));
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSx3QkFBd0IsRUFBRSx3QkFBd0I7QUFDcE8sS0FBSztBQUNMLENBQUM7Ozs7Ozs7VUN6QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQzBDO0FBQ1c7QUFDckQ7QUFDQTtBQUNBLHNCQUFzQiw4REFBVztBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1REFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL2NyZWF0ZU5vZGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi9tZXNzYWdlcy9Qb3N0TWVzc2FnZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3N0eWxlcy9jcmVhdGVCYWNrZ3JvdW5kLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZUJvcmRlclJhZGl1cy50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3N0eWxlcy9jcmVhdGVGbGV4LnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZUZvbnRzLnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvc3R5bGVzL2NyZWF0ZVN0eWxlcy50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3R5cGVzL1Byb3BlcnR5LnRzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvdHlwZXMvU3R5bGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9ub2Rlcy9mcmFtZU5vZGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9ub2Rlcy9ncm91cE5vZGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9ub2Rlcy9pbWFnZU5vZGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9ub2Rlcy9pbnN0YW5jZU5vZGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uL2xpYi90eXBlcy9ub2Rlcy90ZXh0Tm9kZS50cyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4vbGliL3R5cGVzL25vZGVzL3ZlY3Rvck5vZGUudHMiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi8uLi91dGlsbHMvbGliL2Jhc2U2NC5qcyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luLy4uL3V0aWxscy9saWIvdXRpbGxzLmpzIiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AbG93LWNvZGUvcGx1Z2luL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGxvdy1jb2RlL3BsdWdpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0Bsb3ctY29kZS9wbHVnaW4vLi9saWIvcGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgRnJhbWVOb2RlTW9kZWwgfSBmcm9tIFwiLi90eXBlcy9ub2Rlcy9mcmFtZU5vZGVcIjtcclxuaW1wb3J0IHsgR3JvdXBOb2RlTW9kZWwgfSBmcm9tIFwiLi90eXBlcy9ub2Rlcy9ncm91cE5vZGVcIjtcclxuaW1wb3J0IHsgSW1hZ2VOb2RlTW9kZWwgfSBmcm9tIFwiLi90eXBlcy9ub2Rlcy9pbWFnZU5vZGVcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2VOb2RlTW9kZWwgfSBmcm9tIFwiLi90eXBlcy9ub2Rlcy9pbnN0YW5jZU5vZGVcIjtcclxuaW1wb3J0IHsgVGV4dE5vZGVNb2RlbCB9IGZyb20gXCIuL3R5cGVzL25vZGVzL3RleHROb2RlXCI7XHJcbmltcG9ydCB7IFZlY3Rvck5vZGVNb2RlbCB9IGZyb20gXCIuL3R5cGVzL25vZGVzL3ZlY3Rvck5vZGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUobm9kZSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBpZiAoRnJhbWVOb2RlTW9kZWwuY2hlY2tGb3JOb2RlKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBGcmFtZU5vZGVNb2RlbC5jcmVhdGVOb2RlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoVGV4dE5vZGVNb2RlbC5jaGVja0Zvck5vZGUobm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIFRleHROb2RlTW9kZWwuY3JlYXRlTm9kZShub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFZlY3Rvck5vZGVNb2RlbC5jaGVja0Zvck5vZGUobm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIFZlY3Rvck5vZGVNb2RlbC5jcmVhdGVOb2RlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSW1hZ2VOb2RlTW9kZWwuY2hlY2tGb3JOb2RlKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBJbWFnZU5vZGVNb2RlbC5jcmVhdGVOb2RlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSW5zdGFuY2VOb2RlTW9kZWwuY2hlY2tGb3JOb2RlKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBJbnN0YW5jZU5vZGVNb2RlbC5jcmVhdGVOb2RlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoR3JvdXBOb2RlTW9kZWwuY2hlY2tGb3JOb2RlKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBHcm91cE5vZGVNb2RlbC5jcmVhdGVOb2RlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0pO1xyXG59XHJcbjtcclxuIiwiZXhwb3J0IGNsYXNzIFBvc3RNZXNzYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHBhcmFtcy50eXBlO1xyXG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBhcmFtcy5wYXlsb2FkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB1dGlsbHMgZnJvbSAnQGxvd0NvZGUvdXRpbGxzJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tIFwiLi4vdHlwZXMvU3R5bGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmQobm9kZSkge1xyXG4gICAgaWYgKG5vZGUuZmlsbHMgJiYgbm9kZS5maWxscy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS5maWxscy5yZWR1Y2UoKGFjYywgcGFpbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhaW50LnR5cGUgPT09IFwiU09MSURcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2JhY2tncm91bmQtY29sb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgcmdiKCR7dXRpbGxzLmNyZWF0ZVJHQihwYWludC5jb2xvcil9KWBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwgbnVsbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuLi90eXBlcy9TdHlsZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9yZGVyUmFkaXVzKG5vZGUpIHtcclxuICAgIGlmICh0eXBlb2Ygbm9kZS5jb3JuZXJSYWRpdXMgPT09IFwibnVtYmVyXCIgJiYgbm9kZS5jb3JuZXJSYWRpdXMgPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdib3JkZXItcmFkaXVzJyxcclxuICAgICAgICAgICAgdmFsdWU6IGAke25vZGUuY29ybmVyUmFkaXVzfXB4YFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3R5bGUgfSBmcm9tIFwiLi4vdHlwZXMvU3R5bGVcIjtcclxuY29uc3QgcHJpbWFyeUF4aXNNYXBwaW5nID0ge1xyXG4gICAgTUlOOiAnZmxleC1zdGFydCcsXHJcbiAgICBNQVg6ICdmbGV4LWVuZCcsXHJcbiAgICBDRU5URVI6ICdjZW50ZXInLFxyXG4gICAgU1BBQ0VfQkVUV0VFTjogJ3NwYWNlLWJldHdlZW4nXHJcbn07XHJcbmNvbnN0IGNvdW50ZXJBeGlzTWFwcGluZyA9IHtcclxuICAgIE1JTjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgTUFYOiAnZmxleC1lbmQnLFxyXG4gICAgQ0VOVEVSOiAnY2VudGVyJyxcclxuICAgIEJBU0VMSU5FOiAnYmFzZWxpbmUnXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGbGV4KG5vZGUpIHtcclxuICAgIGlmIChub2RlLmxheW91dE1vZGUgPT09ICdOT05FJykge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmV0ID0gW107XHJcbiAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgIG5hbWU6ICdkaXNwbGF5JyxcclxuICAgICAgICB2YWx1ZTogJ2ZsZXgnLFxyXG4gICAgfSkpO1xyXG4gICAgaWYgKG5vZGUubGF5b3V0TW9kZSA9PT0gJ1ZFUlRJQ0FMJykge1xyXG4gICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdmbGV4LWRpcmVjdGlvbicsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnY29sdW1uJyxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgaWYgKG5vZGUuaXRlbVNwYWNpbmcpIHtcclxuICAgICAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdyb3ctZ2FwJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBgJHtub2RlLml0ZW1TcGFjaW5nfXB4YCxcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChub2RlLml0ZW1TcGFjaW5nKSB7XHJcbiAgICAgICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29sdW1uLWdhcCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5pdGVtU3BhY2luZ31weGAsXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5wYWRkaW5nTGVmdCkge1xyXG4gICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWRkaW5nLWxlZnQnLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5wYWRkaW5nTGVmdH1weGAsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucGFkZGluZ1JpZ2h0KSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3BhZGRpbmctcmlnaHQnLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5wYWRkaW5nUmlnaHR9cHhgLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnBhZGRpbmdUb3ApIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFkZGluZy10b3AnLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7bm9kZS5wYWRkaW5nVG9wfXB4YCxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5wYWRkaW5nQm90dG9tKSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3BhZGRpbmctYm90dG9tJyxcclxuICAgICAgICAgICAgdmFsdWU6IGAke25vZGUucGFkZGluZ0JvdHRvbX1weGAsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zKSB7XHJcbiAgICAgICAgcmV0LnB1c2gobmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2p1c3RpZnktY29udGVudCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBwcmltYXJ5QXhpc01hcHBpbmdbbm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXNdLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLmNvdW50ZXJBeGlzQWxpZ25JdGVtcykge1xyXG4gICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhbGlnbi1pdGVtcycsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudGVyQXhpc01hcHBpbmdbbm9kZS5jb3VudGVyQXhpc0FsaWduSXRlbXNdLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLmxheW91dEdyb3cpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnanVzdGlmeS1zZWxmJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdub3JtYWwnLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLmxheW91dEFsaWduID09PSAnU1RSRVRDSCcpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYWxpZ24tc2VsZicsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnbm9ybWFsJyxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbiIsImltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL3R5cGVzL1N0eWxlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb250cyhub2RlKSB7XHJcbiAgICBjb25zdCB0bm9kZSA9IG5vZGU7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIGlmICh0bm9kZS5mb250U2l6ZSAhPT0gZmlnbWEubWl4ZWQpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnZm9udC1zaXplJyxcclxuICAgICAgICAgICAgdmFsdWU6IGAke3Rub2RlLmZvbnRTaXplfXB4YCxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodG5vZGUuZm9udFdlaWdodCAhPT0gZmlnbWEubWl4ZWQpIHtcclxuICAgICAgICByZXQucHVzaChuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnZm9udC13ZWlnaHQnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJycgKyB0bm9kZS5mb250V2VpZ2h0LFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGlmICh0bm9kZS5mb250TmFtZSAhPT0gdW5kZWZpbmVkICYmIHRub2RlLmZvbnROYW1lICE9PSBmaWdtYS5taXhlZCkge1xyXG4gICAgICAgIHJldC5wdXNoKG5ldyBTdHlsZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdmb250LWZhbWlseScsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0bm9kZS5mb250TmFtZS5mYW1pbHksXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldC5sZW5ndGggPyByZXQgOiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUJhY2tncm91bmQgfSBmcm9tIFwiLi9jcmVhdGVCYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJvcmRlclJhZGl1cyB9IGZyb20gXCIuL2NyZWF0ZUJvcmRlclJhZGl1c1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVGbGV4IH0gZnJvbSBcIi4vY3JlYXRlRmxleFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVGb250cyB9IGZyb20gXCIuL2NyZWF0ZUZvbnRzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdHlsZXMobm9kZSkge1xyXG4gICAgY29uc3QgcmV0ID0gW107XHJcbiAgICBjb25zdCBjb2xvciA9IGNyZWF0ZUJhY2tncm91bmQobm9kZSk7XHJcbiAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICByZXQucHVzaChjb2xvcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBiciA9IGNyZWF0ZUJvcmRlclJhZGl1cyhub2RlKTtcclxuICAgIGlmIChicikge1xyXG4gICAgICAgIHJldC5wdXNoKGJyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZsID0gY3JlYXRlRmxleChub2RlKTtcclxuICAgIGlmIChmbCkge1xyXG4gICAgICAgIHJldC5wdXNoKC4uLmZsKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZvbnRzID0gY3JlYXRlRm9udHMobm9kZSk7XHJcbiAgICBpZiAoZm9udHMpIHtcclxuICAgICAgICByZXQucHVzaCguLi5mb250cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbiIsImltcG9ydCB1dGlsbHMgZnJvbSBcIkBsb3dDb2RlL3V0aWxsc1wiO1xyXG5leHBvcnQgY2xhc3MgUHJvcGVydHkge1xyXG4gICAgY29uc3RydWN0b3IodmFsKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHZhbC5sYWJlbDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdXRpbGxzLmNsb25lKHZhbC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdmFsLnR5cGU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFN0eWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHZhbC5uYW1lO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWwudmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZU5vZGVcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9jcmVhdGVTdHlsZXNcIjtcclxuZXhwb3J0IGNsYXNzIEZyYW1lTm9kZU1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gbm9kZS5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJGcmFtZVwiO1xyXG4gICAgICAgIHRoaXMuc3R5bGVzID0gY3JlYXRlU3R5bGVzKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZU5vZGUobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IG5ldyBGcmFtZU5vZGVNb2RlbChub2RlKTtcclxuICAgICAgICAgICAgcmV0LmNoaWxkcmVuID0gKHlpZWxkIFByb21pc2UuYWxsKG5vZGUuY2hpbGRyZW4ubWFwKGNyZWF0ZU5vZGUpKSkuZmlsdGVyKG4gPT4gbik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hlY2tGb3JOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnRlJBTUUnO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi8uLi9jcmVhdGVOb2RlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvY3JlYXRlU3R5bGVzXCI7XHJcbmV4cG9ydCBjbGFzcyBHcm91cE5vZGVNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5vZGUuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbm9kZS5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiR3JvdXBcIjtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhub2RlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSBuZXcgR3JvdXBOb2RlTW9kZWwobm9kZSk7XHJcbiAgICAgICAgICAgIHJldC5jaGlsZHJlbiA9ICh5aWVsZCBQcm9taXNlLmFsbChub2RlLmNoaWxkcmVuLm1hcChjcmVhdGVOb2RlKSkpLmZpbHRlcihuID0+IG4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoZWNrRm9yTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0dST1VQJyAmJiBub2RlLm5hbWUgIT09IFwiVmVjdG9yXCI7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NyZWF0ZVN0eWxlc1wiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgY2xhc3MgSW1hZ2VOb2RlTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBub2RlLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5vZGUubmFtZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBcIkltYWdlXCI7XHJcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBjcmVhdGVTdHlsZXMobm9kZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmV0ID0gbmV3IEltYWdlTm9kZU1vZGVsKG5vZGUpO1xyXG4gICAgICAgICAgICBjb25zdCB1aW50OEFycmF5UG5nID0geWllbGQgbm9kZS5leHBvcnRBc3luYyh7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdQTkcnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0LnByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvcGVydHkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdWludDhBcnJheVBuZyksXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaGVja0Zvck5vZGUobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdSRUNUQU5HTEUnICYmIG5vZGUuZmlsbHMgJiYgbm9kZS5maWxscy5sZW5ndGggJiYgbm9kZS5maWxsc1swXS50eXBlID09PSAnSU1BR0UnO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi8uLi9jcmVhdGVOb2RlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvY3JlYXRlU3R5bGVzXCI7XHJcbmV4cG9ydCBjbGFzcyBJbnN0YW5jZU5vZGVNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5vZGUuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbm9kZS5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiSW5zdGFuY2VcIjtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhub2RlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSBuZXcgSW5zdGFuY2VOb2RlTW9kZWwobm9kZSk7XHJcbiAgICAgICAgICAgIHJldC5jaGlsZHJlbiA9ICh5aWVsZCBQcm9taXNlLmFsbChub2RlLmNoaWxkcmVuLm1hcChjcmVhdGVOb2RlKSkpLmZpbHRlcihuID0+IG4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoZWNrRm9yTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJztcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvY3JlYXRlU3R5bGVzXCI7XHJcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XHJcbmV4cG9ydCBjbGFzcyBUZXh0Tm9kZU1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gbm9kZS5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0XCI7XHJcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBjcmVhdGVTdHlsZXMobm9kZSkubWFwKHN0eWxlID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0eWxlLm5hbWUgPT09ICdiYWNrZ3JvdW5kLWNvbG9yJykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUubmFtZSA9ICdjb2xvcic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IFtcclxuICAgICAgICAgICAgbmV3IFByb3BlcnR5KHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLmNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgaWYgKG5vZGUuaHlwZXJsaW5rICYmIG5vZGUuaHlwZXJsaW5rLnR5cGUgPT09ICdVUkwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcGVydGllcy5wdXNoKG5ldyBQcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZS5oeXBlcmxpbmsudmFsdWUsXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmV0ID0gbmV3IFRleHROb2RlTW9kZWwobm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hlY2tGb3JOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnVEVYVCc7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NyZWF0ZVN0eWxlc1wiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgY2xhc3MgVmVjdG9yTm9kZU1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gbm9kZS5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJWZWN0b3JcIjtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IGNyZWF0ZVN0eWxlcyhub2RlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSBuZXcgVmVjdG9yTm9kZU1vZGVsKG5vZGUpO1xyXG4gICAgICAgICAgICBjb25zdCB1aW50OEFycmF5U3ZnID0geWllbGQgbm9kZS5leHBvcnRBc3luYyh7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdTVkcnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0LnByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvcGVydHkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdWludDhBcnJheVN2ZyksXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaGVja0Zvck5vZGUobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdHUk9VUCcgJiYgbm9kZS5uYW1lID09PSBcIlZlY3RvclwiO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbk1JVCBMaWNlbnNlXHJcblxyXG5Db3B5cmlnaHQgKGMpIDIwMjAgRWdvciBOZXBvbW55YXNjaGloXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5TT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8qXHJcbi8vIFRoaXMgY29uc3RhbnQgY2FuIGFsc28gYmUgY29tcHV0ZWQgd2l0aCB0aGUgZm9sbG93aW5nIGFsZ29yaXRobTpcclxuY29uc3QgYmFzZTY0YWJjID0gW10sXHJcblx0QSA9IFwiQVwiLmNoYXJDb2RlQXQoMCksXHJcblx0YSA9IFwiYVwiLmNoYXJDb2RlQXQoMCksXHJcblx0biA9IFwiMFwiLmNoYXJDb2RlQXQoMCk7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMjY7ICsraSkge1xyXG5cdGJhc2U2NGFiYy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoQSArIGkpKTtcclxufVxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDI2OyArK2kpIHtcclxuXHRiYXNlNjRhYmMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGEgKyBpKSk7XHJcbn1cclxuZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XHJcblx0YmFzZTY0YWJjLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShuICsgaSkpO1xyXG59XHJcbmJhc2U2NGFiYy5wdXNoKFwiK1wiKTtcclxuYmFzZTY0YWJjLnB1c2goXCIvXCIpO1xyXG4qL1xyXG5jb25zdCBiYXNlNjRhYmMgPSBbXHJcblx0XCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCIsIFwiS1wiLCBcIkxcIiwgXCJNXCIsXHJcblx0XCJOXCIsIFwiT1wiLCBcIlBcIiwgXCJRXCIsIFwiUlwiLCBcIlNcIiwgXCJUXCIsIFwiVVwiLCBcIlZcIiwgXCJXXCIsIFwiWFwiLCBcIllcIiwgXCJaXCIsXHJcblx0XCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImlcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCJtXCIsXHJcblx0XCJuXCIsIFwib1wiLCBcInBcIiwgXCJxXCIsIFwiclwiLCBcInNcIiwgXCJ0XCIsIFwidVwiLCBcInZcIiwgXCJ3XCIsIFwieFwiLCBcInlcIiwgXCJ6XCIsXHJcblx0XCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiK1wiLCBcIi9cIlxyXG5dO1xyXG5cclxuLypcclxuLy8gVGhpcyBjb25zdGFudCBjYW4gYWxzbyBiZSBjb21wdXRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgYWxnb3JpdGhtOlxyXG5jb25zdCBsID0gMjU2LCBiYXNlNjRjb2RlcyA9IG5ldyBVaW50OEFycmF5KGwpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGw7ICsraSkge1xyXG5cdGJhc2U2NGNvZGVzW2ldID0gMjU1OyAvLyBpbnZhbGlkIGNoYXJhY3RlclxyXG59XHJcbmJhc2U2NGFiYy5mb3JFYWNoKChjaGFyLCBpbmRleCkgPT4ge1xyXG5cdGJhc2U2NGNvZGVzW2NoYXIuY2hhckNvZGVBdCgwKV0gPSBpbmRleDtcclxufSk7XHJcbmJhc2U2NGNvZGVzW1wiPVwiLmNoYXJDb2RlQXQoMCldID0gMDsgLy8gaWdub3JlZCBhbnl3YXksIHNvIHdlIGp1c3QgbmVlZCB0byBwcmV2ZW50IGFuIGVycm9yXHJcbiovXHJcbmNvbnN0IGJhc2U2NGNvZGVzID0gW1xyXG5cdDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSxcclxuXHQyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsXHJcblx0MjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDYyLCAyNTUsIDI1NSwgMjU1LCA2MyxcclxuXHQ1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCA1OCwgNTksIDYwLCA2MSwgMjU1LCAyNTUsIDI1NSwgMCwgMjU1LCAyNTUsXHJcblx0MjU1LCAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsXHJcblx0MTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSxcclxuXHQyNTUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsXHJcblx0NDEsIDQyLCA0MywgNDQsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxXHJcbl07XHJcblxyXG5mdW5jdGlvbiBnZXRCYXNlNjRDb2RlKGNoYXJDb2RlKSB7XHJcblx0aWYgKGNoYXJDb2RlID49IGJhc2U2NGNvZGVzLmxlbmd0aCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHBhcnNlIGJhc2U2NCBzdHJpbmcuXCIpO1xyXG5cdH1cclxuXHRjb25zdCBjb2RlID0gYmFzZTY0Y29kZXNbY2hhckNvZGVdO1xyXG5cdGlmIChjb2RlID09PSAyNTUpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBiYXNlNjQgc3RyaW5nLlwiKTtcclxuXHR9XHJcblx0cmV0dXJuIGNvZGU7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGJ5dGVzVG9CYXNlNjQoYnl0ZXMpIHtcclxuXHRcdGxldCByZXN1bHQgPSAnJywgaSwgbCA9IGJ5dGVzLmxlbmd0aDtcclxuXHRcdGZvciAoaSA9IDI7IGkgPCBsOyBpICs9IDMpIHtcclxuXHRcdFx0cmVzdWx0ICs9IGJhc2U2NGFiY1tieXRlc1tpIC0gMl0gPj4gMl07XHJcblx0XHRcdHJlc3VsdCArPSBiYXNlNjRhYmNbKChieXRlc1tpIC0gMl0gJiAweDAzKSA8PCA0KSB8IChieXRlc1tpIC0gMV0gPj4gNCldO1xyXG5cdFx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjWygoYnl0ZXNbaSAtIDFdICYgMHgwRikgPDwgMikgfCAoYnl0ZXNbaV0gPj4gNildO1xyXG5cdFx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjW2J5dGVzW2ldICYgMHgzRl07XHJcblx0XHR9XHJcblx0XHRpZiAoaSA9PT0gbCArIDEpIHsgLy8gMSBvY3RldCB5ZXQgdG8gd3JpdGVcclxuXHRcdFx0cmVzdWx0ICs9IGJhc2U2NGFiY1tieXRlc1tpIC0gMl0gPj4gMl07XHJcblx0XHRcdHJlc3VsdCArPSBiYXNlNjRhYmNbKGJ5dGVzW2kgLSAyXSAmIDB4MDMpIDw8IDRdO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI9PVwiO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGkgPT09IGwpIHsgLy8gMiBvY3RldHMgeWV0IHRvIHdyaXRlXHJcblx0XHRcdHJlc3VsdCArPSBiYXNlNjRhYmNbYnl0ZXNbaSAtIDJdID4+IDJdO1xyXG5cdFx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjWygoYnl0ZXNbaSAtIDJdICYgMHgwMykgPDwgNCkgfCAoYnl0ZXNbaSAtIDFdID4+IDQpXTtcclxuXHRcdFx0cmVzdWx0ICs9IGJhc2U2NGFiY1soYnl0ZXNbaSAtIDFdICYgMHgwRikgPDwgMl07XHJcblx0XHRcdHJlc3VsdCArPSBcIj1cIjtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fSxcclxuXHRiYXNlNjRUb0J5dGVzKHN0cikge1xyXG5cdFx0aWYgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBiYXNlNjQgc3RyaW5nLlwiKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGluZGV4ID0gc3RyLmluZGV4T2YoXCI9XCIpO1xyXG5cdFx0aWYgKGluZGV4ICE9PSAtMSAmJiBpbmRleCA8IHN0ci5sZW5ndGggLSAyKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBiYXNlNjQgc3RyaW5nLlwiKTtcclxuXHRcdH1cclxuXHRcdGxldCBtaXNzaW5nT2N0ZXRzID0gc3RyLmVuZHNXaXRoKFwiPT1cIikgPyAyIDogc3RyLmVuZHNXaXRoKFwiPVwiKSA/IDEgOiAwLFxyXG5cdFx0XHRuID0gc3RyLmxlbmd0aCxcclxuXHRcdFx0cmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoMyAqIChuIC8gNCkpLFxyXG5cdFx0XHRidWZmZXI7XHJcblx0XHRmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBuOyBpICs9IDQsIGogKz0gMykge1xyXG5cdFx0XHRidWZmZXIgPVxyXG5cdFx0XHRcdGdldEJhc2U2NENvZGUoc3RyLmNoYXJDb2RlQXQoaSkpIDw8IDE4IHxcclxuXHRcdFx0XHRnZXRCYXNlNjRDb2RlKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSkgPDwgMTIgfFxyXG5cdFx0XHRcdGdldEJhc2U2NENvZGUoc3RyLmNoYXJDb2RlQXQoaSArIDIpKSA8PCA2IHxcclxuXHRcdFx0XHRnZXRCYXNlNjRDb2RlKHN0ci5jaGFyQ29kZUF0KGkgKyAzKSk7XHJcblx0XHRcdHJlc3VsdFtqXSA9IGJ1ZmZlciA+PiAxNjtcclxuXHRcdFx0cmVzdWx0W2ogKyAxXSA9IChidWZmZXIgPj4gOCkgJiAweEZGO1xyXG5cdFx0XHRyZXN1bHRbaiArIDJdID0gYnVmZmVyICYgMHhGRjtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuc3ViYXJyYXkoMCwgcmVzdWx0Lmxlbmd0aCAtIG1pc3NpbmdPY3RldHMpO1xyXG5cdH0sXHJcblx0YmFzZTY0ZW5jb2RlKHN0ciwgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpKSB7XHJcblx0XHRyZXR1cm4gYnl0ZXNUb0Jhc2U2NChlbmNvZGVyLmVuY29kZShzdHIpKTtcclxuXHR9LFxyXG5cdGJhc2U2NGRlY29kZShzdHIsIGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKSkge1xyXG5cdFx0cmV0dXJuIGRlY29kZXIuZGVjb2RlKGJhc2U2NFRvQnl0ZXMoc3RyKSk7XHJcblx0fSxcclxuXHR0b1VURjhBcnJheShzdHIgPSAnJykge1xyXG5cdFx0dmFyIGRhdGEgPSBbXTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXsgIFxyXG5cdFx0XHRkYXRhLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG59IiwiY29uc3QgYmFzZTY0ID0gcmVxdWlyZSgnLi9iYXNlNjQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBjbG9uZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsLnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZVJHQih7IHIsIGcsIGIgfSkge1xuICAgICAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihyICogMjU1KX0sICR7TWF0aC5mbG9vcihnICogMjU1KX0sICR7TWF0aC5mbG9vcihiICogMjU1KX1gO1xuICAgIH0sXG4gICAgY3JlYXRlUXVhZHJpcGxldCgpIHtcbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmQgKiAoMTYgKiogNCkpLnRvU3RyaW5nKDE2KTtcbiAgICB9LFxuICAgIGNyZWF0ZUdVSUQoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX0ke3RoaXMuY3JlYXRlUXVhZHJpcGxldCgpfS0ke3RoaXMuY3JlYXRlUXVhZHJpcGxldCgpfS0ke3RoaXMuY3JlYXRlUXVhZHJpcGxldCgpfS0ke3RoaXMuY3JlYXRlUXVhZHJpcGxldCgpfS0ke3RoaXMuY3JlYXRlUXVhZHJpcGxldCgpfSR7dGhpcy5jcmVhdGVRdWFkcmlwbGV0KCl9JHt0aGlzLmNyZWF0ZVF1YWRyaXBsZXQoKX1gO1xuICAgIH0sXG59LCBiYXNlNjQpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuL2NyZWF0ZU5vZGVcIjtcclxuaW1wb3J0IHsgUG9zdE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlcy9Qb3N0TWVzc2FnZVwiO1xyXG5jb25zdCBzZWxlY3Rpb25DaGFuZ2UgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XHJcbiAgICBsZXQgbWVzc2FnZSA9IG5ldyBQb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgdHlwZTogJ3NlbGVjdGlvbkNoYW5nZScsXHJcbiAgICAgICAgcGF5bG9hZDogbnVsbCxcclxuICAgIH0pO1xyXG4gICAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gc2VsZWN0aW9uc1swXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnBheWxvYWQgPSB5aWVsZCBjcmVhdGVOb2RlKHNlbGVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChfYSkgeyB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgbm9kZTonLCBtZXNzYWdlLnBheWxvYWQpO1xyXG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UobWVzc2FnZSk7XHJcbn0pO1xyXG5maWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCBzZWxlY3Rpb25DaGFuZ2UpO1xyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHtcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBoZWlnaHQ6IDYwMCxcclxuICAgIHRpdGxlOiBcIkxvd0NvZGVcIlxyXG59KTtcclxuc2VsZWN0aW9uQ2hhbmdlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==