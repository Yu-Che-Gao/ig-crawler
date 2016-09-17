const express = require('express');
const router = express.Router();
const accessToken = require('../models/access-token.js');
const root = require('../models/root.js');

router.get('/token', accessToken.requestCode);
router.get('/callback', accessToken.getCodeOrToken);
router.get('/accessToken', accessToken.requestAccessToken);
router.get('/', root.entrance);
module.exports = router;