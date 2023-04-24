import { all } from "redux-saga/effects";

import bookSaga from "../books/saga";
import customerSagas from "../customers/saga";
import userSagas from "../users/saga";
import authorSaga from "../authors/saga";
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
