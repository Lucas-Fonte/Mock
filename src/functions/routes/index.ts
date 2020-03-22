import express from 'express';
import HelloController from '../controllers/HelloController';

const routes = express.Router();

routes.get('/hello', HelloController.index);

export default routes;
