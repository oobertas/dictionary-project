import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  function checkDefinition(definition) {
    let result = definition ? `"${definition}"` : null;
    return result;
  }
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
                  {checkDefinition(definition.example)}
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
