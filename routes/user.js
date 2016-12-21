const express = require('express');
const userControllers = require('../controllers').USER;
const ensureAuth = require('../helpers').AUTH.ENSURE_AUTH;

const router = express.Router();

router.use(ensureAuth);

router.get('/', userControllers.FETCH_USER);
router.post('/name', userControllers.CHANGE_NAME);

module.exports = router;