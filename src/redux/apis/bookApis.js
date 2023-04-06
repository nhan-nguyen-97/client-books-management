import axios from "axios";

import { baseURL } from "./config";

axios.defaults.baseURL = baseURL;

export const loadBooksApi = async () => await axios.get("/dashboard/books");

export const createBookApi = async (data) => await axios.post("/dashboard/books/create", data);

export const updateBookApi = async (id, data) =>
  await axios.put(`/dashboard/books/update/${id}`, data);

export const deleteBookApi = async (id) =>
  await axios.delete(`/dashboard/books/delete/${id}`);
