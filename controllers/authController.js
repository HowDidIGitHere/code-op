const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const catchAsync = require('../utils/catchAsync');
const validateLoginInput = require("../validation/login");

const User = require("../models/User")

exports.login = catchAsync( async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid)
    return res.status(400).json(errors);

  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email });

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