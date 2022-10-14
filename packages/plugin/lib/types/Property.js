"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const utills_1 = require("@lowCode/utills");
class Property {
    constructor(val) {
        this.label = val.label;
        this.value = utills_1.default.clone(val.value);
        this.type = val.type;
    }
}
exports.Property = Property;
