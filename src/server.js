const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { connectDB } = require("./config/dbConnect");

const postRoutes = require("./routes/posts.routes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;

    this.dbConnect();
    this.middlewares();
    this.routes();
  }

  dbConnect() {
    connectDB();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  routes() {
    postRoutes(this.app);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
