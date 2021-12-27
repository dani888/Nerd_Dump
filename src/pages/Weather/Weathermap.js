import React, { Component } from "react";
import $ from "jquery";
import mapboxgl from "mapbox-gl";

let map;

// dragging marker on map
const marker = new mapboxgl.Marker({ draggable: true });

function setMarker(lat, lon) {
  marker.remove();
  marker.setLngLat([lon, lat]);
  marker.addTo(map);
  map.flyTo({
    center: [lon, lat],
    zoom: 11,
    speed: 10,
  });
}
////////////////////////////////////////////////////////////
// set at and lon to false
function getWeather(lat = false, lon = false) {
  const $city = $("#weather_for");
  const $temp = $("#temp");
  const $feels_like = $("#feels_like");
  const $weather = $("#weather");
  console.log("hello2");
  let data = {
    appid: "fa8bb15376afa6c4b57918cd4d2819e3",
    units: "imperial",
  };
  //if using map use lat && lon else use user input
  if (lat && lon) {
    data.lat = lat;
    data.lon = lon;
  } else {
    data.q = $("#user_input").val();
  }
  const promise = $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",
    data: data,
  });
  promise.then(
    (data) => {
      console.log(data);
      $city.text(data.name);
      $temp.text(data.main.temp);
      $feels_like.text(data.main.feels_like);
      $weather.text(data.weather[0].main);
      setMarker(data.coord.lat, data.coord.lon);
    },
    (error) => {
      console.log("bad request: ", error);
    }
  );
}

class Weathermap extends Component {
  componentDidMount() {
    /////////////////////////////////////////////////////////////////
    // mapbox implementation
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGFuaWVsODA4MDgiLCJhIjoiY2t0Z2Z2cDh5MGhwMDJucG5kZnM1Zm42bSJ9.SCqgqVHGZ5UhC1otZL9YHA";
    map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    ///////////////////////////////////////////////////////////
    // dragging pointer and dropping it
    function onDragEnd() {
      const lngLat = marker.getLngLat();
      getWeather((this.lat = lngLat.lat), (this.lon = lngLat.lng));
    }
    marker.on("dragend", onDragEnd);
    console.log("hello");
  }

  render() {
    return (
      <>
        <p className="pweather">weather For:</p>
        <span className="span" id="weather_for"></span>
        <br />
        <p className="pweather">Temperature:</p>
        <span className="span" id="temp"></span>
        <br />
        <p className="pweather">Feels like:</p>
        <span className="span" id="feels_like"></span>
        <br />
        <p className="pweather">Weather:</p>
        <span className="span" id="weather"></span>
        <br />
        <br />
        <div>
          <div className="input-group">
            <input
              id="user_input"
              type="text"
              className="form-control"
              defaultValue=""
            />
            <br />
            <button
              type="submit"
              value="Get Weather Info"
              onClick={getWeather}
              variant="contained"
              className="btn"
            >
              Get Weather Info
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <center>
          <div id="map"></div>
        </center>
      </>
    );
  }
}

export default Weathermap;
