import express from 'express';
import cors from 'cors';

export default (app) => {
    app.use(express.json()); 
    app.use(cors());
    app.use('/static', express.static('lib/public'));
};