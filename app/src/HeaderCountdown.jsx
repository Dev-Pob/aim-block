import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Bruno_Ace } from "next/font/google";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
});

export default function HeaderCountdown() {
  const timeLeftSetup = useSelector((state) => state.timer.timer);
  const isRunningSetup = useSelector((state) => state.timer.isRunning);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(timeLeftSetup);
    setIsRunning(isRunningSetup);
  }, [timeLeftSetup, isRunningSetup]);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 0.1));
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (time) => {
    const seconds = Math.floor(time);
    const deciSeconds = Math.floor((time % 1) * 10);
    return `${seconds},${deciSeconds}`;
  };

  return (
    <>
      {!isRunning && (
        <div
          className={`${brunoAce.className} col-start-10 col-span-2 mr-10 text-slate-400`}
        >
          <p className="text-sm md:text-md lg:text-xl md:text text-end">
            {timeLeftSetup} sec
          </p>
        </div>
      )}
      {isRunning && (
        <div
          className={`${brunoAce.className} col-start-8 sm:col-start-10 col-span-2 mr-10 text-slate-400 pl-8`}
        >
          <p className="text-sm md:text-md lg:text-lg xl:text-xl text-end">
            {timeLeft > 0 ? formatTime(timeLeft) : "Timer expired!"}
          </p>
        </div>
      )}
    </>
  );
}
