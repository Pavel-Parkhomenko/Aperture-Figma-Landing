import React from "react";
import { Title } from "../sectionTitle/Title";
import clients from "./Clients.module.scss";
import clientsLogo1 from "../../assets/imgs/clientsLogo/clientsLogo-1.png";
import clientsLogo2 from "../../assets/imgs/clientsLogo/clientsLogo-2.png";
import clientsLogo3 from "../../assets/imgs/clientsLogo/clientsLogo-3.png";
import clientsLogo4 from "../../assets/imgs/clientsLogo/clientsLogo-4.png";
import clientsLogo5 from "../../assets/imgs/clientsLogo/clientsLogo-5.png";

export const Clients = () => {
  const clientsLogo = [
    clientsLogo1,
    clientsLogo2,
    clientsLogo3,
    clientsLogo4,
    clientsLogo5,
  ];
  return (
    <section className={clients.root}>
      <div className="container">
        <div className={clients.content}>
          <Title
            title="Past clients"
            subtitle="Trusted by your favourite companies"
          />

          <div className={clients.items}>
            {clientsLogo.map((logo) => (
              <div className={clients.logo} key={logo}>
                <img src={logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
