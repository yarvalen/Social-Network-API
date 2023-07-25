const { Schema, model } = require('mongoose');
const reactionSchema  = require('./reaction');

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false
  }
);

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reaction.length
})
const thoughts = model('thoughts', thoughtSchema);

module.exports = thoughts
