const passport = require("passport");
const catchAsync = require('../utils/catchAsync');
const userService = require('../services/userService');

class AuthController {
  signup = catchAsync( async (req, res) => {
    const data = await userService.signup(req.body);
    return res.status(data.statusCode).json(data);
  });

  login = catchAsync( async (req, res) => {
    const data = await userService.login(req.body);
    return res.status(data.statusCode).json(data);
  });

  protect = catchAsync( async (req, res, next) => {
    await passport.authenticate('jwt', { session: false }, function(error, user, info) {
      if (error) return next(error);
      if (!user) return res.status(404).json({ message: 'Please sign in' });
      req.user = user;
      next();
    })(req, res, next);
  });

  restrict = catchAsync( async (req, res, next) => {
    req.restrict = true;
    next();
  });
}

module.exports = new AuthController();