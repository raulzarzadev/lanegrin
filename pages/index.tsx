import AboutUs from "@components/aboutUs";
import Faqs from "@components/faqs";
import Galery from "@components/galery";
import Hero from "@components/hero";
import News from "@components/News";
import type { NextPage } from "next";
import Layout from "../components/layout";
import Contacts from "components/contacts";
import SECTIONS from "../CONSTANTS/SECTIONS";

export interface PageSection {
  label: string;
  id: string;
  component: React.ReactNode;
}

const Home: NextPage = () => {
  const { hero, aboutUs, news, faqs, galery, contacts } = SECTIONS;
  const sections: PageSection[] = [
    { id: hero.id, label: hero.label, component: <Hero /> },
    { id: galery.id, label: galery.label, component: <Galery /> },
    { id: aboutUs.id, label: aboutUs.label, component: <AboutUs /> },
    // { id: news.id, label: news.label, component: <News /> },
    { id: faqs.id, label: faqs.label, component: <Faqs /> },
    { id: contacts.id, label: contacts.label, component: <Contacts /> },
  ];
  return (
    <Layout sections={sections}>
      {sections.map(({ id, component }) => (
        <section id={id} key={id} className="scroll-mt-28">
          {component}
        </section>
      ))}
    </Layout>
  );
};

export default Home;
