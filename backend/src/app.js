import express from "express";
import cors from "cors";
import config from "./config/config.js";
import path from 'path'

import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middlewares/rateLimiter.js";

const app = express();
const __dirname = path.resolve();

// middleware
if (config.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.use("/api/notes", notesRoutes);

export default app;
