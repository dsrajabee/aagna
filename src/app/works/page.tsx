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
      <div className="relative flex flex-col items-center justify-center  py-2 bg-black text-white">
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

      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-black  border border-yellow-400 my-24">
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

          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-black  border border-yellow-400 my-24">
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
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-black  border border-yellow-400 my-24">
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
