// import { call, fork, put, takeLatest } from "redux-saga/effects";

// import * as types from "../actions/actionTypes";
// import { loginUserError, loginUserSuccess } from "../actions/userActions";
// import { login } from "../apis/userApis";
// import { ToastError } from "../../components/Toast";

// function* onLoginUserStartAsync({ payload, callback }) {
//   try {
//     const response = yield call(login, payload);
//     if (response.status === 200) {
//       yield put(loginUserSuccess(response.data));
//       localStorage.setItem("user_profile", JSON.stringify(response.data));
//       if (callback) {
//         callback();
//       }
//     }
//   } catch (error) {
//     yield put(loginUserError(error.response.data));
//     ToastError(error.response.data);
//   }
// }

// function* onLoginUser() {
//   yield takeLatest(types.LOGIN_USER_START, onLoginUserStartAsync);
// }

// export default function* userSagas() {
//   yield fork(onLoginUser);
// }
