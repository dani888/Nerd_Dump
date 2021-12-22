import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

const Nav = () => {

  
    
    return (
      <>
      <nav>
        <div class="nav-wrapper grey darken-4">
        <a href="/" class="brand-logo center">NerdDump</a>
          <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul className="left hide-on-med-and-down">
            <li><Link to="/">
            <div>Home</div>
                </Link></li>
                <li><Link to="/about">
            <div>About</div>
                </Link></li>
                <li><Link to="/weather">
            <div>Weather</div>
                </Link></li>
                <li><Link to="/games">
            <div>Games</div>
                </Link></li>
          </ul>
      </div>
    </nav>

    <ul class="sidenav sidenav-close" id="mobile-demo">
      <li><Link to="/">
      <div>Home</div>
          </Link></li>
          <li><Link to="/about">
      <div>About</div>
          </Link></li>
          <li><Link to="/weather">
      <div>Weather</div>
          </Link></li>
          <li><Link to="/games">
      <div>Games</div>
          </Link></li>
    </ul>
        </>
      );
    };

    

export default Nav;