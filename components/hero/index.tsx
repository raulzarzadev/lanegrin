import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";
import Image from "next/image";
const images = PROJECT_INFO.heroImages;

const Hero = () => {
  return (
    <div className="carousel w-full ">
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
    <div
      id={`slide${index}`}
      className="carousel-item relative w-full scroll-mt-28 "
    >
      <HeroImage src={src} />
      {text && (
        <div
          className={`absolute w-full text-center bg-gradient-to-l  h-full ${
            index % 2 === 0
              ? "from-transparent to-slate-500"
              : "from-slate-500 to-transparent"
          } `}
        >
          <div
            className={`w-1/2 mx-auto ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
          >
            <h2>{text}</h2>
          </div>
        </div>
      )}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={`#slide${index <= 0 ? arrLength - 1 : index - 1}`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={`#slide${index >= arrLength - 1 ? 0 : index + 1}`}
          className="btn btn-circle"
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
