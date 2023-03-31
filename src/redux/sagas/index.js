import { all } from "redux-saga/effects";

import bookSaga from "./bookSagas";
import customerSaga from "./customerSagas";

export function* rootSaga() {
  yield all([bookSaga(), customerSaga()]);
}
