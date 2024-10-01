'use strict'

const express = require("express")
const accountController = require("../../controllers/account.controller");
const { authentication } = require("../../middlewares/authUtils");
const asyncHandle = require("../../helpers/asyncHandle");
const router = express.Router()

// authentication
router.use(authentication)
/////////////////////////
router.post('/connect', asyncHandle(accountController.connectToService))

module.exports = router;
