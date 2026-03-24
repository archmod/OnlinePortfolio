import express from "express";
import cors from "cors";
import path from "path";
import portfolioRouter from "./routes/portfolio";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/portfolio", portfolioRouter);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// In production, serve the built React client
const clientDist = path.join(__dirname, "../../client/dist");
app.use(express.static(clientDist));
app.get("/{*splat}", (_req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
