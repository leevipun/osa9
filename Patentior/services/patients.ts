import patientsData from "../data/patientsData";
import { patientsEntry } from "../types/patientsType";

const getEntries = (): patientsEntry[] => {
  return patientsData;
};

const addDiagnostic = () => {
  return null;
};

export default { getEntries, addDiagnostic };
