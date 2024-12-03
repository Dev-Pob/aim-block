import Link from "next/link";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { timerActions } from "../store/timer";

export default function HomeButton(props) {
  const dispatch = useDispatch();
  function handleHome() {
    dispatch(counterActions.restart());
    dispatch(timerActions.resetState());
  }

  return (
    <Link href="./">
      <button onClick={handleHome} {...props}>
        {props.children}
      </button>
    </Link>
  );
}
