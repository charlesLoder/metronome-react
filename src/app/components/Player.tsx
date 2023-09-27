import React, { useState, useEffect, useRef } from "react";
import AudioPlayer from "./AudioPlayer";

interface Beat {
  number: number;
  isAccented: boolean;
}

function Player({ bpm, beats, isPlaying }: { bpm: number; beats: Beat[]; isPlaying: boolean }) {
  const [currentBeat, setCurrentBeat] = useState(0);
  const accentedPlayer = useRef<AudioPlayer>(null);
  const unAccentedPlayer = useRef<AudioPlayer>(null);

  if (isPlaying) {
    const current = beats[currentBeat];
    if (current.isAccented) {
      accentedPlayer.current?.play();
    } else {
      unAccentedPlayer.current?.play();
    }
    setTimeout(() => {
      // get the next beat or repeat the array if at the end
      const nextBeat = currentBeat === beats.length - 1 ? 0 : currentBeat + 1;
      setCurrentBeat(nextBeat);
    }, 60000 / bpm);
  }

  useEffect(() => {
    if (!isPlaying) {
      setCurrentBeat(0);
    }
  }, [currentBeat]);

  return (
    <div className="flex flex-row rounded border-2 border-solid aspect-square w-full min-h-[100px]">
      <div className="flex flex-col justify-center items-center w-full bg-[#44475a]">
        <div className="text-[72px]">
          <span className={beats[currentBeat].isAccented ? "text-red-500" : "text-[#bd93f9]"}>
            {isPlaying ? beats[currentBeat].number : 1}
          </span>
        </div>
      </div>
      <AudioPlayer source="/high-beep.wav" ref={accentedPlayer} />
      <AudioPlayer source="/low-beep.wav" ref={unAccentedPlayer} />
    </div>
  );
}

export default Player;
