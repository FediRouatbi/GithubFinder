import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100  mb-3">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-xl gap-2 font-semibold"
        >
          <FaGithub size={25} />
          GithubFinder
        </Link>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/about"} className="text-xl font-semibold">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
