import styled from "styled-components";

const SidebarContainer = styled.div `
flex: 0.2;
position: fixed;
height: 100vh;
background-color: #000;
min-width: 240px;
color: #fff;
& img{
    height: 50px;
    padding: 10px;
    margin: auto;
}
& hr{
    border: 1px solid #181818;
    width: 90%;
    margin: 10px auto;
}
`
const Playlists = styled.div `
margin: 10px 10px;
`

const Choices = styled.div `
 display: flex;
 align-items: center;
 color: #ccc;
 height: 40px;
 width: 100%;
 margin: .5rem 1rem;
 cursor: pointer;
    &:hover{
        color: #fff;
        transition: 300ms color ease-in;
    }
    & .MuiSvgIcon-root{
    font-size: 2rem;
    margin-right: 1rem;
}
`

export {
    SidebarContainer,
    Playlists,
    Choices,
};