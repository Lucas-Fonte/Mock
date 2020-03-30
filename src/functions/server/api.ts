import * as dotenv from 'dotenv';
import {
  Handler,
} from 'aws-lambda';

import mongoose from 'mongoose';
import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';
import routes from '../routes';

dotenv.config();

const API_URL = String(process.env.API_URL);
const DB_MONGO_STRING = String(process.env.DB_MONGO_STRING);

const app = express();

mongoose.connect(DB_MONGO_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(bodyParser.json());
app.use(API_URL, routes);

const handler: Handler = serverless(app);

export { handler, app };
