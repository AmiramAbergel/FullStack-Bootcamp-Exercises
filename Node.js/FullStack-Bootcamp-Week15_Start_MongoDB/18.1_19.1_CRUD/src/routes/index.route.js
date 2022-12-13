import { Router } from 'express';
import { productsRouter } from './products.route.js';

const indexRoute = Router();

indexRoute.use('/product', productsRouter);

export default indexRoute;
