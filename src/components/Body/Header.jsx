import React from "react";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderRight2,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, InputAdornment, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/UserSlice";

const Header = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <TextField
          id="input-with-icon-textfield"
          label="Busca artistas, canciones o álbums"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </HeaderLeft>
      <HeaderRight2>
        <Typography variant="subtitle2">Premium</Typography>
      </HeaderRight2>
      <HeaderRight>
        <Avatar
          sx={{ width: 24, height: 24, mr: 1 }}
          src={user?.images[0]?.url}
          alt="perfil"
        />
        <Typography variant="subtitle2">{user?.display_name}</Typography>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
