import { IProperty, PropertyType } from "../Itypes/INode";
import utills from "@lowCode/utills";

export class Property implements IProperty {
    public label: string;
    public value: any;
    public type: PropertyType;
    constructor(val: IProperty) {
        this.label = val.label;
        this.value = utills.clone(val.value);
        this.type = val.type;
    }
}