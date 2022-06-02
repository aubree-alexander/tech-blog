//point of this file is a traffic controller! 

const router = require('express').Router();
const apiRoutes = require('./api/');

router.use('/api', apiRoutes)

// router.get('/', (req, res) => {
//     res.render('home');
// })

module.exports = router;

//use this file for api routes, dashboard routes, and home routes.

