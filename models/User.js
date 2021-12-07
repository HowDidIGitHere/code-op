const bcrypt = require('bcryptjs');
const Validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

class User {
  initSchema() {
    const PositionSchema = new Schema({
      role: {
        type: String,
        required: true
      }
    });

    const UserSchema = new Schema({
      username: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Passwords must be 8 or more characters'],
        select: false
      },
      passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
          validator: function(val) {
            return this.password === val;
          },
          message: 'Password confirmation failed'
        }
      },
      bio: {
        type: String,
        maxlength: [800, "Bio cannot excede 800 characters"]
      },
      github: {
        type: String,
        validate: {
          validator: Validator.isURL,
          message: "Please enter a valid Github URL"
        }
      }
    }, {
      timestamps: true
    });
    
    UserSchema.pre('save', async function(next) {
      if(!this.isModified('password'))
        return next();
    
      if(this.password && this.passwordConfirm) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        this.password = await bcrypt.hash(this.password, salt);
        this.passwordConfirm = undefined;
      }
    
      next();
    });
    
    return mongoose.models.User || mongoose.model("User", UserSchema);
  }

  getInstance() {
    return this.initSchema();
  }
}

module.exports = User;