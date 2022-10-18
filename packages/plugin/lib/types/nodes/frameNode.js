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
exports.FrameNodeModel = void 0;
const createNode_1 = require("../../createNode");
const createStyles_1 = require("../../styles/createStyles");
class FrameNodeModel {
    constructor(node) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Frame";
        this.styles = (0, createStyles_1.createStyles)(node);
    }
    static createNode(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = new FrameNodeModel(node);
            ret.children = (yield Promise.all(node.children.map(createNode_1.createNode))).filter(n => n);
            return ret;
        });
    }
    static checkForNode(node) {
        return node.type === 'FRAME';
    }
}
exports.FrameNodeModel = FrameNodeModel;
