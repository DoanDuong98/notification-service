const { BadReqestError } = require("../core/error.response");
const { service } = require("../models/service.model");

class Service {
  static async registerService(body) {
    const { apiKey, url, name, code } = body;
    const serviceExists = await service.findOne({ $or: [ { apiKey }, { code } ] }).lean();
    if (serviceExists) throw new BadReqestError('Service exists!')
    const newService = await service.create({
        active: true,
        apiKey,
        url,
        name,
        code
    })
    return newService;
  }
}

module.exports = Service;
