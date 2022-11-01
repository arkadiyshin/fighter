import styled from "styled-components";

export const MapStyled = styled.div`  
  height: 100%;
  width: 70%;
  margin: 10px auto;
  display: grid; 
  grid-template-columns: repeat(25,4%);
  gird-template-rows: repeat(19);  
`;
//height: 400px;
//background-image: url(${background});

export const ButtonsStyled = styled.div`
color: #ffffff;
padding: 400px 0 0 0;
button{&:hover {
    cursor: pointer;
 }}
`