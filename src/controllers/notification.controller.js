'use strict'

const { SuccessResponse } = require("../core/success.response");
const NotificationService = require("../services/notification.service");

class NotificationController {
    sendMessageToService = async (req, res, next) => {
        new SuccessResponse({
            message: 'Send notification success',
            metadata: await NotificationService.sendMessageToService({ ...req.body, apiKey: req.apiKey })
        }).send(res)
    }
}

module.exports = new NotificationController()
