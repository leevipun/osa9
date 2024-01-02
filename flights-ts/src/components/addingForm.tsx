import React, { useState } from "react";
import { Visibility, Weather } from "../types";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { createDiary } from "../services/services";

const AddingForm = () => {
  const [date, setDate] = useState<string>("");
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great);
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string | undefined>();

  const handleNewDiary = async (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();
      const response = await createDiary({
        date,
        visibility,
        weather,
        comment,
      });
      console.log(response);
      setDate("");
      setVisibility(Visibility.Great);
      setWeather(Weather.Sunny);
      setComment("");
      setError(undefined);
    } catch (e: any) {
      console.error(e.response.data);
      setError(e.response.data);
      setTimeout(() => {
        setError(undefined);
      }, 5000);
    }
  };

  const onChangeVisibility = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setVisibility(e.target.value as Visibility);
  };

  const onChangeWeather = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setWeather(e.target.value as Weather);
  };

  return (
    <div>
      <div>
        <h1 style={{ color: "red" }}>{error}</h1>
      </div>
      <form onSubmit={handleNewDiary}>
        <div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="weather">Visibility: </label>
            <Radio.Group onChange={onChangeVisibility} value={visibility}>
              <Radio value={Visibility.Great}>Great</Radio>
              <Radio value={Visibility.Good}>Good</Radio>
              <Radio value={Visibility.Ok}>Ok</Radio>
              <Radio value={Visibility.Poor}>Poor</Radio>
            </Radio.Group>
          </div>
          <div>
            <label htmlFor="weather">Weather: </label>
            <Radio.Group onChange={onChangeWeather} value={weather}>
              <Radio value={Weather.Sunny}>Sunny</Radio>
              <Radio value={Weather.Rainy}>Rainy</Radio>
              <Radio value={Weather.Cloudy}>Cloudy</Radio>
              <Radio value={Weather.Stormy}>Stormy</Radio>
              <Radio value={Weather.Windy}>Windy</Radio>
            </Radio.Group>
          </div>

          <div>
            <label htmlFor="comment">Comment: </label>
            <input
              type="text"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddingForm;
