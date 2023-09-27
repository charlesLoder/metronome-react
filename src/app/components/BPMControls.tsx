import React, { useState } from "react";

function BPMControls({ initialBPM, onBPMChange }: { initialBPM: number; onBPMChange: (newBPM: number) => void }) {
  const [bpm, setBPM] = useState(initialBPM);

  return (
    <div className="flex flex-row gap-4 text-[#bd93f9] w-full mx-auto justify-between mt-4 mb-2 text-3xl">
      <input
        type="range"
        className="accent-[#bd93f9]"
        min="1"
        max="300"
        value={bpm}
        onChange={(e) => {
          const newBPM = parseInt(e.target.value);
          setBPM(newBPM);
          onBPMChange(newBPM);
        }}
      />
      <div>{bpm}</div>
    </div>
  );
}

export default BPMControls;
