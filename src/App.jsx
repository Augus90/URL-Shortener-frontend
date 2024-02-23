import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Pages/Router";
import { Store } from "./utils/Store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Store>
  );
}

export default App;
