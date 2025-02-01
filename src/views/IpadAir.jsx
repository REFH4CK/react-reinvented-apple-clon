import { OptionButtons } from "@/components/OptionButtons";
import { useState } from "react";
import { useWindowSize } from "@/hook/useWindowSize.js";
import air from "@/assets/images/air.png";
import '@fontsource/pacifico';

export function IpadAir() {
  const [showInfo, setShowInfo] = useState(false);
  const { width } = useWindowSize();

  return (
    <>
      <article
        className={`
        h-[100dvh] w-[100dvw]
        overflow-hidden bg-[#FFFFFF]
      text-white flex flex-col items-center
        justify-end lg:justify-center select-none relative pb-[17rem] lg:pb-0
      `}
      >
        <div className="absolute bottom-72 lg:bottom-52 z-10">
            <img src={air} alt="" className="w-72 brightness-105" />
        </div>

        <img
          src="https://www.apple.com/v/ipad-air/x/images/overview/closer-look/all-colors/slide_3B__bua7snx5apea_large.jpg"
          id="ipad-air"
          alt="iPad Air Illustration"
          className={`
            animate-fadeInUp absolute top-0
            select-none draggable-none
            
            w-[46rem] max-w-fit h-auto object-cover 
            lg:w-screen lg:max-w-auto
        `}
        />
        <div className="relative h-[385px] lg:h-[260px] lg:w-full ">
          <h1 className="relative text-center mt-[24rem] text-[80px] lg:text-[85px] bg-clip-text text-transparent bg-linear-fresh leading-[normal]  font-pacifico z-11">
            Fresh Air
          </h1>
        </div>

        <OptionButtons
          colors={{ learn: "#4C4D4F", buy: "#2F79BE", bg: "#7f95bd90", }}
          classes={{ container: "absolute" }}
          setShowInfo={() => width <= 1024 && setShowInfo(!showInfo)}
          info={showInfo}
        />
      </article>
    </>
  );
}
