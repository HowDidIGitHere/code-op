const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../config/keys");
const catchAsync = require('../utils/catchAsync');

const User = require("../models/User")

const validateSignupInput = require("../validation/signup");
const validateLoginInput = require("../validation/login");

class AuthController {
  signup = catchAsync( async (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);
  
    if (!isValid)
      return res.status(400).json(errors);
    
    const user = await User.findOne({ email: req.body.email });
  
    if (user)
      return res.status(400).json({ message: 'An error occurred' });
    
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });
  
    const payload = { id: newUser.id, username: newUser.username };
    const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });
    return res.json({
      success: true,
      token: 'Bearer ' + token
    });
  });

  login = catchAsync( async (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    if (!isValid)
      return res.status(400).json(errors);
  
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email }).select('+password');
  
    if (!user)
      return res.status(400).json({ message: 'Invalid username or password' });
    
    const passwordIsMatch = await bcrypt.compare(password, user.password);
    if (passwordIsMatch) {
      const payload = { id: user.id, username: user.username };
      const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });
      return res.json({
        success: true,
        token: 'Bearer ' + token
      });
    } else {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
  });

  protect = catchAsync( async (req, res, next) => {
    await passport.authenticate('jwt', { session: false }, function(error, user, info) {
      if (error) return next(error);
      if (!user) return res.status(404).json({ message: 'Please sign in' });
      req.user = user;
      next();
    })(req, res, next);
  });
}

module.exports = AuthController;