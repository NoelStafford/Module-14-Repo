const { Post } = require('../models')

const postsData = [
    {
        title: "what a post",
        contents: "this is not my best work",
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;