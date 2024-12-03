import { useSelector } from "react-redux";

export default function GameCounter() {
  const counter = useSelector((state) => state.counter.counter);
  return (
    <div className="md:col-start-6 md:col-span-1 col-start-5 col-span-3">
      <p className="bg-red-400 text-slate-100 text-xl md:text-4xl rounded-md text-center">
        {counter <= 9 ? `0${counter}` : counter}
      </p>
    </div>
  );
}
