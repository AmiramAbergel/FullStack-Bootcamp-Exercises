import { MongoClient } from 'mongodb';
// Connection URL
const connectionURL = 'mongodb://127.0.0.1:27017';
// Create a new MongoClient
const client = new MongoClient(connectionURL, { useNewUrlParser: true });

const databaseName = 'findMyRestaurant'; //database called findMyRestaurant

client.connect((error, client) => {
    if (error) {
        return console.log(`cant connect!`);
    }
    const db = client.db(databaseName);
    db.collection('restaurants').insertOne(
        {
            name: 'Nishi',
            address: {
                city: 'Netanya',
                street: 'Tzafir 15',
                coordinates: [-72.46574, 42.6774],
            },
            cuisine: 'Japan',
            kosher: false,
            reviews: [
                {
                    date: new Date('2016-01-01'),
                    score: 7,
                },
                {
                    date: new Date('2019-01-01'),
                    score: 3,
                },
                {
                    date: new Date('2018-01-01'),
                    score: 8,
                },
            ],
        },
        () => {}
    );
});
