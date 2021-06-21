import { createSelector } from "@reduxjs/toolkit";

export const isAllTagsLoading = (state) => state.ui.loading.allTags;
export const isAllProjectsLoading = (state) => state.ui.loading.allProjects;
export const isAuthLoading = (state) => state.ui.loading.auth;

export const isLoading = createSelector(
  isAllTagsLoading,
  isAllProjectsLoading,
  isAuthLoading,
  (isAllTagsLoading, isAllProjectsLoading, isAuthLoading) =>
    isAllTagsLoading || isAllProjectsLoading || isAuthLoading ? true : false
);
