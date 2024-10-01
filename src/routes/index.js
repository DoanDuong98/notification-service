'use strict'

const express = require("express")
const router = express.Router();

router.use('/v1/api/notification', require('./notification'));
router.use('/v1/api/account', require('./account'));
router.use('/v1/api/service', require('./service'));

module.exports = router;
