import { Redirect } from "@reach/router";
import React, { Component } from "react";

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
    }
  }
  render() {
    if (this.props.location.hash) {
      return <h2>Spotify ha dado su veredicto</h2>;
    } else {
      return <Redirect to="/" noThrow />;
    }
  }
}
