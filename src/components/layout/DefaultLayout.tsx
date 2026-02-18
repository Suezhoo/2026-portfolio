import React, { type ReactNode } from "react";
import NavigationBar from "./NavigationBar";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      {children}
    </div>
  );
};

export default DefaultLayout;
