import renderTemplate from "../index.js";
import calcClassName from "../../../../utills/calcClassName.js";

const renderText = (node) => {
    return {
        tag: 'div',
        options: {
            class: {
                [calcClassName(node)]: true,
            },
        },
        children: node.children && node.children.length ? node.children.map(renderTemplate) : [],
    }
};

export default renderText;