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
        Type === "RadioButton" ? (postDetail.Type = "radio") : "";

        return (
          <div className="inputContainer">
            {/* Label */}
            <h3>{Name + ":"}</h3>
            {/* InputBox */}
            {(Type === "text" || Type === "password") && (
              <input type={Type} className="inputBox" size={Size} />
            )}
            {/* RadioButton  */}
            {Type === "radio" && (
              <form className="radioBtnContainer">
                {DropdownValues.map((value) => {
                  let { DisplayValue, Value } = value;
                  return (
                    <>
                      <input
                        style={{ marginLeft: "10px" }}
                        type={Type}
                        id={Value}
                        value={Value}
                        name={Name}
                      />
                      <label style={{ marginRight: "10px" }} for={Value}>
                        {DisplayValue}
                      </label>
                    </>
                  );
                })} 
              </form>
            )}
            {Type === "Dropdown" && (
              <div>
                {DropdownValues.map((value) => {
                  let { DisplayValue, Value } = value;

                  // <datalist id="dropDown">
                  //   <option value={DisplayValue}></option>
                  //   <option value={DisplayValue}></option>
                  //   {/* <p>{DisplayValue}</p> */}
                  // </datalist>;
                })}
              </div>
            )}
          </div>
        );
      })}
      {/* Buttons */}
      <button
        style={{
          fontSize: 16,
          marginTop: 4
        }}
        type="submit"
      >
        {details.ActionDisplayName}
      </button>
    </div>
  );
}
