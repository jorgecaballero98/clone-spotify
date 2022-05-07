export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&").reduce((initial, item) => {
       let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {})
}

const endPoint = "https://accounts.spotify.com/authorize";
const clientId = "4d4ee1c60d834cefa4ec55a247076e43";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-top-read",
];
const loginURL = `${endPoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;


export { loginURL };