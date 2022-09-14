const PROJECT_INFO = {
  name: "La negrin",
  shortName: "Negrin",
  address:
    "P.º de Las Villas 59-Local 18 y 19, Villas de la Hacienda, 52929 Cd López Mateos, Méx.",
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
    email: "email@lanegrin.com",
    mobile: "525548522575",
    embedLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.701290092043!2d-99.23197268255615!3d19.597294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21dcbc8b44213%3A0xa1f9a23f423bd129!2sCremeria%20La%20negrin!5e0!3m2!1sen!2smx!4v1663173397808!5m2!1sen!2smx",
  },
  socialMedia: {
    instagram: "",
    facebook: "/cremeria.negrin",
    twitter: "",
    whatsApp: "5215548522575",
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
          link: "https://wa.me/5215548522575?text='Hola!, Buenas tardes. Una pregunta ¿Que Jamones de pierna manejas?'",
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
      src: "/images/contratando.jpeg",
      description: "contratando ",
      text: "Trae tu solicitud",
    },
    {
      src: "/images/negrin_a_dom.jpeg",
      description: "Servicio a domicilio ",
      text: "Servicio a domicilio, gratis! ",
    },
    {
      src: "/images/pan.jpeg",
      description: "Cremeria pirules ",
      text: "Cremeria Pirules",
    },
    {
      src: "/images/logo_negrin.png",
      description: " ",
      text: "Abierto de 9:00 a 9:00 ",
    },
  ],

  galery: [
    {
      title: "Estamos contratando",
      url: "/images/contratando.jpeg",
    },
    {
      title: "Dulces",
      url: "/images/dulces.jpeg",
    },

    {
      title: "Servicio a domicilio",
      url: "/images/negrin_a_dom.jpeg",
    },
    {
      title: "Abierto de 9:00 a 9:00",
      url: "/images/logo_negrin.png",
    },
  ],
};
export default PROJECT_INFO;
