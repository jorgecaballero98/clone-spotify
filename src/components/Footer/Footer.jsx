import React from "react";
import {
  FooterContainer,
  FooterCenter,
  FooterLeft,
  FooterRight,
} from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img
          src="https://static.posters.cz/image/750/buque-costero/coldplay-parachutes-album-cover-i56853.jpg/"
          alt="cover"
        />
        <div>
          <h4>Coldplay</h4>
          <p>Parachutes</p>
        </div>
        <FavoriteBorderIcon
          sx={{
            ml: "1rem",
          }}
        />
        <RemoveCircleOutlineIcon
          sx={{
            ml: ".5rem",
          }}
        />
      </FooterLeft>
      <FooterCenter>
        <Grid container spacing={3}>
          <Grid item>
            <ShuffleIcon className="shuffle" />
          </Grid>
          <Grid item>
            <SkipPreviousIcon className="icon" />
          </Grid>
          <Grid item>
            <PlayCircleOutlineIcon className="icon" />
          </Grid>
          <Grid item>
            <SkipNextIcon className="icon" />
          </Grid>
          <Grid item>
            <RepeatIcon className="repeat" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Slider size="small"/>
          </Grid>
        </Grid>
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
          <Grid item>
            <QueueMusicIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider size="small" />
          </Grid>
          <Grid item>
            <VolumeUpIcon />
          </Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
