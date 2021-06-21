const { Router } = require("express");

const usersRouter = Router();

const {
  isAuthorized,
  validateAuthData,
} = require("../../middlewares/authMiddlewares");
const { createUser, currentUser, changeUserPassword } = require("../users/users.controller");

usersRouter.post("/", isAuthorized, createUser);
usersRouter.get("/", isAuthorized, currentUser);
usersRouter.patch("/password", isAuthorized, validateAuthData, changeUserPassword);

module.exports = usersRouter;
