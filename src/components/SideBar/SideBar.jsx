import React from "react";
import { SidebarContainer, Playlists } from "./styles";
import SidebarChoice from "./SidebarChoice";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const SideBar = () => {
  return (
    <SidebarContainer>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="logo"
      />
      <SidebarChoice title="Inicio" Icon={HomeIcon} />
      <SidebarChoice title="Buscar" Icon={SearchIcon} />
      <SidebarChoice title="Tu biblioteca" Icon={LibraryMusicIcon} />
      <Playlists>PLAYLISTS</Playlists>
      <hr />
      <SidebarChoice title="Tu Top de canciones 2021" />
      <SidebarChoice title="Daily Mix 1" />
      <SidebarChoice title="Daily Mix 2" />
    </SidebarContainer>
  );
};

export default SideBar;
