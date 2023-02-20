const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

//GET base_url/feed/posts
router.get('/posts', feedController.getPosts);

//POST base_url/feed/post
router.post('/post', feedController.createPost);

module.exports = router