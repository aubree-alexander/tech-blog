//for landing page when not logged in.
//this renders through main.handlebars partial.

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models/');

//get all posts for non-logged in homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });

        //map data and store in variable called posts
        const posts = postData.map((post) => post.get({ plain: true }));

        //grab post variable and hand off to handlebars
        //use dashboard layout (logged in layout. postsData should render all-posts partial
        res.render('all-posts', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

//get a single post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('single-post', { post });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;
