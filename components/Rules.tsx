"use client";
import { close } from "@/assets/index";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  handleClose: () => void;
  src: string;
}

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const Rules = ({ handleClose, src }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center backdrop z-10"
      onClick={(e) => {
        const target = e.target as HTMLDivElement;
        if (target.classList.contains("backdrop")) handleClose();
      }}
    >
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white flex flex-col gap-8 rounded-lg p-6 w-[80%] sm:w-96"
      >
        <div className="flex justify-between items-center relative">
          <h2 className="text-darkText text-3xl">Rules</h2>
          <button onClick={handleClose}>
            <Image src={close} alt="close" />
          </button>
        </div>
        <Image src={src} alt="rules" className="self-center" />
      </motion.div>
    </motion.div>
  );
};

export default Rules;
