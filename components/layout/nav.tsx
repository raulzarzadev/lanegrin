import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";
import SECTIONS from "CONSTANTS/SECTIONS";
import Image from "next/image";
import React, { Component } from "react";

const Nav = () => {
  const { hero, aboutUs, news, contacts, faqs, galery } = SECTIONS;
  const sections = [hero, aboutUs, news, faqs, galery];

  return (
    <nav className=" sticky top-0  z-20 bg-base-100  ">
      <div className="flex  w-full items-center">
        <div className=" w-12 relative aspect-video">
          <Image
            src={PROJECT_INFO.icons.nav}
            layout="fill"
            objectFit="contain"
            alt={`icon nav ${PROJECT_INFO.name}`}
          />
        </div>
        <div className="">
          <h4 className="m-0">{PROJECT_INFO.name}</h4>
        </div>
      </div>
      <div className="">
        <ul className="list-none  grid grid-flow-col place-items-center p-5 py-0 gap-5 max-w-full overflow-auto m-0">
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
