import { all } from "redux-saga/effects";

import bookSaga from "./bookSagas";
import customerSagas from "../customers/saga";
import userSagas from "../users/saga";
import authorSaga from "./authorSagas";
import authSaga from "../auth/saga";

export function* rootSaga() {
  yield all([
    bookSaga(),
    customerSagas(),
    userSagas(),
    authorSaga(),
    authSaga(),
  ]);
}
