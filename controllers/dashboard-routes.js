//what the page renders when you're logged in.

const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

//check if user is logged in
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                userId: req.session.userId,
            },
        });

        //map data and store in posts variable
        const posts = postData.map((post) => post.get({ plain: true }));

        //grab post variable and say that's what we're going to hand off to handlebars as.
        //want to use dashboard layout (logged in layout) and want postsData to render all-posts-admin partial.
        res.render('all-posts-admin', {
            layout: 'dashboard',
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard',
    });
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('edit-post', {
                layout: 'dashboard',
                post,
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;