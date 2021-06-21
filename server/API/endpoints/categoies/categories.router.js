const { Router } = require("express");

const categoriesRouter = Router();

const authMiddlewares = require("../../middlewares/authMiddlewares");
const validateMiddlewares = require("../../middlewares/validateMiddlewares");
const categoriesController = require("./categories.controller");

categoriesRouter.get("/", categoriesController.getAllCategories);

categoriesRouter.post(
  "/",
  authMiddlewares.isAuthorized,
  validateMiddlewares.validateNewCategory,
  categoriesController.addNewCategory
);

module.exports = categoriesRouter;
