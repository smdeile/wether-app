import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchWether } from "../../redux/wether/wetherActions";
import css from "./Input.module.css";

function Input() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => setValue(e.target.value);

  const onSubmit = () => {
    if (value !== "") {
      dispatch(fetchWether(value));
    } else alert("Enter existing city, please");
    setValue("");
  };

  return (
    <div className={css.inputBlock}>
      <input
        type="text"
        placeholder="enter city name"
        className={css.input}
        name="input"
        value={value}
        autoFocus
        onChange={onChange}
      />
      <button className={css.button} onClick={onSubmit}></button>
    </div>
  );
}

export default Input;
