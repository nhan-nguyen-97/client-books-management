import createSagaMiddleware from "@redux-saga/core";
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";

import { rootSaga } from "./sagas";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store;
