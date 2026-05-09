import { useEffect, useState } from "react";

const OhanaTimer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 19,
    minutes: 1,
    seconds: 16,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Timer_Container">
      <TimeBox value={time.days} label="days" />
      <TimeBox value={time.hours} label="hours" />
      <TimeBox value={time.minutes} label="min" />
      <TimeBox value={time.seconds} label="sec" />
    </div>
  );
};

const TimeBox = ({ value, label }) => (
  <div className="Time_Box">
    <div className="Time_Value">{value}</div>
    <div className="Time_Label">{label}</div>
  </div>
);

export default OhanaTimer;
