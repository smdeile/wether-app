import React from "react";
import { useDispatch } from "react-redux";
import getMyPosition from "../../services/nav";
import { getWeatherByPosition } from "../../redux/wether/wetherActions";
import css from "./ButtonFindPosition.module.css";

const ButtonFindPosition = () => {
  const dispatch = useDispatch();

  const handleFindPosition = (evt) => {
    evt.preventDefault();
    getPosition();
  };
  async function getPosition() {
    try {
      const myPosition = await getMyPosition;
      dispatch(getWeatherByPosition(myPosition));
    } catch (err) {
      console.log(err);
    }
  }
  return <button className={css.button} onClick={handleFindPosition}></button>;
};

export default ButtonFindPosition;
