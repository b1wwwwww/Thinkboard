import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../Backend/src/controllers/notesController.js";
import { connectDB } from "../Backend/src/config/db.js";
import rateLimiter from "../Backend/src/middleware/rateLimiter.js";
import Note from "../Backend/src/models/Note.js";

dotenv.config();

const app = express();

// Middleware untuk mengizinkan origin dari Vercel dan localhost.
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(rateLimiter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "ThinkBoard API is running" });
});

app.get("/api/notes", getAllNotes);
app.get("/api/notes/:id", getNoteById);
app.post("/api/notes", createNote);
app.put("/api/notes/:id", updateNote);
app.delete("/api/notes/:id", deleteNote);

export default app;

export const config = {
  runtime: "nodejs",
};

if (process.env.NODE_ENV !== "production") {
  connectDB()
    .then(() => {
      const PORT = process.env.PORT || 5001;
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("Failed to start server due to DB connection error:", err.message);
      process.exit(1);
    });
}
