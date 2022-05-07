import React from "react";
import { LoginContainer, LoginButton } from "./styles";
import { loginURL } from "../../utils/spotifyLogic";

const Login = () => {
  return (
    <LoginContainer>
      <img
        src="https://1000marcas.net/wp-content/uploads/2019/12/Spotify-logotipo.jpg"
        alt="logo"
      />
      <LoginButton href={loginURL}>Iniciar sesión con Spotify</LoginButton>
    </LoginContainer>
  );
};

export default Login;
