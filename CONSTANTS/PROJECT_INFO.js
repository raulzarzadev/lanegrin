const PROJECT_INFO = {
  name: "Cremeria Pirules",
  shortName: "Pirules",
  address:
    "Blvd. Cuautitlan Izalli Mz. 1 Lt. 3, Hacienda de la Luz, Atizapán de Zaragoza, Estado de México CP 52929",
  aboutUs: `
  Somos una tienda dedica a la venta de productos comestibles de alta calidad. Especialmente cremeria, salchichoneria y carnes frias. Vinos y licores y articulos varios `,
  mission: ``,

  description:
    " Somos una tienda dedica a la venta de productos comestibles de alta calidad. Especialmente cremeria, salchichoneria y carnes frias. Vinos y licores y articulos varios ",
  keywordsArray: [
    "Cremeria",
    "Tienda de conveniencia",
    "Jamón ",
    "Carnes frias",
  ],
  keywords: function () {
    return this?.keywordsArray?.join(", ");
  },
  icons: {
    head: "/icons/logotipo.ico",
    nav: "/icons/logotipo.ico",
  },
  logos: {},
  images: {},

  contacts: {
    email: "email@cremeriapirules.com",
    mobile: "525562095024",
  },
  socialMedia: {
    instagram: "",
    facebook: "/pirules.cremeria",
    twitter: "",
    whatsApp: "5215562095024",
    telegram: "",
  },
  news: {
    latestPosts: [],
  },

  faqs: [
    {
      question: "¿Qué jamon de pierna tienes?",
      response:
        "Tenemos xjamon de varias marcas, precios y calidades. Como Food, Chilchota , Efa ademas de otras marcas. Para saber los precios envianos un whatsapp ",
      moreInfoLinks: [
        {
          title: "Envianos un whatsApp",
          link: "https://wa.me/5215562095024?text='Hola!, Buenas tardes. Una pregunta ¿Que Jamones de pierna manejas?'",
        },
      ],
      ws_msj:
        "Hola!, Buenas tardes. Una pregunta ¿Que Jamones de pierna manejas? ",
    },
  ],
  facts: [
    {
      title: "¿De qué ingredientes está hecho el jamón?",
      content: `
      El jamón es uno de los embutidos más populares en el país, forma parte de la dieta del mexicano en preparaciones como sándwiches, tortas, sincronizadas y cientos de platillos más. 

      A pesar de ello, el jamón es un alimento cuyo aporte nutricional depende directamente de los ingredientes y procesos con los que se elabora. En Menú te contamos de qué está hecho el jamón y qué componentes debes evitar al comprar este embutido. 
      De acuerdo a la Norma Oficial Mexicana NOM-158-SCFI-2003, estos son los tipos de jamón en el mercado cuya clasificación se otorga de acuerdo a sus ingredientes, misma que debe ser visible en el empaque. 

      Jamón o jamón de pierna: Elaborado exclusivamente con carne de la pierna trasera del cerdo.
      
      Jamón de cerdo y pavo: Elaborado con un mínimo del 55% de carne de cerdo y el resto con carne de pavo.
      
      Jamón de pavo: Elaborado exclusivamente con carne de muslo de pavo.
      
      Jamón de pavo y cerdo: Elaborado con un mínimo del 55% de carne de pavo y el resto con carne de cerdo.
`,
      moreInfoLinks: [
        {
          title: "Fuente",
          link: "https://www.eluniversal.com.mx/menu/de-que-ingredientes-esta-hecho-el-jamon",
        },
      ],
    },
  ],

  heroImages: [
    {
      src: "/images/fiestas_mex.jpeg",
      description: "Mascotafood ",
      text: "Todo para tus fiestas. A excelente precio",
    },
    {
      src: "/images/pirules_a_dom.jpeg",
      description: "Servicio a domicilio ",
      text: "Servicio a domicilio, gratis! ",
    },
    {
      src: "/images/logotipo.jpeg",
      description: "Cremeria pirules ",
      text: "Cremeria Pirules",
    },
    {
      src: "/images/pirules_abierto.jpeg",
      description: " ",
      text: "Abierto de 9:00 a 9:00 ",
    },
  ],

  galery: [
    {
      title: "Fiestas Mexicanas",
      url: "/images/fiestas_mex.jpeg",
    },
    {
      title: "Cremeria Pirules",
      url: "/images/logotipo.jpeg",
    },

    {
      title: "Servicio a domicilio",
      url: "/images/pirules_a_dom.jpeg",
    },
    {
      title: "Abierto de 9:00 a 9:00",
      url: "/images/pirules_abierto.jpeg",
    },
  ],
};
export default PROJECT_INFO;
