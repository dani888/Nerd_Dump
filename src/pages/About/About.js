import git from "../../public/images/Github_logo.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="homer">
      <div className="flex">
        <div className="textbox">
          <div className="column">
            <div className="col s12 m6">
              <div className="card">
                <h1>
                  <u>
                    About <span id="colorD">Nerd</span>Dump
                  </u>
                </h1>
                <p className="projp">
                  This an experimental application is a passaion project built
                  by Daniel Werminghasuen and Ashley Swank. NerdDump is about
                  creating cool features on a react page to learn and display
                  features that we like to learn and are passionate about
                </p>
                <br />

                <div class="collection">
                  <a
                    target="blank"
                    href="https://danielwerminghausenporfolio.netlify.app/"
                    class="collection-item"
                  >
                    Daniel Werminghausen
                  </a>
                  <a
                    href="https://ashleyswank.netlify.app/"
                    class="collection-item"
                  >
                    Ashley Swank
                  </a>
                </div>
                <br />
                <span className="center">
                  <b>Daniel Github</b> | <b>Ashley Github </b>
                </span>
                <br />
                <Link
                  to={{
                    pathname:
                      "https://github.com/dani888?tab=overview&from=2021-11-01&to=2021-11-09",
                  }}
                  target="_blank"
                >
                  <img
                    className="center"
                    alt="i"
                    src={git}
                    width="130"
                    height="75"
                  />
                </Link>
                <Link
                  to={{
                    pathname: "https://github.com/alengysia",
                  }}
                  target="_blank"
                >
                  <img
                    className="center"
                    alt="i"
                    src={git}
                    width="130"
                    height="75"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
