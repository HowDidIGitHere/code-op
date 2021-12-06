const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const catchAsync = require('../utils/catchAsync');

const User = require("../models/User")

const validateSignupInput = require("../validation/signup");
const validateLoginInput = require("../validation/login");


exports.signup = catchAsync( async (req, res) => {
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

exports.login = catchAsync( async (req, res) => {
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