import React from "react";
import { Camera } from "../cameraSettings/Camera";
import header from "./Header.module.scss";

export const Header = ({settings}) => {
  return (
    <header className={header.root}>
      <div className="container">
        <div className={header.content}>
          <p className="content-subtitle gray" style={{ textAlign: "center" }}>
            Photographer & Filmmaker
          </p>
          <h1 className={header.title}>Aperture Studios</h1>
          <p className={[header.text, "text-regular gray"].join(" ")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
      <Camera
        settings={settings}
      />
    </header>
  );
};
