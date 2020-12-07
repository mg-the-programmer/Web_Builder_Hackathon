import React from "react";
import "./styles.css";
import details from "./details.json";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <textarea name="message" rows="10" cols="30" style={{ marginTop: 10 }}>
        The cat was playing in the garden.
      </textarea>
    </div>
  );
}
