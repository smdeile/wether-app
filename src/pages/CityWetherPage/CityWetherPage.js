import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWether,
  getFiveDaysWeather,
} from "../../redux/wether/wetherActions";
import RenderWetherDataComponent from "../../components/RenderWetherDataComponent/RenderWetherDataComponent";
import { withRouter } from "react-router-dom";

const City = ({ match, history }) => {
  const { cityName } = match.params;
  const { wether, isLoading, wetherFiveDays } = useSelector((state) => state);
  const city = wether?.name;
  const dispatch = useDispatch();

  useEffect(() => {
    history.push(`${cityName}`);
    dispatch(fetchWether(cityName));
    dispatch(getFiveDaysWeather(cityName));
  }, []);

  useEffect(() => {
    city && history.push(`${city}`);
  }, [city]);

  return (
    <>
      {isLoading && <h1>wait, please...</h1>}
      {!isLoading && wether && (
        <RenderWetherDataComponent
          wether={wether}
          wetherFiveDays={wetherFiveDays}
        />
      )}
    </>
  );
};

export default withRouter(City);
