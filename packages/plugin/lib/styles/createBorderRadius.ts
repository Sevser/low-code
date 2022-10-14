import { Style } from "../types/Style";

export function createBorderRadius(node): Style | null {
    if (typeof node.cornerRadius === "number" && node.cornerRadius > 0) {
        return new Style({
            name: 'border-radius',
            value: `${node.cornerRadius}px`
        })
    }
    return null;
}