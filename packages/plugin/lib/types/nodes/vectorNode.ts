import { INode, NodeHandlerType } from "../../Itypes/INode";
import { createStyles } from "../../styles/createStyles";
import { Property } from "../Property";
import { Style } from "../Style";

export class VectorNodeModel implements INode {
    public id: string;
    public name: string;
    public type: NodeHandlerType;
    public properties: Property[];
    public styles: Style[];
    constructor(node: VectorNode) {
        this.id = node.id;
        this.name = node.name;
        this.type = "Vector";
        this.styles = createStyles(node);
    }
    
    static async createNode(node: VectorNode) {
        const ret = new VectorNodeModel(node);
        const uint8ArraySvg = await node.exportAsync({
            format: 'SVG',
        });
        ret.properties = [
            new Property({
                label: 'content',
                type: 'custom',
                value: String.fromCharCode.apply(null, uint8ArraySvg),
            }),
        ];
        return ret;
    }

    static checkForNode(node) {
        return node.type === 'GROUP' && node.name === "Vector";
    }
}