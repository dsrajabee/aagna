import Image from 'next/image';
import Link from 'next/link';
import ContactBox from '../../components/contactbox';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Adspublishing() {
  return (
    <>
      <div className="relative flex flex-col h-screen justify-between">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/branding.mp4"
        />

        <div className="relative z-10 flex flex-col h-screen justify-between text-white">
          <Header />
          <div className="flex justify-center">
            <div className="relative overflow-hidden bg-[#0202023d] border border-black px-20 py-10 rounded-xl">
              <h1 className="text-6xl font-bold text-yellow-500   animate-textSlide">
                Ads & Publishing
              </h1>
            </div>
          </div>

          <div className="text-center space-y-2 mb-6">
            <h3 className="text-xl font-normal"> </h3>
            {/* <div className="flex justify-center"><Image
                src="/images/logo.png"
                alt="Logo"
                width={350}
                height={50}
                className="rounded-lg"
            /></div> */}
            <div className="relative overflow-hidden h-[68px]">
              <h1 className="text-6xl font-bold text-[#FFC807]  animate-textSlide"></h1>
            </div>
            {/* <h1 className="relative text-6xl font-bold text-black border-4 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700">
      <span className="absolute inset-0 border border-transparent rounded-full animate-gradientBorder"></span>
      aagna Creatives
    </h1> */}
            {/* <h1 className="text-4xl text-[#FFC807] shadow-2xl font-hammersmith">aagna Creatives</h1> */}
            <h3 className="text-xl font-normal pt-1"></h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-4 text-white items-center justify-around w-3/4 mt-16">
        <p className="text-white pb-4 ">
          Aagna Creatives offers comprehensive Advertising and Publishing
          services designed to boost your brand's visibility and impact. Whether
          it's crafting compelling ad campaigns or publishing engaging content,
          we provide tailored solutions to effectively communicate your message
          and connect with your target audience. Our services include:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Creative Ad Campaigns
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Digital and Print Publishing
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Content Creation and Strategy
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Brand Storytelling
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Social Media Advertising
          </li>
        </ul>
        <p className="mb-6">
          Let us help you drive growth and enhance your brand’s presence across
          all platforms.
        </p>
      </div>

      <ContactBox />
      <Footer />
    </>
  );
}
