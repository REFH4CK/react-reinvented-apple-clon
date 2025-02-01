import { OptionButtons } from "@/components/OptionButtons";

export function MacBookAir() {
  return (
    <>
      <article
        className={`
        h-[100%] w-[100dvw] lg:w-[100%]
        overflow-hidden bg-[#FFFFFF]
      text-white flex flex-col items-center
        justify-end lg:justify-center select-none relative lg:pb-0
      `}
      >
        <div className="absolute top-24 lg:top-16 z-10">
          <h2 className="text-black font-bold text-[2rem] text-center">
            MacBook Air
          </h2>
          <p className="text-black font-sfl text-[1.10rem] text-center">
            Lean. Mean. M3 machine.
          </p>
          
          <OptionButtons
            colors={{ learn: "#4C4D4F", buy: "#2F79BE" }}
            classes={{ container: "relative" }}
            setShowInfo={() => ""}
          />
        </div>

        <img
          src="https://www.apple.com/v/home/bx/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_large.jpg"
          id="apple-watch-ultra2"
          alt="Apple Watch Ultra 2 Illustration"
          className={`
            absolute bottom-0 mx-auto
            select-none draggable-none brightness-105
            w-[48rem] max-w-fit h-auto object-cover 
            lg:w-[100%] lg:max-w-auto lg:absolute lg:bottom-0 lg:mx-auto
          `}
        />
      </article>
    </>
  );
}
