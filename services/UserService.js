const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Service = require('./Service');
const User = require('../models/User');

const validateLoginInput = require('../validation/login');
const validateSignupInput = require('../validation/signup');

class UserService extends Service {
  constructor(model) {
    super(model);
  }

  async signup(userInfo) {
    const { errors, isValid } = validateSignupInput(userInfo);
    const error = {
      error: true, 
      statusCode: 400
    }

    if (!isValid)
      return  { ...error, errors };
    
    const user = await this.model.findOne({ email: userInfo.email });
  
    if (user)
      return { ...error, message: 'An error occured' };
    
    const newUser = await this.model.create({
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
      passwordConfirm: userInfo.passwordConfirm
    });
  
    const payload = { id: newUser.id, username: newUser.username };
    const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });
    return {
      statusCode: 200,
      token: 'Bearer ' + token
    }
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

module.exports = new UserService(User);