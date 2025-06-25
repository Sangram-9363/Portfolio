import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/Variants";

const ContactMeRight = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col items-center justify-center gap-12"
    >
      <img
        src="/Images/email-image.png"
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </motion.div>
  );
};

export default ContactMeRight;
