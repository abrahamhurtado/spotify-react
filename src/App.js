import { Router } from "@reach/router";
import React, { Component } from "react";
import "./App.css";
import Authorized from "./components/Authorized";
import Hero from "./components/Hero";
import TopMusic from "./components/TopMusic";

class App extends Component {
  render() {
    return (
      <Router>
        <Hero path="/" />
        <Authorized path="/authorized" />
        <TopMusic path="/top/*" />
      </Router>
    );
  }
}

export default App;
