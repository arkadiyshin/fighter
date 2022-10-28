import "./App.css";
import { AppStyled } from "./App.styled";
import { Routing } from "./routing/Routing";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./App.styled";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppStyled>
        <Routing />
      </AppStyled>
    </BrowserRouter>
  );
}

export default App;
