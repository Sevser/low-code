import { createNode } from "../../createNode";
export class FrameNodeHandler {
    constructor(node) {
        this.id = node.id;
        this.name = node.name;
        this.children = node.children.map(createNode).filter(n => n);
    }
    static checkForNode(node) {
        return node.type === 'FRAME';
    }
}
