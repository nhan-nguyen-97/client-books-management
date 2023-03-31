import * as types from "./actionTypes";

export const registerCustomerStart = (info) => ({
  type: types.REGISTER_CUSTOMER_START,
  payload: info,
});

export const registerCustomerSuccess = () => ({
  type: types.REGISTER_CUSTOMER_SUCCESS,
});

export const registerCustomerError = (error) => ({
  type: types.REGISTER_CUSTOMER_ERROR,
  payload: error,
});
