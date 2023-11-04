const express = require("express");
const qs = require("qs");
const app = express();
import calculateBmi from "./bmiCalculator";

app.get("/ping", (_req: any, res: any) => {
  res.send("pong");
});
app.get("/hello", (_req: any, res: any) => {
  res.send("Hello Full Stack");
});
app.set("query parser", (str: string) => qs.parse(str));

app.get("/bmi", (_req: any, res: any) => {
  const height = _req.query.height;
  const weight = _req.query.weight;

  if (!weight || !height) {
    res.json({ error: "malformatted parameters" });
  } else {
    const bmi = calculateBmi(height, weight);
    res.json({ weight, height, bmi });
  }
});
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
