import axios from "axios";

import { baseURL } from "./config";

axios.defaults.baseURL = baseURL;

export const loginAdmin = async (info) => await axios.post("/users/login", info);
