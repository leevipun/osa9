export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
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
