import { createNode } from "../../createNode";
import { INode } from "../../Itypes/INode";
import { Property } from "../Property";
import { Style } from "../Style";

export class FrameNodeHandler implements INode {
    public id: string;
    public name: string;
    public properties: Property[];
    public styles: Style[];
    public children: INode[];
    constructor(node: FrameNode) {
        this.id = node.id;
        this.name = node.name;
        this.children = node.children.map(createNode).filter(n => n);
    }
    static checkForNode(node) {
        return node.type === 'FRAME';
    }
}