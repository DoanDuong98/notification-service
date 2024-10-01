const { account } = require("../models/account.model");
const { findByUsernameAndRoomAndConnected } = require("../models/repositories/account.repo");
const { command, serviceType } = require("../utils/constant");
const { sendMessageToService } = require("./notification.service");

// require
class AccountService {
  static async connectAccount(body) {
    const { roomId, username, message, code = serviceType.HWORK } = body;
    let content = command.SUCCESS;
    if (message != command.START) {
      content = command.SYNTAX_ERROR;
      await sendMessageToService({ ...body, message: content });
      return content;
    }
    const findAccount = await findByUsernameAndRoomAndConnected(username, roomId);
    if (findAccount) {
      content = command.ALLREADY_LINKED;
      await sendMessageToService({ ...body, message: content });
      return content;
    }
    const newAccount = await account.create({
      roomId,
      username,
      code,
      isConnected: true
    })
    await sendMessageToService({ ...body, message: content });
    return newAccount;
  }
}

module.exports = AccountService;
