import * as dotenv from 'dotenv';
dotenv.config(); // Load ENV Variables

import express from 'express';
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
const DB = process.env.DATABASE_LOCAL;
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

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
const app = express();
// Server Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
