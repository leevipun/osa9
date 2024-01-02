import React, { useEffect, useState } from "react";
import AddingForm from "./components/addingForm";
import { DiaryEntry } from "./types";
import { getDiaries } from "./services/services";

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    console.log("effect");
    const fetchDiaries = async () => {
      const response = await getDiaries();
      console.log(response as DiaryEntry[]);
      setDiaries(response as DiaryEntry[]);
    };
    fetchDiaries();
  }, []);

  return (
    <div>
      <AddingForm />
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
    </div>
  );
};

export default App;
