import React from "react";
import { summary } from "../../data/Data";
import { educations } from "../../data/Data";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center text-white">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="mb-10">{summary}</p>

      <h2 className="text-6xl text-cyan mb-10">Education</h2>
      <div>
        {educations.map((edu, index) => {
          return (
            <div
              key={index}
              className="rounded-r-full mb-4 px-5 py-6 bg-brown tracking-tight shadow-md shadow-orange hover:shadow-md "
            >
              <h1 className="text-3xl text-orange">{edu.name} </h1>
              <h3>{edu.university} </h3>
              <div className="flex gap-20 text-lightGrey justify-between ">
                <p className="pt-2 ">CGPA : {edu.grade} </p>
                <p className="mr-3">{edu.duration} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMeText;
