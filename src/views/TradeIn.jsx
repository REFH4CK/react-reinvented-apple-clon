export function TradeIn() {
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
        <div className="absolute top-10 lg:top-12 z-10">
          <img
            src="https://www.apple.com/v/home/bx/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_large.png"
            alt=""
            className="w-32 mx-auto"
          />
          <h2 className="text-black font-sfl text-[1.1rem] mt-4 text-center w-52 mx-auto">
            Get $180-$650 in credit when you trade in iPhone 12 or higher.
          </h2>

          <div className="w-[100%] text-center">
            <button className="text-white text-[1.125rem] font-sfl py-2 px-4 rounded-lg shadow-lg bg-[#2F79BE] mt-4">
              Get your estimate
            </button>
          </div>
        </div>

        <img
          src="https://www.apple.com/v/home/bx/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg"
          id="apple-watch-ultra2"
          alt="Apple Watch Ultra 2 Illustration"
          className={`
            absolute bottom-0 mx-auto
            select-none draggable-none brightness-105
            w-[100%] max-w-fit h-auto object-cover 
            lg:w-[100%] lg:max-w-auto lg:absolute lg:bottom-0 lg:mx-auto
          `}
        />
      </article>
    </>
  );
}
