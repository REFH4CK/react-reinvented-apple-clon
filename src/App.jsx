import { Header } from "@/components/Header";
import { Iphone16Pro } from "@/views/Iphone16Pro";
import { Iphone16 } from "@/views/Iphone16";
import { IpadAir } from "@/views/IpadAir";
import { WatchS10 } from "@/views/WatchS10";
import { WatchUltra2 } from "@/views/WatchUltra2";
import { AirpodsPro2 } from "@/views/AirpodsPro2";
import { AirpodsPro4 } from "@/views/AirpodsPro4";
import { MacBookAir } from "@/views/MacBookAir";
import { TradeIn } from "@/views/TradeIn";

function App() {
  return (
    <>
      <Header />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-x-hidden overflow-auto scrollbar-none bg-[#FFFFFF]">
        <section className="snap-start max-w-[1920px]">
          <Iphone16Pro />
        </section>

        <section className="snap-start max-w-[1920px]">
          <Iphone16 />
        </section>

        <section className="snap-start max-w-[1920px] bg-[#FFFFFF]">
          <IpadAir />
        </section>

        <section className="snap-start max-w-[2175px] h-[100dvh] lg:h-[50dvh] bg-[#FFFFFF] grid grid-cols-1 lg:grid-cols-2 mx-auto">
          <article className="h-[50dvh]">
            <WatchS10 />
          </article>
          <article className="h-[50dvh]">
            <WatchUltra2 />
          </article>
        </section>

        <section className="snap-start max-w-[2175px] h-[100dvh] lg:h-[50dvh] bg-[#FFFFFF] grid grid-cols-1 lg:grid-cols-2 mx-auto">
          <article className="h-[50dvh]">
            <AirpodsPro2 />
          </article>
          <article className="h-[50dvh]">
            <AirpodsPro4 />
          </article>
        </section>

        <section className="snap-start max-w-[2175px] h-[100dvh] lg:h-[50dvh] bg-[#FFFFFF] grid grid-cols-1 lg:grid-cols-2 mx-auto">
          <article className="h-[50dvh]">
            <MacBookAir />
          </article>
          <article className="h-[50dvh]">
            <TradeIn />
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
