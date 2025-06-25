import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { personal } from "../../data/Data";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link={personal.linkedin} Icon={FaLinkedinIn} />
      <SingleContactSocial link={personal.github} Icon={FiGithub} />
      <SingleContactSocial link="#" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
