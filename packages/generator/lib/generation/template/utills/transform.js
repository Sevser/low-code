const transformToTemplate = (el) => {
    if (el === null) {
        return '';
    }
    let attributes = '';
    if (el.options.class) {
        
    }
    return `<${el.tag} ${attributes}>${el.children.map(transformToTemplate)}</${el.tag}>`;
};

export default transformToTemplate;