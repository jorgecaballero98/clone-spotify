import styled from "styled-components";

const BodyContainer = styled.div `
flex: 1;
position: relative;
height: 100vh;
margin-left: 250px;
color: #fff;
padding: 30px;
overflow-y: overlay;
&::-webkit-scrollbar {
    display: none;
}
`

const HeaderContainer = styled.div `
display: flex;
height: 40px;
justify-content: space-between;
margin-bottom: 30px;
`;

const HeaderLeft = styled.div `
flex: 0.5;
display: flex;
align-items: center;
min-width: 75px;
color: #181818;
& .MuiInputLabel-root {
    color: #fff;
}
& .MuiInputAdornment-root {
    color: #fff;
}
& .MuiInputBase-root {
    color: #fff;
}
& .MuiInput-root {
    padding: .5rem;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: #181818;
}
`;

const HeaderRight = styled.div `
display: flex;
align-items: center;
border: 2px solid #181818;
border-radius: 30px;
padding: .5rem;
background-color: #181818;
`;

const HeaderRight2 = styled.div `
position: relative;
left: 20%;
text-align: center;
border: 2px solid #181818;
border-radius: 30px;
padding: .5rem;
background-color: #181818;
`;

const Info = styled.div `
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 10px;
width: 40%;
& img{
    width: 20vw;
    margin: 10px 20px;
    box-shadow: 0 4px 60px #000;
    border-radius: 5px;
}
`;

const InfoText = styled.div `
flex: 1;
& h1{
    margin-bottom: 10px;
}
`;

const Songs = styled.div `
margin: 20px -20px;
`

const Icons = styled.div `
display: flex;
align-items: center;
& .MuiSvgIcon-root{
    margin-right: 20px;
    }`

const SongRowContainer = styled.div `
display: flex;
align-items: center;
justify-content: flex-start;
margin-bottom: 7px;
align-items: center;
z-index: 90;
color: #fff;
&:hover{
cursor: pointer;
background-color: #000;
border-radius: 1rem;
opacity: 0.8;
}
& img {
    height: 50px;
    width: 50px;
    border-radius: 5px;
    object-fit: contain;
} 
`

const SongInfo = styled.div `
margin-left: 20px;
& p{
 margin-top: 3px;
 color: lightgray
}

`

export {
    BodyContainer,
    HeaderContainer,
    HeaderLeft,
    HeaderRight,
    Info,
    InfoText,
    Songs,
    Icons,
    SongRowContainer,
    SongInfo,
    HeaderRight2
}