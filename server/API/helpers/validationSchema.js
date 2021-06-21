const Joi = require("joi");

function validationSchema() {
  const name = Joi.string().min(3).max(30);
  const description = Joi.string().allow('');
  const categoryId = Joi.string();
  return {
    name,
    description,
    categoryId,
  };
}

module.exports = {
  validationSchema,
};
