import prepareFrame from "./preparations/index.js";
import generateScript from "./script/index.js";
import generateStyles from "./styles/index.js";
import generateTemplate from "./template/index.js";

const generateSFC = (frame) => {
    const pFrame = prepareFrame(frame);
    return `${generateTemplate(pFrame)}${generateScript(pFrame)}${generateStyles(pFrame)}`;
}

export default generateSFC;