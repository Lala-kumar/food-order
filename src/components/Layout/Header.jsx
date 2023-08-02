import React, { Fragment } from "react";
import Mealsimage from "../../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={Mealsimage} alt="delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header; 
