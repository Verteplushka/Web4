import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/users";

export const checkUser = ({ login, password }) =>
  axios.post(REST_API_BASE_URL, {
    requestType: 1,
    login: login,
    password: password,
  });

export const addUser = ({ login, password }) =>
  axios.post(REST_API_BASE_URL, {
    requestType: 0,
    login: login,
    password: password,
  });
