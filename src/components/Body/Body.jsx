import React from "react";
import { BodyContainer, Info, InfoText, Icons, Songs } from "./styles";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../../features/PlaylistSlice";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SongRow from "./SongRow";
import { Container } from "@mui/material";

const Body = () => {
  const playlist = useSelector(selectPlaylist);

  return (
    <BodyContainer>
      <Header />
      <Container
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          mt: 4,
        }}
      >
          <Info>
            <img src={playlist?.images[0]?.url} alt="playlist" />
            <InfoText>
              <h4>PLAYLIST</h4>
              <h2>Top Canciones 2021</h2>
              <p>{playlist?.name}</p>
            </InfoText>
          <Icons>
            <PlayCircleFilledIcon className="playButton" />
            <FavoriteIcon />
            <MoreHorizIcon  />
          </Icons>
          </Info>
        <Songs>
          {playlist?.tracks.items.map((item, index) => (
            <SongRow track={item.track} key={index} />
          ))}
        </Songs>
      </Container>
    </BodyContainer>
  );
};

export default Body;
