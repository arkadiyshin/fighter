import styled from "styled-components";
import punch from "../assets/punch.png";

export const FighterP = styled.p`
color: #ffffff;
font-size: 20px;
padding: 15px;
`
export const FighterStyledImg = styled.img`
max-height: 300px;
margin: 1em 0; 
`

export const FighterButton = styled.button`
height: 10vh;
width: 10vh;
background: url(${punch}) center /100% no-repeat;
margin: 25vh 0 0 0;
 &:hover {
    cursor: pointer;
 }
`

export const FighterDiv = styled.div`
color: #ffffff;
font-size: 20px;
padding: 15px;
`