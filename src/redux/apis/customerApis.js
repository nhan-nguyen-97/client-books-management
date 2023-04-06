import axios from "axios";

import { baseURL } from "./config";

axios.defaults.baseURL = baseURL;

export const register = async (info) =>
  await axios.post("/dashboard/customers/register", info);

export const loadCustomersApi = async () =>
  await axios.get("/dashboard/customers");
