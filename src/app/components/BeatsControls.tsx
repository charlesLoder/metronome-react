import React from "react";

function BeatsControls({ numBeats, setNumBeats }: { numBeats: number; setNumBeats: (numBeats: number) => void }) {
  const incrementBeats = () => {
    setNumBeats(numBeats + 1);
  };

  const decrementBeats = () => {
    if (numBeats > 1) {
      setNumBeats(numBeats - 1);
    }
  };

  return (
    <div className="flex flex-row gap-4 items-center mb-8 mt-2">
      <button
        className="py-1 px-4 rounded bg-[#f8f8f2] opacity-80 text-[#282a36] text-lg leading-4"
        onClick={decrementBeats}
      >
        –
      </button>
      <button
        className="py-1 px-4 rounded bg-[#f8f8f2] opacity-80 text-[#282a36] text-lg leading-4"
        onClick={incrementBeats}
      >
        +
      </button>
    </div>
  );
}

export default BeatsControls;
