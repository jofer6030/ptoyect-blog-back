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
      msg: "Lista de posts",
      posts: listPosts,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);

    res.status(200).json({
      msg: "Post encontrado",
      post,
    });
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res) => {
  try {
    // const newPost = await Post.create(req.body);
    const newPost = new Post(req.body);
    const newPostSaved = await newPost.save();

    res.status(201).json({
      msg: "Post creado correctamente",
      post: newPostSaved,
    });
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;

  try {
    const updatePost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      msg: "Post actualizado correctamente",
      post: updatePost,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await Post.findByIdAndDelete(id);

    res.status(200).json({
      msg: "Post eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
