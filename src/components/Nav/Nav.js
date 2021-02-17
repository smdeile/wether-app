import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";
import Input from "../../components/Input/Input";
import ButtonFindPosition from "../ButtonFindPosition/ButtonFindPosition";

const Nav = () => {
  return (
    <nav className={css.navBar}>
      <NavLink
        to="/"
        exact
        className={css.link}
        activeClassName={css.activeLink}
      >
        <h1 className={css.logo}>MaWetha</h1>
      </NavLink>
      <ButtonFindPosition />
      <Input />
    </nav>
  );
};

export default Nav;
