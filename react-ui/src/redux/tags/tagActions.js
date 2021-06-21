import { createAction } from "@reduxjs/toolkit";

export const getAllTagsRequest = createAction("tags/getAllRequest");
export const getAllTagsSuccess = createAction("tags/getAllSuccess");
export const getAllTagsError = createAction("tags/getAllError");

export const addNewTagRequest = createAction("tags/addNewRequest");
export const addNewTagSuccess = createAction("tags/addNewSuccess");
export const addNewTagError = createAction("tags/addNewError");

export const selectTag = createAction("tags/select");
