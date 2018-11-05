import React, { Component } from "react";
import { getTopArtists } from "../utils/api";
import AlbumContainer from "./Elements/AlbumContainer";
import AlbumImage from "./Elements/AlbumImage";
import Card from "./Elements/Card";
import CardTitle from "./Elements/CardTitle";
import List from "./Elements/List";
import TrackInfo from "./Elements/TrackInfo";

export default class Tracks extends Component {
  constructor(props) {
    super(props);
    if (localStorage.hasOwnProperty("artists")) {
      this.state = {
        artists: JSON.parse(localStorage.getItem("artists"))
      };
    } else {
      this.state = {
        artists: []
      };
    }
  }
  componentDidMount() {
    if (!localStorage.hasOwnProperty("artists")) {
      getTopArtists({ limit: 50, offset: 0, time_range: "long_term" })
        .then(data => {
          localStorage.setItem("artists", JSON.stringify(data.items));
          this.setState({
            artists: data.items
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  render() {
    const { artists } = this.state;
    if (artists.length > 0) {
      return (
        <List vertical>
          {artists.map((artist, i) => (
            <Card key={i}>
              <AlbumContainer position={i + 1}>
                <AlbumImage src={artist.images[0].url} />
              </AlbumContainer>
              <TrackInfo>
                <CardTitle>{artist.name}</CardTitle>
              </TrackInfo>
            </Card>
          ))}
        </List>
      );
    } else {
      return <h3>Cargando...</h3>;
    }
  }
}
