const multer = require("multer");
const path = require("path");

const MAX_FILE_SIZE = 8e7;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../tmp"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname).toLowerCase());
  },
});

module.exports = multer({ storage: storage, fileSize: MAX_FILE_SIZE });
