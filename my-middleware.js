module.exports = function (options) {
    return function (req, res, next) {
      // Implement the middleware function based on the options object
      console.log("this is external validate page by using module exports method");
      next()
    }
  }