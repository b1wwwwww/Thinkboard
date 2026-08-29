import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../Backend/src/controllers/notesController.js";
import { connectDB } from "../Backend/src/config/db.js";
import rateLimiter from "../Backend/src/middleware/rateLimiter.js";
import Note from "../Backend/src/models/Note.js";

dotenv.config();

const app = express();
let dbReady = false;

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

const ensureDatabaseConnection = async (req, res, next) => {
  if (!dbReady) {
    try {
      await connectDB();
      dbReady = true;
      console.log("MongoDB connected successfully from Vercel API.");
    } catch (error) {
      console.error("Database connection failed:", error.message);
      return res.status(500).json({
        message: "Database connection failed. Please check MONGO_URI.",
      });
    }
  }

  next();
};

app.use(ensureDatabaseConnection);

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
