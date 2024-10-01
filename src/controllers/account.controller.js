'use strict'

const { SuccessResponse } = require("../core/success.response");
const AccountService = require("../services/account.service");

class AccountController {
    connectToService = async (req, res, next) => {
        new SuccessResponse({
            message: 'Connect successful',
            metadata: await AccountService.connectAccount(req.body)
        }).send(res)
    }
}

module.exports = new AccountController()
