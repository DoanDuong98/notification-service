'use strict'

const express = require("express")
const serviceController = require("../../controllers/service.controller");
const { authenticationV2 } = require("../../middlewares/authUtils");
const asyncHandle = require("../../helpers/asyncHandle");
const router = express.Router()

// authentication
router.use(authenticationV2)
/////////////////////////
router.post('/register', asyncHandle(serviceController.registerService))

module.exports = router;
