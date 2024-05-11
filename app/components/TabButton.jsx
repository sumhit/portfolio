import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-pink-500" : "text-[#ADB7BE]";
  const underlineClasses = active ? "bg-pink-500" : "bg-transparent";

  return (
    <button onClick={selectTab} className="flex items-center">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 ${underlineClasses} mt-2 mr-3`}
      ></motion.div>
    </button>
  );
};

export default TabButton;
