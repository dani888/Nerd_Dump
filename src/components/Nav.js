import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import witcher from "../public/images/witcher.jpg";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper grey #000000 black">
          <a href="/" className="brand-logo center">
            NerdDump
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="left hide-on-med-and-down">
            <li>
              <Link to="/">
                <div>Home</div>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <div>About</div>
              </Link>
            </li>
            <li>
              <Link to="/gifs">
                <div>Gifs</div>
              </Link>
            </li>
            <li>
              <Link to="/weather">
                <div>Weather</div>
              </Link>
            </li>
            <li>
              <Link to="/games">
                <div>Games</div>
              </Link>
            </li>
            <li>
              <div>
                <img
                  className="witcher"
                  alt="witcher"
                  src={witcher}
                  href="#"
                ></img>
              </div>
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav sidenav-close" id="mobile-demo">
        <li>
          <Link to="/">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <div>About</div>
          </Link>
        </li>
        <li>
          <Link to="/gifs">
            <div>Gifs</div>
          </Link>
        </li>
        <li>
          <Link to="/weather">
            <div>Weather</div>
          </Link>
        </li>
        <li>
          <Link to="/games">
            <div>Games</div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
