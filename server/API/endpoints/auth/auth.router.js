const { Router } = require("express");

const authRouter = Router();

const authMiddlewares = require("../../middlewares/authMiddlewares");
const authController = require("./auth.controller");

authRouter.post(
  "/login",
  authMiddlewares.validateAuthData,
  authController.login
);
authRouter.post("/logout", authMiddlewares.isAuthorized, authController.logout);

module.exports = authRouter;
