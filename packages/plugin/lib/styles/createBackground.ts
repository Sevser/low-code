import utills from '@lowCode/utills';
import { IStyle } from "../Itypes/IStyle";
import { Style } from "../types/Style";

export function createBackground(node): Style | null {
    if (node.fills && node.fills.length) {
        return node.fills.reduce((acc, paint: (Paint)): IStyle | null => {
            if (paint.type === "SOLID") {
                return new Style({
                    name: 'background-color',
                    value: `rgb(${utills.createRGB(paint.color)})`
                })
            }
            return acc;
        }, null);
    }
    return null;
}