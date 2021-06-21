const { Router } = require("express");
const upload = require("../../middlewares/multer");

const imagesMiddlewares = require("../../middlewares/imagesMiddlewares");
const projectsMiddlewares = require("../../middlewares/projectsMiddlewares");
const authMiddlewares = require("../../middlewares/authMiddlewares");
const validateMiddlewares = require("../../middlewares/validateMiddlewares");
const projectControllers = require("./projects.controller");

const projectsRouter = Router();

// ==============================================
// Project(s)
{
  projectsRouter.get(
    "/all",
    authMiddlewares.isAuthorized,
    projectControllers.getAllProjects
  );

  projectsRouter.get("/published", projectControllers.getPublishedProjects);

  // TODO: take account: isAuthorized, isPublished?
  projectsRouter.get(
    "/:projectId",
    projectsMiddlewares.validateProjectID,
    // Validate
    projectControllers.getProjectById
  );

  projectsRouter.post(
    "/",
    authMiddlewares.isAuthorized,
    projectsMiddlewares.validateNewProject,
    validateMiddlewares.validateCategoryId,
    projectControllers.addNewProject
  );

  projectsRouter.delete(
    "/:projectId",
    authMiddlewares.isAuthorized,
    projectsMiddlewares.validateProjectID,
    projectsMiddlewares.getCurrentProjectById,
    imagesMiddlewares.deleteProjectImages,
    projectControllers.deleteProjectById
  );
}
// ==============================================
// Project Name
{
  projectsRouter.post(
    "/:projectId/name/",
    authMiddlewares.isAuthorized,
    projectsMiddlewares.validateProjectID,
    projectsMiddlewares.getCurrentProjectById,
    validateMiddlewares.validateName,
    projectControllers.setProjectName
  );
}
// ==============================================
// Project Tags
{
  projectsRouter.post(
    "/:projectId/tags/",
    authMiddlewares.isAuthorized,
    projectsMiddlewares.validateProjectID,
    projectsMiddlewares.getCurrentProjectById,
    validateMiddlewares.validateTags,
    projectControllers.setProjectTags
  );
}
// ==============================================
// Project Discription
{
  projectsRouter.post(
    "/:projectId/description/",
    authMiddlewares.isAuthorized,
    projectsMiddlewares.validateProjectID,
    projectsMiddlewares.getCurrentProjectById,
    validateMiddlewares.validateDescription,
    projectControllers.setProjectDescription
  );
}
// ==============================================
// Project Categories
{
  projectsRouter.post(
    "/:projectId/category/",
    authMiddlewares.isAuthorized,
    projectsMiddlewares.validateProjectID,
    projectsMiddlewares.getCurrentProjectById,
    validateMiddlewares.validateCategoryId,
    projectControllers.setProjectCategory
  );
}
// ==============================================
// Project Publish
{
  projectsRouter.post(
    "/:projectId/publish/",
    authMiddlewares.isAuthorized,
    projectsMiddlewares.validateProjectID,
    projectsMiddlewares.getCurrentProjectById,
    validateMiddlewares.validatePublish,
    projectControllers.setProjectPublish
  );
}
// ==============================================
// Project Images
{
  projectsRouter.delete(
    "/:projectId/images/:imageGen",
    authMiddlewares.isAuthorized,
    projectsMiddlewares.validateProjectID,
    projectsMiddlewares.getCurrentProjectById,
    projectsMiddlewares.getDeletingImage,
    imagesMiddlewares.deleteImage,
    projectControllers.deleteImageByGenInProjectWithId
  );

  projectsRouter.post(
    "/:projectId/images/",
    authMiddlewares.isAuthorized,
    projectsMiddlewares.validateProjectID,
    projectsMiddlewares.getCurrentProjectById,
    upload.array("images", 10),
    imagesMiddlewares.validateImages,
    imagesMiddlewares.minimizeImages,
    imagesMiddlewares.saveImages,
    projectControllers.addImagesToProject
  );
}

module.exports = projectsRouter;
