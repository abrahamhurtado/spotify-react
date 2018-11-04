import React, { Component } from "react";
import bg from "../media/music2.jpg";
import ChoiceCard from "./Elements/ChoiceCard";
import ChoiceTitle from "./Elements/ChoiceTitle";
import HeroBackground from "./Elements/HeroBackground";
import { Title } from "./Elements/HeroTitles";
import List from "./Elements/List";

export default class TopMusic extends Component {
  render() {
    return (
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
        <Title>Elige lo que quieres conocer</Title>
        <List horizontal>
          <ChoiceCard
            gradientStyles={{
              gradientFallback: "#667db6",
              gradientFallbackWebkit:
                "-webkit-linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6)",
              gradient:
                "linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6)",
              opacity: 0.5
            }}
          >
            <ChoiceTitle>Mis artistas más escuchados</ChoiceTitle>
          </ChoiceCard>
          <ChoiceCard
            gradientStyles={{
              gradientFallback: "#ff4b1f",
              gradientFallbackWebkit:
                "-webkit-linear-gradient(to bottom, #ff4b1f, #1fddff)",
              gradient: "linear-gradient(to bottom, #ff4b1f, #1fddff)",
              opacity: 0.5
            }}
          >
            <ChoiceTitle>Mis canciones más escuchadas</ChoiceTitle>
          </ChoiceCard>
        </List>
      </HeroBackground>
    );
  }
}
