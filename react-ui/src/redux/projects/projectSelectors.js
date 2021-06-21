import { createSelector } from "@reduxjs/toolkit";

export const getAllProjects = (state) => state.projects.all;

export const getProjectById = (id) =>
  createSelector(getAllProjects, (allProject) =>
    allProject.find((project) => project._id === id)
  );

export const getAllImagesOfProjectWithId = (projectId) =>
  createSelector(getProjectById(projectId), (project) => project.images);

export const getCurrentProject = (state) =>
  state.projects.current ? state.projects.current : null;

export const getImagesOfCurrentProject = (state) =>
  state.projects.current.images;
