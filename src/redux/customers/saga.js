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
  deleteCustomerApi,
  loadCustomersApi,
  updateCustomerApi,
} from "../apis/customerApis";
import { register } from "../apis/customerApis";
import {
  loadCustomersError,
  loadCustomersSuccess,
  registerCustomerSuccess,
  registerCustomerError,
  deleteCustomerSuccess,
  deleteCustomerError,
  loadCustomersStart,
  updateCustomerSuccess,
  updateCustomerError,
} from "./actions";
import { ToastError, ToastSuccess } from "../../components/Toast";

function* onLoadCustomersStartAsync() {
  try {
    const response = yield call(loadCustomersApi);
    if (response.status === 200) {
      yield put(loadCustomersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadCustomersError(error.response.data));
  }
}

function* onLoadCustomer() {
  yield takeEvery(types.LOAD_CUSTOMERS_START, onLoadCustomersStartAsync);
}

function* onRegisterCustomerStartAsync({ payload, callback }) {
  try {
    const response = yield call(register, payload);
    if (response.status === 200) {
      yield put(registerCustomerSuccess());
      ToastSuccess(response.data);
      if (callback) {
        callback();
      }
    }
  } catch (error) {
    yield put(registerCustomerError(error.response.data));
    ToastError(error.response.data);
  }
}

function* onRegisterCustomer() {
  yield takeLatest(types.REGISTER_CUSTOMER_START, onRegisterCustomerStartAsync);
}

function* onUpdateCustomerStartAsync({ payload: { id, data } }) {
  try {
    const response = yield call(updateCustomerApi, id, data);
    if (response.status === 200) {
      yield put(updateCustomerSuccess());
      yield put(loadCustomersStart());
      ToastSuccess(response.data);
    }
  } catch (error) {
    yield put(updateCustomerError(error.response.data));
  }
}

function* onUpdateCustomer() {
  yield takeLatest(types.UPDATE_CUSTOMER_START, onUpdateCustomerStartAsync);
}

function* onDeleteCustomerStartAsync(id) {
  try {
    const response = yield call(deleteCustomerApi, id);
    if (response.status === 200) {
      yield put(deleteCustomerSuccess(id));
      ToastSuccess(response.data);
      yield put(loadCustomersStart());
    }
  } catch (error) {
    yield put(deleteCustomerError(error.response.data));
  }
}

function* onDeleteCustomer() {
  while (true) {
    const { payload: id } = yield take(types.DELETE_CUSTOMER_START);
    yield call(onDeleteCustomerStartAsync, id);
  }
}

export default function* customerSagas() {
  yield fork(onLoadCustomer);
  yield fork(onRegisterCustomer);
  yield fork(onUpdateCustomer);
  yield fork(onDeleteCustomer);
}
