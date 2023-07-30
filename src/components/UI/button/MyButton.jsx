import React from "react";
import btnIcon from "../../../assets/imgs/btnIcon.svg";
import classes from "./MyButton.module.scss";

export const MyButton = ({ children, ...props }) => {
  return (
    <button className={classes.myBtn} {...props}>
      <img src={btnIcon} alt={children} />
      <span>{children}</span>
    </button>
  );
};
