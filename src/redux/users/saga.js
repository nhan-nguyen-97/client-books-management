import {
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import * as types from "./actionTypes";
import {
  createUserApi,
  getListUsers,
  updateUserApi,
  deleteUserApi,
} from "../apis/userApis";
import {
  createUserError,
  createUserSuccess,
  loadUsersError,
  loadUsersStart,
  loadUsersSuccess,
  updateUserSuccess,
  updateUserError,
  deleteUserSuccess,
  deleteUserError,
} from "./actions";
import { ToastError, ToastSuccess } from "../../components/Toast";

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(getListUsers);
    if (response.status === 200) {
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.response.data));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onCreateUserStartAsync({ payload }, callback) {
  try {
    const response = yield call(createUserApi, payload);
    if (response.status === 200) {
      yield put(createUserSuccess());
      ToastSuccess(response.data);
      yield put(loadUsersStart());
      if (callback) {
        callback();
      }
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
    ToastError(error.response.data);
  }
}

function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

function* onUpdateUserStartAsync({ payload: { id, data } }) {
  try {
    const response = yield call(updateUserApi, id, data);
    if (response.status === 200) {
      yield put(updateUserSuccess());
      yield put(loadUsersStart());
      ToastSuccess(response.data);
    }
  } catch (error) {
    yield put(updateUserError(error.response.data));
  }
}

function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

function* onDeleteUserStartAsync(id) {
  try {
    const response = yield call(deleteUserApi, id);
    if (response.status === 200) {
      yield put(deleteUserSuccess(id));
      ToastSuccess(response.data);
      yield put(loadUsersStart());
    }
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

function* onDeleteUser() {
  while (true) {
    const { payload: id } = yield take(types.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, id);
  }
}

export default function* userSagas() {
  yield fork(onLoadUsers);
  yield fork(onCreateUser);
  yield fork(onUpdateUser);
  yield fork(onDeleteUser);
}
