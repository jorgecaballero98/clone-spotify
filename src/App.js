import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getTokenFromUrl } from './utils/spotifyLogic';
import SpotifyWebApi from 'spotify-web-api-js';
import { selectUser, SET_USER } from './features/UserSlice';
import { selectToken, SET_TOKEN } from './features/TokenSlice';
import { SET_PLAYLIST } from './features/PlaylistSlice';

const spotify = new SpotifyWebApi();

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    if (_token) {
      dispatch(SET_TOKEN(_token));
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => dispatch(SET_USER(user))); 
      spotify.getPlaylist("37i9dQZF1E36rd0QMZvxtA").then(playlist => dispatch(SET_PLAYLIST(playlist)));
    }

  }, [dispatch]) 
  

  return (
    <div>
    {
      user ? <Player/> : <Login/>
    }
    </div>
);
}

