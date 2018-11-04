import React from "react";
import bg from "../media/music2.jpg";
import HeroBackground from "./Elements/HeroBackground";
import HeroBox from "./Elements/HeroBox";
import { Title } from "./Elements/HeroTitles";

const TopMusic = props => (
  <HeroBackground
    bgImage={bg}
    gradientStyles={{
      gradientFallback: "rgba(34, 193, 195)",
      gradientFallbackWebkit:
        "-webkit-linear-gradient(to right, rgba(253, 187, 45), rgba(34, 193, 195))",
      gradient:
        "linear-gradient(to right,rgba(253, 187, 45),rgba(34, 193, 195))",
      opacity: 0.5
    }}
  >
    <HeroBox>
      <Title>Elige lo que quieres conocer</Title>
    </HeroBox>
  </HeroBackground>
);

export default TopMusic;
