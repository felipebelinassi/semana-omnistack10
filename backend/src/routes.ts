import { Router } from 'express';
import devController from './controllers/dev';
import searchController from './controllers/search';

const routes = Router();

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);

routes.get('/search', searchController.index);

export default routes;
