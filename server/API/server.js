const express = require("express");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const authRouter = require("./endpoints/auth/auth.router");
const projectsRouter = require("./endpoints/projects/projects.router");
const usersRouter = require("./endpoints/users/users.router");
const tagsRouter = require("./endpoints/tags/tags.router");
const categoriesRouter = require("./endpoints/categoies/categories.router");

class Server {
  /**
   *  Server
   * @param {String} port
   * @param {String} dataBaseUrl
   * @param {Boolean} isDev
   */
  constructor(port, dataBaseUrl, isDev = false) {
    this.app = null;
    this.port = port;
    this.dataBaseUrl = dataBaseUrl;
    this.isDev = isDev;
  }

  async start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    await this.connectToDB();
    this.makeStorageAccess();
    this.makeImagesStorageFolders();
    this.startListening();
  }

  initServer() {
    this.app = express();
  }

  initMiddlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors());
  }

  initRoutes() {
    if (!this.isDev) {
      this.app.use(
        express.static(path.resolve(__dirname, "../../react-ui/build"))
      );
    }

    this.app.use("/api/auth", authRouter);
    this.app.use("/api/projects", projectsRouter);
    this.app.use("/api/users", usersRouter);
    this.app.use("/api/tags", tagsRouter);
    this.app.use("/api/categories", categoriesRouter);

    if (!this.isDev) {
      this.app.get("*", function (request, response) {
        response.sendFile(
          path.resolve(__dirname, "../../react-ui/build", "index.html")
        );
      });
    }
  }

  async connectToDB() {
    try {
      await mongoose.connect(this.dataBaseUrl, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
      });

      console.log("Database connection successful");
    } catch (err) {
      console.log("Database connection unsuccessful");
      console.log(err.message);
      process.exit(1);
    }
  }
  // TODO: make beauty code
  makeStorageAccess() {
    if (!this.isDev) {
      fs.appendFile(
        "_storage_key.json",
        process.env.STORAGE_KEY,
        function (err) {
          if (err) {
            console.log("Storage key not created");
            process.exit(1);
          }
          console.log("Storage key created");
        }
      );
    }
  }

  async makeImagesStorageFolders() {
    const imagesSysFoldersName = ["tmp", "images"];
    try {
      for (let i = 0; i < imagesSysFoldersName.length; i++) {
        const folderPath = path.join(
          __dirname,
          `../${imagesSysFoldersName[i]}`
        );

        if (!fs.existsSync(folderPath)) {
          await fsPromises.mkdir(folderPath);
        } else {
          const files = await fsPromises.readdir(folderPath);

          if (!files) continue;

          for (let j = 0; j < files.length; j++) {
            console.log(folderPath + "/" + files[j]);
            await fsPromises.unlink(folderPath + "/" + files[j]);
          }
        }
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }

  startListening() {
    this.app.listen(this.port, () =>
      console.log(`Listening on port: ${this.port}`)
    );
  }
}

module.exports = Server;
