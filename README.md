# sailsData

a [Sails](http://sailsjs.org) application

$ npm i

$ sails lift



  Route Mappings
  http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html

module.exports.routes = {
  '/': {
    view: 'homepage'
  },

  'get /login': 'AuthController.login',

  'get /logout': 'AuthController.logout',

  'get /register': 'AuthController.register',

  'post /auth/local': 'AuthController.callback',

  'post /auth/local/:action': 'AuthController.callback',

  'get /auth/:provider': 'AuthController.provider',

  'get /auth/:provider/callback': 'AuthController.callback',

  'get /auth/:provider/:action': 'AuthController.callback',
};
