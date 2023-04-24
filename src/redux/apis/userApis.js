import axios from "axios";

import { baseURL } from "./config";

axios.defaults.baseURL = baseURL;

export const login = async (info) =>
  await axios.post("/dashboard/users/login", info);

export const loadProfile = async (id) =>
  await axios.get(`/dashboard/users/profile/${id}`);

export const updateProfile = async (id, data) =>
  await axios.put(`/dashboard/users/profile/update/${id}`, data);

export const getListUsers = async () => await axios.get("/dashboard/users");

export const createUserApi = async (data) =>
  await axios.post("/dashboard/users/create", data);

export const updateUserApi = async (id, data) =>
  await axios.put(`/dashboard/users/update/${id}`, data);

export const deleteUserApi = async (id) =>
  await axios.delete(`/dashboard/users/delete/${id}`);

export const changePassword = async (id, data) =>
  await axios.put(`/dashboard/users/profile/changePassword/${id}`, data);

export const resetPasswordApi = async (id, data) =>
  await axios.put(`/dashboard/users/resetPassword/${id}`, data);
