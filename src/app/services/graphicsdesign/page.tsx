import Image from 'next/image';
import Link from 'next/link';
import ContactBox from '../../components/contactbox';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function GraphicsDesign() {
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
                Creative Graphics Design
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

      <div className="container mx-auto mb-6 items-center justify-around w-3/4 mt-16 text-white">
        <p className="pb-4">
          Aagna Creatives is a professional graphic design company that excels
          in delivering standout digital designs tailored to make your business
          shine. Our talented team works efficiently to produce high-quality
          graphics that leave a lasting impression. We offer a broad spectrum of
          creative and visual services, including but not limited to: branding
          and identity, print design, web design, digital design, UI/UX design,
          illustrations, motion graphics, AI-generated visuals, and much more.
        </p>

        <h1 className="text-xl pb-4 divide-y-8 divide-orange-400 divide-dashed">
          Our Graphic Design Company Provides Professional Expertise and
          Top-quality Graphic Design Services
        </h1>

        <ul className="space-y-2">
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            FAST & Creative Graphic Design Services Logo Design to Brand
          </li>

          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Logo Design to Brand Marketing Graphics
          </li>

          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Marketing Graphics Website & Mobile UI/UX Graphic Design Services
          </li>

          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Digital Ads & Social Media Graphic Design Services Marketing & Sales
          </li>

          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Graphic Design Materials
          </li>
        </ul>
      </div>

      <ContactBox />
      <Footer />
    </>
  );
}
