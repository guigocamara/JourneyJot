import axios from "axios";
import { BASE_API_PATH } from "../constants/api";

const api = axios.create({
  baseURL: BASE_API_PATH,
});

export default api;
