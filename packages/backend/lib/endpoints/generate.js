import utills from "@lowCode/utills";

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

    app.get('/viewModel', (req, res) => {
        const guid = req.query.guid;
        res.send({
            data: {
                guid: guid,
                model:  savedModels[guid],
            },
        })
    });
};