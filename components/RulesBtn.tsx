"use client";

import { useState } from "react";
import { Rules } from "@/components/index";
import { motion, AnimatePresence } from "framer-motion";
import { rules, rulesBonus } from "@/assets/index";
import { usePathname } from "next/navigation";

const RulesBtn = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const pathname = usePathname();

  const handleClose = (): void => {
    setModalOpen(false);
  };
  return (
    <div className="absolute bottom-5 right-5 z-10">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setModalOpen(true)}
        className="text-white px-8 py-0.5 rounded-lg border"
      >
        Rules
      </motion.button>

      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Rules
            src={
              pathname === "/" || pathname === "/results" ? rules : rulesBonus
            }
            handleClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default RulesBtn;
