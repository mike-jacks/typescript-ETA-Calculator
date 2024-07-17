import { useEffect, useState } from "react";
import { SpeedUnit } from "../enums";
import SpeedUnitSelector from "../SpeedUnitSelector/SpeedUnitSelector";
import styles from "./Card.module.css";

export default function Card() {
  const [speedInput, setSpeedInput] = useState<string>("");
  const [distanceInput, setDistanceInput] = useState<string>("");
  const [results, setResults] = useState<string>("Enter Speed and Distance above");
  const [selectedSpeedUnit, setSelectedSpeedUnit] = useState<SpeedUnit>(SpeedUnit.MilesPerHour);
  const [distanceLabel, setDistanceLabel] = useState<string>("Miles");
  const [speedLabel, setSpeedLabel] = useState<string>("mph");
  const [timeLabel, setTimeLabel] = useState<string>("");

  useEffect(() => {
    switch (selectedSpeedUnit) {
      case SpeedUnit.MilesPerHour:
        console.log("miles per hour selected");
        setSpeedLabel(SpeedUnit.MilesPerHour);
        setDistanceLabel("Miles");
        setTimeLabel("hours");
        break;
      case SpeedUnit.KilometersPerHour:
        console.log("kilometers per hour selected");
        setSpeedLabel(SpeedUnit.KilometersPerHour);
        setDistanceLabel("Kilometers");
        setTimeLabel("hours");
        break;
      case SpeedUnit.FeetPerSecond:
        console.log("feet per second selected");
        setSpeedLabel(SpeedUnit.FeetPerSecond);
        setDistanceLabel("Feet");
        setTimeLabel("seconds");
        break;
      case SpeedUnit.MetersPerSecond:
        console.log("meters per second selected");
        setSpeedLabel(SpeedUnit.MetersPerSecond);
        setDistanceLabel("Meters");
        setTimeLabel("seconds");
        break;
    }
  }, [selectedSpeedUnit]);

  useEffect(() => {}, [results]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const speed = Number(formData.get("speed"));
    const distance = Number(formData.get("distance"));
    const time = distance / speed;
    setResults(String(time));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "speed__input") {
      if (Number(value) >= 0) {
        setSpeedInput(value);
      }
    } else if (id === "distance__input") {
      if (Number(value) >= 0) {
        setDistanceInput(value);
      }
    }
  };

  const handleResetClick = () => {
    setSpeedInput("");
    setDistanceInput("");
  };

  return (
    <>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={`${styles.heading}`}>ETA Calculator</h1>
        <SpeedUnitSelector setSelectedSpeedUnit={setSelectedSpeedUnit} setSpeedInput={setSpeedInput} setDistanceInput={setDistanceInput} />
        <div className={`${styles.field} ${styles.field__speed}`}>
          <label htmlFor="speed__input" className={`${styles.label}, ${styles.label__speed}`}>
            <small>Speed:</small>
          </label>
          <div className={`${styles["input-with-tag"]}`}>
            <input
              type="number"
              step="0.01"
              min="0"
              className={`${styles.input}, ${styles.input__speed}`}
              id="speed__input"
              placeholder="Current speed"
              onChange={handleChange}
              value={speedInput}
              name="speed"
            />
            <small className={`${styles["small-label"]}`}>{speedLabel}</small>
          </div>
        </div>
        <div className={`${styles.field} ${styles.field__distance}`}>
          <label htmlFor="distance__input" className={`${styles.label}, ${styles.label__distance}`}>
            <small>Distance:</small>
          </label>
          <div className={`${styles["input-with-tag"]}`}>
            <input
              type="number"
              step="0.01"
              min="0"
              className={`${styles.input}, ${styles.input__distance}`}
              id="distance__input"
              placeholder="Current distance"
              onChange={handleChange}
              value={distanceInput}
              name="distance"
            />
            <small className={`${styles["small-label"]}`}>{distanceLabel}</small>
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles["calculate-eta__button"]}>
            Calculate ETA
          </button>
          <button type="button" className={styles["reset__button"]} onClick={handleResetClick}>
            Reset
          </button>
        </div>
        <div className={styles["eta-result"]}>
          <p>{results}</p>
        </div>
      </form>
    </>
  );
}
