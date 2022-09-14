import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";

const Contacts = () => {
  const {
    contacts: { email, embedLocation },
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
        <span className="grid">
          <strong className="">Por correo:</strong>
          <a href={`mailto:${email}`} target="__blank">
            {email}
          </a>
        </span>
        <span className="grid">
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
            <span key={label} className="grid text-end">
              {endPoint && (
                <>
                  <strong className="">{label}: </strong>
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
          src={embedLocation}
          // width=""
          // height="450"
          className="h-96 w-full max-w-xl mx-auto"
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
