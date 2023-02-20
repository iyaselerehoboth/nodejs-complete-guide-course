const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');

const router = express.Router();

//GET base_url/feed/posts
router.get('/posts', feedController.getPosts);

//POST base_url/feed/post
router.post('/post', [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5})
], feedController.createPost);

module.exports = router