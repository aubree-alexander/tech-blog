const router = require('express').Router();
//endpoints unlock the routes.
const commentRoutes = require('./comment-routes.js')
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');


router.use('/comment', commentRoutes)
router.use('/post', postRoutes)
router.use('/user', userRoutes)


module.exports = router;
