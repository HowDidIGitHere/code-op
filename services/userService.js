const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Service = require('./Service');
const User = require('../models/User');

class UserService extends Service {
  constructor(model) {
    super(model);
  }

  async signup(userInfo) {
    const newUser = await this.model.create({
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
      passwordConfirm: userInfo.passwordConfirm
    });
  
    const token = this.createJwt(newUser);
    return {
      statusCode: 200,
      token: 'Bearer ' + token
    }
  }

  async login(userInfo) {
    const error = {
      errors: ['Invalid email or password'],
      statusCode: 400
    }
  
    const email = userInfo.email;
    const password = userInfo.password;
    const user = await this.model.findOne({ email }).select('+password');
  
    if (!user)
      return error;
    
    const passwordIsMatch = await bcrypt.compare(password, user.password);
    if (passwordIsMatch) {
      const token = this.createJwt(user);
      return {
        statusCode: 200,
        success: true,
        token: 'Bearer ' + token
      };
    } else {
      return error;
    }
  }

  createJwt(user) {
    const payload = { id: user.id, username: user.username };
    return jwt.sign(payload, keys.secretOrKey, { expiresIn: 60 * 60 * 24 * 90 });
  }
}

module.exports = new UserService(User);