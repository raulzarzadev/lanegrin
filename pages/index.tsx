import AboutUs from "@components/aboutUs";
import Faqs from "@components/faqs";
import Galery from "@components/galery";
import Hero from "@components/hero";
import News from "@components/News";
import type { NextPage } from "next";
import Layout from "../components/layout";
import SECTIONS from "../CONSTANTS/SECTIONS";

const Home: NextPage = () => {
  const { hero, aboutUs, news, faqs, galery, contacts } = SECTIONS;
  const sections = [
    { id: hero.id, component: <Hero /> },
    { id: aboutUs.id, component: <AboutUs /> },
    { id: news.id, component: <News /> },
    { id: faqs.id, component: <Faqs /> },
    { id: galery.id, component: <Galery /> },
    // { id: contacts.id, component: <Contacts /> },
  ];
  return (
    <Layout>
      {sections.map(({ id, component }) => (
        <section id={id} key={id} className="scroll-mt-28">
          {component}
        </section>
      ))}
    </Layout>
  );
};

export default Home;
