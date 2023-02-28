const { Router } = require('express');
const testController = require('../controllers/testController');

const router = Router();

// routes
router.get('/test-get', testController.test_get);
router.post('/test-post', testController.test_post);

module.exports = router;