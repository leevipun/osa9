import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "../types";

const BaseUrl = "http://localhost:3000/api/diaries";

export const getDiaries = async () => {
  const response = await axios.get<DiaryEntry[]>(`${BaseUrl}`);
  console.log(response.data);
  return response.data;
};

export const createDiary = async (object: NewDiaryEntry) => {
  try {
    console.log(object);
    const response = await axios.post<NewDiaryEntry>(`${BaseUrl}`, object);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
