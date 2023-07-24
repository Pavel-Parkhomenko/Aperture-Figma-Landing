import React from "react";
import footer from "../footer/Footer.module.scss";
import { FooterList } from "./FooterList";
export const FooterContacts = ({ logo }) => {
  return (
    <div className={footer.contacts}>
      <div className={footer.contacts_left}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <p className={footer.tagline}>
          Photographers & videographers capturing the world around us.
        </p>
      </div>
      <div className={footer.contacts_right}>
        <FooterList
          footerLinksTitle="Business areas"
          footerLinks={[
            { link: "Product Photography" },
            { link: "Architecture Photography" },
            { link: "Drone Photography" },
            { link: "Wildlife Photography" },
          ]}
        />
        <FooterList
          footerLinksTitle="Pages"
          footerLinks={[
            { link: "Gear cage" },
            { link: "Featured images" },
            { link: "Contact" },
            { link: "Style guide" },
            { link: "Instructions" },
            { link: "Changelog" },
          ]}
        />
      </div>
    </div>
  );
};
