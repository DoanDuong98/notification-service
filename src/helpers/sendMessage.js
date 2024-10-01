const { serviceType } = require("../utils/constant");
const { urlConstant } = require('../configs/url');
const { findByUsernameAndConnected } = require('../models/repositories/account.repo');
const axios = require('axios');
const { findServiceByKey } = require("../models/repositories/service.repo");

async function sendMessageToHwork(body) {
    const { message, username, apiKey } = body;
    const [accountChat, service] = await Promise.all([
      findByUsernameAndConnected(username),
      findServiceByKey(apiKey)
    ]) 
    const data = JSON.stringify({
        "msgtype": "m.text",
        "body": "Hportal: ",
        "format": "org.matrix.custom.html",
        "formatted_body": message,
        "m.mentions": {}
      });;
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: service.url.replace('${roomId}',accountChat.roomId),
      headers: { 
        'Authorization': 'Bearer ' + apiKey, 
        'Content-Type': 'application/json'
      },
      data
    };
    await axios.request(config);
    return {
      message: 'OK',
      sucess: true
    }
  }

const sendMessage = {
    [serviceType.HWORK]: sendMessageToHwork
}

module.exports = {
    sendMessage
}