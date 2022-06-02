const router = require('express').Router();
const commentRoutes = require('./comment-routes')

//endpoint comment unlocks comment routes.
router.use('/comment', commentRoutes)

//use this file for comment, post and user routes

module.exports = router;