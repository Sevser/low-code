import utills from "@lowCode/utills";
import generator from "@lowCode/generator";
import fs from 'fs/promises';

const savedModels = {};

export default (app) => {
    app.post('/create', (req, res) => {
        const guid = utills.createGUID();
        savedModels[guid] = req.body.data.model;
        res.send({
            data: {
                guid: guid,
            },
        })
    });

    app.get('/viewModel', async (req, res) => {
        const guid = req.query.guid;
        let html = await fs.readFile('lib/public/index.html');
        html = String.fromCharCode.apply(null, html);
        html = html.replace('${component}', generator.generateSFA(savedModels[guid]));
        res.send(html);
    });
};