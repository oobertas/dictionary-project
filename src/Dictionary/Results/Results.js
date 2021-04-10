import React from "react";
import icon from "../../type_icon.png";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Photos from "./Photos";

export default function Results(props) {
  if (props.results === "error") {
    return (
      <div className="error">
        Oops...I don't know this word 🧑‍🏫 You should try something else!
      </div>
    );
  } else if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="searchWord">{props.results.word.toLowerCase()}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <Photos photos={props.photos} />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return <img src={icon} className="typeIcon" alt="logo" />;
  }
}
