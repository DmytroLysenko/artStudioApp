const mongoose = require("mongoose");
const tagsSchema = require("./tags.schema");

tagsSchema.statics.getAllTags = getAllTags;
tagsSchema.statics.addTag = addTag;
tagsSchema.statics.deleteTag = deleteTag;
tagsSchema.statics.isValid = isValid;

module.exports = mongoose.model("Tag", tagsSchema);

async function getAllTags() {
  try {
    const allTags = await this.find();
    return allTags;
  } catch (err) {
    throw err;
  }
}

async function addTag(tag) {
  try {
    const newTag = new this({ tag });
    newTag.save();
    return newTag;
  } catch (err) {
    throw err;
  }
}

async function deleteTag(tagId) {
  try {
    const deletedTag = await this.findByIdAndRemove(tagId);
    return deletedTag;
  } catch (err) {
    throw err;
  }
}

async function isValid(id) {
  try {
    const tag = await this.findById(id);
    return tag ? true : false;
  } catch (err) {
    throw err;
  }
}
