import React from "react";
import about from "./About.module.scss";
import card1Bg from "../../assets/imgs/specializedAreas/card-1.png";
import card2Bg from "../../assets/imgs/specializedAreas/card-2.png";
import card3Bg from "../../assets/imgs/specializedAreas/card-3.png";
import card4Bg from "../../assets/imgs/specializedAreas/card-4.png";
import { Card } from "./Card";

export const CardList = () => {

  const specializedAreas = [
    {
      img: card1Bg,
      title: `Product Photography`,
      text: `Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.`,
    },
    {
      img: card2Bg,
      title: `Architecture Photography`,
      text: `Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.`,
    },
    {
      img: card3Bg,
      title: `Drone Photography`,
      text: `Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.`,
    },
    {
      img: card4Bg,
      title: `Wildlife Photography`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.`,
    },
  ];

  return (
    <div className={about.cards}>
      {specializedAreas.map(({ img, title, text }) => (
        <Card img={img} title={title} text={text} key={img}/>
      ))}
    </div>
  );
};
