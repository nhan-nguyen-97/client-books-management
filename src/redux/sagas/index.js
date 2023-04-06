import { all } from "redux-saga/effects";

import bookSaga from "./bookSagas";
import customerSaga from "./customerSagas";
import userSagas from "../users/saga";
import authorSaga from "./authorSagas";
import authSaga from "../auth/saga";

export function* rootSaga() {
  yield all([
    bookSaga(),
    customerSaga(),
    userSagas(),
    authorSaga(),
    authSaga(),
  ]);
}
