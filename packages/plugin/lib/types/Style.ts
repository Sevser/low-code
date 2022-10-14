import { CSSProperty, IStyle } from "../Itypes/IStyle";

export class Style implements IStyle {
    public name: CSSProperty;
    public value: string;
    constructor(val: IStyle) {
        this.name = val.name;
        this.value = val.value;
    }
}