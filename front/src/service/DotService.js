import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/dots";

export const listDots = () => axios.get(REST_API_BASE_URL);

export const clear = () => axios.delete(REST_API_BASE_URL);

export const addDot = (dot) => axios.post(REST_API_BASE_URL, dot);
