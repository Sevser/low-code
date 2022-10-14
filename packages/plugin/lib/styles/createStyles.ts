import { IStyle } from "../Itypes/IStyle";
import { createBackground } from "./createBackground";
import { createBorderRadius } from "./createBorderRadius";
import { createFlex } from "./createFlex";


export function createStyles(node): IStyle[] {
    const ret = [];
    const color = createBackground(node);
    if (color) {
        ret.push(color);
    }
    const br = createBorderRadius(node);
    if (br) {
        ret.push(br);
    }
    const fl = createFlex(node);
    if (fl) {
        ret.push(...fl);
    }
    return ret;
}