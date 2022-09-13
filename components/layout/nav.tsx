import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";
import SECTIONS from "CONSTANTS/SECTIONS";
import Image from "next/image";
import React from "react";
import { PageSection } from "pages";

const Nav = ({ sections }: { sections: PageSection[] }) => {
  // const { hero, aboutUs, news, contacts, faqs, galery } = SECTIONS;
  // const sections = [hero, galery, aboutUs, news, faqs];

  return (
    <nav className="sticky top-0 mb-2 shadow z-20 bg-base-100 ">
      <div className="flex  w-full items-center">
        <div className=" w-20 relative aspect-video ">
          <Image
            src={PROJECT_INFO.icons.nav}
            layout="fill"
            objectFit="contain"
            alt={`icon nav ${PROJECT_INFO.name}`}
          />
        </div>
        <div className="">
          <h4 className="m-0 mx-4">{PROJECT_INFO.name}</h4>
        </div>
      </div>
      <div className="">
        {/* <ul className="list-none  grid grid-flow-col place-items-center p-5 py-0 gap-5 max-w-full overflow-auto m-0"> */}
        <ul className="list-none flex flex-wrap w-full gap-2 p-0 m-0 justify-around text-sm sm:text-md">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
