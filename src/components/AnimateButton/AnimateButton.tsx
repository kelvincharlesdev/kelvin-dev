import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import * as I from "./Navigation.interface";

export const AnimateButton = ({ open }: I.AnimateButtonProps) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {open ? (
        <motion.div
          key="x"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          <X className="h-6 w-6" />
        </motion.div>
      ) : (
        <motion.div
          key="menu"
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -90 }}
          transition={{ duration: 0.3 }}
        >
          <Menu className="h-6 w-6" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
