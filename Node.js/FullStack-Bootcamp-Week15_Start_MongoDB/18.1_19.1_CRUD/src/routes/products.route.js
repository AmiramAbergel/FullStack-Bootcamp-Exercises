import { Router } from 'express';
import {
    addNewProduct,
    getAllProducts,
    getProduct,
    getProductActive,
    getProductRange,
    updateActiveDiscount,
} from '../controllers/ProductController.js';

export const productsRouter = Router();
// all routes in here are starting with localhost:4000/api/v1/products
productsRouter.route(`/`).get(getAllProducts).post(addNewProduct); //get all products and add new product
productsRouter.route(`/range`).get(getProductRange);
productsRouter.route(`/active`).get(getProductActive);

productsRouter
    .route(`/:id`)
    .get(getProduct)
    .patch(updateActiveDiscount)
    .delete(); // read specific product | update product | delete product

// productsRouter.route(`/credit/:id`).patch();
// productsRouter.route(`/cash/:id`).patch();
// productsRouter.route(`/withdraw/:id`).patch();
