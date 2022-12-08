const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');
// finds all the posts and send them to the homepage
router.get('/', async (req, res) => {
    // find all the posts and combine them with the users
    try {
        const postData = await Post.findAll({
            include: [{ model: User }],
        });
        // make it so template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('all-posts', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// gets a single post by the id
router.get('/post/:id', withAuth, async (req, res) => {
    // find all where the post meets the params of the user id and post id
    try {
        const commentData = await Comment.findAll({
            where: {
                post_id: req.params.id 
            },
            include: [ { model: User }, { model: Post }]
        });
        // finds them all by 
        const postData = await Post.findByPk(req.params.id, {
            include: [ { model: User } ],
        });
        
        const post = postData.get({ plain: true });

        const comments = commentData.map((comment) => comment.get({ plain: true }));

        res.render('single-post', {
            ...post,
            comments,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// send them to the login screen but if already logged in send them to the home screen
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
// send them to the signup page but if already logged in send them to the home screen
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router; 