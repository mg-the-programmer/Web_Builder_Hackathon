import React from "react";
import "./styles.css";
import details from "./details.json";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* Header */}
      <h1 className="header">{details.Title}</h1>

      {/* Input Boxs and their Labels */}
      {details.Attributes.map((postDetail) => {
        let { Name, Type, Size, DropdownValues } = postDetail;

        if (Type === "SecretTextBox") {
          return (postDetail.Type = "password");
        }

        return (
          <div className="inputContainer">
            {/* Label */}
            <h3>{Name + ":"}</h3>

            {/* InputBox */}
            {(Type === "text" || Type === "password") && (
              <input type={Type} className="inputBox" size={Size} />
            )}

            {/* Dropdown Inputbox */}
            {Type === "DropDown" && (
              <div>
                <input list="dropDown" type="text" />
                {postDetail.DropdownValues.map((value) => {
                  let { DisplayValue } = value;
                  return (
                    <div>
                      <datalist id="dropDown">
                        <option value={DisplayValue}></option>
                        <option value={DisplayValue}></option>
                        {/* <p>{DisplayValue}</p> */}
                      </datalist>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Radio Button */}
          </div>
        );
      })}
      {/* Buttons */}
      <button type="submit">{details.ActionDisplayName}</button>
    </div>
  );
}
