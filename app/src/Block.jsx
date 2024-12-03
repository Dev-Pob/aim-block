"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import { counterActions } from "../store/counter";
import { timerActions } from "../store/timer";

export default function Block({ startTimer }) {
  const [x, setX] = useState("0vw");
  const [y, setY] = useState("0vh");
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const timer = useSelector((state) => state.timer.timer);
  const delayedTimer = timer * 1000 + 500;

  function handleAnimation() {
    let randomX = Math.random() * 45 * (Math.round(Math.random()) ? 1 : -1);
    let topOrBot = Math.round(Math.random()) ? 1 : -1;
    if (topOrBot === 1) {
      var randomY = Math.random() * 35 * topOrBot;
    } else {
      var randomY = Math.random() * 42 * topOrBot;
    }
    setX(`${randomX}vw`);
    setY(`${randomY}vh`);
    dispatch(counterActions.increment());
  }

  function handleRestart() {
    setX("0vw");
    setY("0vh");
  }

  function handleStartGame() {
    console.log(delayedTimer);
    if (counter === 0) {
      setTimeout(handleRestart, delayedTimer);
      dispatch(timerActions.start());
      startTimer();
    }
    handleAnimation();
  }

  return (
    <motion.button
      onClick={handleStartGame}
      className="h-20 w-20 bg-crimson rounded-xl sm:h-32 sm:w-32 md:h-36 md:w-36"
      animate={{ x: x, y: y }}
      transition={{
        duration: 0,
      }}
    ></motion.button>
  );
}
