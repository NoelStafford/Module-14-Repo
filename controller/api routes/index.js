const router = require('express').Router();
// connecting all the routes
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');
// routes for everything
router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;