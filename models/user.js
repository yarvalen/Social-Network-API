const { Schema, model } = require('mongoose');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought'
    }],

    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/]
    },
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user',
    }],
  },
  { toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false
  }
);

userSchema.virtual('friendCount').get(function(){
  return this.friends.length
})
const users = model('users', userSchema);

module.exports = users;
