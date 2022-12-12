import { MongoClient, ObjectId } from 'mongodb';

// Connection URL
const connectionURL = 'mongodb://127.0.0.1:27017';
// Create a new MongoClient
const client = new MongoClient(connectionURL, { useNewUrlParser: true });

const databaseName = 'blogData'; //database called blogData

// create an array of documents to insert
const usersDocs = [
    {
        name: 'Bob',
        num_posts: '3',
        num_comments: '2',
        blog_posts: [],
        blog_comments: [],
        ipaddr: '127.0.0.1',
        email: '1@test.com',
    },
    {
        name: 'Tony',
        num_posts: '0',
        num_comments: '1',
        blog_posts: [],
        blog_comments: [],
        ipaddr: '127.1.1.1',
        email: '2@test.com',
    },
];

const postDocs = [
    {
        title: '1',
        time: new Date(),
        post_content: 'blabla',
        owner: ObjectId('6397478fa5e9b4221db464f9'),
    },
    {
        title: '2',
        time: new Date(),
        post_content: 'blabla1',
        owner: ObjectId('6397478fa5e9b4221db464f9'),
    },
    {
        title: '3',
        time: new Date(),
        post_content: 'blabla2',
        owner: ObjectId('6397478fa5e9b4221db464fa'),
    },
];

const commentDocs = [
    {
        time: new Date(),
        comment_content: 'ha',
        owner: ObjectId('63974dbfc9964399620335e2'),
    },
    {
        time: new Date(),
        comment_content: 'haha',
        owner: ObjectId('63974dbfc9964399620335e3'),
    },
    {
        time: new Date(),
        comment_content: 'hahaha',
        owner: ObjectId('63974dbfc9964399620335e4'),
    },
];

async function usersCreation(usersDocs) {
    try {
        const db = client.db(databaseName);
        const users = db.collection('users');

        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };
        const userExist = await users.findOne({
            $or: [{ email: '1@test.com' }, { email: '2@test.com' }],
        });
        if (userExist) {
            return console.log('user already exist!');
        }

        const result = await users.insertMany(usersDocs, options);
        console.log(`${result.insertedCount} documents were inserted`);
    } catch (err) {
        console.log(err);
    } finally {
        setTimeout(() => {
            client.close();
        }, 1500);
    }
}

async function postCreation(postDocs) {
    try {
        const db = client.db(databaseName);
        const posts = db.collection('posts');

        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };
        const postExist = await posts.findOne({
            $or: [{ title: '1' }, { title: '2' }, { title: '3' }],
        });
        if (postExist) {
            return console.log('post already exist!');
        }

        const result = await posts.insertMany(postDocs, options);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
        setTimeout(() => {
            client.close();
        }, 1500);
    }
}

async function commentCreation(commentDocs) {
    try {
        const db = client.db(databaseName);
        const comments = db.collection('comments');

        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };

        const result = await comments.insertMany(commentDocs, options);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
        await client.close();
    }
}

usersCreation(usersDocs).catch(console.dir);
postCreation(postDocs).catch(console.dir);
commentCreation(commentDocs).catch(console.dir);
