import type { ComponentPropsWithoutRef } from "react";

type NavLinkProps = ComponentPropsWithoutRef<"a">;

const NavLink = ({ className = "", ...props }: NavLinkProps) => {
  return (
    <a
      {...props}
      className={`p-2 font-bold hover:text-accent cursor-pointer ${className}`}
    />
  );
};

export default NavLink;
