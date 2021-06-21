const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = process.env.JWT_SECRET;
const costFactor = Number(process.env.BCRYPT_COST_FACTOR);

const userSchema = require("./users.schema");

function makeToken() {
  return jwt.sign({ id: this._id }, JWT_SECRET);
}

userSchema.statics.makePasswordHash = makePasswordHash;
userSchema.statics.getPayloadFromToken = getPayloadFromToken;
userSchema.statics.getUserByEmail = getUserByEmail;

userSchema.methods.generateAndSaveToken = generateAndSaveToken;
userSchema.methods.deleteToken = deleteToken;
userSchema.methods.isTokenEqual = isTokenEqual;
userSchema.methods.isPasswordValid = isPasswordValid;

userSchema.methods.updateUserPassword = updateUserPassword;

async function generateAndSaveToken() {
  try {
    this.token = makeToken.bind(this)();
    await this.save();
    return this;
  } catch (err) {
    throw err;
  }
}

async function deleteToken() {
  try {
    this.token = null;
    await this.save();
    return this;
  } catch (err) {
    throw err;
  }
}

function getPayloadFromToken(token) {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
  } catch {
    return false;
  }
}

function isTokenEqual(token) {
  return token === this.token ? true : false;
}

async function makePasswordHash(password) {
  try {
    const passwordHash = await bcrypt.hash(password, costFactor);
    return passwordHash;
  } catch (error) {
    throw error;
  }
}

async function isPasswordValid(password) {
  try {
    const result = await bcrypt.compare(password, this.password);
    return result ? true : false;
  } catch (error) {
    throw err;
  }
}

async function updateUserPassword(password) {
  try {
    this.password = password;
    await this.save();
    return this;
  } catch (err) {
    throw err;
  }
}

async function getUserByEmail(email) {
  try {
    const user = await this.findOne({ email });
    return user ? user : null;
  } catch (err) {
    nextTick(err);
  }
}

module.exports = mongoose.model("User", userSchema);
