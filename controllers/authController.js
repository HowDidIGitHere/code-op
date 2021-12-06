const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const catchAsync = require('../utils/catchAsync');
const validateLoginInput = require("../validation/login");

const User = require("../models/User")

exports.signup = catchAsync( async (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // user already exists
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) { throw error }
            newUser.password = hash;
            newUser.save()
              .then(user => {
                const payload = {
                  username: user.username,
                  email: user.email,
                  id: user.id
                }

                jwt.sign(
                  payload,
                  keys.secretOrKey,
                  // Key expires in 1 hr
                  { expiresIn: 3600 },
                  (error, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    });
                  });
              })
              .catch(error => console.log(error))
          });
        });
      }
    });
});

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