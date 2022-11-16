import selectors from "../../selectors/index.js";
import calcClassName from "../../utills/calcClassName.js";

const createDefaultStyles = () => `
pre {
    margin: 0;
}
`;

const generateClassContent = (node) => node.styles.map(style => `${style.name}: ${style.value}`).join(';');

const generateClasses = (nodeList) => nodeList.map(node => `.${calcClassName(node)}{${generateClassContent(node)}}`).join('');

const createImportFonts = (nodeList) => {
    return nodeList.reduce((acc, node) => {
        const fonts = node.styles.filter(style => style.name === 'font-family');
        if (fonts.length) {
            acc.push(...fonts.map(font => {
                return `@import url(https://fonts.googleapis.com/css?family=${font.value.replaceAll(/\s/g, '+')});`;
            }));
        }
        return acc;
    }, []).join(' ');
}

const generateStyles = (frame) => {
    const nodesWithStyles = selectors.selectAllNodesWithStyles(frame);
    return `<style>${createDefaultStyles()}${createImportFonts(nodesWithStyles)}${generateClasses(nodesWithStyles)}</style>`;
};

export default generateStyles;