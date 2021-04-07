import React from "react";
import Player from "./Player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <Player sound={props.phonetic.audio} />
      <br />
      <strong>{props.phonetic.text}</strong>
    </div>
  );
}
