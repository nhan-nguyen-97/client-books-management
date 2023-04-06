import * as types from "./actionTypes";

export const loadUserByIdStart = (id) => ({
  type: types.LOAD_USER_BY_ID_START,
  payload: id,
});

export const loadUserByIdSuccess = (id) => ({
  type: types.LOAD_USER_BY_ID_SUCCESS,
  payload: id,
});

export const loadUserByIdError = (error) => ({
  type: types.LOAD_USER_BY_ID_ERROR,
  payload: error,
});

