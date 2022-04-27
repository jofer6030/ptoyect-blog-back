const Post = require("../models/Post");

const existePostbyId = async (id) => {
  const post = await Post.findById(id);

  if (!post) {
    throw new Error("El post no existe");
  }
};

module.exports = {
  existePostbyId,
};
