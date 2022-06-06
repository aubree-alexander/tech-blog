//this file is what the page renders when you're logged in.

const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

//check if user is logged in; get all posts and render on user dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                //AA - changed this from userId to user_id on 6/5.
                user_id: req.session.user_id,
            },
        });
        //map data and store in variable called posts
        const posts = postData.map((post) => post.get({ plain: true }));
        //grab post variable and hand off to handlebars
        //use dashboard layout (logged in layout. postsData should render all-posts-admin partial
        res.render('all-posts-admin', {
            layout: 'dashboard',
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

//render new-posts partial
router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard',
    });
});

//render edit-post partial
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