import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default (app) => {
    app.use(bodyParser.json({limit: 1048096, extended: true}));
    app.use(bodyParser.urlencoded({limit: 1048096, extended: true}));
    app.use(express.json()); 
    app.use(cors());
    app.use('/static', express.static('lib/public'));
};