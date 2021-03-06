const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  avatar: {
    type: String,
    default:
      "https://cspg.org/images/CSPG/3-Events/TechLunch/default-avatar.png",
  },
  bg_img: {
    type: String,
    default:
      "https://i.pinimg.com/736x/04/0e/ce/040ece9078b22e7315de96aa620057c5.jpg",
  },
  title: {
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
