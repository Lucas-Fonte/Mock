import * as dotenv from 'dotenv';
import {
  Handler,
} from 'aws-lambda';

import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';
import routes from '../routes';

dotenv.config();
const app = express();

const API_URL = String(process.env.API_URL);

app.use(bodyParser.json());
app.use(API_URL, routes);

const handler: Handler = serverless(app);

export { handler, app };
