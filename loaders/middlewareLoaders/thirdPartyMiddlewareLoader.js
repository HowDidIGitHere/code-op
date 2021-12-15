// TO ADD ADDITIONAL MIDDLEWARE LATER

const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const passport = require("passport");

module.exports = app => {
  // Sets security http headers
  app.use(helmet());

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

  // Sanitize data against NoSQL query injections
  app.use(mongoSanitize());

  // Prevent parameter pollution
  app.use(hpp({ whitelist: [] }));

  return app;
}