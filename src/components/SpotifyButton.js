import React, { Component } from "react";
import { cx } from "react-emotion";
import { ReactComponent as Spotify } from "../media/spotify.svg";
import {
  basicTransition,
  boxShadow,
  spotifyButton,
  spotifyLogo
} from "../utils/classes";
import Button from "./Elements/Button";

export default class SpotifyButton extends Component {
  render() {
    return (
      <Button className={cx(spotifyButton, boxShadow, basicTransition)}>
        <Spotify className={spotifyLogo} /> Entra con Spotify
      </Button>
    );
  }
}
