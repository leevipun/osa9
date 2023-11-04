const express = require("express");
const qs = require("qs");
const app = express();
import calculateBmi from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

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

app.use(express.json());

app.post("/exercises", (req: any, res: any) => {
  const { daily_exercises, target } = req.body;

  if (!target || isNaN(Number(target))) {
    return res.status(400).send({ error: "Target is missing or invalid" });
  }
  if (!daily_exercises || !Array.isArray(daily_exercises)) {
    return res
      .status(400)
      .send({ error: "Daily exercises are missing or invalid" });
  }

  const result = calculateExercises(daily_exercises, target);
  return res.send(result);
});
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
