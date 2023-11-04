const express = require("express");
const cors = require("cors"); // Import cors middleware
const app = express();
import diagnosisRouter from "./routes/diagnoses";

app.use(cors()); // Use cors middleware

app.get("/api/ping", (_req: any, res: any) => {
  res.send("pong");
});

app.use("/api/diagnoses", diagnosisRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
