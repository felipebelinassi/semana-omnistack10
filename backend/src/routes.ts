import { Router } from 'express';
import devController from './controllers/devController';
import searchController from './controllers/searchController';

const routes = Router();

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);

routes.get('/search', searchController.index);

export default routes;
