const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getHomePage);
router.get('/write', blogController.getWritePage);
router.post('/write', blogController.postBlog);
router.get('/blogs/new', blogController.getNewBlogsPage);

module.exports = router;
