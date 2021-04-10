import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <em>
                <div id="definition" className="text">
                  {definition.definition}
                </div>
                <br />
                <div id="example" className="text">
                  "{definition.example}"
                </div>
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
