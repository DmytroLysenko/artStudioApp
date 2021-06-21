const { Schema } = require("mongoose");

module.exports = new Schema({
  email: {
    type: String,
    required: true,
    validate: validateEmail,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: null,
  },
  access: {
    type: String,
    default: "low",
    enum: ["high", "low"],
  },
});

function validateEmail(email) {
  const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
  return isValid;
}
