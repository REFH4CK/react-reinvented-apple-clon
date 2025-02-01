import { OptionButtons } from "@/components/OptionButtons";

export function WatchS10() {
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
        <div className="absolute top-32 lg:top-24 z-10">
          <img
            src="https://www.apple.com/v/home/bx/images/logos/apple-watch-series-10/promo_logo_apple_watch_series_10__qk5vaa89vnm2_large.png"
            alt=""
            className="w-32 brightness-105 mx-auto"
          />
          <h2 className="text-black text-[1.25rem] mt-6 text-center">
            Thinstant classic
          </h2>
          
          <OptionButtons
            colors={{ learn: "#4C4D4F", buy: "#2F79BE" }}
            classes={{ container: "relative" }}
            setShowInfo={() => ""}
          />
        </div>

        <img
          src="https://www.apple.com/v/home/bx/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg"
          id="apple-watch-s10"
          alt="Apple Watch Series 10 Illustration"
          className={`
            select-none draggable-none brightness-105
            w-[46rem] max-w-fit h-auto object-cover 
            lg:w-[50rem] lg:max-w-auto lg:absolute lg:bottom-0 lg:mx-auto
          `}
        />
      </article>
    </>
  );
}
