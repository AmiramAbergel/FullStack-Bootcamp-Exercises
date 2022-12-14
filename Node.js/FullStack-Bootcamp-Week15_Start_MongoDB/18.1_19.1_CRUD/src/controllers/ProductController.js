import { Product } from '../models/productModel.js';

export const addNewProduct = async (req, res) => {
    try {
        const newProductData = req.body;
        const newProduct = await Product.create(newProductData);
        console.log(newProduct);
        res.status(201).json({
            status: 'success',
            message: `New product added: ${newProduct}`,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            status: 'success',
            results: products.length,
            data: {
                products,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

export const getProduct = async (req, res) => {
    try {
        const pID = req.params.id;
        console.log(pID);
        const product = await Product.findById(pID);
        res.status(200).json({
            status: 'success',
            data: {
                product,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

export const getProductActive = async (req, res) => {
    try {
        const product = await Product.where('isActive').equals(true);
        res.status(200).json({
            status: 'success',
            data: {
                product,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

export const getProductRange = async (req, res) => {
    console.log(req.query);
    const { min, max } = req.query;

    try {
        const product = await Product.findOne({
            'details.Price': { $gte: +min, $lt: +max },
        }).exec();
        if (product) {
            res.status(200).json({
                status: 'success',
                data: {
                    product,
                },
            });
        } else {
            err;
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

export const updateActiveDiscount = async (req, res) => {
    const pID = req.params.id;
    console.log(req.body);
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            pID,
            {
                $set: req.body,
            },
            {
                new: true,
                runValidators: true,
                context: 'query',
            }
        );
        res.status(200).json({
            status: 'success',
            data: {
                updatedProduct,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};
