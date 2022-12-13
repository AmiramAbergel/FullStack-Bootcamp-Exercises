import { Router } from 'express';
import { addNewProduct } from '../controllers/ProductController.js';

export const productsRouter = Router();
// all routes in here are starting with localhost:4000/api/v1/products
productsRouter.route(`/`).get().post(addNewProduct); //get all products and add new product

// productsRouter.route(`/:id`).get().patch().delete(); // read specific product | update product | delete product
// productsRouter.route(`/credit/:id`).patch();
// productsRouter.route(`/cash/:id`).patch();
// productsRouter.route(`/withdraw/:id`).patch();
