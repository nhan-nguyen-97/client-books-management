import { call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { redirect } from "react-router-dom";

import * as types from "../actions/actionTypes";
import {
  registerCustomerError,
  registerCustomerSuccess,
} from "../actions/customerActions";
import { register } from "../apis/customerApis";
import { ToastError, ToastSuccess } from "../../components/Toast";

function* onRegisterCustomerStartAsync({ payload }) {
  try {
    const response = yield call(register, payload);
    if (response.status === 200) {
      yield delay(200);
      yield put(registerCustomerSuccess(response.data));
      ToastSuccess(response.data);
      return redirect("/login");
    }
  } catch (error) {
    yield put(registerCustomerError(error.response.data));
    ToastError(error.response.data);
  }
}

function* onRegisterCustomer() {
  yield takeLatest(types.REGISTER_CUSTOMER_START, onRegisterCustomerStartAsync);
}

export default function* customerSagas() {
  yield fork(onRegisterCustomer);
}
