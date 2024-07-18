import { Dispatch, SetStateAction } from "react";
import { SpeedUnit } from "../components/enums";

export function switchSpeedUnit(
  prev: SpeedUnit,
  unit: SpeedUnit,
  speedInput: string,
  distanceInput: string,
  setSpeedInput: Dispatch<SetStateAction<string>>,
  setDistanceInput: Dispatch<SetStateAction<string>>
) {
  switch (prev) {
    case SpeedUnit.MilesPerHour:
      if (unit === SpeedUnit.MilesPerHour) {
        break;
      } else if (unit === SpeedUnit.KilometersPerHour) {
        setSpeedInput((prev) => String((Number(prev) * 1.60934).toFixed(4)));
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
        setSpeedInput((prev) => String((Number(prev) / 1.60934).toFixed(4)));
        setDistanceInput((prev) => String((Number(prev) / 1.60934).toFixed(4)));
      } else if (unit === SpeedUnit.KilometersPerHour) {
        break;
      } else if (unit === SpeedUnit.FeetPerSecond) {
        setSpeedInput((prev) => String((Number(prev) * 0.911344).toFixed(4)));
        setDistanceInput((prev) => String((Number(prev) * 3280.84).toFixed(4)));
        break;
      } else if (unit === SpeedUnit.MetersPerSecond) {
        setSpeedInput((prev) => String((Number(prev) / 3.6).toFixed(4)));
        setDistanceInput((prev) => String((Number(prev) * 1000).toFixed(4)));
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
        setSpeedInput((prev) => String((Number(prev) * 2.23694).toFixed(4)));
        setDistanceInput((prev) => String((Number(prev) * 0.000621371).toFixed(4)));
        break;
      } else if (unit === SpeedUnit.KilometersPerHour) {
        setSpeedInput((prev) => String((Number(prev) * 3.6).toFixed(4)));
        setDistanceInput((prev) => String((Number(prev) * 0.001).toFixed(4)));
        break;
      } else if (unit === SpeedUnit.FeetPerSecond) {
        setSpeedInput((prev) => String((Number(prev) * 3.28084).toFixed(4)));
        setDistanceInput((prev) => String((Number(prev) * 3.28084).toFixed(4)));
        break;
      } else if (unit === SpeedUnit.MetersPerSecond) {
        break;
      }
      break;
  }
  if (Number(speedInput) === 0) {
    setSpeedInput("");
  }
  if (Number(distanceInput) === 0) {
    setDistanceInput("");
  }
}
