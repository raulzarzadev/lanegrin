import React from "react";
import Nav from "./nav";
export interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <div className="prose">
      <Nav />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
