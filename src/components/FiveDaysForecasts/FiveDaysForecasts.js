import React from "react";

import css from "./FiveDaysForecasts.module.css";

function FiveDaysForecasts({ wetherFiveDays }) {
  return (
    <ul className={css.container}>
      {wetherFiveDays?.map((el) => (
        <li key={el.dt_txt} className={css.oneItem}>
          <p className={css.date}>{el.dt_txt}</p>
          <div className={css.weather}>
            <div className={css.imgContainer}>
              <img
                src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`}
                alt="weather-icon"
              />
            </div>
            <p className={css.temperature}>{`${Math.floor(
              el.main.temp
            )} °C`}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FiveDaysForecasts;
