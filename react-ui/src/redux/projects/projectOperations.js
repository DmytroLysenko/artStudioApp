import {
  getAllProjectsRequest,
  getAllProjectsSuccess,
  getAllProjectsError,
  getPublishedProjectsRequest,
  getPublishedProjectsSuccess,
  getPublishedProjectsError,
  getProjectByIdRequest,
  getProjectByIdSuccess,
  getProjectByIdError,
  createProjectRequest,
  createProjectSuccess,
  createProjectError,
  addImagesToProjectRequest,
  addImagesToProjectSuccess,
  addImagesToProjectError,
  setTagsToProjectRequest,
  setTagsToProjectSuccess,
  setTagsToProjectError,
  setDescriptionToProjectRequest,
  setDescriptionToProjectSuccess,
  setDescriptionToProjectError,
  setCategoryToProjectRequest,
  setCategoryToProjectSuccess,
  setCategoryToProjectError,
  setProjectPublishRequest,
  setProjectPublishSuccess,
  setProjectPublishError,
  setProjectNameRequest,
  setProjectNameSuccess,
  setProjectNameError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  deleteImageByGenRequest,
  deleteImageByGenSuccess,
  deleteImageByGenError,
} from "./projectActions";

import {
  getProjectsAll,
  getProjectsPublished,
  getProjectById,
  createProject,
  deleteProjectById,
  deleteImageByGenInProjectWithId,
  addImagesToProjectWithId,
  setTagsToProjectWithId,
  setDescriptionToProjectWithId,
  setCategoryToProjectWithId,
  setProjectPublishById,
  setProjectNameById,
} from "../../utils/API/artStudioAPI";

export const getAllProjects = () => (dispatch) => {
  dispatch(getAllProjectsRequest());
  getProjectsAll()
    .then((response) => {
      dispatch(getAllProjectsSuccess(response.data));
    })
    .catch((err) => dispatch(getAllProjectsError(err.message)));
};

export const getPublishedProjects = () => (dispatch) => {
  dispatch(getPublishedProjectsRequest());
  getProjectsPublished()
    .then((response) => {
      dispatch(getPublishedProjectsSuccess(response.data));
    })
    .catch((err) => dispatch(getPublishedProjectsError(err.message)));
};

// TODO: Check use this operation
export const getOneProjectById = (id) => (dispatch) => {
  dispatch(getProjectByIdRequest());
  getProjectById(id)
    .then((response) => {
      dispatch(getProjectByIdSuccess(response.data));
    })
    .catch((err) => dispatch(getProjectByIdError(err.message)));
};

export const createNewProject = (projectData) => (dispatch) => {
  dispatch(createProjectRequest());
  createProject(projectData)
    .then((response) => {
      dispatch(createProjectSuccess(response.data));
    })
    .catch((err) => dispatch(createProjectError(err.message)));
};

export const deleteProject =
  ({ projectId }) =>
  (dispatch) => {
    dispatch(deleteProjectRequest());
    deleteProjectById(projectId)
      .then((response) => {
        dispatch(deleteProjectSuccess(response.data));
      })
      .catch((err) => dispatch(deleteProjectError(err.message)));
  };

export const addImagesToProject =
  ({ images, projectId }) =>
  (dispatch) => {
    dispatch(addImagesToProjectRequest());
    addImagesToProjectWithId({ images, projectId })
      .then((response) => {
        dispatch(addImagesToProjectSuccess(response.data));
      })
      .catch((err) => dispatch(addImagesToProjectError(err.message)));
  };

export const setTagsToProject =
  ({ tags, projectId }) =>
  (dispatch) => {
    dispatch(setTagsToProjectRequest());
    setTagsToProjectWithId({ tags, projectId })
      .then((response) => {
        dispatch(setTagsToProjectSuccess(response.data));
      })
      .catch((err) => dispatch(setTagsToProjectError(err.message)));
  };

export const setDescriptionToProject =
  ({ description, projectId }) =>
  (dispatch) => {
    dispatch(setDescriptionToProjectRequest());
    setDescriptionToProjectWithId({ description, projectId })
      .then((response) => {
        dispatch(setDescriptionToProjectSuccess(response.data));
      })
      .catch((err) => dispatch(setDescriptionToProjectError(err.message)));
  };

export const setCategoryToProject =
  ({ category, projectId }) =>
  (dispatch) => {
    dispatch(setCategoryToProjectRequest());
    setCategoryToProjectWithId({ category, projectId })
      .then((response) => {
        dispatch(setCategoryToProjectSuccess(response.data));
      })
      .catch((err) => dispatch(setCategoryToProjectError(err.message)));
  };

export const setProjectPublish =
  ({ publish, projectId }) =>
  (dispatch) => {
    dispatch(setProjectPublishRequest());
    setProjectPublishById({ publish, projectId })
      .then((response) => {
        dispatch(setProjectPublishSuccess(response.data));
      })
      .catch((err) => dispatch(setProjectPublishError(err.message)));
  };

export const setProjectName =
  ({ name, projectId }) =>
  (dispatch) => {
    dispatch(setProjectNameRequest());
    setProjectNameById({ name, projectId })
      .then((response) => {
        dispatch(setProjectNameSuccess(response.data));
      })
      .catch((err) => dispatch(setProjectNameError(err.message)));
  };

export const deleteImageByGen =
  ({ projectId, imageGen }) =>
  (dispatch) => {
    dispatch(deleteImageByGenRequest());
    deleteImageByGenInProjectWithId({ projectId, imageGen })
      .then((response) => {
        dispatch(deleteImageByGenSuccess(response.data));
      })
      .catch((err) => dispatch(deleteImageByGenError(err.message)));
  };
