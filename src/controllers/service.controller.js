'use strict'

const { SuccessResponse } = require("../core/success.response");
const Service = require("../services/service.service");

class NotificationController {
    registerService = async (req, res, next) => {
        new SuccessResponse({
            message: 'Register successful',
            metadata: await Service.registerService({ ...req.body })
        }).send(res)
    }
}

module.exports = new NotificationController()
