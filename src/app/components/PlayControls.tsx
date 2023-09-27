import React from "react";

function PlayControls({
  isPlaying,
  onButtonPress,
}: {
  isPlaying: boolean;
  onButtonPress: (isPlaying: boolean) => void;
}) {
  const handleButtonPress = () => {
    onButtonPress(!isPlaying);
  };

  if (isPlaying) {
    return (
      <button className="text-white font-bold py-2 px-4 rounded bg-[#ff5555]" onClick={handleButtonPress}>
        Stop
      </button>
    );
  } else {
    return (
      <button className="py-2 px-4 rounded bg-[#50fa7b] text-[#282a36] font-bold" onClick={handleButtonPress}>
        Play
      </button>
    );
  }
}

export default PlayControls;
