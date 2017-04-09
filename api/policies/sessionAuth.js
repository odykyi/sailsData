/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function (req, res, next) {
  let token;

  if (req.headers && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');
    if (parts.length === 2) {
      const scheme = parts[0];
      const credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.json(401, { error: 'Format is Authorization: Bearer [token]'} );
    }
  } else if (req.param('token')) {
    token = req.param('token');
    // We delete the token from param to not mess with blueprints
    delete req.query.token;
  } else {
    return res.json(401, { error: 'No Authorization header was found' });
  }

  auth.jwToken.verify(token, function (err, token) {
    if (err) {
      return res.json(401, {
        error: 'Invalid Token!',
      });
    }
    req.token = token; // This is the decrypted token or the payload you provided
    next();
  });
};
