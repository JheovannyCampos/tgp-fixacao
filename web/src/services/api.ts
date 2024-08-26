import axios from "axios";

const baseURL = import.meta.env.DEV
  ? "http://localhost:3000"
  : "https://tgp-fixacao-server.vercel.app/";
const api = axios.create({ baseURL });

export default api;
