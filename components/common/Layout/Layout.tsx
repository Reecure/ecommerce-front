import React, { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): any => {
  return <div className="layout">{children}</div>;
};

export default Layout;
