const { Schema } = require("mongoose");

module.exports = new Schema({
  name: {
    type: String,
    required: true,
  },
  createDate: {
    type: String,
    default: Date.now(),
  },
  images: {
    type: Array,
    default: [],
  },
  description: {
    type: String,
    default: "",
  },
  categoryId: {
    type: String,
    require: true,
  },
  tags: {
    type: Array,
    default: [],
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
});
