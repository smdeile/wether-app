import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMyPosition from "../../services/nav";
import { getWeatherByPosition } from "../../redux/wether/wetherActions";
import css from "./ButtonFindPosition.module.css";

function ButtonFindPosition() {
  const [position, setPosition] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherByPosition(position));
    console.log("position: ", position);
  }, [dispatch, position]);

  const handleFindPosition = (evt) => {
    evt.preventDefault();
    getPosition();
    position && dispatch(getWeatherByPosition(position));
  };
  async function getPosition() {
    try {
      const myPosition = await getMyPosition;
      console.log(position);
      setPosition(myPosition);
    } catch (err) {
      console.log(err);
    }
  }
  return <button className={css.button} onClick={handleFindPosition}></button>;
}

export default ButtonFindPosition;
