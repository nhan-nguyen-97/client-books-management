import axios from "axios";

import { baseURL } from "./config";

axios.defaults.baseURL = baseURL;

export const register = async (info) =>
  await axios.post("/customers/register", info);
