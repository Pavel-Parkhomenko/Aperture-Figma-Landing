import React from "react";
import footer from "./Footer.module.scss";
import { FooterContacts } from "../footerContacts/FooterContacts";
import { FaTelegram, FaInstagram, FaFacebookF } from "react-icons/fa";
export const Footer = ({ logo }) => {
  return (
    <footer className={footer.root}>
      <div className="container">
        <FooterContacts logo={logo} />

        <div className={footer.subscribe}>
          <div className={footer.subscribe_left}>
            <p
              className={[footer.subscribe_title, "content-subtitle"].join(" ")}
            >
              Subscribe to our newsletter
            </p>
            <p className={footer.tagline}>Read about all the things we do.</p>
          </div>
          <div className={footer.subscribe_left}>
            {/* SHOULD ASK THIS ELEMENT IN  FIGMA AS, IT'S NOT CORRECT*/}
            <p className="content-subtitle">
              SHOULD ASK THIS ELEMENT IN FIGMA AS, IT'S NOT CORRECT!
            </p>
          </div>
        </div>

        <div className={footer.bottom}>
          <p className={[footer.copyright, "text-regular"].join(" ")}>
            &copy;The Website was built by Axror Kurban using ReactJS{" "}
            {new Date().getFullYear()}
          </p>
          <div className={footer.social}>
            <a href="https://t.me/AKcoder7L" style={{ color: "var(--gray)" }}>
              <FaTelegram size={24} />
            </a>
            <a href="https://t.me/AKcoder7L" style={{ color: "var(--gray)" }}>
              <FaInstagram size={24} />
            </a>
            <a href="https://t.me/AKcoder7L" style={{ color: "var(--gray)" }}>
              <FaFacebookF size={24} style={{ color: "var(--gray" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
