import Button from "@mui/material/Button";

function Home() {
  return (
    <div className="homer">
      <div className="flex">
        {/* <div className="textbox"> */}
        {/* <div className="column">
            <div className="col s12 m6">
              <div className="card"> */}
        <div className="w3-container w3-center w3-animate-top">
          <h1>
            <u>Welcome to</u>
          </h1>
          <h2>
            <u>All things Nerdy</u>
          </h2>
        </div>
        {/* </div>
            </div>
          </div> */}
        {/* </div> */}
        <br />

        <div class="w3-container w3-center w3-animate-left">
          <Button
            className="homebut"
            href="/weather"
            variant="contained"
            size="large"
          >
            Weather
          </Button>
        </div>
        <br />
        <div class="w3-container w3-center w3-animate-right">
          <Button
            className="homebut"
            href="/games"
            variant="contained"
            size="large"
          >
            Games
          </Button>
        </div>
        <br />
        <div class="w3-container w3-center w3-animate-left2">
          <Button
            className="homebut"
            href="/gifs"
            variant="contained"
            size="large"
          >
            Memes
          </Button>
        </div>
        <br />
        <div class="w3-container w3-center w3-animate-left1">
          <Button className="homebut" href="#" variant="outlined" size="large">
            Shows
          </Button>
        </div>
        <br />
        <div class="w3-container w3-center w3-animate-right2">
          <Button className="homebut" href="#" variant="outlined" size="large">
            Canvas
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
