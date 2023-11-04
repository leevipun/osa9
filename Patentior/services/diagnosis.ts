import Diagnosisdata from "../data/diagnosisData";
import { DiagnosisEntry } from "./../types/diagnosesType";

const getEntries = (): DiagnosisEntry[] => {
  return Diagnosisdata;
};

const addDiagnostic = () => {
  return null;
};

export default { getEntries, addDiagnostic };
