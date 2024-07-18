import { Dispatch, SetStateAction, useState } from "react";
import { switchSpeedUnit } from "../../functions/switchSpeedUnit";
import { SpeedUnit } from "../enums";
import styles from "./SpeedUnitSelector.module.css";

type SpeedUnitSelectorProps = {
  speedInput: string;
  distanceInput: string;
  setSelectedSpeedUnit: Dispatch<SetStateAction<SpeedUnit>>;
  setSpeedInput: Dispatch<SetStateAction<string>>;
  setDistanceInput: Dispatch<SetStateAction<string>>;
};

export default function SpeedUnitSelector({
  speedInput,
  distanceInput,
  setSelectedSpeedUnit,
  setSpeedInput,
  setDistanceInput,
}: SpeedUnitSelectorProps) {
  const [selectedButton, setSelectedButton] = useState<SpeedUnit>(SpeedUnit.MilesPerHour);

  const handleClick = (unit: SpeedUnit) => {
    setSelectedSpeedUnit((prev) => {
      setSelectedButton(unit);
      switchSpeedUnit(prev, unit, speedInput, distanceInput, setSpeedInput, setDistanceInput);
      return unit;
    });
  };
  return (
    <div className={`${styles.buttons}`}>
      <button
        type="button"
        className={`${styles.button} ${styles["button__miles-per-hour"]} ${selectedButton === SpeedUnit.MilesPerHour ? styles.selected : ""}`}
        title="miles-per-hour"
        onClick={() => handleClick(SpeedUnit.MilesPerHour)}
      >
        mph
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles["button__kilometers-per-hour"]} ${
          selectedButton === SpeedUnit.KilometersPerHour ? styles.selected : ""
        }`}
        title="kilometers-per-hour"
        onClick={() => handleClick(SpeedUnit.KilometersPerHour)}
      >
        km/h
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles["button__feet-per-second"]} ${selectedButton === SpeedUnit.FeetPerSecond ? styles.selected : ""}`}
        title="feet-per-second"
        onClick={() => handleClick(SpeedUnit.FeetPerSecond)}
      >
        ft/s
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles["button__meters-per-second"]} ${selectedButton === SpeedUnit.MetersPerSecond ? styles.selected : ""}`}
        title="meters-per-second"
        onClick={() => handleClick(SpeedUnit.MetersPerSecond)}
      >
        m/s
      </button>
    </div>
  );
}
