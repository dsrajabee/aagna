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

      {/* <div className="container mx-auto flex items-center justify-around w-3/4 mt-16">
        <p className="text-white pb-4">
          Modern and innovative graphic designs that drive customers’ attention.
          Our creative designs are meant to provide your business with the best
          types of uniqueness.
        </p>
      </div>
      <div className="flex container mx-auto w-3/4 mb-16">
        <div className="w-1/2 text-yellow-500">
          <div className="space-y-8 mb-10">
            <ul className="space-y-2">
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Logo design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Stationery design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Web design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                User experience design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Brochures design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Labels design
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 text-white">
          <div className="space-y-8 mb-10">
            <ul className="space-y-2">
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
                Book design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Magazine design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Newsletters design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Advertising designs
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Catalogue design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Packaging designs
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto items-center text-white justify-around w-3/4 mt-16">
        <h1 className="text-xl  text-center divide-y-8 divide-orange-400 divide-dashed ">
          Why should you spend on creative graphic designs?
        </h1>
        <div className="flex my-10 pr-20">
          <div className="w-1/2 space-y-2 ">
            <h2 className="text-md font-semibold text-yellow-500">
              Visual Identity
            </h2>
            <p className="font-normal text-sm">
              Empower your identity familiarity with a constant message
            </p>
          </div>

          <div className="w-1/2 space-y-2">
            <h2 className="text-md font-semibold text-yellow-500">
              Rich message
            </h2>
            <p className="font-normal text-sm">
              Convey your message with one creative design
            </p>
          </div>
        </div>

        <div className="flex my-10 pr-20">
          <div className="w-1/2 space-y-2">
            <h2 className="text-md font-semibold text-yellow-500">
              Proven results
            </h2>
            <p className="font-normal text-sm">
              The real meaning of “One Picture Worth Ten A thousand Words”
            </p>
          </div>

          <div className="w-1/2 space-y-2">
            <h2 className="text-md font-semibold text-yellow-500">
              Cross-platform
            </h2>
            <p className="font-normal text-sm">
              Usable content across all social media platforms and traditional
              marketing.
            </p>
          </div>
        </div>
      </div> */}

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
