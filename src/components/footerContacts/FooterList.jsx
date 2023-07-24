import React from "react";
import footer from "../footer/Footer.module.scss";

export const FooterList = ({ footerLinksTitle, footerLinks }) => {
  return (
    <div className={footer.links}>
      <p className={[footer.links_title, "content-subtitle"].join(" ")}>
        {footerLinksTitle}
      </p>
      <ul>
        {footerLinks.map((item, ind) => (
          <li key={ind}>
            <a
              href="#!"
              className={[footer.links_link, "text-regular"].join(" ")}
            >
              {item.link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
