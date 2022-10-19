import selectors from "../../selectors/index.js";
import calcClassName from "../../utills/calcClassName.js";

const generateClassContent = (node) => node.styles.map(style => `${style.name}: ${style.value}`).join(';');

const generateClasses = (nodeList) => nodeList.map(node => `.${calcClassName(node)}{${generateClassContent(node)}}`).join('');

const generateStyles = (frame) => {
    return `<style>${generateClasses(selectors.selectAllNodesWithStyles(frame))}</style>`;
};

export default generateStyles;