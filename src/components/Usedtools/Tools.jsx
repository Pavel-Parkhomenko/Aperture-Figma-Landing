import React from "react";
import { MyButton } from "../UI/button/MyButton";
import tools from "./Tools.module.scss";
import toolsBg from "../../assets/imgs/tools.png";
import { Camera } from "../cameraSettings/Camera";

export const Tools = ({settings}) => {
  return (
    <section className={tools.root}>
      <div className="container">
        <div className={tools.content}>
          <div className={tools.content_left}>
            <p
              className={[tools.content_subtitle, "content-subtitle"].join(" ")}
            >
              The Gear cage
            </p>
            <h4 className={tools.content_title}>The tools that we use.</h4>
            <p className={[tools.content_text, "text-regular"].join(" ")}>
              The say that "no place is boring if you've had a good night's
              sleep and have a pocket full of unexposed film". While we don't
              shoot (a lot) of film these days — these are the tools that we
              actually use everyday to capture the amazing things around us.
            </p>
            <MyButton>Check it out</MyButton>
          </div>
          <div className={tools.content_right}>
            <img src={toolsBg} alt="left img" />
            <Camera
              settings={settings}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
