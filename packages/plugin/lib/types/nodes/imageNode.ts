import { INode, NodeHandlerType } from "../../Itypes/INode";
import { createStyles } from "../../styles/createStyles";
import { Property } from "../Property";
import { Style } from "../Style";

export class ImageNodeModel implements INode {
    public id: string;
    public name: string;
    public type: NodeHandlerType;
    public properties: Property[];
    public styles: Style[];
    constructor(node: VectorNode) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Image";
        this.styles = createStyles(node);
    }
    
    static async createNode(node: VectorNode) {
        const ret = new ImageNodeModel(node);
        const uint8ArrayPng = await node.exportAsync({
            format: 'PNG',
        });
        ret.properties = [
            new Property({
                label: 'content',
                type: 'custom',
                value: String.fromCharCode.apply(null, uint8ArrayPng),
            }),
        ];
        return ret;
    }

    static checkForNode(node) {
        return node.type === 'RECTANGLE' && node.fills && node.fills.length && node.fills[0].type === 'IMAGE';
    }
}