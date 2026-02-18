import React from "react";
import NavLink from "./NavLink";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 w-screen bg-surface px-32 py-3 flex text-xl">
      <NavLink className="mr-2">Stephan VH</NavLink>

      <div className="flex flex-1 justify-between">
        <div className="flex gap-2">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Experience</NavLink>
          <NavLink href="#">Projects</NavLink>
        </div>
        <div className="flex gap-2">
          <NavLink>ML</NavLink>
          <NavLink>GIT</NavLink>
          <NavLink>IN</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
