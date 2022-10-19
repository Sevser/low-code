module.exports = {
    clone(value) {
        if (typeof value === 'object') {
            if (value) {
                return JSON.parse(JSON.stringify(val.value));
            }
        } else {
            return value;
        }
    },
    createRGB({ r, g, b }) {
        return `${Math.floor(r * 255)}, ${Math.floor(g * 255)}, ${Math.floor(b * 255)}`;
    },
    createQuadriplet() {
        const rand = Math.random();
        return Math.floor(rand * (16 ** 4)).toString(16);
    },
    createGUID() {
        return `${this.createQuadriplet()}${this.createQuadriplet()}-${this.createQuadriplet()}-${this.createQuadriplet()}-${this.createQuadriplet()}-${this.createQuadriplet()}${this.createQuadriplet()}${this.createQuadriplet()}`;
    }
}
