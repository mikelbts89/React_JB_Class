import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Components/LayoutArea/Menu/Menu";
import Routing from "./Components/LayoutArea/Routing/Routing";
import RoutingHeaders from "./Components/LayoutArea/RoutingHeaders/RoutingHeaders";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <RoutingHeaders />
        </header>
        <aside>
          <Menu />
        </aside>
        <main>
          <Routing />
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
