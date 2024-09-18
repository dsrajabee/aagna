import ContactBox from '@/app/components/contactbox';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import useClient from 'next/client';
import dynamic from 'next/dynamic';
import AnimatedImage from '../../components/AnimatedImage';
import Header from '@/app/components/header';

// const Navbar = dynamic(() => import('./components/navbar'), { client: { ssr: false } });

export default function Branding() {
  // useClient();
  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center justify-center  py-2 bg-black text-white">
        {/* <AnimatedImage /> */}

        <div className="flex justify-center">
          <div className="flex justify-center items-center self-center h-[350px]">
            <div className="text-center">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-[#FFC807] ">
                  Best Branding
                </h1>
                <p className="text-lg">
                  Showcasing top-tier{' '}
                  <span className="text-[#FFC807]">branding</span> solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 gap-6">
          <div className=" overflow-hidden shadow-lg bg-black  border border-gray-500 ">
            <div className="p-6">
              <img
                src="/images/Works/branding/finder_branding_template.jpg"
                alt="cloudlight"
                className="w-full rounded-xl p-1"
              />
            </div>
          </div>

          <div className=" overflow-hidden shadow-lg bg-black  border border-gray-500 ">
            <div className="p-6">
              <img
                src="/images/Works/branding/predart_branding_template.jpg"
                alt="flux"
                className="w-full rounded-xl p-0.5"
              />
            </div>
          </div>
          <div className=" overflow-hidden shadow-lg bg-black  border border-gray-500 ">
            <div className="p-6">
              <img
                src="/images/Works/branding/rmaa_branding_template.jpg"
                alt="Gurru"
                className="w-full rounded-xl p-1"
              />
            </div>
          </div>
        </div>
      </main>

      <ContactBox />
      <Footer />
    </>
  );
}
