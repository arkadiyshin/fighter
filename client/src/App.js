import "./App.css";
import { AppStyled } from "./App.styled";
import { Fight } from "./pages/Fight";
import { Routing } from "./routing/Routing";

function App() {
  return (
  <AppStyled>
    {/* <Routing/> */}
    <Fight/>
  </AppStyled>
  )
}

export default App;
