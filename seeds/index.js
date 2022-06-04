const commentSeeds = require('./commentSeeds');
const postSeeds= require('./postSeeds');
const userSeeds = require('./userSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await userSeeds();
    console.log('--------------');

    await postSeeds();
    console.log('--------------');

    await commentSeeds();
    console.log('--------------');

    process.exit(0);
};

seedAll();
