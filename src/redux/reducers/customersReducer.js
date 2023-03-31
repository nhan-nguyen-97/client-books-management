import * as types from "../actions/actionTypes";

const initialState = {
  customerInfo: [],
  loading: false,
  error: null,
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_CUSTOMER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.REGISTER_CUSTOMER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default customersReducer;
