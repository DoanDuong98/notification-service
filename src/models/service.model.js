"use strict";

const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "Service";
const COLLECTION_NAME = "services";

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    apiKey: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      unique: true,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    active: {
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
  service: model(DOCUMENT_NAME, serviceSchema)
}
