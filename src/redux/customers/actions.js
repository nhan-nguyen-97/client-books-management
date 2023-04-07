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
