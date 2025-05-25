import React, { useState } from "react";

interface DualRangeSliderProps {
  min: number;
  max: number;
  step?: number;
  minGap?: number;
  onChange?: (minVal: number, maxVal: number) => void;
}

const DualRangeSlider: React.FC<DualRangeSliderProps> = ({
  min,
  max,
  step = 1,
  minGap = 100,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal - minGap);
    setMinVal(value);
    onChange?.(value, maxVal);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal + minGap);
    setMaxVal(value);
    onChange?.(minVal, value);
  };

  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  return (
    <div className="relative bg-destructive rounded-full w-full h-2">
      {/* Highlighted range */}
      <div
        className="z-0 absolute bg-green-500 rounded-full h-full"
        style={{
          left: `${minPercent}%`,
          width: `${maxPercent - minPercent}%`,
        }}
      />

      {/* Min slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        onChange={handleMinChange}
        className="top-1/2 left-0 z-10 hover:z-20 absolute bg-transparent [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-gray-400 [&::-webkit-slider-thumb]:rounded-full w-full [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 -translate-y-1/2 appearance-none [&::-webkit-slider-thumb]:appearance-none pointer-events-auto"
      />

      {/* Max slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        onChange={handleMaxChange}
        className="top-1/2 left-0 z-10 hover:z-20 absolute bg-transparent [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-gray-400 [&::-webkit-slider-thumb]:rounded-full w-full [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 -translate-y-1/2 appearance-none [&::-webkit-slider-thumb]:appearance-none pointer-events-auto"
      />
    </div>
  );
};

export default DualRangeSlider;
