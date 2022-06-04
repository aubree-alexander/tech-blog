//add in a basic comment route

const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth')


router.post('/', withAuth, async (req, res) => {
    try {
        const postComment = await Comment.create({ ...req.body, userId: req.session.userId });
        res.json(postComment)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;