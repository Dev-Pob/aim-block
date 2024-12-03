"use client";
import { useEffect, useState } from "react";
import Block from "../src/Block";
import GameOver from "../src/modals/GameOver";
import { useSelector } from "react-redux";

export default function GamePage() {
  const timer = useSelector((state) => state.timer.timer);
  const delayedTimer = timer * 1000 + 500;
  const [gameState, setGameState] = useState(0);

  function handleStartTimer() {
    setGameState(1);
  }

  function handleGameOver() {
    setGameState(2);
  }

  function handleRestart() {
    setGameState(0);
  }

  useEffect(() => {
    if (gameState === 1) {
      setTimeout(handleGameOver, delayedTimer);
    }
  }, [gameState]);

  return (
    <div className="h-screen w-screen bg-slate-400 flex items-center justify-center fixed flex-col">
      <GameOver restartGame={handleRestart} modalState={gameState} />
      {gameState === 0 && (
        <p className="mb-20 text-lg md:text-2xl lg:text-3xl xl:text-4xl text-slate-100">
          PRESS THE BUTTON TO START!
        </p>
      )}
      <Block startTimer={handleStartTimer} blockState={gameState} />
    </div>
  );
}
