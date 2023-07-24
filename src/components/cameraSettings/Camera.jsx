import React from "react";
import camera from "./Camera.module.scss";
import icon1 from "../../assets/imgs/cameraSetting/shutter.svg";
import icon2 from "../../assets/imgs/cameraSetting/aperture.svg";
import icon3 from "../../assets/imgs/cameraSetting/iso.svg";
import icon4 from "../../assets/imgs/cameraSetting/loaction.svg";
export const Camera = ({settings}) => {
  return (
    <div className={camera.root}>
      <ul className={camera.list}>
        <li>
          <img src={icon1} alt={settings.shutter} />
          <span>{settings.shutter}</span>
        </li>
        <li>
          <img src={icon2} alt={settings.aperture} />
          <span>{settings.aperture}</span>
        </li>
        <li>
          <img src={icon3} alt={settings.iso} />
          <span>{settings.iso}</span>
        </li>
        <li>
          <img src={icon4} alt={settings.shutter} />
          <span>{settings.location}</span>
        </li>
      </ul>
    </div>
  );
};
