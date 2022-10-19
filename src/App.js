import React, { useState, useEffect } from "react";
import WeatherCard from "./Components/WeatherCard";
import AddWeather from "./Components/AddWeather";
import Welcome from "./Components/Welcome";

function App() {
  const [data, setData] = useState([]);
  const [searching, setSearching] = useState("");
  let url = `http://api.weatherstack.com/current?access_key=2bba4477bb61b7a51670d54b849d9948&query=${searching}`;
  async function fetching() {
    let res = await fetch(url);
    let response = await res.json();
    if (response.success === false) {
      return;
    } else {
      let newArr = [...data, response];
      setData(newArr);
    }
  }

  useEffect(() => {
    fetching();
  }, [searching]);

  function search(city) {
    setSearching(city);
  }

  function removeCard(lat) {
    let newArr = data.filter((item) => item.location.lat !== lat);
    setData(newArr);
  }
  return (
    <>
      {data.length <= 0 ? (
        <>
        <Welcome/>
        <AddWeather city={search} />
        </>
      ) : (
        <div>
          {data.map((item) => (
            <WeatherCard data={item} deleteCard={removeCard} />
          ))}
          <AddWeather city={search} />
        </div>
      )}
    </>
  );
}

export default App;
