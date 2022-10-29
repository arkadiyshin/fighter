import styled from "styled-components";
import background from "../assets/images/testmap.jpg";

export const MapStyled = styled.div`  
  height: 70%;
  width: 50%;
  margin: 70px auto;
  display: grid; 
  grid-template-columns: repeat(25,4%);
  gird-template-rows: repeat(19);  
`;
//height: 400px;
//background-image: url(${background});

