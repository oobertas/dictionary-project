import React from "react";
import useSound from "use-sound";

export default function Player(props) {
  const [play] = useSound(props.sound);
  return (
    <div className="Player">
      <button
        onClick={play}
        type="button"
        class="btn btn-outline-info btn-lg mx-auto"
      >
        <i class="far fa-play-circle fa-3x"></i>
      </button>
    </div>
  );
}
