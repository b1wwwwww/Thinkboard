import axios from "axios";

// Untuk mode development tetap pakai server lokal.
// Untuk deploy Vercel, frontend dan API berada di domain yang sama.
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
