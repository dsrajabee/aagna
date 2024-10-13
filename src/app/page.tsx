import Image from 'next/image';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/footer';

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

          <div className="p-5 text-center space-y-2 mb-6 w-full  ">
            {/* <h3 className="text-xl font-normal">Welcome to</h3> */}

            <div className="relative overflow-hidden flex justify-center">
              <h1 className=" text-2xl md:text-5xl leading-snug md:w-[60%] md:leading-[65px] md:font-semibold text-[#FFC807]  animate-textSlide">
                {/* aagna Creatives */}
                {/* Transforming Ideas into a Multiverse of Creative Possibilities */}
                Transform Your Business with Aagna Creatives
              </h1>
            </div>
            {/* <h3 className="text-xl font-normal pt-1">
              Transforming Ideas into a Multiverse of Creative Possibilities
            </h3> */}
          </div>
        </div>
      </div>
      <footer className="bg-black text-white text-center py-2.5">
        <div className="container mx-auto">
          <p className=" captilize text-[#FFC807]">Aagna Creatives</p>
          <p className=" captilize">copyrights © 2024 All Rights Reserved. </p>
        </div>
      </footer>
    </>
  );
}
