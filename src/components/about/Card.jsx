import React from "react";
import { MyButton } from "../UI/button/MyButton";
import about from "./About.module.scss";

export const Card = ({ img, title, text }) => {
  return (
    <article
      className={about.card}
      style={{ background: `url(${img}) no-repeat center / cover` }}
    >
      <div className={about.card_content}>
        <h4 className={[about.card_title, 'content-subtitle white'].join(' ')}>{title}</h4>
        <p className="text-regular white">{text}</p>
        <MyButton>Read more</MyButton>
      </div>
    </article>
  );
};
