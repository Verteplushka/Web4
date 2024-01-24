import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/dots";

export const listDots = (user) =>
  axios.post(REST_API_BASE_URL + "/getAllDots", user);

export const clear = (user) => axios.post(REST_API_BASE_URL + "/clear", user);

export const addDot = (user, dot) =>
  axios.post(REST_API_BASE_URL + "/createDot", { user: user, dot: dot });
