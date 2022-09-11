import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";

const AboutUs = () => {
  const { aboutUs, mission } = PROJECT_INFO;
  return (
    <div>
      <h2>Acerca de nosotros</h2>
      <p>{aboutUs}</p>
      <p>{mission}</p>
    </div>
  );
};

export default AboutUs;
