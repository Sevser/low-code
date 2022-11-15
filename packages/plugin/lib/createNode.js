"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNode = void 0;
const frameNode_1 = require("./types/nodes/frameNode");
const imageNode_1 = require("./types/nodes/imageNode");
const textNode_1 = require("./types/nodes/textNode");
const vectorNode_1 = require("./types/nodes/vectorNode");
function createNode(node) {
    return __awaiter(this, void 0, void 0, function* () {
        if (frameNode_1.FrameNodeModel.checkForNode(node)) {
            return yield frameNode_1.FrameNodeModel.createNode(node);
        }
        if (textNode_1.TextNodeModel.checkForNode(node)) {
            return yield textNode_1.TextNodeModel.createNode(node);
        }
        if (vectorNode_1.VectorNodeModel.checkForNode(node)) {
            return yield vectorNode_1.VectorNodeModel.createNode(node);
        }
        if (imageNode_1.ImageNodeModel.checkForNode(node)) {
            return yield imageNode_1.ImageNodeModel.createNode(node);
        }
        return null;
    });
}
exports.createNode = createNode;
;
