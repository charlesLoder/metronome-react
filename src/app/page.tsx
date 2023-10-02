"use client";
import React, { useState } from "react";
import Beat from "./components/Beat";
import BeatsControls from "./components/BeatsControls";
import BPMControls from "./components/BPMControls";
import PlayControls from "./components/PlayControls";
import Player from "./components/Player";

const MemoizedBeat = React.memo(Beat);

function Metronome() {
  const [bpm, setBpm] = useState(60);
  const [numBeats, setNumBeats] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const [accentedBeats, setAccentedBeats] = useState(Array(numBeats).fill(false));
  const [beatArray, setBeatArray] = useState(Array(numBeats).fill(false));

  const handleBPMChange = (newBPM: number) => {
    setBpm(newBPM);
  };

  const handleBeatAccentToggle = (index: number) => {
    const updatedAccentedBeats = [...accentedBeats];
    updatedAccentedBeats[index] = !updatedAccentedBeats[index];
    setAccentedBeats(updatedAccentedBeats);
  };

  // I'm afraid this function is causing a lot of unnecessary re-renders
  const handleButtonPress = () => {
    // if isPlaying is false, then when the button is pressed, the user is trying to start the metronome
    // set the beat array to pass into the Player component
    if (!isPlaying) {
      setBeatArray(Array.from({ length: numBeats }).map((b, i) => ({ number: i + 1, isAccented: accentedBeats[i] })));
    }

    // toggle the isPlaying state
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <main className="w-full mx-auto flex flex-col items-center text-[#bd93f9] shadow-inner">
        <div className="container flex flex-col items-center max-w-[300px] w-[70%] bg-[#282a36] rounded-lg p-4 shadow-lg mt-8">
          <Player bpm={bpm} beats={beatArray} isPlaying={isPlaying} />
          <BPMControls initialBPM={bpm} onBPMChange={handleBPMChange} />
          <hr className="w-full my-4 border-[#bd93f9]" />
          <p className="text-[#f8f8f2] opacity-80 text-xs mb-2 text-left w-full">
            Add more beats or click on a beat to accent it
          </p>
          <div className="beats-wrapper mx-auto flex flex-row flex-wrap">
            {Array.from({ length: numBeats }).map((_, index) => (
              <MemoizedBeat
                key={index}
                isAccented={accentedBeats[index]}
                onToggleAccent={() => handleBeatAccentToggle(index)}
              />
            ))}
          </div>
          <BeatsControls numBeats={numBeats} setNumBeats={setNumBeats} />
          <PlayControls isPlaying={isPlaying} onButtonPress={handleButtonPress} />
        </div>
      </main>
    </>
  );
}

export default Metronome;
