const { Router } = require("express");

const { listPosts } = require("../controllers/posts.controllers");

const router = Router();

const postRoutes = (app) => {
  app.use("/api/v1/posts", router);

  router.get("/", listPosts);

  // TODO: Get by ID route
  // router.get("/:id");

  // TODO: Post route
  // router.post("/");

  // TODO: Put by ID route
  // router.put("/:id");

  // TODO: Delete by ID route
  // router.delete("/:id");
};

module.exports = postRoutes;
