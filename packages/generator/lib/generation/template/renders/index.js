import renderFrame from "./frame/index.js";
import renderImage from "./image/image.js";
import renderText from "./text/index.js";
import renderVector from "./vector/index.js";

const renderTemplate = (node) => {
    if(node.type === 'Frame') {
        return renderFrame(node);
    }
    if(node.type === 'Text') {
        return renderText(node);
    }
    if(node.type === 'Vector') {
        return renderVector(node);
    }
    if(node.type === 'Image') {
        return renderImage(node);
    }
    return null;
};

export default renderTemplate;