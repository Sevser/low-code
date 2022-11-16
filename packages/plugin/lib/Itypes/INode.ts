import { IStyle } from "./IStyle";

export type PropertyType = "variant" | "custom";
export type NodeHandlerType = "Frame" | "Text" | "Vector" | "Image" | "Instance" | "Group";

export interface IProperty {
    label: string,
    value: any,
    type: PropertyType,
};

export interface INode {
    id: string;
    name: string;
    type: NodeHandlerType;
    properties: IProperty[],
    styles: IStyle[],
    children?: INode[],
};