// // config/swagger.js
// module.exports.swagger = {
//   /**
//    * require() the package.json file for your Sails app.
//    */
//   pkg: require('../package'),
//
//   ui: {
//     url: 'http://localhost:1337/api/docs'
//   }
// };
//
//

// config/swagger.js
module.exports.swagger = {
  /**
   * require() the package.json file for your Sails app.
   */
  pkg: require('../package'),
  ui: {
    url: 'http://swagger.balderdash.io'
  }
};
// module.exports.swagger = {
//   /**
//    * require() the package.json file for your Sails app.
//    */
//   pkg: require('../package'),
//   ui: {
//     url: 'http://localhost:1337/'
//   },
//   'routes': {
//     '/swagger/doc': {
//       controller: 'SwaggerController',
//       action: 'doc'
//     }
//   }
// };
