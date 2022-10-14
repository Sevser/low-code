import { IStyle } from "./IStyle";

export type PropertyType = "variant" | "json";

export interface IProperty {
    label: string,
    value: any,
    type: PropertyType,
};

export interface INode {
    id: string;
    name: string;
    properties: IProperty[],
    styles: IStyle[],
    children: INode[],
};