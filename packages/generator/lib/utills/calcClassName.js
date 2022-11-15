const calcClassName = (el) => {
    if (el.name && el.name.length < 20) {
        return el.name.concat('_', el.id.toString()).trim().replaceAll(/\W/g, '_').toLowerCase();
    }
    return 'cl'.concat('_', el.id.toString()).trim().replaceAll(/\W/g, '_').toLowerCase();
};

export default calcClassName;