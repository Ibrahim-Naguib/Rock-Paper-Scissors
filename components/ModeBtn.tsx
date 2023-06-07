"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useScoreStore } from "@/store/store";
import { shallow } from "zustand/shallow";

const ModeBtn = () => {
  const pathname = usePathname();
  const [reset] = useScoreStore((state) => [state.reset], shallow);

  return (
    <Link
      onClick={() => reset()}
      href={pathname === "/" || pathname === "/results" ? "/bonus" : "/"}
      className="absolute bottom-5 left-5 z-10"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white px-8 py-0.5 rounded-lg border "
      >
        {pathname === "/" || pathname === "/results"
          ? "Bonus Game"
          : "Normal Game"}
      </motion.button>
    </Link>
  );
};

export default ModeBtn;
