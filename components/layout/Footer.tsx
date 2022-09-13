import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";

const Footer = () => {
  const {
    aboutUs,
    mission,
    contacts,
    socialMedia: { facebook, instagram, whatsApp, twitter },
  } = PROJECT_INFO;

  return (
    <footer className="w-full bg-base-300 min-h-40 text-xs p-2">
      <div className="grid md:grid-flow-col ">
        <div>
          <h3>Acerca de nosotros</h3>
          <p>{aboutUs}</p>
        </div>
        <div>
          <h3>Nuestro compromiso</h3>
          <p>{mission}</p>
        </div>
        <div>
          <h3>Contactos: </h3>
          <div className="grid place-content-center gap-2">
            <a href={`mailto:${contacts.email}`}>{contacts?.email}</a>
            <a href={`tel:${contacts.mobile}`}>{contacts?.mobile}</a>
          </div>
          <h3>Encuentranos en:</h3>
          <div className="grid place-content-center gap-2">
            {facebook && (
              <a href={`https://facebook.com/${facebook}`}>Facebook</a>
            )}
            {instagram && (
              <a href={`https://instagram.com/${instagram}`}>Instagram</a>
            )}
            {whatsApp && <a href={`https://wa.me/${whatsApp}`}>whatsApp</a>}
            {twitter && <a href={`https://twitter.com/${twitter}`}>twitter</a>}
          </div>
        </div>
      </div>
      <div className="h-20">
        {/* <div className="fixed bottom-0 right-2 z-10 mt-10">
          <iframe
            className="mx-auto h-10"
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fcremeria.pirules%2F&width=450&layout=standard&action=like&size=large&share=true&height=35&appId=814568616224774"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
