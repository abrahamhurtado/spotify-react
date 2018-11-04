import { Link } from "@reach/router";
import React, { Component } from "react";
import bg from "../media/music2.jpg";
import { getTopArtists, getTopTracks } from "../utils/api";
import { generateRandomNumber } from "../utils/random";
import { tokenExpired } from "../utils/tokenExpired";
import ChoiceCard from "./Elements/ChoiceCard";
import ChoiceTitle from "./Elements/ChoiceTitle";
import HeroBackground from "./Elements/HeroBackground";
import { Title } from "./Elements/HeroTitles";
import List from "./Elements/List";

export default class TopMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistImage: "",
      trackImage: ""
    };
  }
  componentDidMount() {
    if (tokenExpired()) {
      setTimeout(() => this.props.navigate("/"), 0);
    } else {
      const randomNumber = generateRandomNumber(50);
      Promise.all([
        getTopArtists({
          limit: 1,
          offset: randomNumber,
          time_range: "long_term"
        }),
        getTopTracks({
          limit: 1,
          offset: randomNumber,
          time_range: "long_term"
        })
      ])
        .then(([artist, track]) => {
          const artistImage = artist.items[0].images[0].url;
          const trackImage = track.items[0].album.images[0].url;

          this.setState({
            artistImage,
            trackImage
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
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
          <Link to="/" style={{ textDecoration: "none", margin: "0 1rem" }}>
            <ChoiceCard
              bgImage={this.state.artistImage}
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
          </Link>
          <Link to="/" style={{ textDecoration: "none", margin: "0 1rem" }}>
            <ChoiceCard
              bgImage={this.state.trackImage}
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
          </Link>
        </List>
      </HeroBackground>
    );
  }
}
