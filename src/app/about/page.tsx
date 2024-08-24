import ContactBox from '@/app/components/contactbox';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedImage from '../components/AnimatedImage';
import Header from '../components/header';

export default function About() {
  return (
    <>
      <Header />

      <div className="relative flex flex-col items-center justify-center py-2 bg-black text-white">
        <AnimatedImage />
        <main className="relative z-10 w-full max-w-6xl mx-auto my-20 px-6">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full md:w-1/2 p-4 animate-slide">
              <h2 className="text-3xl font-bold">
                What makes{' '}
                <span className="text-[#FFC807]">Aagna Creatives</span> <br />
                The best Creative Design <br />
                Company?
              </h2>
              <p></p>
            </div>
            {/* Right Section */}
            <div className="w-full md:w-1/2 px-2 py-4 space-y-4 text-justify">
              <p>
                <span className="text-[#FFC807]">Aagna Creatives</span> is a
                creative agency dedicated to finding creative solutions for our
                clients through{' '}
                <span className="text-[#FFC807]">
                  Strategy, Creativity, and Technology.
                </span>{' '}
                We set a clear and definitive goal, to never compromise on
                anything. Even before we kicked off our operations we had an
                in-depth knowledge of the market and we knew since day one what
                it takes to be a successful firm.
              </p>
              <p>
                We worked with prestigious companies and helped their success in
                rigorous markets, and with their growth and success our
                knowledge grew and our standards went higher and higher.
              </p>
              <p className="text-[#FFC807]">
                “We learned and proved to our customers that our combination of
                experience and passion is the secret recipe for sustainable
                success.“
              </p>
            </div>
          </div>
        </main>
      </div>

      <div className="lg:flex container mx-auto gap-10 mt-20 mb-20 ">
        {/* <div className="w-1/3 animate-slide-left"> */}
        <div className="lg:w-1/3 lg:pb-0 xl:pb-0 ">
          <img
            src="/images/AboutUs/photo.png"
            alt="Image 1"
            className=" transform transition-transform duration-500 hover:scale-110 w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-black rounded-xl p-0.5"
          />
        </div>
        {/* <div className="w-1/3 animate-fade-in-bottom"> */}
        <div className="lg:w-1/3 ">
          <img
            src="/images/AboutUs/stick.png"
            alt="Image 2"
            className="transform transition-transform duration-500 hover:scale-110 w-full bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 rounded-xl p-0.5"
          />
        </div>
        {/* <div className="w-1/3 animate-slide-right"> */}
        <div className="lg:w-1/3">
          <img
            src="/images/AboutUs/system.png"
            alt="Image 3"
            className="transform transition-transform duration-500 hover:scale-110 w-full bg-gradient-to-r from-black via-orange-500 to-yellow-500 rounded-xl p-0.5"
          />
        </div>
      </div>
      <ContactBox />
      <Footer />
    </>
  );
}
