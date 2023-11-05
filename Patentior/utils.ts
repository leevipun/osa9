import { isString } from "antd/es/button";
import { newPatientEntry } from "./types/patientsType";

const parseId = (id: unknown): string => {
  if (!id || !isString(id)) {
    throw new Error("Incorrect or missing id");
  }
  return id;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing name");
  }
  return name;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!dateOfBirth || !isString(dateOfBirth)) {
    throw new Error("Incorrect or missing dateOfBirth");
  }
  return dateOfBirth;
};

const parseSsn = (Ssn: unknown): string => {
  if (!Ssn || !isString(Ssn)) {
    throw new Error("Incorrect or missing Ssn");
  }
  return Ssn;
};

const toNewPatientsEntry = (object: unknown): newPatientEntry => {
  const newEntry: newPatientEntry = {};
  return newEntry;
};

export default toNewPatientsEntry;
