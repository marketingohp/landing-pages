"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string; // ISO date string or date in the future
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="countdown-container">
      <div className="countdown-column">
        <div id="js-clock-days" className="countdown-number">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="countdown-text">Days</div>
      </div>
      <div className="countdown-line"></div>
      <div className="countdown-column">
        <div id="js-clock-hours" className="countdown-number">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="countdown-text">Hours</div>
      </div>
      <div className="countdown-line"></div>
      <div className="countdown-column">
        <div id="js-clock-minutes" className="countdown-number">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="countdown-text">Minutes</div>
      </div>
      <div className="countdown-line"></div>
      <div className="countdown-column">
        <div id="js-clock-seconds" className="countdown-number">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="countdown-text">Seconds</div>
      </div>
    </div>
  );
}
