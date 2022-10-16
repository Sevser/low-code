const calcClassName = (el) => {
    return el.name.concat('_', el.id.toString()).trim().replaceAll(/\W/g, '_');
};

export default calcClassName;