const PROJECT_INFO = {
  name: "Mascota Food",
  shortName: "MascotaFood",
  address:
    "Blvd. Cuautitlan Izalli Mz. 1 Lt. 3, Hacienda de la Luz, Atizapán de Zaragoza, Estado de México CP 52929",
  aboutUs: `
  Somos una tienda dedica a la venta de alimento premium para perros y gatos, 
  premios, accesorios y juguetes nacionales e importados 
  para mascotas en el Estado de México`,
  mission: `
  Nuestra misión es satisfacer tus necesidades y las de tu mascota, 
  ofreciendo una amplia variedad de productos​ ​con altos
  estándares de calidad, nacionales y de importación, 
  todo esto a precio justo y poniéndolo al alcance de todos`,

  description:
    " Somos una tienda dedica a la venta de alimento premium para perros y gatos,  premios, accesorios y juguetes nacionales e importados para mascotas en el Estado de México ",
  keywordsArray: [
    "Mascotas",
    "Tienda de conveniencia",
    "Perros Gatos ",
    "Jugetes para parros",
  ],
  keywords: function () {
    return this?.keywordsArray?.join(", ");
  },
  icons: {
    head: "/icons/LogoMascotaFoodSigno.gif",
    nav: "/icons/LogoMascotaFood.gif",
  },
  logos: {},
  images: {},

  contacts: {
    email: "email@mascotafood.com",
    mobile: "525554941191",
  },
  socialMedia: {
    instagram: "",
    facebook: "/MascotaFoodVillas",
    twitter: "",
    whatsApp: "5215554941191",
    telegram: "/macotafood",
  },
  news: {
    latestPosts: [
      "https://www.facebook.com/mascotaFoodMX/posts/pfbid025HTv9d3g8LPmgTMayEVvvE2vymPZAjobtie74qvy3zZ12oq9BTsMxPfQWnYWtQfFl",
      "https://www.facebook.com/mascotaFoodMX/posts/pfbid02khfmnGficebbABr9APwxh6v6TAXKR1C44Vygm2g63GDjNhbUQfFdMQGXr7YdUV1cl",
      "https://www.facebook.com/100067354591552/videos/375245617863496/",
    ],
  },
  faqs: [
    {
      question: "¿Tienen alimento para gatos?",
      response:
        "Si!, tenemos varios, para diferentes razas, edades y tamaños, tambien para diversas enfermedades y padecimientos. ",
      moreInfoLinks: [
        {
          title: "Que alimento darle a mi gato",
          link: "https://linkpara saber que alimento darle a mi gato",
        },
      ],
      ws_msj:
        "Hola! Quisera saber mas sobre el alimento para gatos que manejan. ",
    },
  ],
  facts: [
    {
      title: "El movimiento de la cola tiene su propio lenguaje",
      content: `
  Si tu perro mueve la cola con entusiasmo, significa que está feliz de verte, ¿verdad? No necesariamente. Según Discovery.com, los perros mueven la cola hacia la derecha cuando están felices y hacia la izquierda cuando están asustados.

Moverse hacia abajo significa que están inseguros, y un movimiento rápido de la cola acompañado de músculos tensos o pupilas dilatadas puede indicar agresión. Descubre más datos divertidos sobre las colas de los perros y lo que intentan decirte.`,
    },
  ],

  heroImages: [
    {
      src: "/images/mascota_a_dom.jpeg",
      description: "Servicio a domicilio ",
      text: "Servicio a domicilio, gratis! ",
    },
    {
      src: "/images/bandanas.jpeg",
      description: "Bandanas para mascotas ",
      text: "Bonitas bandanas para mascotas ",
    },
    {
      src: "/images/cargador.jpeg",
      description: "Llevalo a donde sea, pero seguro ",
      text: "Llevalo a donde sea pero seguro ",
    },
    {
      src: "/images/mascota.jpeg",
      description: "Mascotafood ",
      text: "Lo mejor para tu mejor amigo",
    },
    {
      src: "/images/alimentos_1.jpeg",
      description: "Mascotafood ",
      text: "Variedad de alimentos, marcas y presentaciones",
    },
  ],

  galery: [
    {
      title: "Bandanas",
      url: "/images/bandanas.jpeg",
    },
    {
      title: "Alimento",
      url: "/images/alimentos_1.jpeg",
    },
    {
      title: "Alimento para gato",
      url: "/images/alimentos_2.jpeg",
    },
    {
      title: "Alimento a granel",
      url: "/images/alimentos_3.jpeg",
    },
    {
      title: "Alimentos varios",
      url: "/images/alimentos_4.jpeg",
    },
    {
      title: "Juegtes",
      url: "/images/articulos.jpeg",
    },
    {
      title: "Camas",
      url: "/images/camas.jpeg",
    },
    {
      title: "trasportador",
      url: "/images/cargador.jpeg",
    },
    {
      title: "Bandanas",
      url: "/images/bandanas_dogfriend.jpeg",
    },
  ],
};
export default PROJECT_INFO;
