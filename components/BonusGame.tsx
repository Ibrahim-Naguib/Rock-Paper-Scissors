"use client";
import Image from "next/image";
import { paper, rock, scissors, lizard, spock, pentagon } from "@/assets/index";
import { Circle } from "@/components/index";

const BonusGame = () => {
  return (
    <>
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex justify-center items-center">
        <Image
          src={pentagon}
          alt="pentagon"
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
        />
        <Circle
          src={paper}
          alt="paper"
          href="/bonus/results"
          classes="top-20 sm:top-24 right-2 sm:right-0 paper w-24 h-24 sm:w-32 sm:h-32"
        />
        <Circle
          src={rock}
          alt="rock"
          href="/bonus/results"
          classes="bottom-0 left-10 rock w-24 h-24 sm:w-32 sm:h-32"
        />
        <Circle
          src={scissors}
          alt="scissors"
          href="/bonus/results"
          classes="top-5 scissors w-24 h-24 sm:w-32 sm:h-32"
        />
        <Circle
          src={lizard}
          alt="lizard"
          href="/bonus/results"
          classes="bottom-0 right-10 lizard w-24 h-24 sm:w-32 sm:h-32"
        />
        <Circle
          src={spock}
          alt="spock"
          href="/bonus/results"
          classes="top-20 sm:top-24 left-2 sm:left-0 spock w-24 h-24 sm:w-32 sm:h-32"
        />
      </div>
    </>
  );
};

export default BonusGame;
