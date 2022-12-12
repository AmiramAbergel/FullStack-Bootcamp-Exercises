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
    db.collection('restaurants').insertMany(
        [
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
            {
                name: 'Cafe-Cafe',
                address: {
                    city: 'Netanya',
                    street: 'Tzafir 5',
                    coordinates: [-72.46574, 42.6774],
                },
                cuisine: 'Israel',
                kosher: true,
                reviews: [
                    {
                        date: new Date('2016-01-01'),
                        score: 1,
                    },
                    {
                        date: new Date('2014-01-01'),
                        score: 2,
                    },
                    {
                        date: new Date('2012-01-01'),
                        score: 3,
                    },
                ],
            },
            {
                name: 'Caramel',
                address: {
                    city: 'Netanya',
                    street: 'Hadror 15',
                    coordinates: [-72.46574, 42.6774],
                },
                cuisine: 'Italy',
                kosher: false,
                reviews: [
                    {
                        date: new Date('2011-01-01'),
                        score: 7,
                    },
                    {
                        date: new Date('2012-01-01'),
                        score: 3,
                    },
                    {
                        date: new Date('2015-01-01'),
                        score: 8,
                    },
                ],
            },
            {
                name: 'Japanika',
                address: {
                    city: 'Netanya',
                    street: 'Tzafir 15',
                    coordinates: [-72.46574, 42.6774],
                },
                cuisine: 'Japan',
                kosher: false,
                reviews: [
                    {
                        date: new Date('2015-01-01'),
                        score: 4,
                    },
                    {
                        date: new Date('2016-01-01'),
                        score: 3,
                    },
                    {
                        date: new Date('2017-01-01'),
                        score: 1,
                    },
                ],
            },
            {
                name: 'Kyoto',
                address: {
                    city: 'Herzlya',
                    street: 'Tzafir 15',
                    coordinates: [-72.46574, 42.6774],
                },
                cuisine: 'chinese',
                kosher: false,
                reviews: [
                    {
                        date: new Date('2015-01-01'),
                        score: 7,
                    },
                    {
                        date: new Date('2012-01-01'),
                        score: 3,
                    },
                    {
                        date: new Date('2022-01-01'),
                        score: 8,
                    },
                ],
            },
        ],
        (error, result) => {
            if (error) {
                return console.log('Unable to insert restaurant');
            }
            console.log(result);
        }
    );
});
