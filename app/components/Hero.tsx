import MagicButton from "./ui/MagicButton";
import { IoMdArrowRoundDown } from "react-icons/io";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Grid from "./Grid";

const Hero = () => {
  return (
    <div className="pb-20 pt-16 md:pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="mb-10 flex justify-center relative my-20 z-10">
        <div className="space-y-8 md:space-y-5 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Elevate Your Digital Presence with Expert Frontend Engineering"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 md:text-lg lg:text-2xl">
            Hi! I&apos;m Tambi, a Senior Frontend Engineer based in Vancouver,
            BC.
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<IoMdArrowRoundDown />}
              position="right"
            />
          </a>
        </div>
      </div>
      <Grid />
    </div>
  );
};

export default Hero;
