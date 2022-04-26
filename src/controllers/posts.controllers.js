const Post = require("../models/Post");

const listPosts = async (req, res) => {
  try {
    const listPosts = await Post.find();

    if (!listPosts.length) {
      res.status(204).json({
        msg: "No hay posts en la DB",
      });
      return;
    }

    res.status(200).json({
      msg: "List user successfully",
      posts: listPosts,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listPosts,
};
