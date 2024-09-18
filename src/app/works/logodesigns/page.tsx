import ContactBox from '@/app/components/contactbox';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import useClient from 'next/client';
import dynamic from 'next/dynamic';
import AnimatedImage from '../../components/AnimatedImage';
import Header from '@/app/components/header';

// const Navbar = dynamic(() => import('./components/navbar'), { client: { ssr: false } });

export default function LogoDesigns() {
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
                  Best Logo Design
                </h1>
                <p className="text-lg">
                  Showcasing top-tier{' '}
                  <span className="text-[#FFC807]">logo design</span> solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 gap-6">
          <div className=" overflow-hidden shadow-lg bg-black  md:border md:border-gray-500 ">
            <div className="md:p-6">
              <img
                src="/images/Works/logo/cloudlight.jpg"
                alt="cloudlight"
                className="w-full rounded-xl p-1"
              />
            </div>
          </div>

          <div className=" overflow-hidden shadow-lg bg-black  md:border md:border-gray-500 ">
            <div className="md:p-6">
              <img
                src="/images/Works/logo/flux.jpg"
                alt="flux"
                className="w-full rounded-xl p-0.5"
              />
            </div>
          </div>
          <div className=" overflow-hidden shadow-lg bg-black  md:border md:border-gray-500 ">
            <div className="md:p-6">
              <img
                src="/images/Works/logo/gurru.jpg"
                alt="Gurru"
                className="w-full rounded-xl p-1"
              />
            </div>
          </div>
          <div className=" overflow-hidden shadow-lg bg-black  md:border md:border-gray-500">
            <div className="md:p-6">
              <img
                src="/images/Works/logo/kadit.jpg"
                alt="Kadit"
                className="w-full  rounded-xl p-1"
              />
            </div>
          </div>
          <div className=" overflow-hidden shadow-lg bg-black  md:border md:border-gray-500">
            <div className="md:p-6">
              <img
                src="/images/Works/logo/mr.mech.jpg"
                alt="mr.mech"
                className="w-full  rounded-xl p-1"
              />
            </div>
          </div>
          <div className=" overflow-hidden shadow-lg bg-black  md:border md:border-gray-500">
            <div className="md:p-6">
              <img
                src="/images/Works/logo/nibali.jpg"
                alt="Nibali"
                className="w-full  rounded-xl p-1"
              />
            </div>
          </div>
          <div className=" overflow-hidden shadow-lg bg-black  md:border md:border-gray-500">
            <div className="md:p-6">
              <img
                src="/images/Works/logo/rajeshwari.jpg"
                alt="Rajeshwari"
                className="w-full  rounded-xl p-1"
              />
            </div>
          </div>
          <div className=" overflow-hidden shadow-lg bg-black  md:border md:border-gray-500">
            <div className="md:p-6">
              <img
                src="/images/Works/logo/TSP.jpg"
                alt="TSP"
                className="w-full  rounded-xl p-1"
              />
            </div>
          </div>
          <div className=" overflow-hidden shadow-lg bg-black  md:border md:border-gray-500">
            <div className="md:p-6">
              <img
                src="/images/Works/logo/vibeenergy.jpg"
                alt="VIBEENERGY"
                className="w-full  rounded-xl p-1"
              />
            </div>
          </div>
          <div className=" overflow-hidden shadow-lg bg-black  md:border md:border-gray-500">
            <div className="md:p-6">
              <img
                src="/images/Works/logo/vistharah.jpg"
                alt="vistharah"
                className="w-full  rounded-xl p-1"
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
