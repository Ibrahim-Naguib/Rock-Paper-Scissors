"use client";
import { useScoreStore } from "@/store/store";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { logo, bonusLogo } from "@/assets";

const Header = () => {
  const pathname = usePathname();

  const score = useScoreStore((state) => state.score);

  return (
    <header className="flex justify-between items-center w-full h-full p-4 sm:p-6 border-2 rounded-3xl border-outline">
      <div
        className={`sm:w-auto ${
          pathname === "/bonus" || pathname === "/bonus/results"
            ? "w-20"
            : "w-32"
        }`}
      >
        <Image
          src={
            pathname === "/" || pathname === "/results"
              ? logo
              : pathname === "/bonus" || pathname === "/bonus/results"
              ? bonusLogo
              : ""
          }
          alt="logo"
          priority
        />
      </div>
      <div className="bg-white flex flex-col items-center justify-center rounded-lg py-3 px-4 sm:px-11">
        <p className="text-blueText tracking-widest uppercase">score</p>
        <span className="text-darkText text-3xl sm:text-6xl font-bold">
          {score}
        </span>
      </div>
    </header>
  );
};

export default Header;
