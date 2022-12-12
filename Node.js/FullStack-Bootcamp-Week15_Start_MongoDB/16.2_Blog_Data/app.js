import { MongoClient } from 'mongodb';

// Connection URL
const connectionURL = 'mongodb://127.0.0.1:27017';
// Create a new MongoClient
const client = new MongoClient(connectionURL, { useNewUrlParser: true });

const databaseName = 'blogData'; //database called blogData

async function blogRun() {
    try {
        const db = client.db(databaseName);
        const users = db.collection('users');
        // create an array of documents to insert
        const docs = [
            {
                name: 'Bob',
                num_posts: '3',
                num_comments: '2',
                blog_posts: [],
                blog_comments: [],
                ipaddr: '127.0.0.1',
                email: '1',
            },
            {
                name: 'Tony',
                num_posts: '0',
                num_comments: '1',
                blog_posts: [],
                blog_comments: [],
                ipaddr: '127.1.1.1',
                email: '2',
            },
        ];
        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };
        const result = await users.insertMany(docs, options);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
        await client.close();
    }
}
blogRun().catch(console.dir);
