import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";

const Contacts = () => {
  const {
    contacts: { email },
    socialMedia: { whatsApp, facebook, instagram, telegram, twitter },
  } = PROJECT_INFO;
  const socialMedia = [
    { label: "Facebook", url: `facebook.com${facebook}`, endPoint: facebook },
    {
      label: "Instagram",
      url: `instagram.com${instagram}`,
      endPoint: instagram,
    },
    { label: "Telegram", url: `telegram.me${telegram}`, endPoint: telegram },
    { label: "Twitter", url: `twitter.com${twitter}`, endPoint: twitter },
  ];
  return (
    <div>
      <h2>Contactos</h2>
      <div className="grid">
        <span>
          <strong className="">Por correo:</strong>
          <a href={`mailto:${email}`} target="__blank">
            {email}
          </a>
        </span>
        <span>
          <strong className="">Por Whatsapp:</strong>
          <a href={`https://wa.me/${whatsApp}`} target="__blank">
            {whatsApp.slice(3)}
          </a>
        </span>
      </div>
      <h2>Encuentranos en:</h2>
      <div className="grid">
        {socialMedia.map(({ label, url, endPoint }) => {
          return (
            <span key={label}>
              {endPoint && (
                <>
                  <strong className="">{label}:</strong>
                  <a href={`https://${url}`} target="__blank">
                    {url}
                  </a>
                </>
              )}
            </span>
          );
        })}
      </div>
      <h2>Tienda física</h2>
      <div className="grid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.5894897070852!2d-99.22786088565186!3d19.602080186788243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d20333d3459%3A0xad8386b533d886f4!2sMASCOTA-FOOD!5e0!3m2!1sen!2sus!4v1663104220031!5m2!1sen!2sus"
          width="600"
          height="450"
          //style="border:0;"
          //allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
