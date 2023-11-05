import { v1 as uuid } from "uuid";
import patientsData from "../data/patientsData";
import { newPatientEntry, patientsEntry } from "../types/patientsType";

const getEntries = (): patientsEntry[] => {
  return patientsData;
};

const addPatient = (entry: newPatientEntry): patientsEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry,
  };
  patientsData.push(newPatientEntry);
  return newPatientEntry;
};

export default { getEntries, addPatient };
