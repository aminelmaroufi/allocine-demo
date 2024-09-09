import axios from "axios";
import { API_KEY, baseURL } from "../config";

const adapter = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + API_KEY,
  },
});

export default adapter;
