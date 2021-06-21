const Projects = require("./projects.model");

async function getAllProjects(req, res, next) {
  try {
    const allProjects = await Projects.getAllProjects();

    return res.status(200).json(allProjects);
  } catch (err) {
    next(err);
  }
}

async function getPublishedProjects(req, res, next) {
  try {
    const publishedProjects = await Projects.getPublishedProjects();

    return res.status(200).json(publishedProjects);
  } catch (err) {
    next(err);
  }
}

async function getProjectById(req, res, next) {
  try {
    const { projectId } = req.params;
    const project = await Projects.getById(projectId);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
}

async function addNewProject(req, res, next) {
  try {
    const newProject = await Projects.addNewProject(req.body);

    res.status(200).json(newProject);
  } catch (err) {
    next(err);
  }
}

async function deleteImageByGenInProjectWithId(req, res, next) {
  try {
    const { imageGen } = req.params;

    const project = await req.project.deleteImageByGen(imageGen);

    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
}

async function addImagesToProject(req, res, next) {
  try {
    const { project } = req;
    const { images } = req.body;

    const updaitingProject = await project.addImages(images);

    res.status(200).json(updaitingProject);
  } catch (err) {
    next(err);
  }
}

async function setProjectTags(req, res, next) {
  try {
    const { tags } = req.body;
    const project = await req.project.setTags(tags);

    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
}

async function setProjectDescription(req, res, next) {
  try {
    const { description } = req.body;
    const project = await req.project.setDescription(description);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
}

async function setProjectPublish(req, res, next) {
  try {
    const { publish } = req.body;
    const project = await req.project.setPublish(publish);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
}

async function setProjectName(req, res, next) {
  try {
    const { name } = req.body;
    const project = await req.project.setName(name);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
}

async function setProjectCategory(req, res, next) {
  try {
    const { category } = req.body;
    const project = await req.project.setCategory(category);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
}

async function deleteProjectById(req, res, next) {
  try {
    const deletedProject = await Projects.deleteById(req.project._id);
    res.status(200).json(deletedProject);
  } catch (err) {
    next(err);
  }
}

async function addProjectImages(req, res, next) {
  try {
    res.status(200).send();
  } catch (err) {
    next(err);
  }
}

async function removeProjectImages(req, res, next) {
  try {
    res.status(200).json({ message: "add images" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllProjects,
  getPublishedProjects,
  getProjectById,
  deleteProjectById,
  addNewProject,
  
  setProjectName,
  setProjectDescription,
  setProjectTags,
  setProjectCategory,
  setProjectPublish,

  deleteImageByGenInProjectWithId,
  addImagesToProject,
  addProjectImages,
  removeProjectImages,
};
