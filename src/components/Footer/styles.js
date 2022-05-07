import styled from "styled-components";

const FooterContainer = styled.div `
position: fixed;
bottom: 0;
height: 90px;
width: 100%;
background-color: #181818;
color: #fff;
display: flex;
justify-content: space-between;
`

const FooterLeft = styled.div `
flex: 0.3;
display: flex;
align-items: center;
max-width: 320px;
& img{
    height: 60px;
    width: 60px;
    margin: 0 20px;
    object-fit: contain;
}
& .MuiSvgIcon-root{
    font-size: 1.3rem;
}`


const FooterCenter = styled.div `
flex: 0.4;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 300px;
margin-top: 1rem;
& .MuiSvgIcon-root{
    font-size: 2.5rem;
}
& .MuiSlider-root{
    color: #1db954;
}
`

const FooterRight = styled.div `
flex: 0.3;
display: flex;
align-items: center;
justify-content: center;
margin-right: 35px;
max-width: 280px;
& .MuiSlider-root{
    color: #fff;
}
& .MuiSvgIcon-root{
    font-size: 1.2rem;
    margin-top: 5px;
    color: #ccc;
}
`


export {
    FooterContainer,
    FooterLeft,
    FooterRight,
    FooterCenter
}