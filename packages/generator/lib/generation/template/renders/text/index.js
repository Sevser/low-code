import renderTemplate from "../index.js";
import calcClassName from "../../../../utills/calcClassName.js";

const renderText = (node) => {
    const content = node.properties && node.properties.find(item => item.label === 'content' && item.type === 'custom') || '';
    return {
        tag: 'div',
        options: {
            class: {
                [calcClassName(node)]: true,
            },
        },
        children: [
            content.value,
        ],
    }
};

export default renderText;