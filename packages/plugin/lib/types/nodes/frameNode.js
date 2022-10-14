"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameNodeModel = void 0;
const createNode_1 = require("../../createNode");
const createStyles_1 = require("../../styles/createStyles");
class FrameNodeModel {
    constructor(node) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Frame";
        this.children = node.children.map(createNode_1.createNode).filter(n => n);
        this.styles = (0, createStyles_1.createStyles)(node);
    }
    static checkForNode(node) {
        return node.type === 'FRAME';
    }
}
exports.FrameNodeModel = FrameNodeModel;
