import MainSlider from "@/components/main/main-slider";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full relative to-transparent">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/70 via-black/30 z-9"></div>
        <div
          className="absolute w-full px-30 bottom-20 z-10 text-white text-right font-black text-[clamp(3rem,_6vw,_9rem)]
          leading-tight flex flex-col"
        >
          <div>문화의 힘을 믿는</div>
          <div>뜨거운 청년들의 아지트</div>
        </div>
        <MainSlider />
      </div>
    </div>
  );
}
