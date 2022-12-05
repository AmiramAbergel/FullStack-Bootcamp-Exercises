import { getUser, addUser, updateUser, deleteUser } from './utils.js';
import yargs from 'yargs';
const y = yargs();
y.command({
    command: 'add',
    describe: 'Add a new user',
    builder: {
        id: {
            describe: 'User ID',
            demandOption: false,
            type: 'string',
        },
        name: {
            describe: 'User Name',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'User Email',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        addUser(argv.name, argv.email);
    },
});

y.command({
    command: 'get',
    describe: 'Get user',
    builder: {
        id: {
            describe: 'User ID',
            type: 'string',
        },
    },
    handler: function (argv) {
        getUser(argv.id);
    },
});

y.command({
    command: 'update',
    describe: 'Update user',
    builder: {
        id: {
            describe: 'User ID',
            type: 'string',
        },
        newName: {
            describe: 'User Name',
            type: 'string',
        },
    },
    handler: function (argv) {
        updateUser(argv.id, argv.newName);
    },
});

y.command({
    command: 'delete',
    describe: 'Delete user',
    builder: {
        id: {
            describe: 'User ID',
            type: 'string',
        },
    },
    handler: function (argv) {
        deleteUser(argv.id);
    },
});

y.parse(process.argv.slice(2));
