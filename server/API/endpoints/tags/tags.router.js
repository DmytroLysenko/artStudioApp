const { Router } = require("express");

const tagsRouter = Router();

const tagsController = require("./tags.controller");

const { isAuthorized } = require("../../middlewares/authMiddlewares");

tagsRouter.get("/", tagsController.getAllTags);
tagsRouter.post("/", isAuthorized, tagsController.addTag);

module.exports = tagsRouter;
