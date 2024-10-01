'use strict'

const express = require("express")
const notificationController = require("../../controllers/notification.controller");
const { authentication } = require("../../middlewares/authUtils");
const asyncHandle = require("../../helpers/asyncHandle");
const router = express.Router()

// authentication
router.use(authentication)
/////////////////////////
router.post('/send-message', asyncHandle(notificationController.sendMessageToService))

module.exports = router;
