import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";
import Image from "next/image";

const Galery = () => {
  const { galery = [] } = PROJECT_INFO;
  return (
    <div>
      <h2>Galeria de imagenes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {galery.map(({ title, url }) => {
          return (
            <div
              key={url}
              className="relative flex justify-center items-center w-full aspect-square"
            >
              <Image src={url} objectFit="cover" layout="fill" alt={title} />
              <span className=" absolute bottom-0 from-black to-transparent bg-gradient-to-t w-full text-center text-white ">
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Galery;
