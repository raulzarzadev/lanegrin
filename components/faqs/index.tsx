import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";

const Faqs = () => {
  const { faqs, facts } = PROJECT_INFO;
  return (
    <div>
      <h2>Preguntas Frecuentas</h2>
      <div>
        {faqs.map(({ question, response }, i) => (
          <div tabIndex={i} key={question} className="collapse group">
            <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
              {question}
            </div>
            <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
              <p>{response}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Hechos curiosos</h2>
      <div>
        {facts.map(({ title, content }, i) => (
          <div tabIndex={i} key={title} className="collapse group">
            <div className="collapse-title bg-secondary text-secondary-content group-focus:bg-primary group-focus:text-primary-content">
              {title}
            </div>
            <div className="collapse-content bg-secondary text-secondary-content group-focus:bg-primary group-focus:text-primary-content">
              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
