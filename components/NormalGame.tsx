"use client";
import Image from "next/image";
import { paper, rock, scissors, triangle } from "@/assets/index";
import { Circle } from "@/components/index";

const NormalGame = () => {
  return (
    <>
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex justify-center items-center">
        <Image
          src={triangle}
          alt="triangle"
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
        />
        <Circle
          src={paper}
          alt="paper"
          href="/results"
          classes="top-0 left-0 paper w-32 h-32 sm:w-40 sm:h-40"
        />
        <Circle
          src={rock}
          alt="rock"
          href="/results"
          classes="bottom-0 rock w-32 h-32 sm:w-40 sm:h-40"
        />
        <Circle
          src={scissors}
          alt="scissors"
          href="/results"
          classes="top-0 right-0 scissors w-32 h-32 sm:w-40 sm:h-40"
        />
      </div>
    </>
  );
};

export default NormalGame;
