// TO ADD ADDITIONAL MIDDLEWARE LATER

const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const morgan = require("morgan");
const path = require("path");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const bodyParser = require("body-parser");
const passport = require("passport");

module.exports = app => {
  app.use(function(req, res, next) {
    console.log('\n\n\nTest 1');
    console.log(req.body);
    next();
  })
  // Sets security http headers
  app.use(helmet());

  app.use(function(req, res, next) {
    console.log('\n\n\nTest 2');
    console.log(req.body);
    next();
  })

  // Logs requests
  app.use(morgan("dev"));

  // Limits user requests so we don't get swamped
  app.use("/", rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests. Please try again in an hour!"
  }));

  // Passport for session tokens
  app.use(passport.initialize());
  require("../../config/passport")(passport);

  // Body parser: reading data from body into req.body
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(function(req, res, next) {
    console.log('\n\n\nTest 3');
    console.log(req.body);
    next();
  })

  // Sanitize data against NoSQL query injections
  app.use(mongoSanitize());
  app.use(function(req, res, next) {
    console.log('\n\n\nTest 4');
    console.log(req.body);
    next();
  })

  // Sanitize data against XSS
  app.use(xss());
  app.use(function(req, res, next) {
    console.log('\n\n\nTest 5');
    console.log(req.body);
    next();
  })

  // Prevent parameter pollution
  app.use(hpp({ whitelist: [] }));

  // Convert query array values to array object
  app.use(function(req, res, next) {
    for (let key in req.query)
      if (/\w+,\w*/.test(req.query[key]))
        req.query[key] = req.query[key].split(',');
    next();
  });

  return app;
}