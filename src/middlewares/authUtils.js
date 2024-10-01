'use strict'

const JWT = require("jsonwebtoken");
const asyncHandler = require("../helpers/asyncHandle");
const { UnauthorizedError, BadReqestError } = require("../core/error.response");
const { findServiceByKeyAndCode } = require("../models/repositories/service.repo");

const HEADER = {
  API_KEY: 'x-api-key',
  CLIENT_ID: 'x-client-id',
  AUTHORIZATION: 'authorization',
  REFRESHTOKEN: 'refreshToken'
}

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    // access token
    const accessToken = JWT.sign(payload, publicKey, {
      expiresIn: '2 days'
    });

    const refreshToken = JWT.sign(payload, privateKey, {
      expiresIn: '7 days'
    });

    // JWT.verify(accessToken, publicKey, (err, decode) => {
    //   if (err) console.error();
    //   console.log(decode);
    // })

    return {
      accessToken, refreshToken
    }
  } catch (error) {
    
  }
};

const authentication = asyncHandler(async (req, res, next) => {
    let apiKey = req.headers[HEADER.AUTHORIZATION];
    if (!apiKey) throw new UnauthorizedError('Invalid Request');

    try {
      if (apiKey.includes("Bearer")) apiKey = apiKey.substring(7);
      // verify
      const service = await findServiceByKeyAndCode(apiKey, req.body?.code);
      if (!service) throw new BadReqestError('Not found service');
      req.apiKey = apiKey;
      req.body.apiKey = apiKey;
      return next();
    } catch (error) {
      throw error
    }
})

const authenticationV2 = asyncHandler(async (req, res, next) => {
  let apiKey = req.headers[HEADER.API_KEY];
  if (!apiKey || apiKey != process.env.API_KEY) throw new UnauthorizedError('Invalid Request');

  try {
    req.apiKey = apiKey;
    return next();
  } catch (error) {
    throw error
  }
})

module.exports = {
  createTokenPair,
  authentication,
  authenticationV2
}
