import React from "react";
import { personal } from "../../data/Data";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/Variants"

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-start sm:text-center text-white">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-lg uppercase text-lightGrey"
      >
        {personal.title}
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-6xl sm:text-4xl uppercase font-bold text-orange md:text-[2.8rem] "
      >
        {personal.name}
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        {personal.description}
      </motion.p>
    </div>
  );
};

export default HeroText;
