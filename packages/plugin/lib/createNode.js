"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNode = void 0;
const frameNode_1 = require("./types/nodes/frameNode");
const textNode_1 = require("./types/nodes/textNode");
function createNode(node) {
    if (frameNode_1.FrameNodeModel.checkForNode(node)) {
        return new frameNode_1.FrameNodeModel(node);
    }
    if (textNode_1.TextNodeModel.checkForNode(node)) {
        return new textNode_1.TextNodeModel(node);
    }
    return null;
}
exports.createNode = createNode;
;
