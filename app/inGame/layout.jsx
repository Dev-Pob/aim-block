"use client";
import { Provider } from "react-redux";
import store from "../store/index";
import HeaderCountdown from "../src/HeaderCountdown";
import Image from "next/image";
import headerImage from "../../public/AIMBLOCK_GREY.png";
import GameCounter from "../src/GameCounter";
import HomeButton from "../src/HomeButton";

export default function GameLayout({ children }) {
  return (
    <Provider store={store}>
      <header className="grid grid-cols-11 bg-slate-100 h-14 items-center">
        <HomeButton>
          <Image
            src={headerImage}
            alt="logoText"
            className="col-start-1 col-span-1 ml-10 hidden md:block"
          />
        </HomeButton>
        <GameCounter />
        <HeaderCountdown />
      </header>
      {children}
    </Provider>
  );
}
