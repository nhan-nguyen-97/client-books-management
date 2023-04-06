import {
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import * as types from "../actions/actionTypes";
import {
  createAuthorError,
  createAuthorSuccess,
  loadAuthorsError,
  loadAuthorsSuccess,
  updateAuthorSuccess,
  updateAuthorError,
  deleteAuthorSuccess,
  deleteAuthorError,
  loadAuthorsStart,
} from "../actions/authorActions";
import {
  loadAuthorsApi,
  createAuthorApi,
  updateAuthorApi,
  deleteAuthorApi,
} from "../apis/authorApis";
import { ToastSuccess } from "../../components/Toast";

function* onLoadAuthorsStartAsync() {
  try {
    const response = yield call(loadAuthorsApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadAuthorsSuccess(response.data));
    }
  } catch (error) {
    yield put(loadAuthorsError(error.response.data));
  }
}

function* onLoadAuthors() {
  yield takeEvery(types.LOAD_AUTHORS_START, onLoadAuthorsStartAsync);
}

function* onCreateAuthorStartAsync({ payload }) {
  try {
    const response = yield call(createAuthorApi, payload);
    if (response.status === 200) {
      yield put(createAuthorSuccess(response.data));
      yield put(loadAuthorsStart());

      ToastSuccess(response.data);
    }
  } catch (error) {
    yield put(createAuthorError(error.response.data));
  }
}

function* onCreateAuthor() {
  yield takeLatest(types.CREATE_AUTHOR_START, onCreateAuthorStartAsync);
}

function* onUpdateAuthorStartAsync({ payload: { id, data } }) {
  try {
    const response = yield call(updateAuthorApi, id, data);
    if (response.status === 200) {
      yield put(updateAuthorSuccess());
      yield put(loadAuthorsStart());
      ToastSuccess(response.data);
    }
  } catch (error) {
    yield put(updateAuthorError(error.response.data));
  }
}

function* onUpdateAuthor() {
  yield takeLatest(types.UPDATE_AUTHOR_START, onUpdateAuthorStartAsync);
}

function* onDeleteAuthorStartAsync(id) {
  try {
    const response = yield call(deleteAuthorApi, id);
    if (response.status === 200) {
      yield put(deleteAuthorSuccess(id));
      ToastSuccess(response.data);
      yield put(loadAuthorsStart());
    }
  } catch (error) {
    yield put(deleteAuthorError(error.response.data));
  }
}

function* onDeleteAuthor() {
  while (true) {
    const { payload: id } = yield take(types.DELETE_AUTHOR_START);
    yield call(onDeleteAuthorStartAsync, id);
  }
}

export default function* authorSagas() {
  yield fork(onLoadAuthors);
  yield fork(onCreateAuthor);
  yield fork(onUpdateAuthor);
  yield fork(onDeleteAuthor);
}
