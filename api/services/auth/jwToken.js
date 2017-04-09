/**
 * jwToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken & http://sailsjs.org/#!/documentation/concepts/Services
 */

const jwt = require('jsonwebtoken');
const tokenSecret = 'secretissecettoken';

// Generates a token from supplied payload
function issue(payload) {
  // console.log
  // payload.exp = 180;
  return jwt.sign(
    payload,
    tokenSecret);
}

// Verifies token on a request
function verify(token, callback) {
  return jwt.verify(
    token, // The token to be verified
    tokenSecret, // Same token we used to sign
    {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    callback);
}

module.exports = {
  issue,
  verify,
};
