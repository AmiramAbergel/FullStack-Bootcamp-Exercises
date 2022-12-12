import mongoose from 'mongoose';
import { Product } from './Product.js';
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/eCommerce');

// Create a new Product post object
const shirts = new Product({
    name: 'Nike1',
    category: 'awesome',
    isActive: true,
    details: {
        description: 'sagdfgdfgdgdd',
        Price: 2,
        discount: 2,
        img: ['asd', 'asd'],
        phone: '0542324545',
        DateAdded: new Date(),
    },
});
const shoes = new Product({
    name: 'Adidas!',
    category: 'awesome',
    isActive: true,
    details: {
        description: 'sadgdfgdfgdgdd',
        Price: 2,
        discount: 2,
        img: ['asd', 'asd'],
        phone: '0542324545',
        DateAdded: new Date(),
    },
});
const socks = new Product({
    name: 'Nikee',
    category: 'awesome',
    isActive: true,
    details: {
        description: 'sfdgdfgdfgdad',
        Price: 2,
        discount: 2,
        img: ['asd', 'asd'],
        phone: '0542324545',
        DateAdded: new Date(),
    },
});

// Insert the shirts,shoes,socks in our MongoDB database
await shirts.save().then(() => console.log('shirts saved'));
await shoes.save().then(() => console.log('shirts saved'));
await socks.save().then(() => console.log('shirts saved'));
