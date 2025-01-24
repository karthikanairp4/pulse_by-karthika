const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

const {verifyToken} = require('../middlewares/authMiddleware');

router.get('/', blogController.getHomePage);
router.get('/write', blogController.getWritePage);
router.post('/write', blogController.postBlog);
// router.get('/write', verifyToken, blogController.getWritePage); // Apply middleware here
// router.post('/write', verifyToken, blogController.postBlog); 
router.get('/blogs/new', blogController.getNewBlogsPage);

// router.get('/write', verifyToken, (req, res) => {
//     res.render('write');
// });

module.exports = router;
