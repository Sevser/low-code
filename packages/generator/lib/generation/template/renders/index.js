import renderFrame from "./frame/index.js";

const renderTemplate = (node) => {
    if(node.type === 'Frame') {
        return renderFrame(node);
    }
    return null;
};

export default renderTemplate;