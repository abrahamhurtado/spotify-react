import React, { Component } from "react";
import { getTopTracks } from "../utils/api";
import { createArtistsString } from "../utils/createArtistsString";
import AlbumContainer from "./Elements/AlbumContainer";
import AlbumImage from "./Elements/AlbumImage";
import Card from "./Elements/Card";
import CardTitle from "./Elements/CardTitle";
import List from "./Elements/List";
import TrackArtists from "./Elements/TrackArtists";
import TrackInfo from "./Elements/TrackInfo";

export default class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    };
  }
  componentDidMount() {
    getTopTracks({ limit: 50, offset: 0, time_range: "long_term" })
      .then(data => {
        this.setState({
          tracks: data.items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { tracks } = this.state;
    if (tracks.length > 0) {
      return (
        <List vertical>
          {tracks.map((track, i) => (
            <Card key={i}>
              <AlbumContainer position={i + 1}>
                <AlbumImage src={track.album.images[0].url} />
              </AlbumContainer>
              <TrackInfo>
                <CardTitle>{track.name}</CardTitle>
                <div />
                <TrackArtists>
                  {createArtistsString(track.artists)}
                </TrackArtists>
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
