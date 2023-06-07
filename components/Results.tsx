"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import { paper, rock, scissors, spock, lizard } from "@/assets/index";
import {
  useSelected,
  useRandom,
  useResult,
  useScoreStore,
} from "@/store/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Results = () => {
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const selected = useSelected((state) => state.selected);

  const [random] = useRandom((state) => [state.random], shallow);
  const [increment, decrement] = useScoreStore(
    (state) => [state.increment, state.decrement],
    shallow
  );
  const [result, setResult] = useResult(
    (state) => [state.result, state.setResult],
    shallow
  );

  setResult(
    selected === random
      ? "draw"
      : (selected === "rock" &&
          (random === "scissors" || random === "lizard")) ||
        (selected === "paper" && (random === "rock" || random === "spock")) ||
        (selected === "scissors" &&
          (random === "lizard" || random === "paper")) ||
        (selected === "lizard" && (random === "paper" || random === "spock")) ||
        (selected === "spock" && (random === "scissors" || random === "rock"))
      ? "win"
      : "lose"
  );

  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
      if (result === "win") {
        increment();
      } else if (result === "lose") {
        decrement();
      }
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      <div
        className={`relative w-200 sm:min-w-[600px] flex justify-between gap-10`}
      >
        <div className="text-center flex flex-col">
          <h2 className="uppercase sm:mb-14 mt-10 sm:mt-4 text-lg order-2 sm:order-1 sm:text-xl text-white z-10">
            you picked
          </h2>
          <div
            className={`${
              !loading && result === "win" ? "animate-winner" : ""
            } w-32 sm:w-52 h-32 sm:h-52 order-1 sm:order-2 rounded-full ${selected} flex justify-center items-center`}
          >
            <div className="bg-white relative w-[75%] h-[75%] p-5 sm:p-10 rounded-full flex justify-center items-center">
              <Image
                src={
                  selected === "paper"
                    ? paper
                    : selected === "rock"
                    ? rock
                    : selected === "scissors"
                    ? scissors
                    : selected === "lizard"
                    ? lizard
                    : selected === "spock"
                    ? spock
                    : ""
                }
                alt={selected}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-col justify-end pb-10 z-10">
          {!loading && (
            <>
              <h2 className="text-white uppercase text-5xl font-bold text-center mb-5">
                {result === "draw" ? "draw" : `you ${result}`}
              </h2>
              <Link
                href={pathname === "/results" ? "/" : "/bonus"}
                className="uppercase text-center bg-white text-darkText px-4 py-1.5 text-lg rounded-lg"
              >
                play again
              </Link>
            </>
          )}
        </div>

        <div className="text-center flex flex-col">
          <h2 className="uppercase sm:mb-14 mt-10 sm:mt-4 text-lg order-2 sm:order-1 sm:text-xl text-white z-10">
            the house picked
          </h2>
          {loading && (
            <div className="w-32 sm:w-52 h-32 sm:h-52 rounded-full flex order-1 sm:order-2 justify-center items-center">
              <div className="bg-opacity-20 bg-black w-[75%] h-[75%] p-5 sm:p-10 rounded-full flex justify-center items-center"></div>
            </div>
          )}
          {!loading && (
            <div
              className={`${
                result === "lose" ? "animate-winner" : ""
              } w-32 sm:w-52 h-32 sm:h-52 order-1 sm:order-2 rounded-full ${random} flex justify-center items-center`}
            >
              <div className="bg-white w-[75%] h-[75%] p-5 sm:p-10 rounded-full flex justify-center items-center">
                <Image
                  src={
                    random === "paper"
                      ? paper
                      : random === "rock"
                      ? rock
                      : random === "scissors"
                      ? scissors
                      : random === "lizard"
                      ? lizard
                      : random === "spock"
                      ? spock
                      : ""
                  }
                  alt={random}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sm:hidden mb-4">
        {!loading && (
          <>
            <h2 className="text-white uppercase text-4xl text-center mb-5">
              {result === "draw" ? "draw" : `you ${result}`}
            </h2>
            <Link
              href={pathname === "/results" ? "/" : "/bonus"}
              className="uppercase bg-white text-darkText px-8 py-1.5 rounded-lg"
            >
              play again
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Results;
