const { Schema } = require("mongoose");

module.exports = new Schema({
  name: {
    type: String,
    required: true,
    min: [3, "Too few characters"],
  },
});
