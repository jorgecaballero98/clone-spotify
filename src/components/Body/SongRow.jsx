import { Container } from "@mui/material";
import React from "react";
import { SongRowContainer, SongInfo } from "./styles";

const SongRow = ({ track }) => {
  return (
    <Container>
    <SongRowContainer>
      <img src={track.album.images[0].url} alt="album" />
      <SongInfo>
        <h4>{track.name}</h4>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </SongInfo>
    </SongRowContainer>
    </Container>
  );
};

export default SongRow;
