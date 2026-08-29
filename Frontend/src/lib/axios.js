import axios from "axios";

// Untuk mode development tetap pakai server lokal.
// Untuk deploy Vercel, gunakan base URL dari environment atau fallback ke /api.
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api");

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;