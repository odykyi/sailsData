/**
 * jwToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken & http://sailsjs.org/#!/documentation/concepts/Services
 */

const jwt = require('jsonwebtoken');
const tokenSecret = "secretissecet";

// Generates a token from supplied payload
function issue(payload) {
  return jwt.sign(
    payload,
    tokenSecret, // Token Secret that we sign it with
    {
      expiresInMinutes : 180 // Token Expire time
    }
  );
};

// Verifies token on a request
function verify(token, callback) {
  return jwt.verify(
    token, // The token to be verified
    tokenSecret, // Same token we used to sign
    {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    callback //Pass errors or decoded token to callback
  );
};




module.exports = {
  verify,
}
