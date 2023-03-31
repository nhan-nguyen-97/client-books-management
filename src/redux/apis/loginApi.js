import axios from "axios";

import { baseURL } from "./config";

axios.defaults.baseURL = baseURL;

export const login = async (info) => await axios.post("/login", info);
