import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";
import Image from "next/image";
const images = PROJECT_INFO.heroImages;

const Hero = () => {
  return (
    <div className="carousel w-full  ">
      {images.map(({ src, text }, i, arr) => {
        return (
          <HeroSlide
            key={i}
            src={src}
            text={text}
            index={i}
            arrLength={arr.length}
          />
        );
      })}
    </div>
  );
};

const HeroSlide = ({ src = "", text = "", index = 0, arrLength = 0 }) => {
  return (
    <div id={`slide${index}`} className="carousel-item relative w-full ">
      <HeroImage src={src} />
      {text && (
        <div
          className={`absolute w-full text-center  bg-gradient-to-t from-black  h-full  `}
        >
          <div className={`w-2/3 mx-auto flex items-end h-full `}>
            <h3>{text}</h3>
          </div>
        </div>
      )}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
        <a
          href={`#slide${index <= 0 ? arrLength - 1 : index - 1}`}
          className="btn btn-circle btn-sm bg-opacity-40 border-opacity-20"
        >
          ❮
        </a>
        <a
          href={`#slide${index >= arrLength - 1 ? 0 : index + 1}`}
          className="btn btn-circle btn-sm bg-opacity-40 border-opacity-20"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

const HeroImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-64 w-full  ">
      <Image src={src} layout="fill" objectFit="cover" alt="Hero slide " />
    </div>
  );
};

export default Hero;
