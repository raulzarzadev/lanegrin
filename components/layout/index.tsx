import React from "react";
import Footer from "./Footer";

import Head from "./Head";
import Nav from "./nav";

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="relative font-display w-full prose  max-w-none overflow-y-auto scroll-smooth">
      <Head />
      <Nav />

      <main className="max-w-xl mx-auto  ">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
