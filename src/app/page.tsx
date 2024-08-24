import Image from 'next/image';
import Link from 'next/link';
import Header from './components/header';

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col h-screen justify-between">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/background_bg.mp4"
        />

        <div className="relative z-10 flex flex-col h-screen justify-between text-white">
          <Header />

          <div className="text-center space-y-2 mb-6">
            <h3 className="text-xl font-normal">Welcome to</h3>

            <div className="relative overflow-hidden h-[68px]">
              <h1 className="text-6xl font-bold text-[#FFC807]  animate-textSlide">
                aagna Creatives
              </h1>
            </div>
            <h3 className="text-xl font-normal pt-1">
              Transforming Ideas into a Multiverse of Creative Possibilities
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
