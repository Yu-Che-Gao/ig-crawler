const express = require('express');
const router = express.Router();
const accessToken=require('../models/access-token.js');

router.get('/token', accessToken.getCode);
module.exports = router;