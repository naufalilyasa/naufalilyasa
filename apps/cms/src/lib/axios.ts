import axios from "axios";

const baseUrl =
  import.meta.env.VITE_API_URL ?? "https://naufalilyasa-api.vercel.app";

const api = axios.create({
  baseURL: `${baseUrl}/api`,
  withCredentials: true,
});

export default api;
