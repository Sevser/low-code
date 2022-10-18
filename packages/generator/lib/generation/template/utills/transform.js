const transformToTemplate = (el) => {
    if (el === null) {
        return '';
    }
    let attributes = '';
    if (el.options.class) {
        const classList = Reflect.ownKeys(el.options.class);
        attributes += `class="${classList.join(' ')}"`;
    }
    return `<${el.tag} ${attributes}>${el.children.map(transformToTemplate)}</${el.tag}>`;
};

export default transformToTemplate;