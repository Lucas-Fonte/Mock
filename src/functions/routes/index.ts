import express from 'express';
import HelloController from '../controllers/HelloController';
import MessageController from '../controllers/MessageController';

const routes = express.Router();

routes.get('/hello', HelloController.index);
routes.get('/email', MessageController.index);
routes.post('/email', MessageController.store);

export default routes;
