const { Schema, model } = require('mongoose');

// Schema to create reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false
  }
);

module.exports = reactionSchema
