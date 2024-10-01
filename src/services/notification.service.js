const { sendMessage } = require("../helpers/sendMessage")

class NotificationService {
  static async sendMessageToService(body) {
    try {
      return await sendMessage[body.code](body)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = NotificationService

