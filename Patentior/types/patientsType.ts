export enum Gender {
  male = "male",
  female = "female",
  other = "other",
}

export interface patientsEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type newPatientEntry = Omit<patientsEntry, "id">;
