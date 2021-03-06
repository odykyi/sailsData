module.exports = function (sails) {
  // This var will be private
  // var foo = 'bar';

  // This var will be public
  // this.abc = 123;

  return {

    // Pause sails lifting until this hook has completed initializing
    // ready: false,

    // set up the options of your hook
    defaults: {
    },

    // // do stuff before intialize the hook
    // configure: function(done){
    //   return done();
    // },

    // the logic of your hook
    initialize(done) {
      console.log('Sails load hooks', this);
      // This will be available in app code as sails.hooks.myhook.numRequestsSeen
      this.numRequestsSeen = 0;
      // This will be available in app code as sails.hooks.myhook.numUnhandledRequestsSeen
      this.numUnhandledRequestsSeen = 0;
      return done();
    },

    routes: {
      before: {
        // This route will be matched before any routes in config/routes.js
        'GET /*': function (req, res, next) {
          this.numRequestsSeen++;
          return next();
        },
      },
      after: {
        // This route will be matched after any routes in config/routes.js
        'GET /*': function (req, res, next) {
          this.numUnhandledRequestsSeen++;
          return next();
        },
      },
    },

  };
};
