import Image from "next/image";
import Link from "next/link";
import ContactBox from "../components/contactbox";
import Footer from "../components/footer";

export default function Home() {
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
          <header className="sticky top-0 z-50 text-white bg-black animate-fade-in">
            <div className="container mx-auto flex items-center justify-between p-4">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={150}
                    height={120}
                    className="rounded-lg"
                  />
                </Link>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-[#FFC807] font-bold">
                  Home
                </Link>

                {/* <Link href="/about">About us</Link> */}
                <Link href="/about" className="text-white">
                  About us
                </Link>
                <Link href="/ourdesign" className="text-white">
                  Our Design Process
                </Link>
                <Link href="/services" className="text-white">
                  Services
                </Link>
                <Link href="/works" className="text-white">
                  Works
                </Link>
                <Link href="/clients" className="text-white">
                  Clients
                </Link>
                <Link href="/contact" className="text-white">
                  Contact us
                </Link>
              </nav>
              <div className="md:hidden flex items-center">
                <button
                  className="text-white focus:outline-none"
                  // onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* {isOpen && ( */}
            <nav className="md:hidden bg-gray-800 p-2">
              <div className="flex flex-col space-y-2">
                <a href="/" className="block text-[#FFC807] font-bold">
                  Home
                </a>
                <a href="/about" className="block text-white">
                  About us
                </a>
                <a href="/ourdesign" className="block text-white">
                  Our Design Process
                </a>
                <a href="/services" className="block text-white">
                  Services
                </a>
                <a href="/works" className="block text-white">
                  Works
                </a>
                <a href="/clients" className="block text-white">
                  Clients
                </a>
                <a href="/contact" className="block text-white">
                  Contact us
                </a>
              </div>
            </nav>
            {/* )} */}
          </header>
          <div className="flex justify-center">
            <div className="relative overflow-hidden bg-[#0202023d] border border-black px-20 py-10 rounded-xl">
              <h1 className="text-6xl font-bold text-yellow-500   animate-textSlide">
                Branding
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
        <p className="text-white pb-4 ">
          A Logo is a design symbolizing one’s organization. It is a design that
          is used by an organization for its letterhead, advertising material,
          and signs as an emblem by which the organization can easily be
          recognized also called logotype. A logotype is a graphic
          representation or symbol of a company name, trademark, abbreviation,
          etc., often uniquely designed for ready recognition.
        </p>
      </div>
      <div className="flex container mx-auto w-3/4 mb-16">
        <div className="w-1/2 text-yellow-500">
          <div className="space-y-8 mb-10">
            <ul className="space-y-2">
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
                Business, product, or service name selection
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Developing brand identity usage guidelines
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Brand messaging statements
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Brand marketing and promotion strategy
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Developing marketing collaterals
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Presentation design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Customer persona development
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Logo design
              </li>
            </ul>{" "}
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
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Vision and mission statements
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Packaging and product design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Brand marketing and promotion strategy
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Website design and development
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Email and landing page design
              </li>
              <li className="flex items-center text-yellow-500 font-light">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{" "}
                Employee communication and messaging
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>

      <ContactBox />
      <Footer />
    </>
  );
}
