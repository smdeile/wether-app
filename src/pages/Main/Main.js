import React, { useEffect, useState } from "react";
import localStorage from "../../services/localStorage";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCities } from "../../redux/wether/wetherActions";
import css from "./Main.module.css";

const Main = () => {
  const [cities, setCitiesLocal] = useState(null);
  const dispatch = useDispatch(setCities);
  const { isLoading } = useSelector((state) => state);

  const { wether, citiesStore, error } = useSelector((state) => state);

  const city = wether?.name;
  //Set cities to LocalStorage and to store
  useEffect(() => {
    const citiesLS = localStorage.load("cities")
      ? localStorage.load("cities")
      : [];

    if (citiesLS.find((el) => el.city?.toLowerCase() === city?.toLowerCase())) {
      return;
    } else {
      city && citiesLS.push({ city: city, id: nanoid() });
      localStorage.save("cities", citiesLS);
      setCitiesLocal(citiesLS);
      dispatch(setCities(citiesLS));
    }
  }, [error, city]);

  const onHandleDeleteCity = (id) => {
    const newCities = cities?.filter((city) => city.id !== id);
    localStorage.save("cities", newCities);
    setCitiesLocal(newCities);
    dispatch(setCities(newCities));
  };

  return (
    <div className={css.wrapper}>
      {error && <h2>Some problem...Please, try again!</h2>}
      {isLoading ? (
        <h2>wait, please...</h2>
      ) : (
        <>
          {city && (
            <>
              <h2>Here city, that we found: </h2>
              {
                <Link to={`city/${city}`}>
                  {`${city} ${Math.floor(wether.main.temp)} °С`}
                </Link>
              }
            </>
          )}
        </>
      )}
      {!!citiesStore?.length && (
        <>
          <h2>Cities that you looked</h2>
          <ul className={css.savedCities}>
            {citiesStore.map((el) => (
              <li key={el.id}>
                <Link to={`city/${el.city}`}>{`${el?.city}`}</Link>
                <button
                  className={css.buttonClose}
                  onClick={() => onHandleDeleteCity(el.id)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      {}
    </div>
  );
};

export default Main;
