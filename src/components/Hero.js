import React from "react";
import { cx } from "react-emotion";
import bgImage from "../media/music.jpg";
import { basicTransition, boxShadow } from "../utils/classes";
import { tokenExpired } from "../utils/tokenExpired";
import Button from "./Elements/Button";
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
      {tokenExpired() ? (
        <SpotifyButton />
      ) : (
        <Button
          hierarchy="primary"
          action="dark"
          className={cx(boxShadow, basicTransition)}
          onClick={() => {
            setTimeout(() => props.navigate("top"), 0);
          }}
        >
          Quiero ver mis resultados
        </Button>
      )}
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
