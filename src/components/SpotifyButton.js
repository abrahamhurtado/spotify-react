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
  requestSpotifyPermissions = e => {
    e.preventDefault();
    const requestParameters = {
      client_id: "d49c7151491642d796b06c0bc16b2bf2",
      response_type: "token",
      redirect_uri: `${window.location.href}authorized`,
      state: 1,
      scope: "user-top-read"
    };

    const qs = Object.keys(requestParameters)
      .map(key => `${key}=${requestParameters[key]}`)
      .reduce((x, y) => `${x}&${y}`);

    window.location = `https://accounts.spotify.com/authorize?${qs}`;
  };
  render() {
    return (
      <Button
        className={cx(spotifyButton, boxShadow, basicTransition)}
        onClick={this.requestSpotifyPermissions}
      >
        <Spotify className={spotifyLogo} /> Entra con Spotify
      </Button>
    );
  }
}
