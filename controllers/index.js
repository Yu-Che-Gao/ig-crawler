const express = require('express');
const router = express.Router();
const accessToken=require('../models/access-token.js');

router.get('/token', accessToken.requestCode);
router.get('/callback', accessToken.getCode);
module.exports = router;