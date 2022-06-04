const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
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

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
