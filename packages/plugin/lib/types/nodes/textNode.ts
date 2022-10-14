import { INode, NodeHandlerType } from "../../Itypes/INode";
import { createStyles } from "../../styles/createStyles";
import { Property } from "../Property";
import { Style } from "../Style";

export class TextNodeModel implements INode {
    public id: string;
    public name: string;
    public type: NodeHandlerType;
    public properties: Property[];
    public styles: Style[];
    constructor(node: FrameNode) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Text";
        this.styles = createStyles(node).map(style => {
            if (style.name === 'background-color') {
                style.name = 'color';
            }
            return style;
        });
    }
    static checkForNode(node) {
        return node.type === 'TEXT';
    }
}