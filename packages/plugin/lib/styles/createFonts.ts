import { Style } from "../types/Style";

export function createFonts(node): Style[] | null {
    const tnode = node as TextNode;
    const ret = [];
    if (tnode.fontSize !== figma.mixed) {
        ret.push(new Style({
            name: 'font-size',
            value: `${tnode.fontSize}px`,
        }))
    }
    if (tnode.fontWeight !== figma.mixed) {
        ret.push(new Style({
            name: 'font-weight',
            value: ''+tnode.fontWeight,
        }))
    }
    return ret.length ? ret : null;
}