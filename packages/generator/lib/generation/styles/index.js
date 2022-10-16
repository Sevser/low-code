import selectors from "../../selectors/index.js";
import calcClassName from "../../utills/calcClassName.js";


const generateClasses = (nodeList) => nodeList.map(node => `.${calcClassName(node)}{${node.styles.map(style => `${style.name}: ${style.value}`).join(';')}}`).join('');

const generateStyles = (frame) => {
    return `<style>${generateClasses(selectors.selectAllNodesWithStyles(frame))}</style>`;
};

export default generateStyles;