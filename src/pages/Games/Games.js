// import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Games(props) {
  return (
    <div className="homer">
      <h2>
        <u>Games Page</u>
      </h2>
      <Button
        className="homebut"
        href="/games/breakout"
        target="blank"
        variant="contained"
        size="large"
      >
        Breakout
      </Button>
      {/* <Link to="/games/breakout" target="blank">
        <div>Breakout Game</div>
      </Link> */}
      <p>
        Game is in Beta, Close game tab once done playing (Not mobile
        reposonsive yet!)
      </p>
    </div>
  );
}

export default Games;
