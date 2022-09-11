import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";

const Faqs = () => {
  const { faqs, facts } = PROJECT_INFO;
  return (
    <div>
      <h2>Preguntas Frecuentas</h2>
      <div>
        {faqs.map(({ question, response }) => (
          <div key={question}>
            <h4>{question}</h4>
            <p>{response}</p>
          </div>
        ))}
      </div>
      <h2>Hechos curiosos de tus mascotas</h2>
      <div>
        {facts.map(({ title, content }) => (
          <div key={title}>
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
