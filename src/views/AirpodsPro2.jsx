import { OptionButtons } from "@/components/OptionButtons";

export function AirpodsPro2() {
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
        <div className="absolute bottom-28 z-10">
          <h2 className="text-white font-bold text-[2.1rem] text-center">
            Airpods Pro 2
          </h2>
          <p className="text-white font-sfl text-[1.10rem] text-center">
            Now with a Hearing Aid feature
          </p>
        </div>

        <img
          src="https://www.apple.com/v/home/bx/images/promos/airpods-pro-2/promo_airpods_pro_2_avail__vkitqi3okwie_large.jpg"
          id="apple-airpods-pro2"
          alt="Airpods Pro 2 Illustration"
          className={`
            absolute bottom-0 mx-auto
            select-none draggable-none
            w-[60rem] max-w-fit h-auto object-cover  
            lg:w-[70rem]
          `}
        />

        <OptionButtons
          colors={{ learn: "#4C4D4F", buy: "#2F79BE", bg: "#2F79BE20" }}
          classes={{ container: "absolute" }}
          setShowInfo={() => ""}
        />
      </article>
    </>
  );
}
