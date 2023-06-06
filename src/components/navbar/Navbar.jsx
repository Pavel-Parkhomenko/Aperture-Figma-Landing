import React, { useState } from "react";
import nav from "./Navbar.module.scss";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
export const Navbar = ({logo}) => {
  const [navbar, setNavbar] = useState(false)
  const [scroll, setScroll] = useState(0);

  const navList = [
    { id: 1, name: "Business areas" },
    { id: 2, name: "Featured images" },
    { id: 3, name: "Gear cage" },
    { id: 4, name: "Contact" },
  ];

  window.addEventListener("scroll", (e) => {
    setScroll(e.currentTarget.pageYOffset);
  });
  return (
    <nav
      className={nav.nav}
      style={
        scroll
          ? { background: "rgba(0, 0, 0, 0.8)" }
          : { background: "var(--navBg)" }
      }
    >
      <div className="container">
        <div className={nav.nav__content}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className={navbar ?  [nav.navbar, nav.active].join(' ') : [nav.navbar]}>
            <ul className={nav.menu}>
              {navList.map(({ id, name }) => (
                <li key={id} className={nav.menu__item}>
                  <a className={nav.menu__link} href="#!">
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            <a className={nav.link} href="#!">
              Get template
            </a>
          </div>

          <div onClick={()=> setNavbar(!navbar)} className={nav.mobile_btn}>
            {navbar ? <AiOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
            
          </div>
        </div>
      </div>
    </nav>
  );
};
