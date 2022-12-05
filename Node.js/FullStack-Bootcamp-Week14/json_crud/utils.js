import fs from 'fs';
import uniqid from 'uniqid';
import chalk from 'chalk';

const loadUsers = function () {
    try {
        const dataBuffer = fs.readFileSync('users.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch (e) {
        return [];
    }
};

const saveUsers = function (users) {
    const usersJSON = JSON.stringify(users);
    fs.writeFileSync('users.json', usersJSON);
};

const getUser = (id) => {
    //read
    const users = loadUsers();
    const user = users.find((user) => user.id === id);
    user
        ? console.log(chalk.green(user.name))
        : console.log(chalk.red('User not found'));
};

const addUser = (name, mail) => {
    //write
    const users = loadUsers();
    const check_duplicated = users.find((user) => user.name === user.name);

    if (!check_duplicated) {
        users.push({ id: uniqid(), name: name, mail: mail });
        saveUsers(users);
        console.log(chalk.green('New User Added'));
    } else {
        console.log(chalk.red('User name taken!'));
    }
};

const updateUser = (id, newName) => {
    //update
    const users = loadUsers();
    const user = users.find((user) => user.id === id);
    user.name = newName;
    saveUsers(users);
    console.log(chalk.green(`User ${id} has been updated`));
};

const deleteUser = (id) => {
    //delete
    const users = loadUsers();
    const usersToKeep = users.filter((user) => user.id !== id);
    if (users.length > usersToKeep.length) {
        saveUsers(usersToKeep);
        console.log(chalk.green('User deleted!'));
    } else {
        console.log(chalk.red('No users found!'));
    }
};

export { getUser, addUser, updateUser, deleteUser };
