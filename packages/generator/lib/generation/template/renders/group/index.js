import calcClassName from "../../../../utills/calcClassName.js";
import renderTemplate from "../index.js";

const renderGroup = (node) => {
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

export default renderGroup;