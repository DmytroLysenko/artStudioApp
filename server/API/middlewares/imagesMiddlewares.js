const path = require("path");
const fsPromises = require("fs").promises;
const fs = require("fs");
const {
  uploadFile,
  deleteFile,
  makePublic,
} = require("../helpers/CloudStorage");
const { BadRequest } = require("../helpers/error.constructors");

const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");

async function validateImages(req, res, next) {
  try {
    if (!req.files.length) return next();

    const deteteUplodFiles = () =>
      req.files.forEach((file) => fsPromises.unlink(file.path));

    req.files.forEach((file) => {
      const ext = path.extname(file.originalname).toLowerCase();
      const size = file.size;

      if (!ext) {
        deteteUplodFiles();
        throw new BadRequest("Each file must have extension");
      }
      if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
        deteteUplodFiles();
        throw new BadRequest("Files extension should be: jpg, jpeg, png");
      }
      if (size > 8e7) {
        deteteUplodFiles();
        throw new BadRequest("Separate file size should be less than 10M");
      }
    });

    next();
  } catch (err) {
    next(err);
  }
}

async function minimizeImages(req, res, next) {
  try {
    if (!req.files.length) return next();

    for (let idx = 0; idx < req.files.length; idx++) {
      await imagemin([`server/tmp/${req.files[idx].filename}`], {
        destination: "server/images",
        plugins: [
          imageminJpegtran(),
          imageminPngquant({
            quality: [0.6, 0.8],
          }),
        ],
      });

      await fsPromises.unlink(req.files[idx].path);

      req.files[idx] = {
        ...req.files[idx],
        destination: path.join(__dirname, "../../images"),
        path: path.join(__dirname, "../../images", req.files[idx].filename),
      };
    }

    next();
  } catch (err) {
    next(err);
  }
}

async function saveImages(req, res, next) {
  try {
    if (!req.files.length) return next();

    req.body.images = [];

    for (let idx = 0; idx < req.files.length; idx++) {
      const [_, objStoredFile] = await uploadFile(req.files[idx]);

      await makePublic(objStoredFile);

      req.body.images.push(objStoredFile);

      await fsPromises.unlink(req.files[idx].path);
    }
    next();
  } catch (err) {
    next(err);
  }
}

async function deleteImage(req, res, next) {
  try {
    const image = req.image;

    await deleteFile(image);
    next();
  } catch (err) {
    next(err);
  }
}

async function deleteProjectImages(req, res, next) {
  try {
    const { images } = req.project;

    for (let i = 0; i < images.length; i++) {
      await deleteFile(images[i]);
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  validateImages,
  minimizeImages,
  saveImages,
  deleteImage,
  deleteProjectImages,
};
