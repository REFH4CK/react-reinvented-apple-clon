import { OptionButtons } from "@/components/OptionButtons";

export function WatchUltra2() {
  return (
    <>
      <article
        className={`
        h-[100%] w-[100dvw] lg:w-[100%]
        overflow-hidden bg-[#000000]
      text-white flex flex-col items-center
        justify-end lg:justify-center select-none relative lg:pb-0
      `}
      >
        <div className="absolute top-20 lg:top-24 z-10">
          <img
            src="https://www.apple.com/v/home/bx/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png"
            alt=""
            className="w-32 mx-auto"
          />
          <h2 className="text-white font-thin text-[1.25rem] mt-6 text-center">
            New finish. Never quit
          </h2>
          
          <OptionButtons
            colors={{ learn: "#4C4D4F", buy: "#2F79BE" }}
            classes={{ container: "relative" }}
            setShowInfo={() => ""}
          />
        </div>

        <img
          src="https://www.apple.com/v/home/bx/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_avail__dyawbjw9cowi_large.jpg"
          id="apple-watch-ultra2"
          alt="Apple Watch Ultra 2 Illustration"
          className={`
            absolute bottom-0 mx-auto
            select-none draggable-none brightness-105
            w-[50rem] max-w-fit h-auto object-cover 
            lg:w-[50rem] lg:max-w-auto lg:absolute lg:bottom-0 lg:mx-auto
          `}
        />
      </article>
    </>
  );
}
