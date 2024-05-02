import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

interface TimerProps {
  hours: number;
  minutes: number;
  setTimeIsOut: (f: boolean) => void;
  finish: boolean;
}

export default function Timer({
  hours,
  minutes,
  setTimeIsOut,
  finish,
}: TimerProps) {
  const [over, setOver] = useState(false);
  const [h, setHours] = useState(
    localStorage.getItem("hours")
      ? Number(localStorage.getItem("hours"))
      : hours
  );
  const [m, setMinutes] = useState(
    localStorage.getItem("minutes")
      ? Number(localStorage.getItem("minutes"))
      : minutes
  );

  let timerId: number;

  const tick = () => {
    if (finish) setOver(true);
    if (over) return;
    if (h === 0 && m === 0) return;

    if (h === 0 && m === 1) {
      setMinutes((m) => m - 1);
      localStorage.setItem("hours", "0");
      localStorage.setItem("minutes", "0");
      setOver(true);
    } else if (h !== 0 && m === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      localStorage.setItem("hours", String(h - 1));
      localStorage.setItem("minutes", "59");
    } else {
      setMinutes((m) => m - 1);
      localStorage.setItem("minutes", String(m - 1));
    }
  };

  useEffect(() => {
    if (!timerId) timerId = setTimeout(tick, 1000);
    setTimeout(() => (timerId = 0), 900);
  }, [h, m]);

  useEffect(() => {
    if (over) {
      setTimeIsOut(true);
    }
  }, [over]);

  return (
    <div className={styles.timer}>
      {`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`}
    </div>
  );
}
