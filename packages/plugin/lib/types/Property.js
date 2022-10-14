import utills from "@lowCode/utills";
export class Property {
    constructor(val) {
        this.label = val.label;
        this.value = utills.clone(val.value);
        this.type = val.type;
    }
}
