const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  avatar: String,
  tile: {
    type: String,
    required: [true, "El título es requerido"],
  },
  description: {
    type: String,
    required: [true, "La descripción es requerida"],
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  share: {
    type: Number,
    default: 0,
  },
});

const PostModel = mongoose.model("Post", postSchema);

module.exports = PostModel;
