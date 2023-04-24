import * as types from "./actionTypes";

const initialState = {
  userCurrent: {},
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_START:
    case types.LOAD_PROFILE_START:
    case types.UPDATE_PROFILE_START:
    case types.CHANGE_PASSWORD_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_USER_SUCCESS:
    case types.LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userCurrent: action.payload,
      };
    case types.UPDATE_PROFILE_SUCCESS:
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.LOGIN_USER_ERROR:
    case types.LOAD_PROFILE_ERROR:
    case types.UPDATE_PROFILE_ERROR:
    case types.CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
