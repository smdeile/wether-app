import React from "react";
import css from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};

export default Wrapper;
