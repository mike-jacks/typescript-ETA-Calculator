import { Dispatch, SetStateAction } from "react";
import { SpeedUnit } from "../enums";
import styles from "./SpeedUnitSelector.module.css";

type SpeedUnitSelectorProps = {
  setSelectedSpeedUnit: Dispatch<SetStateAction<SpeedUnit>>;
  setSpeedInput: Dispatch<SetStateAction<string>>;
  setDistanceInput: Dispatch<SetStateAction<string>>;
};

export default function SpeedUnitSelector({ setSelectedSpeedUnit, setSpeedInput, setDistanceInput }: SpeedUnitSelectorProps) {
  const handleClick = (unit: SpeedUnit) => {
    setSelectedSpeedUnit((prev) => {
      switch (prev) {
        case SpeedUnit.MilesPerHour:
          if (unit === SpeedUnit.MilesPerHour) {
            break;
          } else if (unit === SpeedUnit.KilometersPerHour) {
            setSpeedInput((prev) => String((Number(prev) * 1.6093).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) * 1.60934).toFixed(4)));
            break;
          } else if (unit === SpeedUnit.FeetPerSecond) {
            setSpeedInput((prev) => String((Number(prev) * 1.46667).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) * 5280).toFixed(4)));
            break;
          } else if (unit === SpeedUnit.MetersPerSecond) {
            setSpeedInput((prev) => String((Number(prev) * 0.44704).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) * 1609.34).toFixed(4)));
            break;
          }
          break;
        case SpeedUnit.KilometersPerHour:
          if (unit === SpeedUnit.MilesPerHour) {
            setSpeedInput((prev) => String((Number(prev) / 1.6093).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) / 1.60934).toFixed(4)));
          } else if (unit === SpeedUnit.KilometersPerHour) {
            break;
          } else if (unit === SpeedUnit.FeetPerSecond) {
            setSpeedInput((prev) => String((Number(prev) * 0.911344).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) * 3280.84).toFixed(4)));
            break;
          } else if (unit === SpeedUnit.MetersPerSecond) {
            setSpeedInput((prev) => String((Number(prev) * 0.27778).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) * 3280.84).toFixed(4)));
            break;
          }
          break;
        case SpeedUnit.FeetPerSecond:
          if (unit === SpeedUnit.MilesPerHour) {
            setSpeedInput((prev) => String((Number(prev) / 1.46667).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) / 5280).toFixed(4)));
            break;
          } else if (unit === SpeedUnit.KilometersPerHour) {
            setSpeedInput((prev) => String((Number(prev) * 1.09728).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) / 3280.84).toFixed(4)));
            break;
          } else if (unit === SpeedUnit.FeetPerSecond) {
            break;
          } else if (unit === SpeedUnit.MetersPerSecond) {
            setSpeedInput((prev) => String((Number(prev) * 0.3048).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) * 0.3048).toFixed(4)));
            break;
          }
          break;
        case SpeedUnit.MetersPerSecond:
          if (unit === SpeedUnit.MilesPerHour) {
            setSpeedInput((prev) => String((Number(prev) / 0.44704).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) / 1609.34).toFixed(4)));
            break;
          } else if (unit === SpeedUnit.KilometersPerHour) {
            setSpeedInput((prev) => String((Number(prev) * 3.6).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) / 1000).toFixed(4)));
            break;
          } else if (unit === SpeedUnit.FeetPerSecond) {
            setSpeedInput((prev) => String((Number(prev) * 3.28084).toFixed(4)));
            setDistanceInput((prev) => String((Number(prev) / 3.28084).toFixed(4)));
            break;
          } else if (unit === SpeedUnit.MetersPerSecond) {
            break;
          }
          break;
      }
      return unit;
    });
  };
  return (
    <div className={`${styles.buttons}`}>
      <button className="button button__miles-per-hour" title="miles-per-hour" onClick={() => handleClick(SpeedUnit.MilesPerHour)}>
        mph
      </button>
      <button className="button button__kilometers-per-hour" title="kilometers-per-hour" onClick={() => handleClick(SpeedUnit.KilometersPerHour)}>
        km/h
      </button>
      <button className="feet-per-second" title="feet-per-second" onClick={() => handleClick(SpeedUnit.FeetPerSecond)}>
        ft/s
      </button>
      <button className="meters-per-second" title="meters-per-second" onClick={() => handleClick(SpeedUnit.MetersPerSecond)}>
        m/s
      </button>
    </div>
  );
}
