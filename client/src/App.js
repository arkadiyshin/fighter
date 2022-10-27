import "./App.css";
import { AppStyled } from "./App.styled";
import { Routing } from "./routing/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppStyled>
        <Routing />
      </AppStyled>
    </BrowserRouter>
  );
}

export default App;
