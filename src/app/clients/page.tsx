import ContactBox from '@/app/components/contactbox';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedImage from '../components/AnimatedImage';
import Header from '../components/header';

export default function Clients() {
  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center justify-center  py-2 bg-black text-white">
        <AnimatedImage />

        <div className="flex justify-center">
          <div className="flex justify-center items-center self-center h-[350px] mt-10">
            <div className="text-center">
              <div>
                <h1 className="text-4xl animate-zoom font-bold mb-4 text-[#FFC807]">
                  Clients
                </h1>
                <p className="text-lg mb-1 font-light text-white">
                  <span className="text-[#FFC807]">Reach</span> your audience.
                  <span className="text-[#FFC807]">Connect</span> your message.{' '}
                </p>
                <p className="text-lg font-light text-white">
                  {' '}
                  <span className="text-[#FFC807]">Inspire </span>an action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          <div className="transform transition-transform duration-500 hover:scale-110  max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-500 ">
            <div className="p-6">
              <a
                href="https://virtuotechnologies.com"
                className="pointer"
                target="_blank"
              >
                <img
                  src="/images/Clients/Virtuo.png"
                  alt="Virtuo Technologies"
                  className="w-full rounded-xl p-1 "
                />
              </a>
            </div>
          </div>

          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl transform transition-transform duration-500 hover:scale-110 overflow-hidden shadow-lg bg-white  border border-yellow-500 ">
            <div className="px-6 pt-10">
              <img
                src="/images/Clients/data.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>

          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl transform transition-transform duration-500 hover:scale-110 overflow-hidden shadow-lg bg-white  border border-yellow-400 ">
            <div className="pt-6">
              <img
                src="/images/Clients/Aksha.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>
          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl transform transition-transform duration-500 hover:scale-110 overflow-hidden shadow-lg bg-white  border border-yellow-400 ">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/Falcon.png"
                alt="Image 1"
                className="w-full rounded-xl p-1  "
              />
            </div>
          </div>
          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl transform transition-transform duration-500 hover:scale-110 overflow-hidden shadow-lg bg-white  border border-yellow-500 ">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/HRF.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>
          {/* <Link href='/graphicsdesign'>
           <Card
            image="/images/graphics_design.png"
            title="Logo"
            description="Modern and innovative graphic designs that drive customers' attention ...."
            link="#"
           />
          </Link> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-500 ">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/Innovation.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>

          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-400 ">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/JL.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>
          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-400 ">
            <div className="px-6 pt-9">
              <img
                src="/images/Clients/Kadit.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>
          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-500 to-black ">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/Manju.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>

          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-500 to-black ">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/SreeScreens.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>

          {/* <Link href='/graphicsdesign'>
           <Card
            image="/images/graphics_design.png"
            title="Logo"
            description="Modern and innovative graphic designs that drive customers' attention ...."
            link="#"
           />
          </Link> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-500 ">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/Vibe.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>

          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-400 ">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/RG Tax.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>
          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-400 ">
            <div className="pt-7">
              <img
                src="/images/Clients/Sakthi.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>
          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-400 ">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/Shiva.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>
          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-500 ">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/Space.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 "
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          <div className="max-w-sm transform transition-transform duration-500 hover:scale-110 rounded-2xl overflow-hidden shadow-lg bg-white  border border-yellow-400 mb-24">
            <div className="p-6 flex justify-center">
              <img
                src="/images/Clients/Millet.png"
                alt="Image 1"
                width={100}
                height={50}
                className=" "
              />
            </div>
          </div>
          {/* <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-black  border border-yellow-400 ">
            <div className="p-6">
              <img
                src="/images/Logos/ISmart.png"
                alt="Image 1"
                className="w-full rounded-xl p-1 transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div> */}

          {/* <Link href='/graphicsdesign'>
           <Card
            image="/images/graphics_design.png"
            title="Logo"
            description="Modern and innovative graphic designs that drive customers' attention ...."
            link="#"
           />
          </Link> */}
        </div>
      </main>

      <ContactBox />
      <Footer />
    </>
  );
}
