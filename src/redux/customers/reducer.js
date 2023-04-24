import * as types from "./actionTypes";

const initialState = {
  customers: [],
  loading: false,
  error: null,
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_CUSTOMERS_START:
    case types.REGISTER_CUSTOMER_START:
    case types.UPDATE_CUSTOMER_START:
    case types.DELETE_CUSTOMER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_CUSTOMER_SUCCESS:
    case types.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.LOAD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload,
      };
    case types.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    case types.LOAD_CUSTOMERS_ERROR:
    case types.REGISTER_CUSTOMER_ERROR:
    case types.UPDATE_CUSTOMER_ERROR:
    case types.DELETE_CUSTOMER_ERROR:
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
