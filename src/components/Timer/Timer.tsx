import { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage.js";

import styles from "./Timer.module.css";

interface TimerProps {
  timer: { hours: number; minutes: number };
  setTimeIsOut: (f: boolean) => void;
  finish: boolean;
}

export default function Timer({ timer, setTimeIsOut, finish }: TimerProps) {
  const [over, setOver] = useState(false);
  const [hours, setHours] = useLocalStorage("hours", timer.hours);
  const [minutes, setMinutes] = useLocalStorage("minutes", timer.minutes);

  let timerId: number;

  const tick = () => {
    if (finish) setOver(true);
    if (over) return;
    if (hours === 0 && minutes === 0) return;

    if (hours === 0 && minutes === 1) {
      setMinutes((m) => m - 1);
      localStorage.setItem("hours", "0");
      localStorage.setItem("minutes", "0");
      setOver(true);
    } else if (hours !== 0 && minutes === 0) {
      setHours((hours) => hours - 1);
      setMinutes(59);
      localStorage.setItem("hours", String(hours - 1));
      localStorage.setItem("minutes", "59");
    } else {
      setMinutes((minutes) => minutes - 1);
      localStorage.setItem("minutes", String(minutes - 1));
    }
  };

  useEffect(() => {
    if (!timerId) timerId = setTimeout(tick, 60000);
    setTimeout(() => (timerId = 0), 900);
  }, [hours, minutes]);

  useEffect(() => {
    if (over) {
      setTimeIsOut(true);
    }
  }, [over]);

  return (
    <div className={styles.timer}>
      {`${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`}
    </div>
  );
}
