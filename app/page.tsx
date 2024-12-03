"use client";
import { Provider } from "react-redux";
import store from "./store/index";
import Link from "next/link";
import { Bruno_Ace } from "next/font/google";
import homePageImage from "../public/AIMBLOCK_WHITE.png";
import Image from "next/image";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <Provider store={store}>
      <div
        className={`h-screen bg-slate-400 flex flex-col justify-center items-center gap-10`}
      >
        <Image
          src={homePageImage}
          alt="Page text logo: Aimblock"
          className="h-auto w-3/4 sm:w-1/2"
        />
        <Link href="/inGame">
          <button
            className={`${brunoAce.className} text-slate-100 bg-red-400 m-auto px-10 py-5 rounded-xl shadow-m shadow-lg-plus-red`}
          >
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg ">
              GET IN THE GAME
            </p>
          </button>
        </Link>
      </div>
    </Provider>
  );
}
