import calcClassName from "../../../../utills/calcClassName.js";

const renderText = (node) => {
    const content = node.properties && node.properties.find(item => item.label === 'content' && item.type === 'custom') || '';
    const link = node.properties && node.properties.find(item => item.label === 'link' && item.type === 'custom') || '';
    const isLink = link.value && link.value.length > 0;
    return {
        tag: isLink ? 'a' : 'pre',
        options: {
            class: {
                [calcClassName(node)]: true,
            },
            attrs: isLink ? {
                target: '_blank',
                href: link.value,
            } : {},
        },
        children: [
            content.value,
        ],
    }
};

export default renderText;