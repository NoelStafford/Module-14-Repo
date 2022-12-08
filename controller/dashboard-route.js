const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
// gets all the posts and puts them on the homepage
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{ model: User }]
        });
// makes it so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));


        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});