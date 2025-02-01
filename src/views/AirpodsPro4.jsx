import { OptionButtons } from "@/components/OptionButtons";

export function AirpodsPro4() {
  return (
    <>
      <article
        className={`
        h-[100%] w-[100dvw] lg:w-[100%]
        overflow-hidden bg-[currentColor]
      text-white flex flex-col items-center
        justify-end lg:justify-center select-none relative lg:pb-0
      `}
      >
        <div className="absolute bottom-28 z-10">
          <h2 className="text-white font-bold text-[2.1rem] text-center">
            Airpods Pro 4
          </h2>
          <p className="text-white font-sfl text-[1.10rem] mx-auto text-center">
            Iconic. Now supersonic. <br />
            Available with Active Noise Cancellation.
          </p>
        </div>

        <img
          src="https://www.apple.com/v/home/bx/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg"
          id="apple-watch-ultra2"
          alt="Apple Watch Ultra 2 Illustration"
          className={`
            absolute bottom-0 mx-auto
            select-none draggable-none brightness-105
            size-[100%] max-w-fit object-cover 
          `}
        />

        <OptionButtons
          colors={{ learn: "#4C4D4F", buy: "#2F79BE", bg: "#4C4D4F25" }}
          classes={{ container: "absolute" }}
          setShowInfo={() => ""}
        />
      </article>
    </>
  );
}
