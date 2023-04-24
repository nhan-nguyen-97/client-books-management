import * as types from "./actionTypes";

export const loadCustomersStart = () => ({
  type: types.LOAD_CUSTOMERS_START,
});

export const loadCustomersSuccess = (customers) => ({
  type: types.LOAD_CUSTOMERS_SUCCESS,
  payload: customers,
});

export const loadCustomersError = (error) => ({
  type: types.LOAD_CUSTOMERS_ERROR,
  payload: error,
});

export const registerCustomerStart = (info, callback = null) => ({
  type: types.REGISTER_CUSTOMER_START,
  payload: info,
  callback,
});

export const registerCustomerSuccess = () => ({
  type: types.REGISTER_CUSTOMER_SUCCESS,
});

export const registerCustomerError = (error) => ({
  type: types.REGISTER_CUSTOMER_ERROR,
  payload: error,
});

export const updateCustomerStart = (data) => ({
  type: types.UPDATE_CUSTOMER_START,
  payload: data,
});

export const updateCustomerSuccess = () => ({
  type: types.UPDATE_CUSTOMER_SUCCESS,
});

export const updateCustomerError = (error) => ({
  type: types.UPDATE_CUSTOMER_SUCCESS,
  payload: error,
});

export const deleteCustomerStart = (id) => ({
  type: types.DELETE_CUSTOMER_START,
  payload: id,
});

export const deleteCustomerSuccess = (id) => ({
  type: types.DELETE_CUSTOMER_SUCCESS,
  payload: id,
});

export const deleteCustomerError = (error) => ({
  type: types.DELETE_CUSTOMER_ERROR,
  payload: error,
});
