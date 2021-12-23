// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Weather from "./pages/Weather/Weather";
import Game from "./pages/Games/Games";
import Gifs from "./pages/Gifs/Gifs";

import "./App.css";
import "./pages/Home/home.css";
import "./pages/About/about.css";
import "./pages/Gifs/gifs.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/gifs">
          <Gifs />
        </Route>
        <Route exact path="/weather">
          <Weather />
        </Route>
        <Route exact path="/games">
          <Game />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
