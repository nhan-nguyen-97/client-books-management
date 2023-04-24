import {
    call,
    delay,
    fork,
    put,
    take,
    takeEvery,
    takeLatest,
  } from "redux-saga/effects";
  
  import * as types from "./actionTypes";
  import {
    loadBooksSuccess,
    loadBooksError,
    createBookSuccess,
    createBookError,
    updateBookSuccess,
    updateBookError,
    deleteBookSuccess,
    deleteBookError,
    loadBooksStart,
  } from "./actions";
  import {
    loadBooksApi,
    createBookApi,
    updateBookApi,
    deleteBookApi,
  } from "../apis/bookApis";
  import { ToastSuccess } from "../../components/Toast";
  
  function* onLoadBooksStartAsync() {
    try {
      const response = yield call(loadBooksApi);
      if (response.status === 200) {
        yield delay(500);
        yield put(loadBooksSuccess(response.data));
      }
    } catch (error) {
      yield put(loadBooksError(error.response.data));
    }
  }
  
  function* onLoadBooks() {
    yield takeEvery(types.LOAD_BOOKS_START, onLoadBooksStartAsync);
  }
  
  function* onCreateBookStartAsync({ payload }) {
    try {
      const response = yield call(createBookApi, payload);
      if (response.status === 200) {
        yield put(createBookSuccess(response.data));
        yield put(loadBooksStart())
      }
    } catch (error) {
      yield put(createBookError(error.response.data));
    }
  }
  
  function* onCreateBook() {
    yield takeLatest(types.CREATE_BOOK_START, onCreateBookStartAsync);
  }
  
  function* onUpdateBookStartAsync({ payload: { id, data } }) {
    try {
      const response = yield call(updateBookApi, id, data);
      if (response.status === 200) {
        yield put(updateBookSuccess());
        yield put(loadBooksStart());
        ToastSuccess(response.data);
      }
    } catch (error) {
      yield put(updateBookError(error.response.data));
    }
  }
  
  function* onUpdateBook() {
    yield takeLatest(types.UPDATE_BOOK_START, onUpdateBookStartAsync);
  }
  
  function* onDeleteBookStartAsync(id, callback) {
    try {
      const response = yield call(deleteBookApi, id);
      if (response.status === 200) {
        yield put(deleteBookSuccess(id));
        ToastSuccess(response.data);
        yield put(loadBooksStart())
      }
    } catch (error) {
      yield put(deleteBookError(error.response.data));
    }
  }
  
  function* onDeleteBook() {
    while (true) {
      const { payload: id } = yield take(types.DELETE_BOOK_START);
      yield call(onDeleteBookStartAsync, id);
    }
  }
  
  export default function* bookSagas() {
    yield fork(onLoadBooks);
    yield fork(onCreateBook);
    yield fork(onUpdateBook);
    yield fork(onDeleteBook);
  }
  