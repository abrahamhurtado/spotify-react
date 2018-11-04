import { Redirect } from "@reach/router";
import React, { Component } from "react";
import HeroBackground from "./Elements/HeroBackground";
import HeroBox from "./Elements/HeroBox";
import { Title } from "./Elements/HeroTitles";

export default class Authorized extends Component {
  componentDidMount() {
    if (this.props.location.hash) {
      const { access_token, expires_in } = this.props.location.hash
        .slice(1)
        .split("&")
        .map(keyValue => {
          const [key, value] = keyValue.split("=");
          return {
            [key]: value
          };
        })
        .reduce((prev, next) => Object.assign(prev, next), {});

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("expires_in", expires_in);
      localStorage.setItem("issued_at", Date.now());

      setTimeout(() => {
        this.props.navigate("/top");
      }, 0);
    }
  }
  render() {
    if (this.props.location.hash) {
      return (
        <HeroBackground
          gradientStyles={{
            gradientFallback: "e53935"
          }}
        >
          <HeroBox>
            <Title>Spotify nos ha dado acceso</Title>
          </HeroBox>
        </HeroBackground>
      );
    } else {
      return <Redirect to="/" noThrow />;
    }
  }
}
