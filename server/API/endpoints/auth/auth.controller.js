const User = require("../users/users.model");
const { NotAuthorized } = require("../../helpers/error.constructors");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.getUserByEmail(email);

    if (!user) {
      throw new NotAuthorized("Email or password is wrong");
    }

    const isPasswordValid = await user.isPasswordValid(password);

    if (!isPasswordValid) {
      throw new NotAuthorized("Email or password is wrong");
    }

    const loggedUser = await user.generateAndSaveToken();

    const response = {
      token: loggedUser.token,
      user: {
        email: loggedUser.email,
      },
    };

    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

async function logout(req, res, next) {
  try {
    const user = req.user;
    await user.deleteToken();
    res.status(200).send();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  login,
  logout,
};
