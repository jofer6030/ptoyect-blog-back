const { Router } = require("express");

const router = Router();

const userRoutes = (app) => {
  app.use("/api/v1/user", router);

  router.post("/mayores");
};

// https://localhost:8000/api/v1/user/mayores

module.exports = userRoutes;
