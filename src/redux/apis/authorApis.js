import axios from "axios";

import { baseURL } from "./config";

axios.defaults.baseURL = baseURL;

export const loadAuthorsApi = async () => await axios.get("/dashboard/authors");

export const createAuthorApi = async (data) =>
  await axios.post("/dashboard/authors/create", data);

export const updateAuthorApi = async (id, data) =>
  await axios.put(`/dashboard/authors/update/${id}`, data);

export const deleteAuthorApi = async (id) =>
  await axios.delete(`/dashboard/authors/delete/${id}`);
