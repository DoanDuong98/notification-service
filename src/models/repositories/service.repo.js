"use strict";

const { service } = require("../service.model");

const findServiceByKey = async(apiKey) => {
  return await service
    .findOne({ apiKey: apiKey, active: true })
    .lean();
};

const findServiceByKeyAndCode = async(apiKey, code) => {
  return await service
    .findOne({ apiKey: apiKey, code, active: true })
    .lean();
};


module.exports = {
  findServiceByKey,
  findServiceByKeyAndCode
};
