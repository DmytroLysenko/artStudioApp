const mongoose = require("mongoose");
const projectsSchema = require("./projects.schema");

projectsSchema.statics.addNewProject = addNewProject;
projectsSchema.statics.getAllProjects = getAllProjects;
projectsSchema.statics.getPublishedProjects = getPublishedProjects;
projectsSchema.statics.getById = getById;
projectsSchema.statics.deleteById = deleteById;

projectsSchema.methods.deleteImageByGen = deleteImageByGen;
projectsSchema.methods.addImages = addImages;
projectsSchema.methods.setTags = setTags;
projectsSchema.methods.setDescription = setDescription;
projectsSchema.methods.setCategory = setCategory;
projectsSchema.methods.setPublish = setPublish;
projectsSchema.methods.setName = setName;

module.exports = mongoose.model("Project", projectsSchema);

async function getAllProjects() {
  try {
    const allProjects = await this.find();
    return allProjects;
  } catch (err) {
    throw err;
  }
}

async function getPublishedProjects() {
  try {
    const publishedProjects = await this.find({ isPublished: true }).exec();
    return publishedProjects;
  } catch (err) {
    throw err;
  }
}

async function getById(id) {
  try {
    const project = await this.find({ _id: id });
    return project;
  } catch (err) {
    throw err;
  }
}

async function addNewProject(projectData) {
  try {
    const newProject = new this(projectData);
    await newProject.save();
    return newProject;

    return projectData;
  } catch (err) {
    throw err;
  }
}

async function deleteById(id) {
  try {
    const deletedProject = await this.findByIdAndRemove(id);
    return deletedProject;
  } catch (err) {
    throw err;
  }
}

async function deleteImageByGen(imageGen) {
  try {
    this.images = this.images.filter((image) => image.generation !== imageGen);
    await this.save();
    return this;
  } catch (err) {
    throw err;
  }
}

async function addImages(images) {
  try {
    this.images = [...this.images, ...images];
    await this.save();
    return this;
  } catch (err) {
    throw err;
  }
}

async function setTags(tags) {
  try {
    this.tags = tags;
    await this.save();
    return this;
  } catch (err) {
    throw err;
  }
}

async function setDescription(description) {
  try {
    this.description = description;
    await this.save();
    return this;
  } catch (err) {
    throw err;
  }
}

async function setCategory(category) {
  try {
    this.category = category;
    await this.save();
    return this;
  } catch (err) {
    throw err;
  }
}

async function setPublish(publish) {
  try {
    this.isPublished = publish;
    await this.save();
    return this;
  } catch (err) {
    throw err;
  }
}

async function setName(name) {
  try {
    this.name = name;
    await this.save();
    return this;
  } catch (err) {
    throw err;
  }
}
