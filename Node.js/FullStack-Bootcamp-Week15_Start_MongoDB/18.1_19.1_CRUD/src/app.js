import express, { json } from 'express';
import { connectToDB } from './db/server.js';
import indexRoute from './routes/index.route.js';

const app = express(); // Create our Express Application Object
//run the function so we are connected to the database
connectToDB();
const PORT = process.env.PORT || 3000;
const BASE_URL = '/api/v1';

app.use(json());
app.use(BASE_URL, indexRoute); // localhost:4000/api/v1

// Server Listener
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
