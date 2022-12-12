//! Many to-> Many (Use references) 3 collections Users,Posts,Comments
/* sdfsd */
//! Users collection
[
    {
        __id: ObjectID('A'),
        name: 'Bob',
        num_posts: '3',
        num_comments: '2',
        blog_posts: [ObjectID('aaaaaa'), ObjectID('bbbbb'), ObjectID('cccccc')],
        blog_comments: [ObjectID('1bbbbbbb'), ObjectID('1ccccccc')],
        ipaddr: '127.0.0.1',
    },
    {
        __id: ObjectID('B'),
        name: 'Tony',
        num_posts: '0',
        num_comments: '1',
        blog_posts: [],
        blog_comments: [ObjectID('1aaaaaa')],
        ipaddr: '127.1.1.1',
    },
];
//! Posts collection
[
    {
        __id: ObjectID('aaaaaa'),
        time: ISODate(''),
        post_content: 'blabla',
        owner: ObjectID('A'),
    },
    {
        __id: ObjectID('bbbbb'),
        time: ISODate(''),
        post_content: 'blabla1',
        owner: ObjectID('A'),
    },
    {
        __id: ObjectID('cccccc'),
        time: ISODate(''),
        post_content: 'blabla2',
        owner: ObjectID('A'),
    },
];
//! Comments collection
[
    {
        __id: ObjectID('1aaaaaa'),
        time: ISODate(''),
        comment_content: 'ha',
        owner: ObjectID('B'),
    },
    {
        __id: ObjectID('1bbbbbbb'),
        time: ISODate(''),
        comment_content: 'haha',
        owner: ObjectID('A'),
    },
    {
        __id: ObjectID('1ccccccc'),
        time: ISODate(''),
        comment_content: 'hahaha',
        owner: ObjectID('A'),
    },
];
