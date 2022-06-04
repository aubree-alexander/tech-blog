// const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'michaelSc0ttRox',
    email: 'worldsbestboss@cbc.ca',
    password: 'password123'
  },
  {
    username: 'dw1ghtschrut3',
    email: 'beetfarmer@beets.com',
    password: 'password123'
  },
  {
    username: '0scarr@mirez',
    email: 'accountingwhiz@last.fm',
    password: 'password123'
  },
  {
    username: 'j!mh@lp3rt',
    email: 'teapot@goo.ne.jp',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userData); //commented out after userdata: , {individualHooks: true}

module.exports = seedUsers;
