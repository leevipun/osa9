import { isString } from "util";
import { Gender, newPatientEntry } from "./types/patientsType";

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

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).includes(param as Gender);
}

const parseGender = (gender: unknown): Gender => {
  if(!gender || !isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender' + gender)
  }
  return gender;
}

const parseOccupation = (occupation: unknown): string =>{
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation')
  }
  return occupation
}

const toNewPatientsEntry = (object: unknown): newPatientEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }
  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newEntry: newPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };

    return newEntry;
  }
  throw new Error("Missing required fields");
};


export default toNewPatientsEntry;
