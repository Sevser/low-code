const transformToTemplate = (el) => {
    if (el === null || el === undefined) {
        return '';
    }
    if (typeof el === 'string') {
        return el;
    }
    let attributes = '';
    if (el.options.class) {
        const classList = Reflect.ownKeys(el.options.class);
        attributes += `class="${classList.join(' ')}"`;
    }
    return `<${el.tag} ${attributes}>${el.children.map(transformToTemplate).join('')}</${el.tag}>`;
};

export default transformToTemplate;