import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import generateEndpoints from './endpoints/generate.js';
import middleware from './middleware/index.js';

const app = express();

middleware(app);
generateEndpoints(app);

app.listen(process.env.port);