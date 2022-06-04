const commentSeeds = require('./commentSeeds');
const postSeeds= require('./postSeeds');
const userSeeds = require('./userSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        await userSeeds();
        await postSeeds();
        await commentSeeds();

        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

seedAll();
