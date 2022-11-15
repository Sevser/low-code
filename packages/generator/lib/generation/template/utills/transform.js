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
    if (el.options.attrs) {
        const attrList = Reflect.ownKeys(el.options.attrs);
        attributes += ' ' + attrList.map(key => {
            if (typeof el.options.attrs[key] === Boolean) {
                return key;
            }
            return `${key}="${el.options.attrs[key]}"`;
        }).join(' ');
    }
    if (el.children.length) {
        return `<${el.tag} ${attributes}>${el.children.map(transformToTemplate).join('')}</${el.tag}>`;
    }
    return `<${el.tag} ${attributes} />`;
};

export default transformToTemplate;