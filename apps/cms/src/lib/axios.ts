import axios from "axios";

const baseUrl = import.meta.env.SERVER_URL ?? "http://localhost:3003";

const api = axios.create({
  baseURL: `${baseUrl}/api`,
  withCredentials: true,
});

export default api;
