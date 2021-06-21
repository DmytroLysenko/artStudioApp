const { Storage } = require("@google-cloud/storage");
const path = require("path");

const projectId = "artstudio-308713";
const keyFilename = path.join(__dirname, "../../../_storage_key.json");

const storage = new Storage({ projectId, keyFilename });

const bucketName = "artstudio-images";

async function uploadFile(file) {
  try {
    return await storage.bucket(bucketName).upload(file.path, {
      destination: file.filename,
    });
  } catch (err) {
    throw err;
  }
}

async function deleteFile(file) {
  try {
    return await storage.bucket(bucketName).file(file.name).delete();
  } catch (err) {
    throw err;
  }
}

async function makePublic(file) {
  try {
    return await storage.bucket(bucketName).file(file.name).makePublic();
  } catch (err) {
    throw err;
  }
}

module.exports = {
  uploadFile,
  deleteFile,
  makePublic,
};
