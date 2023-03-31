import { combineReducers } from "redux";

// import authorsReducer from "./authorsReducer";
import booksReducer from "./booksReducer";
import customersReducer from "./customersReducer";
// import userByIdReducer from "./userByIdReducer";
// import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  // userCurrent: userByIdReducer,
  // users: usersReducer,
  books: booksReducer,
  customers: customersReducer,
  // authors: authorsReducer,
});

export default rootReducer;
