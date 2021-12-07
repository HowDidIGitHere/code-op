const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const catchAsync = require("../utils/catchAsync");
const Service = require('../services/Service');

const validateLoginInput = require('../validation/login');
const validateSignupInput = require('../validation/signup');

class UserService extends Service {
  constructor(model) {
    super(model);
  }

  async signup(userInfo) {
    const { errors, isValid } = validateSignupInput(req.body);
    const error = {
      error: true, 
      messgae: 'Invalid email or password',
      statusCode: 400
    }

    if (!isValid)
      return  error;
    
    const { docs } = await this.model.findOne({ fields: { email: req.body.email } });
  
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
  }

  async login(userInfo) {
    const { errors, isValid } = validateLoginInput(userInfo);
    const error = {
      error: true, 
      messgae: 'Invalid email or password',
      statusCode: 400
    }

    if (!isValid)
      return { ...error, errors };
  
    const email = userInfo.email;
    const password = userInfo.password;
    const user = await this.model.findOne({ email }).select('+password');
  
    if (!user)
      return error;
    
    const passwordIsMatch = await bcrypt.compare(password, user.password);
    if (passwordIsMatch) {
      const payload = { id: user.id, username: user.username };
      const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });
      return {
        statusCode: 200,
        success: true,
        token: 'Bearer ' + token
      };
    } else {
      return error;
    }
  }
}

module.exports = UserService;