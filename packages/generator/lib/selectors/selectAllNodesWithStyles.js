const selectAllNodesWithStyles = (node) => {
    if (node.children && node.children.length) {
        return node.children.reduce((acc, n) => {
            acc.push(...selectAllNodesWithStyles(n));
            return acc;
        }, node.styles && node.styles.length ? [node] : []);
    }
    if (node.styles && node.styles.length) {
        return [node];
    }
    return [];
};

export default selectAllNodesWithStyles;