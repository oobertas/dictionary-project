import React from "react";
import icon from "../../type_icon.png";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="searchWord">{props.results.word.toLowerCase()}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <img src={icon} className="typeIcon" alt="logo" />; //"Oops...I don't know such word 🧑‍🏫 You should try something else 🧐";
  }
}
