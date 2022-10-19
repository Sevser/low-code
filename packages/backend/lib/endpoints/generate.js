import utills from "@lowCode/utills";
import generator from "@lowCode/generator";
import vsr from 'vue-server-renderer';
import Vue from 'vue';

const renderer = vsr.createRenderer();

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
        let model = savedModels[guid];
        model = generator.prepareFrame(model);
        const context = {
            title: 'vue ssr',
            metas: `
                <meta name="keyword" content="vue,ssr">
                <meta name="description" content="vue srr demo">
            `,
        };

        const app = new Vue({
            template: generator.generateTemplateSSR(model),
        });
    
        renderer
            .renderToString(app, context, (err, html) => {
                if (err) {
                    res.status(500).end('Internal Server Error')
                    return;
                }
                res.send(`
                <!DOCTYPE html>
                <html lang="en">
                  <head><title>Hello</title></head>
                  <body>${html}</body>
                  ${generator.generateStyles(model)}
                </html>
              `);
            });

    });
};