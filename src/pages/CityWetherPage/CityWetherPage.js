import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWether,
  getFiveDaysWeather,
} from "../../redux/wether/wetherActions";
import css from "./City.module.css";
import RenderWetherDataComponent from "../../components/RenderWetherDataComponent/RenderWetherDataComponent";
import { withRouter } from "react-router-dom";

function City({ match, history }) {
  const { cityName } = match.params;

  const { wether, isLoading, wetherFiveDays } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWether(cityName));
    dispatch(getFiveDaysWeather(cityName));
  }, [dispatch, cityName]);

  useEffect(() => {
    history.push(wether?.name);
  }, [history, wether?.name]);
  return (
    <div>
      {isLoading && <h1>Wait</h1>}
      {!isLoading && wether && (
        <RenderWetherDataComponent
          wether={wether}
          wetherFiveDays={wetherFiveDays}
        />
      )}
    </div>
  );
}

export default withRouter(City);
