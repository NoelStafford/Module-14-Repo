const { Comment } = require('../models');

const commentsData = [
    {
        content: 'Please work',
        post_id: '1',
        user_id: '1'
    },
];

const seedComments = () => Comment.bulkCreate(commentsData);
module.export = seedComments;