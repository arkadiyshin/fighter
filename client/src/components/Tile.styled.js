import styled from "styled-components";
import grass from "../assets/grass.png";
import dirt from "../assets/dirt.png";
import bush from "../assets/bush.png";
import water from "../assets/water.jpeg";

const assets = {
    grass, dirt, bush, water
}
export const TileStyled = styled.div`
  background: url(${props => assets[props.title]}) center /100% no-repeat;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  position: relative;
`;
export const TileHeroStyled = styled.img`

height: 100%;
position: absolute;
`