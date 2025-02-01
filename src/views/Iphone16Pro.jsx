import Iphone16pro from "@/assets/images/Iphone16pro.png";
import { OptionButtons } from "@/components/OptionButtons";

export function Iphone16Pro() {
  return (
    <>
      <article
        className={`
        h-[100dvh] w-[100dvw]
        overflow-hidden bg-radial-gradient
      text-white flex flex-col items-center
        justify-center lg:justify-center select-none relative lg:pb-0
      `}
      >
        <div>
          <h2 className="font-bold text-[52px] text-center">iPhone 16 Pro</h2>
          <p className="text-center text-[32px] font-sfl tracking-wider">
            Hello, Apple Intelligence
          </p>
        </div>
        <span></span>
        <span className="text-[258px] lg:text-[350px] bg-clip-text text-transparent bg-gradient-text lg:leading-[normal] ">
          PRO
        </span>
        <img
          src={Iphone16pro}
          id="iphone-16-pro"
          alt="iPhone 16 Pro Illustration"
          className={`
          absolute bottom-0 select-none
          w-[45rem] max-w-fit h-auto object-cover animate-fadeInUp
        `}
        />
        <OptionButtons colors={{ learn: "#1D1D1D", buy: "#B79567", bg: '#1B1F2690'}} classes={{ container: 'absolute' }} />
      </article>
    </>
  );
}
