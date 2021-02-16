import React from "react";
import OneDayWether from "../OneDayWether/OneDayWether";
import FiveDaysForecasts from "../FiveDaysForecasts/FiveDaysForecasts";
import css from "./RenderWetherDataComponent.module.css";

function RenderWetherDataComponent({ wether, wetherFiveDays }) {
  return (
    <>
      {wether && <OneDayWether wether={wether} />}
      {wetherFiveDays && <FiveDaysForecasts wetherFiveDays={wetherFiveDays} />}
    </>
  );
}

export default RenderWetherDataComponent;
