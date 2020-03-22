import {
  Handler,
} from 'aws-lambda';

import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';
import routes from '../routes';

const app = express();

app.use(bodyParser.json());
app.use('/.netlify/functions/api', routes);

const handler: Handler = serverless(app);

export { handler, app };
