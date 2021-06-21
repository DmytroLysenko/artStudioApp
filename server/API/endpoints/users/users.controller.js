const User = require("./users.model");
const { Forbidden, BadRequest } = require("../../helpers/error.constructors");

async function createUser(req, res, next) {
  try {
    const user = req.user;
    if (user.access !== "high") {
      throw new Forbidden();
    }

    const { email, password, access = "low" } = req.body;

    const passwordHash = await User.makePasswordHash(password);

    const newUser = new User({
      email,
      password: passwordHash,
      access,
    });

    await newUser.save();

    res.status(201).send();
  } catch (err) {
    next(err);
  }
}

async function currentUser(req, res, next) {
  try {
    const user = req.user;

    const response = {
      email: user.email,
      access: user.access,
    };
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

async function changeUserPassword(req, res, next) {
  try {
    const user = req.user;
    const { password, newPassword } = req.body;

    if (password === newPassword) res.status(200).send();

    const isPasswordValid = await user.isPasswordValid(password);

    if (!isPasswordValid) {
      throw new BadRequest("Wrong current password");
    }

    const newPasswordHash = await User.makePasswordHash(newPassword);

    await user.updateUserPassword(newPasswordHash);

    res.status(200).send();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createUser,
  currentUser,
  changeUserPassword,
};
