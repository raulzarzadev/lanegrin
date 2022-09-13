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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.893198449211!2d-99.22099958602544!3d19.54619828681982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d131bd6447f%3A0xc56bbc339c2653f6!2sCremeria%20y%20Abarrotes%20Pirules!5e0!3m2!1ses!2smx!4v1663111870612!5m2!1ses!2smx"
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
