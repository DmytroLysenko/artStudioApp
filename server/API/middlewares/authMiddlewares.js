const Joi = require("joi");

const User = require("../endpoints/users/users.model");
const { NotAuthorized, BadRequest } = require("../helpers/error.constructors");

async function isAuthorized(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new NotAuthorized();
    }

    const [type, token] = authHeader.split(" ");

    const payload = User.getPayloadFromToken(token);

    if (!payload) {
      throw new NotAuthorized();
    }

    const user = await User.findById(payload.id);

    if (!user) {
      throw new NotAuthorized();
    }

    const isTokenEqual = user.isTokenEqual(token);

    if (!isTokenEqual) {
      throw new NotAuthorized();
    }

    req.user = user;

    next();
  } catch {
    next(new NotAuthorized());
  }
}

async function validateAuthData(req, res, next) {
  try {
    const authDataSchema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: true },
      }),
      password: Joi.string().min(5).max(20),
      newPassword: Joi.string().min(5).max(20),
      access: Joi.string().allow("high", "low"),
    });

    const validationResult = authDataSchema.validate(req.body, {
      abortEarly: false,
    });

    if (validationResult.error) {
      throw new BadRequest(validationResult.error.message);
    }

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  isAuthorized,
  validateAuthData,
};
