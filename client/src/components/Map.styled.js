import styled from "styled-components";
import background from "../assets/images/testmap.jpg";

export const MapStyled = styled.div`  
  height: 400px;
  width: 70%;
  margin: 70px auto;
  display: grid; 
  grid-template-columns: repeat(25,4%);
  gird-template-rows: repeat(19,4%);  
`;
//background-image: url(${background});

