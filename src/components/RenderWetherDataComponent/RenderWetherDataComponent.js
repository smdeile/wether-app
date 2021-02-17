import React from "react";
import OneDayWether from "../OneDayWether/OneDayWether";
import FiveDaysForecasts from "../FiveDaysForecasts/FiveDaysForecasts";

function RenderWetherDataComponent({ wether, wetherFiveDays }) {
  return (
    <>
      {wether && <OneDayWether />}
      {wetherFiveDays && <FiveDaysForecasts />}
    </>
  );
}

export default RenderWetherDataComponent;
