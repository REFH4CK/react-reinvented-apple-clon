import Iphone16img from "@/assets/images/iPhones16.png";
import a18CPU from "@/assets/images/a18CPU.png";
import { OptionButtons } from "@/components/OptionButtons";
import { useState } from "react";
import { useWindowSize } from "@/hook/useWindowSize.js";
import { InfoCards } from "@/components/InfoCards";

export function Iphone16() {
  const [showInfo, setShowInfo] = useState(false);
  const { width } = useWindowSize();

  return (
    <>
      <article
        className={`
        h-[100dvh] w-[100dvw]
        overflow-hidden bg-linear-gradient
      text-white flex flex-col items-center
        justify-center lg:justify-center select-none relative lg:pb-0
      `}
      >
        <div className="lg:mt-20">
          <h2 className="font-bold text-[60px] text-center">iPhone 16</h2>
          <OptionButtons
            colors={{ learn: "#4C4D4F", buy: "#2F79BE", bg: "none" }}
            classes={{ container: "relative" }}
            setShowInfo={() => width <= 1024 && setShowInfo(!showInfo)}
            info={showInfo}
          />
        </div>

        <div className="relative lg:h-[230px] lg:w-full">
          <h1 className="lg:absolute lg:text-center lg:w-full lg:top-0 lg:left-0 text-[420px] lg:text-[400px] bg-clip-text text-transparent bg-linear-text leading-[0.95] lg:leading-[1] font-sans">
            16
          </h1>
        </div>

        <InfoCards />
        <img
          src={Iphone16img}
          id="iphone-16"
          alt="iPhone 16 Pro Illustration"
          className={`
            absolute bottom-12 select-none draggable-none
            w-[50rem] max-w-fit h-auto object-cover 
            animate-fadeInUp drop-shadow-2xl 
            lg:w-[45rem] l:h-[20rem] lg:bottom-0 lg:max-w-auto
            xl:w-[60rem] xl:h-[20rem] 2xl:w-[70rem] 2xl:h-[25rem]
        `}
        />
        {showInfo && (
          <p
            className={`
              p-8 pt-6 rounded-lg text-sm 
              absolute bg-[#FFFFFF1A] backdrop-blur-[4rem]
              text-[#111010] bottom-0 z-10 transition-all
              lg:hidden
              `}
          >
            <span
              onClick={() => setShowInfo(!showInfo)}
              className="block w-[12rem] h-[.5rem] bg-[#FFF] mx-auto mb-8 rounded-lg cursor-pointer lg:hidden"
            ></span>
            <img
              src={a18CPU}
              alt="A18 CPU"
              className="w-[25rem] rounded-[1rem] mx-auto h-auto object-cover"
            />
            <br />
            <br />
            <strong className="text-xl">Apple A18 Bionic</strong>
            <br />
            <span className="block w-[100%] lg:w-[70%]">
              The most powerful chip ever in a smartphone. It features a 6-core
              CPU with 2 high-performance cores and 4 high-efficiency cores, and
              a 4-core GPU.
            </span>
            <br />
            <strong className="text-xl">6-core CPU</strong>
            <br />
            <span className="block w-[100%] lg:w-[70%]">
              Is the fastest CPU ever in a smartphone. It features 2
              high-performance cores and 4 high-efficiency cores, delivering up
              to 50% faster performance than the A15 Bionic.
            </span>
            <br />
            <strong className="text-xl">4-core GPU</strong>
            <br />
            <span className="block w-[100%] lg:w-[70%]">
              In the Apple A18 Bionic is the fastest GPU ever in a smartphone.
              It delivers up to 30% faster graphics performance than the A15
              Bionic, enabling console-quality gaming on the go.
            </span>
          </p>
        )}
      </article>
    </>
  );
}
