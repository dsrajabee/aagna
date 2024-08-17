import Image from 'next/image';
import Link from 'next/link';

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
          src="/videos/background_bg.mp4"
        />

        <div className="relative z-10 flex flex-col h-screen justify-between text-white">
          <header className=" text-white animate-fade-in">
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
            {/* <Image
                src="/images/logo.png"
                alt="Logo"
                width={350}
                height={50}
                className="rounded-lg"
            /> */}
          </div>

          <div className="text-center space-y-2 mb-6">
            <h3 className="text-xl font-normal">Welcome to</h3>
            {/* <div className="flex justify-center"><Image
                src="/images/logo.png"
                alt="Logo"
                width={350}
                height={50}
                className="rounded-lg"
            /></div> */}
            <div className="relative overflow-hidden h-[68px]">
              <h1 className="text-6xl font-bold text-[#FFC807]  animate-textSlide">
                aagna Creatives
              </h1>
            </div>
            <h3 className="text-xl font-normal pt-1">
              Transforming Ideas into a Multiverse of Creative Possibilities
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
