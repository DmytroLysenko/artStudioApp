const { isValidObjectId } = require("mongoose");
const Categories = require("../endpoints/categoies/categories.model");
const Tags = require("../endpoints/tags/tags.model");
const Joi = require("joi");

const { BadRequest } = require("../helpers/error.constructors");

const validateId = (req, res, next) => {
  const id = req.params.id;
  if (!isValidObjectId(id)) {
    throw new BadRequest("Invalid ID value");
  }
  next();
};

async function validateName(req, res, next) {
  try {
    const { name } = req.body;
    if (!Object.keys(req.body).includes("name"))
      throw new BadRequest("request body must contain the 'name' field");
    if (typeof name !== "string")
      throw new BadRequest("name must be string type");
    if (name.length < 3)
      throw new BadRequest("name length must be at least 3 characters");
    next();
  } catch (err) {
    next(err);
  }
}

async function validatePublish(req, res, next) {
  try {
    const { publish } = req.body;
    if (!Object.keys(req.body).includes("publish"))
      throw new BadRequest("request body must contain the 'publish' field");
    if (typeof publish !== "boolean")
      throw new BadRequest("publish must be boolean type");
    next();
  } catch (err) {
    next(err);
  }
}

async function validateDescription(req, res, next) {
  try {
    const { description } = req.body;
    if (!Object.keys(req.body).includes("description"))
      throw new BadRequest("request body must contain the 'description' field");
    if (typeof description !== "string")
      throw new BadRequest("description must be string type");
    next();
  } catch (err) {
    next(err);
  }
}

async function validateCategoryId(req, res, next) {
  try {
    const { categoryId } = req.body;

    if (!Categories.isValid(categoryId))
      throw new BadRequest("invalid category");

    next();
  } catch (err) {
    next(err);
  }
}

async function validateNewCategory(req, res, next) {
  try {
    const { category } = req.body;

    if (!Object.keys(req.body).includes("category"))
      throw new BadRequest("request body must contain the 'category' field");

    if (typeof category !== "string")
      throw new BadRequest("category must be string type");

    if (category.length < 3)
      throw new BadRequest("category length must be at least 3 characters");

    next();
    // TODO: connect Joi for validation
    // const validateSchema = Joi.object({
    //   subscription: Joi.string().valid("free", "pro", "premium").required(),
    // });

    // const validateResult = validateSchema.validate(req.body, {
    //   abortEarly: false,
    // });
    // if (validateResult.error) {
    //   throw new BadRequest(validateResult.error.message);
    // }
  } catch (err) {
    next(err);
  }
}

async function validateTags(req, res, next) {
  try {
    const { tags } = req.body;

    if (!Object.keys(req.body).includes("tags"))
      throw new BadRequest("request body must contain the 'tags' field");

    if (!Array.isArray(tags)) throw new BadRequest("tags must be array type");

    tags.forEach((tag) => {
      if (!Tags.isValid(tag)) throw new BadRequest("invalid tag");
    });

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  validateId,
  validateName,
  validatePublish,
  validateDescription,
  validateCategoryId,
  validateNewCategory,
  validateTags,
};
