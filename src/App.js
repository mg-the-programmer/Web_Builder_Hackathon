import React from "react";
import "./styles.css";
import "./App.css";
import Builder from "Builder.js";

export default function App() {
  return (
    <div className="App">
      <Builder />
      <textarea name="message" rows="10" cols="30" style={{ marginTop: 10 }}>
        The cat was playing in the garden.
      </textarea>
    </div>
  );
}
