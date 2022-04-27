const { Router } = require("express");
const { check } = require("express-validator");

// const {
//   listPosts,
//   createPost,
//   getPost,
//   updatePost,
//   deletePost,
// } = require("../controllers/posts.controllers");

const pCon = require("../controllers/posts.controllers");

const { existePostbyId } = require("../helpers/validate-id");
const { validateErrors } = require("../middleware/validar-errors");

const router = Router();

const postRoutes = (app) => {
  app.use("/api/v1/posts", router);

  router.get("/", pCon.listPosts);

  router.get(
    "/:id",
    [
      check("id", "El id debe ser un MongoID").isMongoId(),
      check("id").custom(existePostbyId),
      validateErrors,
    ],
    pCon.getPost
  );

  router.post(
    "/new",
    [
      check("title", "El title debe contener almenos 5 caractéres").isLength({
        min: 5,
      }),
      check("description", "La descripción es requerida").not().isEmpty(),
      validateErrors,
    ],
    pCon.createPost
  );

  router.put(
    "/:id",
    [
      check("id", "El id debe ser un MongoID").isMongoId(),
      check("id").custom(existePostbyId),
      validateErrors,
    ],
    pCon.updatePost
  );

  router.delete(
    "/:id",
    [
      check("id", "El id debe ser un MongoID").isMongoId(),
      check("id").custom(existePostbyId),
      validateErrors,
    ],
    pCon.deletePost
  );
};

module.exports = postRoutes;
