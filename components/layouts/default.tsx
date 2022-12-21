import React, { ReactNode } from "react";

import Nav from "../Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
