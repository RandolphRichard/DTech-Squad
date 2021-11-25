const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This looks so clean, amazing work!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Oustanding work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Wow! this is a great work environment"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "It has become appallingly obvious that our technology has exceeded our humanity."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is exactly what I was looking for!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Technology is best when it brings people together."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.Good Job!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road. Great improvement!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;