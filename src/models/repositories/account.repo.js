"use strict";

const { account } = require("../account.model");

const findByUsernameAndConnected = async(username) => {
  return await account
    .findOne({ $and: [{ isConnected: true }, { username }] })
    .lean();
};

const findByUsernameAndRoomAndConnected = async(username, roomId) => {
  console.log(username, roomId)
  return await account
    .findOne({ $or: [ { roomId }, { username } ], $and: [{ isConnected: true }] })
    .lean();
};

module.exports = {
    findByUsernameAndConnected,
    findByUsernameAndRoomAndConnected
};
