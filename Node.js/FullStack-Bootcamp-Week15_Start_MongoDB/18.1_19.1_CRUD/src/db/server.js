import * as dotenv from 'dotenv';
dotenv.config(); // Load ENV Variables
import { Product } from '../models/Product.js';
import express from 'express';
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
const DB = process.env.DATABASE_LOCAL;
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

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
// Insert the shirts,shoes,socks in our MongoDB database
await shirts.save().then(() => console.log('shirts saved'));
//async function so we can connect to the database
//throws an error if the connection fails
const connectToDB = async () => {
    try {
        await mongoose.connect(DB, config); // Database Connection
        console.log(`connected to the database`);
    } catch (e) {
        console.log(`error connecting to the db: ${e}`);
    }
};
//run the function so we are connected to the database
connectToDB();
// Create our Express Application Object
const app = express();
app.use(express.json());
// Server Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
