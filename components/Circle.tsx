"use client";
import { useSelected, useRandom } from "@/store/store";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  alt: string;
  classes: string;
  href: string;
};

const Circle = ({ src, alt, classes, href }: Props) => {
  const setSelected = useSelected((state) => state.setSelected);
  const setRandom = useRandom((state) => state.setRandom);

  const choices = ["rock", "paper", "scissors"];
  const RandomChoice = choices[Math.floor(Math.random() * choices.length)];

  return (
    <motion.div
      onClick={() => {
        setSelected(alt);
        setRandom(RandomChoice);
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${classes} bg-white rounded-full absolute flex justify-center items-center cursor-pointer`}
    >
      <Link
        href={href}
        className="bg-white w-[75%] h-[75%] p-4 sm:p-0 rounded-full flex justify-center items-center"
      >
        <Image src={src} alt={alt} />
      </Link>
    </motion.div>
  );
};

export default Circle;
