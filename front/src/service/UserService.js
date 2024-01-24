import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/users";

export const checkUser = ({ login, password }) =>
  axios.post(REST_API_BASE_URL + "/logIn", {
    login: login,
    password: password,
  });

export const addUser = ({ login, password }) =>
  axios.post(REST_API_BASE_URL + "/signIn", {
    login: login,
    password: password,
  });
