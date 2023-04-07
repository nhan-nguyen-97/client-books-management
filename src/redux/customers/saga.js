import { call, fork, put, takeEvery } from "redux-saga/effects";

import * as types from "./actionTypes";
import { loadCustomersApi } from "../apis/customerApis";
import { loadCustomersError, loadCustomersSuccess } from "./actions";
// import { ToastError, ToastSuccess } from "../../components/Toast";

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

export default function* customerSagas() {
  yield fork(onLoadCustomer);
}
