import React from "react";
import SingleInfo from "./SingleInfo";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { personal } from "../../data/Data";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text={personal.email} Image={HiOutlineMail} />
      <SingleInfo text={personal.mobNo} Image={FiPhone} />
      <SingleInfo text={personal.address} Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
