import React from "react";
import bgImage from "../media/music.jpg";
import HeroBackground from "./Elements/HeroBackground";
import HeroBox from "./Elements/HeroBox";
import { Subtitle, Title } from "./Elements/HeroTitles";
import MutedText from "./Elements/MutedText";
import SpotifyButton from "./SpotifyButton";

const Hero = props => (
  <HeroBackground
    bgImage={bgImage}
    gradientStyles={{
      gradientFallback: "#396afc",
      gradientFallbackWebkit:
        "-webkit-linear-gradient(to bottom, #396afc, #2948ff)",
      gradient: "linear-gradient(to bottom, #396afc, #2948ff)",
      opacity: 0.6
    }}
  >
    <HeroBox>
      <Title>Descubre cuáles son tus artistas y canciones favoritas</Title>
      <Subtitle>Con la ayuda de los datos de Spotify</Subtitle>
      <SpotifyButton />
    </HeroBox>
    <MutedText style={{ marginTop: 0 }}>
      Hecho por{" "}
      <a href="https://abrahamhurtado.github.io/" style={{ color: "#fff" }}>
        Abraham Hurtado
      </a>
    </MutedText>
  </HeroBackground>
);

export default Hero;
