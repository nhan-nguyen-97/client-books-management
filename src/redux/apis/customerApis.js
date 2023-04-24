import axios from "axios";

import { baseURL } from "./config";

axios.defaults.baseURL = baseURL;

export const register = async (info) =>
  await axios.post("/dashboard/customers/register", info);

export const loadCustomersApi = async () =>
  await axios.get("/dashboard/customers");

export const updateCustomerApi = async (id, data) =>
  await axios.put(`/dashboard/customers/update/${id}`, data);

export const deleteCustomerApi = async (id) =>
  await axios.delete(`/dashboard/customers/delete/${id}`);
