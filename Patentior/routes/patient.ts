/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientsService from "../services/patients";
const router = express.Router();
import patentiesData from "../data/patientsData";

router.get("/", (_req, res) => {
  res.send(patientsService.getEntries());
});

router.post("/", (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const addedEntry = patientsService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
    entries: [],
  });
  res.json(addedEntry);
});

router.get("/:id", (req, res) => {
  const patient = patentiesData.find((p) => p.id === req.params.id);

  if (patient) {
    res.send(patient);
  } else {
    res.status(404).send("Patient not found");
  }
});

export default router;
