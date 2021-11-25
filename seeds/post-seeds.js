const { Post } = require('../models');

const postData = [
    {
        title: "Professional IT Portfolio!",
        post_content: "A portfolio of work can showcase your skills and talents to employers looking to fill a part-time or full-time position. An effective portfolio highlights your strongest work as well as the thought processes behind it. Students who have portfolios with deployed web applications (meaning they are live on the web) are typically very successful in their career search after the boot camp.",
        user_id: 3
    },
    {
        title: "Secure Password Generator",
        post_content: "AS AN employee with access to sensitive data I WANT to randomly generate a password that meets certain criteria SO THAT I can create a strong password that provides greater security",
        user_id: 1
    },
    {
        title: "Work Day Scheduler!",
        post_content: "AS AN employee with a busy schedule I WANT to add important events to a daily planner SO THAT I can manage my time effectively",
        user_id: 2

    },
    {
        title: "Team Profile Generator!",
        post_content: "AS A manager I WANT to generate a webpage that displays my team's basic info SO THAT I have quick access to their emails and GitHub profiles",
        user_id: 5
    },
    {
        title: "E-commerce Back End!",
        post_content: "AS A manager at an internet retail company I WANT a back end for my e-commerce website that uses the latest technologies SO THAT my company can compete with other e-commerce companies",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;