import fs from 'fs/promises';
import lib from '../lib/index.js';

const clearDist = async () => {
    await fs.rm('./data/dist', { recursive: true, force: true });
    await fs.mkdir('./data/dist');
};

const getFileList = async () => {
    const path = './data/models';
    const files = await fs.readdir(path);
    return files;
}
const generate = async () => {
    const files = await getFileList();
    files.forEach(async (file) => {
        const frameModel = await import(`./models/${file}`);
        const fileContent = lib.generateSFA(frameModel.default);
        const fileName = file.split('.')[0];
        fs.writeFile(`./data/dist/${fileName}.vue`, fileContent);
    });
};

const main = async () => {
    await clearDist();
    await generate();
}

main();