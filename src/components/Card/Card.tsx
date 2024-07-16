import { useEffect, useState } from "react";
import styles from "./Card.module.css";

enum SpeedUnit {
  MilesPerHour = "mph",
  KilometersPerHour = "km/h",
  FeetPerSecond = "ft/s",
}


export default function Card() {
  const [speedInput, setSpeedInput] = useState<string>("0.00");
  const [distanceInput, setDistanceInput] = useState<string>("0.00");
  const [results, setResults] = useState<number>(0);


  useEffect(() => {
    console.log(speedInput);
  }, [speedInput]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const speed = Number(formData.get("speed__input"));
    const distance = Number(formData.get("distance__input"));
    const result = 
    console.log(Number(formData.get("speed__input")));
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
    setSpeedInput("0.00");
    setDistanceInput("0.00");
  };

  return (
    <>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={`${styles.heading}`}>ETA Calculator</h1>
        <div className={`${styles.field} ${styles.field__speed}`}>
          <label htmlFor="speed__input" className={`${styles.label}, ${styles.label__speed}`}>
            <small>Speed:</small>
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            className={`${styles.input}, ${styles.input__speed}`}
            id="speed__input"
            placeholder="Current speed"
            onChange={handleChange}
            value={speedInput}
          />
        </div>
        <div className={`${styles.field} ${styles.field__distance}`}>
          <label htmlFor="distance__input" className={`${styles.label}, ${styles.label__distance}`}>
            <small>Distance:</small>
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            className={`${styles.input}, ${styles.input__distance}`}
            id="distance__input"
            placeholder="Current distance"
            onChange={handleChange}
            value={distanceInput}
          />
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
          <p>ETA RESULT GOES HERE</p>
        </div>
      </form>
    </>
  );
}
