import React, { useState } from "react";

// import './Form.css'

export default function AddWeather(props) {
  const [searching, setSearching] = useState("");

  return (
    <form>
      <div
        className="form-group"
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter location..."
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              props.city(searching);
            }
          }}
          style={{
            width: "20vw",
            backgroundColor: "#254e58",
            border: "none",
            borderBottom: "2px solid #d3e6db",
            color: "white",
          }}
        />
      </div>
    </form>
  );
}
