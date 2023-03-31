import { all } from "redux-saga/effects";
import bookSaga from "./bookSagas";

export function* rootSaga() {
  yield all([bookSaga()]);
}
