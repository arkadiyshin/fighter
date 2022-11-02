import styled, { createGlobalStyle } from "styled-components";
import background from "./assets/background.jpg";

export const AppStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`body {
  background-image: url(${background});
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
`;
