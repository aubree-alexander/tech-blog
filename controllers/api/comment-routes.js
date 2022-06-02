//add in a basic comment route

const router = require('express').Router();
const Comment = require('../../models/Comment')
// const withAuth = require('../../utils/auth')

//post comment
//aa - either do an await or try here
// router.post('/', withAuth, async (req, res) => {
//     await Comment.create({ ...req.body }) //array of comments
// })

router.post('/', async (req, res) => {
    try {
        const postComment = await Comment.create({ ...req.body, userId: req.session.userId })
        res.json(postComment)
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;