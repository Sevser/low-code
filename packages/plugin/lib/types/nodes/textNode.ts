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
    constructor(node: TextNode) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Text";
        this.styles = createStyles(node).map(style => {
            if (style.name === 'background-color') {
                style.name = 'color';
            }
            return style;
        });
        this.properties = [
            new Property({
                label: 'content',
                type: 'custom',
                value: node.characters,
            }),
        ];
        if (node.hyperlink && (node.hyperlink as HyperlinkTarget).type === 'URL') {
            this.properties.push(new Property({
                label: 'link',
                type: 'custom',
                value: (node.hyperlink as HyperlinkTarget).value,
            }));
        }
    }
    
    static async createNode(node: TextNode) {
        const ret = new TextNodeModel(node);
        return ret;
    }

    static checkForNode(node) {
        return node.type === 'TEXT';
    }
}