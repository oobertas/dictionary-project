import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <em>
                {definition.definition}
                <br />
                {definition.example}
              </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
