import Image from 'next/image';
import Link from 'next/link';
import ContactBox from '../../components/contactbox';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function BusinessConsulting() {
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
                Business Consulting
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

      <div className="container mx-auto flex items-center justify-around w-3/4 mt-16">
        <h1 className="text-white pb-4 ">
          Our Business Consulting Services address a company's end-to-end
          business needs. We provide comprehensive services to support your
          business to drive people, process and technology considerations.
        </h1>
      </div>
      {/* <div className="flex container mx-auto w-3/4 mb-16">
        <div className="w-1/2 text-yellow-500">
          <div className="space-y-8 mb-10">
            <ul className="space-y-2">
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
                Business, product, or service name selection
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Developing brand identity usage guidelines
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Brand messaging statements
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Brand marketing and promotion strategy
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Developing marketing collaterals
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Presentation design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Customer persona development
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Logo design
              </li>
            </ul>{' '}
          </div>
        </div>
        <div className="w-1/2 text-white">
          <div className="space-y-8 mb-10">
            <ul className="space-y-2">
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
                Brochure and stationery design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Vision and mission statements
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Packaging and product design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Brand marketing and promotion strategy
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Website design and development
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Email and landing page design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                Employee communication and messaging
              </li>
            </ul>{' '}
          </div>
        </div>
      </div> */}
      <div className=" container mx-auto w-3/4 mb-16 text-white">
        <h2 className="text-xl font-semibold text-yellow-500 mb-1">
          Our mission
        </h2>
        <p className="mb-4">
          Our mission is to provide comprehensive business consulting services
          that address a company's end-to-end business needs. We aim to support
          your business by driving people, process, and technology
          considerations.
        </p>
        <p className="mb-4">
          To transform and enable clients for the sustainable growth Guiding
          Principles(Core Values)
        </p>
        <ul className="space-y-2">
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Integrity - We do what is right?
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
            Respect - We treat everyone with respect and dignity
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
            Innovation - We bring fresh ideas and out of the box solutions
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
            Consistency - We bring standardisation and execute with disciplined
            manner
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
            Reliability - We are trusted partners for our employees and clients
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-yellow-500 mt-4 mb-1">
          Vision
        </h2>
        <p>
          To enable our clients to attain sustainable and profitable growth by
          deploying disciplined strategic and operational transformation
          activities and safeguarding the wealth and health of the client's
          organization.
        </p>
      </div>

      <ContactBox />
      <Footer />
    </>
  );
}
