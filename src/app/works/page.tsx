import ContactBox from '@/app/components/contactbox';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedImage from '../components/AnimatedImage';
import Header from '../components/header';

export default function Works() {
  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center justify-center px-6   py-2 bg-black text-white">
        <AnimatedImage />

        <div className="flex justify-center">
          <div className="flex justify-center items-center self-center h-[350px]">
            <div className="text-center">
              <div>
                <h1 className="text-4xl animate-slide font-bold mb-4 text-[#FFC807]">
                  Works
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

      <main className="mx-6 mt-6  md:mx-auto md:container text-center  ">
        <div className=" space-x-6 space-y-6 font-light text-sm w-3/5 m-auto">
          <button className="text-gray-300  border py-2 px-6 border-gray-400">
            SHOW ALL
          </button>
          <button className="text-gray-300 border py-2 px-6 border-gray-400">
            LOGO DESIGN
          </button>
          <button className="text-gray-300 border py-2 px-6 border-gray-400">
            BRANDING
          </button>
          <button className="text-gray-300 border py-2 px-6 border-gray-400">
            PRINT DESIGN
          </button>
          <button className="text-gray-300 border py-2 px-6 border-gray-400">
            PACKAGING DESIGN
          </button>
          <button className="text-gray-300 border py-2 px-6 border-gray-400">
            SOCIAL MEDIA DESIGN
          </button>
          <button className="text-gray-300 border py-2 px-6 border-gray-400">
            POSTER DESIGN
          </button>
          <button className="text-gray-300 border py-2 px-6 border-gray-400">
            2D ANIMATION
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 place-items-center">
          <div className="w-full md:w-96 rounded-2xl overflow-hidden shadow-lg bg-black  border border-yellow-400 md:my-24">
            <div
              className="h-72 bg-cover bg-center "
              style={{ backgroundImage: "url('/images/Works/websites.png')" }}
            ></div>
            <div className="p-6">
              <Link href="/websites">
                <h2 className="text-2xl font-semibold mb-2 text-center text-yellow-400">
                  Websites
                </h2>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-96 rounded-2xl overflow-hidden shadow-lg bg-black  border border-yellow-400 md:my-24">
            <div
              className="h-72 bg-cover bg-center "
              style={{ backgroundImage: "url('/images/Works/logo_works.png')" }}
            ></div>
            <div className="p-6">
              <Link href="/logodesigns">
                <h2 className="text-2xl font-semibold mb-2 text-center text-yellow-400">
                  Logo
                </h2>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-96 rounded-2xl overflow-hidden shadow-lg bg-black  border border-yellow-400 md:my-24">
            <div
              className="h-72 bg-cover bg-center "
              style={{
                backgroundImage: "url('/images/Works/graphics_works.png')",
              }}
            ></div>
            <span className="p-6">
              <Link href="/branding">
                <h2 className="text-2xl font-semibold mb-2 text-center text-yellow-400">
                  Graphics Designs
                </h2>
              </Link>
            </span>
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
      </main>

      <ContactBox />
      <Footer />
    </>
  );
}
