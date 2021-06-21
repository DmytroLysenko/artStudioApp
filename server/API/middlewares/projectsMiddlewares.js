const Project = require("../endpoints/projects/projects.model");
const Joi = require("joi");
const { isValidObjectId } = require("mongoose");
const { BadRequest } = require("../helpers/error.constructors");
const { validationSchema } = require("../helpers/validationSchema");

const validateProjectID = (req, res, next) => {
  const projectId = req.params.projectId;
  if (!isValidObjectId(projectId)) {
    throw new BadRequest("Invalid ID value");
  }
  next();
};

async function getCurrentProjectById(req, res, next) {
  try {
    const { projectId } = req.params;
    const [project] = await Project.getById(projectId);
    if (!project) throw new BadRequest("invalid project id");
    req.project = project;
    next();
  } catch (err) {
    next(err);
  }
}

async function validateNewProject(req, res, next) {
  try {
    const baseSchema = validationSchema();

    const schema = Joi.object({
      ...baseSchema,
      name: baseSchema.name.required(),
      categoryId: baseSchema.categoryId.required(),
    });

    const validationResult = schema.validate(req.body, { abortEarly: false });

    if (validationResult.error) {
      throw new BadRequest(validationResult.error.message);
    }
    next();
  } catch (err) {
    next(err);
  }
}

async function getDeletingImage(req, res, next) {
  try {
    const project = req.project;

    const deletingImage = project.images.find(
      (image) => image.generation === req.params.imageGen
    );

    req.image = deletingImage;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  validateProjectID,
  getCurrentProjectById,
  getDeletingImage,
  validateNewProject,
};
