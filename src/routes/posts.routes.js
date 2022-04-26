const { Router } = require("express");

const { listPosts } = require("../controllers/posts.controllers");

const router = Router();

const postRoutes = (app) => {
  app.use("/api/v1/posts", router);

  router.get("/", listPosts);
};

module.exports = postRoutes;
