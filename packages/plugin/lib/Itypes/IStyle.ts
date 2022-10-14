export type CSSProperty = "padding" | "background-color" | "font-weight" | "border-radius" | "color" | "display" | "flex-direction" | "padding-left" | "padding-right" | "padding-bottom" | "padding-top" | "column-gap" | "row-gap";

export interface IStyle {
    name: CSSProperty;
    value: string,
};