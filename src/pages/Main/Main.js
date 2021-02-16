import React, { useEffect, useState } from "react";
import localStorage from "../../services/localStorage";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./Main.module.css";

function Main() {
  const [cities, setCities] = useState(null);
  console.log("cities: ", cities);
  const { wether } = useSelector((state) => state);
  const city = wether?.name;

  useEffect(() => {
    const citiesLS = localStorage.load("cities")
      ? localStorage.load("cities")
      : [];

    if (citiesLS.find((el) => el.city?.toLowerCase() === city?.toLowerCase())) {
      return;
    } else {
      city && citiesLS.push({ city: city, id: nanoid() });
      localStorage.save("cities", citiesLS);
      setCities(citiesLS);
    }
  }, [wether, city]);

  const onHandleDeleteCity = (id) => {
    const newCities = cities.filter((city) => city.id !== id);
    localStorage.save("cities", newCities);
    setCities(newCities);
  };

  return (
    <div className={css.wrapper}>
      {city && (
        <>
          <h2>Here city, that we found: </h2>
          <Link to={`city/${city}`}>
            {`${city} ${Math.floor(wether.main.temp)} °С`}
          </Link>
        </>
      )}
      {cities && (
        <>
          <h2>Cities that you looked</h2>
          {cities.map(
            (el) =>
              el.city.toLowerCase() !== city?.toLowerCase() && (
                <div key={el.id}>
                  <Link to={`city/${el.city}`}>{`${el?.city}`}</Link>
                  <button onClick={() => onHandleDeleteCity(el.id)}>x</button>
                </div>
              )
          )}
        </>
      )}
    </div>
  );
}

export default Main;
