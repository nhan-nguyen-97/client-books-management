import * as types from "./actionTypes";

export const loadAuthorsStart = () => ({
  type: types.LOAD_AUTHORS_START,
});

export const loadAuthorsSuccess = (authors) => ({
  type: types.LOAD_AUTHORS_SUCCESS,
  payload: authors,
});

export const loadAuthorsError = (error) => ({
  type: types.LOAD_AUTHORS_ERROR,
  payload: error,
});

export const createAuthorStart = (author) => ({
  type: types.CREATE_AUTHOR_START,
  payload: author,
});

export const createAuthorSuccess = () => ({
  type: types.CREATE_AUTHOR_SUCCESS,
});

export const createAuthorError = (error) => ({
  type: types.CREATE_AUTHOR_ERROR,
  payload: error,
});

export const updateAuthorStart = (author) => ({
  type: types.UPDATE_AUTHOR_START,
  payload: author,
});

export const updateAuthorSuccess = () => ({
  type: types.UPDATE_AUTHOR_SUCCESS,
});

export const updateAuthorError = (error) => ({
  type: types.UPDATE_AUTHOR_ERROR,
  payload: error,
});

export const deleteAuthorStart = (id) => ({
  type: types.DELETE_AUTHOR_START,
  payload: id,
});

export const deleteAuthorSuccess = (id) => ({
  type: types.DELETE_AUTHOR_SUCCESS,
  payload: id,
});

export const deleteAuthorError = (error) => ({
  type: types.DELETE_AUTHOR_ERROR,
  payload: error,
});
