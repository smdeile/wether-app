import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import css from "./OneDayWether.module.css";

function OneDayWether() {
  const { wether } = useSelector((state) => state);

  function getTime(time) {
    const date = moment(time * 1000).format("LLLL");
    return date;
  }

  return (
    <>
      {wether && (
        <ul className={css.list}>
          <li className={css.cityName}>
            <p>{wether.name}</p>
          </li>

          <li className={css.element}>
            <p className={css.elementName}>Temperature: </p>
            <p>{Math.floor(wether.main.temp)} °С</p>
          </li>

          <li className={css.element}>
            <p className={css.elementName}> Atmospheric pressure: </p>
            <p>{wether.main.pressure} hPa</p>
          </li>

          <li className={css.element}>
            <p className={css.elementName}>Humidity: </p>
            <p>{wether.main.humidity} %</p>
          </li>

          <li className={css.element}>
            <p className={css.elementName}>Wind speed: </p>
            <p>{wether.wind.speed} meter/sec</p>
          </li>

          <li className={css.element}>
            <p className={css.elementName}>Wind direction: </p>
            <p>{wether.wind.deg ? wether.wind.deg : "90"} °</p>
          </li>

          <li className={css.element}>
            <p className={css.elementName}>Sunrise: </p>
            <p>{getTime(wether.sys.sunrise)}</p>
          </li>
          <li className={css.element}>
            <p className={css.elementName}>Sunset: </p>
            <p>{getTime(wether.sys.sunset)}</p>
          </li>
        </ul>
      )}
    </>
  );
}

export default OneDayWether;
