import React from "react";
import { Camera } from "../cameraSettings/Camera";

import example from "./Example.module.scss";

export const Example = ({ img, title, text, settings }) => {
  return (
    <section className={example.root}>
      <div
        className={example.inner}
        style={{ background: `url(${img}) no-repeat center / cover` }}
      >
        <div className="container">
          <div className={example.content}>
            <h4
              className={[example.content_title, "content-subtitle"].join(" ")}
            >
              {title}
            </h4>
            <p className={[example.content_text, "text-regular"].join(" ")}>
              {text}
            </p>
          </div>
          <Camera settings={settings} />
        </div>
      </div>
    </section>
  );
};
