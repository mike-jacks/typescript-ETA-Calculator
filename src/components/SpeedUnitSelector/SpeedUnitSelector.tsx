import { Dispatch, SetStateAction } from "react";
import { SpeedUnit } from "../enums";

type SpeedUnitSelectorProps = {
  setSelectedSpeedUnit: Dispatch<SetStateAction<SpeedUnit>>;
};

export default function SpeedUnitSelector({ setSelectedSpeedUnit }: SpeedUnitSelectorProps) {
  const handleClick = (unit: SpeedUnit) => {
    setSelectedSpeedUnit(unit);
  };
  return (
    <div className="speed-unit-buttons">
      <button className="miles-per-hour" title="miles-per-hour" onClick={() => handleClick(SpeedUnit.MilesPerHour)}>
        mph
      </button>
      <button className="kilometers-per-hour" title="kilometers-per-hour">
        km/h
      </button>
      <button className="feet-per-second" title="feet-per-second">
        ft/s
      </button>
      <button className="meters-per-second" title="meters-per-second">
        m/s
      </button>
    </div>
  );
}
