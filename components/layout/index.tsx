import { PageSection } from "pages";
import React from "react";
import Footer from "./Footer";

import Head from "./Head";
import Nav from "./nav";

export interface LayoutProps {
  children: React.ReactNode;
  sections: PageSection[];
}

function Layout({ children, sections }: LayoutProps) {
  return (
    <div className="relative font-display w-full prose  max-w-none ">
      <Head />
      <Nav sections={sections} />
      <main className="max-w-xl mx-auto p-1 ">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
