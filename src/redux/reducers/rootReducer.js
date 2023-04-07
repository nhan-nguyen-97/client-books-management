import { combineReducers } from "redux";

import authorsReducer from "./authorsReducer";
import booksReducer from "./booksReducer";
import customersReducer from "../customers/reducer";
import usersReducer from "../users/reducer";
import authReducer from "../auth/reducer";

const rootReducer = combineReducers({
  userCurrent: authReducer,
  books: booksReducer,
  customers: customersReducer,
  authors: authorsReducer,
  users: usersReducer,
});

export default rootReducer;
