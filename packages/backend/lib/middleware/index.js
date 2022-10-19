import express from 'express';
import path from 'path';

export default (app) => {
    app.use(express.json()); 
    app.use('/static', express.static(path.join(__dirname, 'lib/public')));
};