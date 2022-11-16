import renderFrame from "./frame/index.js";
import renderGroup from "./group/index.js";
import renderImage from "./image/image.js";
import renderInstance from "./instance/index.js";
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
    if(node.type === 'Instance') {
        return renderInstance(node);
    }
    if(node.type === 'Group') {
        return renderGroup(node);
    }
    return null;
};

export default renderTemplate;