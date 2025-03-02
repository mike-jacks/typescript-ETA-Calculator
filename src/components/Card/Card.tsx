import { useEffect, useState } from "react";
import { calculateTime } from "../../functions/calculateTime";
import { SpeedUnit } from "../enums";
import SpeedUnitSelector from "../SpeedUnitSelector/SpeedUnitSelector";
import styles from "./Card.module.css";

/**
 * Generates a form card component that includes button selectors for speed rate and speed/distance input fields.
 *
 * @returns Card component
 */
export default function Card() {
  const [speedInput, setSpeedInput] = useState<string>("");
  const [distanceInput, setDistanceInput] = useState<string>("");
  const [results, setResults] = useState<string>("Enter Speed and Distance above");
  const [selectedSpeedUnit, setSelectedSpeedUnit] = useState<SpeedUnit>(SpeedUnit.MilesPerHour);
  const [distanceLabel, setDistanceLabel] = useState<string>("Miles");
  const [speedLabel, setSpeedLabel] = useState<string>("mph");
  const [isHours, setIsHours] = useState<boolean>(true);
  const [speedInputMissing, setSpeedInputMissing] = useState<boolean>(false);
  const [distanceInputMissing, setDistanceInputMissing] = useState<boolean>(false);

  // Update speedLabel, distanceLabel, and isHours when selectedSpeedUnit button is pressed
  useEffect(() => {
    switch (selectedSpeedUnit) {
      case SpeedUnit.MilesPerHour:
        setSpeedLabel(SpeedUnit.MilesPerHour);
        setDistanceLabel("Miles");
        setIsHours(true);
        break;
      case SpeedUnit.KilometersPerHour:
        setSpeedLabel(SpeedUnit.KilometersPerHour);
        setDistanceLabel("Kilometers");
        setIsHours(true);
        break;
      case SpeedUnit.FeetPerSecond:
        setSpeedLabel(SpeedUnit.FeetPerSecond);
        setDistanceLabel("Feet");
        setIsHours(false);
        break;
      case SpeedUnit.MetersPerSecond:
        setSpeedLabel(SpeedUnit.MetersPerSecond);
        setDistanceLabel("Meters");
        setIsHours(false);
        break;
    }
  }, [selectedSpeedUnit]);

  // On submit button press, calculate time in hours or seconds dependent on unit selected, the set results to formatted string.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const speed = Number(formData.get("speed"));
    const distance = Number(formData.get("distance"));
    const time = distance / speed;
    if (speedInput === "") {
      setSpeedInputMissing(true);
    } else {
      setSpeedInputMissing(false);
    }
    if (distanceInput === "") {
      setDistanceInputMissing(true);
    } else {
      setDistanceInputMissing(false);
    }
    if (speedInput !== "" && distanceInput !== "") {
      setResults(calculateTime(time, isHours));
    } else {
      setResults("Enter Speed and Distance above");
    }
  };

  // Update field names and useState variables when typing in input fields.
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

  // set input field values to empty string when reset.
  const handleResetClick = () => {
    setSpeedInput("");
    setDistanceInput("");
    setResults("Enter Speed and Distance above");
  };

  return (
    <>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={`${styles.heading}`}>ETA Calculator</h1>
        <SpeedUnitSelector
          speedInput={speedInput}
          distanceInput={distanceInput}
          setSelectedSpeedUnit={setSelectedSpeedUnit}
          setSpeedInput={setSpeedInput}
          setDistanceInput={setDistanceInput}
        />
        <div className={`${styles.field} ${styles.field__speed}`}>
          <label htmlFor="speed__input" className={`${styles.label}, ${styles.label__speed}`}>
            <small>Speed:</small>
          </label>
          <div className={`${styles["input-with-tag"]}`}>
            <input
              type="number"
              step="0.0001"
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
          <div className={styles["error-message"]}>{speedInputMissing && <small className={styles.error}>Please enter a speed value</small>}</div>
        </div>
        <div className={`${styles.field} ${styles.field__distance}`}>
          <label htmlFor="distance__input" className={`${styles.label}, ${styles.label__distance}`}>
            <small>Distance:</small>
          </label>
          <div className={`${styles["input-with-tag"]}`}>
            <input
              type="number"
              min="0"
              step="0.0001"
              className={`${styles.input}, ${styles.input__distance}`}
              id="distance__input"
              placeholder="Current distance"
              onChange={handleChange}
              value={distanceInput}
              name="distance"
            />
            <small className={`${styles["small-label"]}`}>{distanceLabel}</small>
          </div>
          <div className={styles["error-message"]}>
            {distanceInputMissing && <small className={styles.error}>Please enter a distance value</small>}
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
