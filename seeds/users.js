const { User } = require('../models');

const usersData = [
    {
        username: 'test',
        email: 'test@test.com',
        password: 'testtest'
    }
];

const seedUsers = () => User.bulkcreate(usersData);

module.export = seedUsers;