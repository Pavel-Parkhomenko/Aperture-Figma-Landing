import React from "react";
import { Title } from "../sectionTitle/Title";
import about from "./About.module.scss";
import { CardList } from "./CardList";

export const About = () => {
  return (
    <section className={about.root}>
      <div className="container">
        <div className={about.content}>
          <Title
            title="What we do."
            subtitle="The areas that we're specialized in."
          />
          <CardList />
        </div>
      </div>
    </section>
  );
};
