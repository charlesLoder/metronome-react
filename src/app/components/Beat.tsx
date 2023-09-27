import React from "react";

function Beat({ isAccented, onToggleAccent }: { isAccented: boolean; onToggleAccent: () => void }) {
  const beatStyle = {
    backgroundColor: isAccented ? "#50fa7b" : "#bd93f9", // Change color based on accented state
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    margin: "5px",
    cursor: "pointer",
  };

  return <div style={beatStyle} onClick={onToggleAccent}></div>;
}

export default Beat;
