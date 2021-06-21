const Tags = require("./tags.model");

async function getAllTags(req, res, next) {
  try {
    const allTags = await Tags.getAllTags();

    return res.status(200).json(allTags);
  } catch (err) {
    next(err);
  }
}

async function addTag(req, res, next) {
  try {
    const { tag } = req.body;
    const newTag = await Tags.addTag(tag);
    res.status(200).json(newTag);
  } catch (err) {
    next(err);
  }
}
// TODO: Take account if deleting tag present in some project
async function deleteTag(req, res, next) {
  try {
    const { tagId } = req.params;
    const deletedTag = await Tags.delete(tagId);
    res.status(200).json(deletedTag);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllTags,
  addTag,
  deleteTag,
};
