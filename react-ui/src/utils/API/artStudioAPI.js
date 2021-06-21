import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/"
    : "https://afternoon-wave-09782.herokuapp.com/api/";
    

export const loginUser = (credentials) => {
  return axios.post("/auth/login", credentials);
};

export const logoutUser = () => {
  return axios.post("/auth/logout", null);
};

export const getUser = () => {
  return axios.get("/users");
};

export const getProjectsAll = () => {
  return axios.get("/projects/all");
};

export const getProjectsPublished = () => {
  return axios.get("/projects/published");
};

export const getProjectById = (id) => {
  return axios.get(`/projects/${id}`);
};

export const createProject = (projectData) => {
  return axios.post(`/projects`, projectData);
};

export const deleteProjectById = (id) => {
  return axios.delete(`/projects/${id}`);
};

export const deleteImageByGenInProjectWithId = ({ projectId, imageGen }) => {
  return axios.delete(`/projects/${projectId}/images/${imageGen}`);
};

export const addImagesToProjectWithId = ({ images, projectId }) => {
  const formData = new FormData();

  if (images.length > 0) {
    images.forEach((image) => formData.append("images", image, image.filename));
  }

  return axios({
    method: "POST",
    url: `/projects/${projectId}/images/`,
    headers: { "Content-Type": "multipart/form-data" },
    data: formData,
  });
};

export const setTagsToProjectWithId = ({ tags, projectId }) => {
  return axios.post(`/projects/${projectId}/tags/`, { tags });
};

export const setDescriptionToProjectWithId = ({ description, projectId }) => {
  return axios.post(`/projects/${projectId}/description/`, { description });
};

export const setCategoryToProjectWithId = ({ category, projectId }) => {
  return axios.post(`/projects/${projectId}/category/`, { category });
};

export const setProjectPublishById = ({ publish, projectId }) => {
  return axios.post(`/projects/${projectId}/publish/`, { publish });
};

export const setProjectNameById = ({ name, projectId }) => {
  return axios.post(`/projects/${projectId}/name/`, { name });
};

export const getTags = () => {
  return axios.get(`/tags`);
};

export const addTag = (tag) => {
  return axios.post(`/tags`, { tag });
};

export const getCategories = () => {
  return axios.get(`/categories`);
};

export const addCategory = (category) => {
  return axios.post(`/categories`, { category });
};
