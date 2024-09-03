'use client';
import ContactBox from '@/app/components/contactbox';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedImage from '../components/AnimatedImage';
import Header from '../components/header';
import TestimonialSlider from '../components/TestimonialSlider';

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
        <div className="text-white flex flex-col space-y-12 md:flex-row justify-between text-center mb-8">
          <div className="  text-center md:w-1/3 flex flex-col justify-center items-center space-y-6">
            <div className=" w-40 h-40 border border-gray-500 text-3xl text-center rounded-full flex justify-center items-center">
              1000+
            </div>
            <h1 className="text-2xl font-extralight">Projects</h1>
          </div>

          <div className="  md:w-1/3 text-center flex flex-col justify-center items-center space-y-6">
            <div className=" w-40 h-40 border border-gray-500 text-3xl text-center rounded-full flex justify-center items-center">
              500+
            </div>
            <h1 className="text-2xl font-extralight">Clients</h1>
          </div>

          <div className="  md:w-1/3 text-center flex flex-col justify-center items-center space-y-6">
            <div className=" w-40 h-40 border border-gray-500 text-3xl text-center rounded-full flex justify-center items-center">
              400+
            </div>
            <h1 className="text-2xl font-extralight">Appreciations</h1>
          </div>
        </div>
      </main>

      <TestimonialSlider />

      <ContactBox />
      <Footer />
    </>
  );
}
