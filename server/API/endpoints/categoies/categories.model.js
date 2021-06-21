const mongoose = require("mongoose");
const categoriesSchema = require("./categories.schema");

categoriesSchema.statics.getAllCategories = getAllCategories;
categoriesSchema.statics.addNewCategory = addNewCategory;
categoriesSchema.statics.isValid = isValid;

module.exports = mongoose.model("Categorie", categoriesSchema);

async function getAllCategories() {
  try {
    const allCategories = await this.find();
    return allCategories;
  } catch (err) {
    throw err;
  }
}

async function addNewCategory(category) {
  try {
    const newCategory = new this({ name: category });
    newCategory.save();
    return newCategory;
  } catch (err) {
    throw err;
  }
}

async function isValid(id) {
  try {
    const category = await this.findById(id);
    return category ? true : false;
  } catch (err) {
    throw err;
  }
}
