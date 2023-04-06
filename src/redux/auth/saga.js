import { call, fork, put, take, takeLatest } from "redux-saga/effects";

import * as types from "./actionTypes";
import {
  loadProfileError,
  loadProfileSuccess,
  loginUserError,
  loginUserSuccess,
  updateProfileError,
  updateProfileSuccess,
} from "./actions";
import { loadProfile, login, updateProfile } from "../apis/userApis";
import { ToastError, ToastSuccess } from "../../components/Toast";

function* onLoginUserStartAsync({ payload, callback }) {
  try {
    const response = yield call(login, payload);
    if (response.status === 200) {
      yield put(loginUserSuccess(response.data));
      localStorage.setItem("user_profile", JSON.stringify(response.data));
      localStorage.setItem("token", JSON.stringify(response.data._id));
      if (callback) {
        callback();
      }
    }
  } catch (error) {
    yield put(loginUserError(error.response.data));
    ToastError(error.response.data);
  }
}

function* onLoginUser() {
  yield takeLatest(types.LOGIN_USER_START, onLoginUserStartAsync);
}

function* onLoadProfileStartAsync(id) {
  try {
    const response = yield call(loadProfile, id);
    if (response.status === 200) {
      yield put(loadProfileSuccess(response.data));
      localStorage.setItem("user_profile", JSON.stringify(response.data));
    }
  } catch (error) {
    yield put(loadProfileError(error.response.data));
  }
}

function* onLoadProfile() {
  while (true) {
    const { payload: id } = yield take(types.LOAD_PROFILE_START);
    yield call(onLoadProfileStartAsync, id);
  }
}

function* onUpdateProfileStartAsync({ payload: { id, data } }, callback) {
  try {
    const response = yield call(updateProfile, id, data);
    if (response.status === 200) {
      yield put(updateProfileSuccess());
      ToastSuccess(response.data);
      if (callback) {
        callback();
      }
    }
  } catch (error) {
    yield put(updateProfileError(error.response.data));
  }
}

function* onUpdateProfile() {
  yield takeLatest(types.UPDATE_PROFILE_START, onUpdateProfileStartAsync);
}

export default function* authSagas() {
  yield fork(onLoginUser);
  yield fork(onLoadProfile);
  yield fork(onUpdateProfile);
}
