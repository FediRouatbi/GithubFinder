import React from "react";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className=" absolute inset-1/2 w-2/3  sm:text-2xl lg:text-4xl  -translate-x-1/2  -translate-y-2/3 h-fit ">
      <div className="flex flex-col items-center gap-2 ">
        <p className="text-center">
          This is an Application built with React for the purpose of displaying
          my front end knowledge
        </p>
        <div>
          <a
            href="https://github.com/FediRouatbi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
