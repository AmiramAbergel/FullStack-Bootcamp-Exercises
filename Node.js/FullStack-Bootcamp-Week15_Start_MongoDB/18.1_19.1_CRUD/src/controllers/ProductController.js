import { Product } from '../models/productModel.js';

export const addNewProduct = async (req, res) => {
    try {
        const newProductData = req.body;
        const newProduct = await Product.create(req.body);
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

// export const getAllProducts = (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         requestedAt: req.requestTime,
//         results: usersDataJSON.length,
//         data: {
//             usersDataJSON,
//         },
//     });
// };
