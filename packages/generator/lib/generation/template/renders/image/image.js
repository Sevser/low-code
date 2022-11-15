import calcClassName from "../../../../utills/calcClassName.js";
import base64 from '@lowCode/utills';

const renderImage = (node) => {
    const content = node.properties && node.properties.find(item => item.label === 'content' && item.type === 'custom') || '';
    return {
        tag: 'img',
        options: {
            class: {
                [calcClassName(node)]: true,
            },
            attrs: {
                alt: node.name,
                src: 'data:image/png;base64,' + base64.bytesToBase64(base64.toUTF8Array(content.value)),
            },
        },
        children: [],
    }
};

export default renderImage;