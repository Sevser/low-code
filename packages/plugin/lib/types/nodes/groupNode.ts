import { createNode } from "../../createNode";
import { INode, NodeHandlerType } from "../../Itypes/INode";
import { createStyles } from "../../styles/createStyles";
import { Property } from "../Property";
import { Style } from "../Style";

export class GroupNodeModel implements INode {
    public id: string;
    public type: NodeHandlerType;
    public name: string;
    public properties: Property[];
    public styles: Style[];
    public children: INode[];
    constructor(node: FrameNode) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Group";
        this.styles = createStyles(node);
    }
    
    static async createNode(node: FrameNode) {
        const ret = new GroupNodeModel(node);
        ret.children = (await Promise.all(node.children.map(createNode))).filter(n => n);
        return ret;
    }

    static checkForNode(node) {
        return node.type === 'GROUP' && node.name !== "Vector";
    }
}