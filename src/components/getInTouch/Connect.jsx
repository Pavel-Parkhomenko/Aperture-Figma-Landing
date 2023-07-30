import React from "react";
import { MyButton } from "../UI/button/MyButton";
import connect from "./Connect.module.scss";

export const Connect = () => {
  return (
    <section className={connect.root}>
      <div className="container">
        <div className={connect.content}>
          <h2 className="section-title">
            Need help with photography or videography?
          </h2>
          <p className="section-subtitle">We're here for you!</p>
          <MyButton>Get in touch</MyButton>
        </div>
      </div>
    </section>
  );
};
