import generateSFA from './generation/index.js';
import prepareFrame from './generation/preparations/index.js';
import generateScript from './generation/script/index.js';
import generateStyles from './generation/styles/index.js';
import generateTemplate from './generation/template/index.js';
import { generateTemplateSSR } from './generation/template/index.js';

export default {
    generateSFA,
    prepareFrame,
    generateScript,
    generateTemplate,
    generateTemplateSSR,
    generateStyles
}
