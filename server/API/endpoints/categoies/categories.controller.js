const Categories = require("./categories.model");

async function getAllCategories(req, res, next) {
  try {
    const allCategories = await Categories.getAllCategories();

    return res.status(200).json(allCategories);
  } catch (err) {
    next(err);
  }
}

async function addNewCategory(req, res, next) {
  try {
    const { category } = req.body;
    const newCategory = await Categories.addNewCategory(category);
    res.status(200).json(newCategory);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllCategories,
  addNewCategory,
};
