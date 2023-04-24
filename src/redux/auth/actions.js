import * as types from "./actionTypes";

export const loginUserStart = (info, callback = null) => ({
  type: types.LOGIN_USER_START,
  payload: info,
  callback,
});

export const loginUserSuccess = (userInfo) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: userInfo,
});

export const loginUserError = (error) => ({
  type: types.LOGIN_USER_ERROR,
  payload: error,
});

export const loadProfileStart = (id) => ({
  type: types.LOAD_PROFILE_START,
  payload: id,
});

export const loadProfileSuccess = (data) => ({
  type: types.LOAD_PROFILE_SUCCESS,
  payload: data,
});

export const loadProfileError = (error) => ({
  type: types.LOAD_PROFILE_ERROR,
  payload: error,
});

export const updateProfileStart = (userInfo, callback = null) => ({
  type: types.UPDATE_PROFILE_START,
  payload: userInfo,
  callback,
});

export const updateProfileSuccess = () => ({
  type: types.UPDATE_PROFILE_SUCCESS,
});

export const updateProfileError = (error) => ({
  type: types.UPDATE_PROFILE_ERROR,
  payload: error,
});

export const changePasswordStart = (data) => ({
  type: types.CHANGE_PASSWORD_START,
  payload: data,
});

export const changePasswordSuccess = () => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
});

export const changePasswordError = (error) => ({
  type: types.CHANGE_PASSWORD_ERROR,
  payload: error,
});
