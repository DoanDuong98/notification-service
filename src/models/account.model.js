"use strict";

const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "Account";
const COLLECTION_NAME = "accounts";

const accountSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    code: {
        type: String,
        required: true
    },
    roomId: {
      type: String,
      required: true,
    },
    isConnected: {
      type: Boolean,
      default: true
    }
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

//Export the model
module.exports = {
  account: model(DOCUMENT_NAME, accountSchema)
}
