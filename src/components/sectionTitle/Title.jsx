import React from "react";
import title from "./Ttitle.module.scss";

export const Title = ({ title, subtitle }) => {
  return (
    <div className={title.root}>
      <h2 className="section-title">{title}</h2>
      <h3 className="section-subtitle">{subtitle}</h3>
    </div>
  );
};
