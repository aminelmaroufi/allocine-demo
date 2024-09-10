import axios from "axios";
import { baseURL } from "../config";

const adapter = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
  },
});

export default adapter;
