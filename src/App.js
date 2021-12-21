// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home/Home'

import './App.css';
import './pages/Home/home.css'


function App() {
  return (
    <div className='App'>
      <Nav />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          {/* <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/weather">
            <Projects/>
          </Route>
          <Route exact path="/games">
            <Projects/>
          </Route> */}
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
