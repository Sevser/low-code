import calcClassName from "../../../../utills/calcClassName.js";
import renderTemplate from "../index.js";

const renderFrame = (node) => {
    return {
        tag: 'div',
        options: {
            class: {
                [calcClassName(node)]: true,
            },
        },
        children: node.children.map(renderTemplate),
    };
};

export default renderFrame;