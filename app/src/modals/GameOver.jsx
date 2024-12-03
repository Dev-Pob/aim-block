"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store/counter";
import { timerActions } from "../../store/timer";

Modal.setAppElement("#main");

export default function GameOverModal({ restartGame, modalState }) {
  const [isOpen, setIsOpen] = useState(false);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modalState === 2) {
      setIsOpen(true);
    }
  }, [modalState]);

  function handleRestart() {
    dispatch(counterActions.restart());
    dispatch(timerActions.resetState());
    setIsOpen(false);
    restartGame();
  }

  function handleHome() {
    dispatch(counterActions.restart());
    dispatch(timerActions.resetState());
    setIsOpen(false);
    restartGame();
  }

  return (
    <Modal
      isOpen={isOpen}
      className="bg-slate-100 h-2/5 w-1/2 mx-auto my-64 rounded-lg flex flex-col justify-center lg:w-1/2 xl:w-2/5 2xl:w-1/3 gap-10"
    >
      <div>
        <p className="text-center text-slate-400 text-3xl pb-3 md:text-5xl xl:text-6xl">
          YOU HIT:
        </p>
        <p className="text-center text-red-400 text-4xl md:text-6xl xl:text-7xl">
          {counter}
        </p>
        <p className="text-center text-slate-400 text-2xl md:text-4xl xl:text-5xl">
          blocks
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:gap-10">
        <Link href="./">
          <button
            onClick={handleHome}
            className="text-md bg-slate-400 text-slate-100 p-3 sm:text-2xl rounded-lg lg:text-3xl w-auto"
          >
            GO HOME
          </button>
        </Link>
        <button
          onClick={handleRestart}
          className="text-xl text-slate-100 bg-red-400 p-3 rounded-lg sm:text-2xl lg:text-3xl w-auto"
        >
          GO PLAY
        </button>
      </div>
    </Modal>
  );
}
