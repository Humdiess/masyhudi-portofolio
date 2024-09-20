import BlurIn from "@/components/magicui/blur-in";
import BlurFade from "../magicui/blur-fade";
import { RainbowButton } from "../magicui/rainbow-button";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowDownIcon } from "lucide-react";
import Meteors from "../magicui/meteors";

const HeroSection = () => {
  return (
    <div className="hero space-y-6 -mt-12 relative flex flex-col justify-center items-center h-screen bg-zinc-300 dark:bg-black transition-colors text-black dark:text-white overflow-hidden">
      {/* Background with Meteors and Stars */}
      <Meteors number={20} />
      <div className="absolute inset-0 bg-[url('/cosmic-bg.jpg')] bg-cover bg-center opacity-50 z-0"></div>

      {/* Floating Cosmic Particles */}
      <div className="absolute inset-0 z-10">
        <div className="floating-particles"></div>
      </div>

      {/* Interactive Call to Action */}
      <div
        className={cn(
          "group z-20 rounded-full border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-6 py-2 transition ease-out hover:text-gray-600 dark:hover:text-neutral-400 hover:duration-300">
          <span>✨ Uncover the Magic of UI</span>
          <ArrowRightIcon className="ml-2 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </AnimatedShinyText>
      </div>

      {/* Glowing Introduction */}
      <BlurIn
        word="Hi, I'm Masyhudi"
        className="text-7xl font-extrabold text-transparent pb-4 bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 drop-shadow-[0_0_25px_rgba(100,255,255,0.9)] animate-pulse"
      />

      <BlurFade delay={0.2} inView>
        <div className="hero-description z-20 max-w-xl text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Crafting digital experiences that blend creativity and technology. Ready to dive deeper?
          </p>
        </div>

        <div className="hero-but mt-6 flex justify-center z-20">
          <RainbowButton>Discover My Work</RainbowButton>
        </div>
      </BlurFade>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 z-30 flex flex-col items-center">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
          Scroll down to explore
        </p>
        <ArrowDownIcon className="w-6 h-6 text-gray-700 dark:text-gray-300 animate-bounce" />
      </div>

      {/* Gradient Visual Cue at Bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-zinc-300 dark:from-black via-transparent z-10"></div>
    </div>
  );
};

export default HeroSection;
