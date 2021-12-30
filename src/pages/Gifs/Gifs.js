import GifyDisplay from "./GifyDisplay";
import Form from "./Forms";
import React, { useState } from "react";

function Gifs() {
  const API_KEY = "l0KZOOozi5WzYwHuxm2Zb7clklEE19Yv";

  const [gify, setGify] = useState(null);

  const getGify = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      // searchTerm = "g"
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=${searchTerm}`
    );
    // parse JSON response into a javascript object
    const data = await response.json();
    // console.log(data)
    // set the Movie state to the movie
    setGify(data);
  };
  return (
    <div className="homer">
      <h1>Gifs app page</h1>
      <Form getGify={getGify} />
      <GifyDisplay gify={gify} />
    </div>
  );
}

export default Gifs;
