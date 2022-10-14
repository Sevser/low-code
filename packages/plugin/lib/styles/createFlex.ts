import { Style } from "../types/Style";

export function createFlex(node): Style[] | null {
    if (node.layoutMode === 'NONE') {
        return null;
    }
    const ret = [];
    ret.push(new Style({
        name: 'display',
        value: 'flex',
    }));
    if (node.layoutMode === 'VERTICAL') {
        ret.push(new Style({
            name: 'flex-direction',
            value: 'column',
        }));
        if (node.itemSpacing) {
            ret.push(new Style({
                name: 'row-gap',
                value: `${node.itemSpacing}px`,
            }));
        }
    } else {
        if (node.itemSpacing) {
            ret.push(new Style({
                name: 'column-gap',
                value: `${node.itemSpacing}px`,
            }));
        }
    }
    if (node.paddingLeft) {
        ret.push(new Style({
            name: 'padding-left',
            value: `${node.paddingLeft}px`,
        }));
    }
    if (node.paddingRight) {
        ret.push(new Style({
            name: 'padding-right',
            value: `${node.paddingRight}px`,
        }));
    }
    if (node.paddingTop) {
        ret.push(new Style({
            name: 'padding-top',
            value: `${node.paddingTop}px`,
        }));
    }
    if (node.paddingBottom) {
        ret.push(new Style({
            name: 'padding-bottom',
            value: `${node.paddingBottom}px`,
        }));
    }
    return ret;
}