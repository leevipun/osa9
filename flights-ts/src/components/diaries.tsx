import React from "react";
import { DiaryEntry } from "../types";

const Diaries = (diaries: DiaryEntry[]) => {
  return (
    <div>
      {diaries.map((diary: DiaryEntry) => (
        <div key={diary.id}>
          <h3>{diary.date}</h3>
          <p>{diary.visibility}</p>
          <p>{diary.weather}</p>
          <p>{diary.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Diaries;
