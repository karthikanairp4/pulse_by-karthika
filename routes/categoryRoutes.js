const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Define routes for each category
router.get('/health', categoryController.renderCategory);
router.get('/design', categoryController.renderCategory);
router.get('/tech', categoryController.renderCategory);
router.get('/climate', categoryController.renderCategory);
router.get('/sports', categoryController.renderCategory);

router.get('/details', categoryController.getDetails);

module.exports = router;
