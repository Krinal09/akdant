import { useState } from "react";

function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="space-y-3">
      <div className="relative h-[460px] overflow-hidden rounded-2xl border border-platinum/10">
        <img src={beforeImage} alt="Before" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img src={afterImage} alt="After" className="h-full w-full object-cover" />
        </div>
        <div
          className="absolute bottom-0 top-0 w-1 bg-platinum"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="w-full accent-accent"
      />
    </div>
  );
}

export default BeforeAfterSlider;
