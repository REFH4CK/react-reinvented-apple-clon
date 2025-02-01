import { useWindowSize } from "@/hook/useWindowSize.js";

export function InfoCards() {
  const { width } = useWindowSize();

  const info = [
    {
      title: "Apple A18 Bionic",
      text: "The most powerful chip ever in a smartphone. It features a 6-core CPU with 2 high-performance cores and 4 high-efficiency cores, and a 4-core GPU.",
    },
    {
      title: "6-core CPU",
      text: "Is the fastest CPU ever in a smartphone. It features 2 high-performance cores and 4 high-efficiency cores, delivering up to 50% faster performance than the A15 Bionic.",
    }
  ];

  return (
    <>
      {width >= 1024 && (
        <>
          <section className="w-full relative h-[40dvh] max-w-[1500px]">
              <p className={`
                  absolute -top-[14rem] left-4 p-5 pt-4
                  rounded-tl-[1.5rem] rounded-bl-[1.5rem] rounded-tr-[1.5rem]
                  self-end text-[1.05rem]
                  w-[25rem] backdrop-blur-[2rem] text-[#111010] z-10 transition-all
                  shadow-card bg-[#6185d39a]
                `}>
                <strong className="text-xl text-[#201b25]">{info[0].title}</strong>
                <span className="block w-[100%] text-[#1b1b2b]">{info[0].text}</span>
              </p>

              <p className={`
                  absolute -top-[14rem] right-4 p-5 pt-4
                  rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[1.5rem]
                  self-end text-[1.05rem]
                  w-[25rem] backdrop-blur-[2rem] 
                  z-10 transition-all text-[#111010]
                  shadow-card bg-[#ffffff9a]
                `}>
                <strong className="text-xl text-[#201b25]">{info[1].title}</strong>
                <span className="block w-[100%] text-[#1b1b2b]">{info[1].text}</span>
              </p>
          </section>
        </>
      )}
    </>
  );
}
