import Image from "next/image";
import Link from "next/link";
import ContactBox from "../components/contactbox";
import Footer from "../components/footer";

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
          src="/videos/graphics_design.mp4"
        />

        <div className="relative z-10 flex flex-col h-screen justify-between text-white">
          <header className="sticky top-0 bg-black text-white z-50 animate-fade-in">
            <div className="container mx-auto flex items-center justify-between p-4">
              <div className="flex items-center">
                <Link href='/'>
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
                <Link href="/" className="text-[#FFC807] font-bold">Home</Link>
                <Link href='/about' className="text-white">About us</Link>
                <Link href="/ourdesign" className="text-white">Our Design Process</Link>
                <Link href="/services" className="text-white">Services</Link>
                <Link href="/works" className="text-white">Works</Link>
                <Link href="/clients" className="text-white">Clients</Link>
                <Link href="/contact" className="text-white">Contact us</Link>
              </nav>
              <div className="md:hidden flex items-center">
                <button className="text-white focus:outline-none">
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
            <nav className="md:hidden bg-gray-800 p-2">
              <div className="flex flex-col space-y-2">
                <Link href="/" className="block text-[#FFC807] font-bold">Home</Link>
                <Link href="/about" className="block text-white">About us</Link>
                <Link href="/ourdesign" className="block text-white">Our Design Process</Link>
                <Link href="/services" className="block text-white">Services</Link>
                <Link href="/works" className="block text-white">Works</Link>
                <Link href="/logo" className="block text-white">Blog</Link>
                <Link href="/contact" className="block text-white">Contact us</Link>
              </div>
            </nav>
          </header>
          <div className="flex justify-center">
            <div className="relative overflow-hidden  border border-black px-20 py-10 rounded-xl">
              <h1 className="text-6xl font-bold text-yellow-500 animate-textSlide ">
                Graphics Design
              </h1>
            </div>
          </div>
          <div className="text-center space-y-2 mb-6">
            <h3 className="text-xl font-normal"></h3>
            <div className="relative overflow-hidden h-[68px]">
              <h1 className="text-6xl font-bold text-[#FFC807] animate-textSlide"></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-around w-3/4 mt-16">
        <p className="text-white pb-4">
        Modern and innovative graphic designs that drive customers’ attention. Our creative designs are meant to provide your business with the best types of uniqueness.
        </p>
      </div>
      <div className="flex container mx-auto w-3/4 mb-16">
        <div className="w-1/2 text-yellow-500">
          <div className='space-y-8 mb-10'>
            <ul className="space-y-2">
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> Logo design</li>
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> Stationery design</li>
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> Web design</li>
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> User experience design</li>
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> Brochures design</li>
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> Labels design</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 text-white">
          <div className='space-y-8 mb-10'>
            <ul className="space-y-2">
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>Book design</li>
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> Magazine design</li>
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> Newsletters design
              </li>
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> Advertising designs</li>
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> Catalogue design</li>
              <li className="flex items-center text-yellow-500 font-light"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span> Packaging designs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto items-center text-white justify-around w-3/4 mt-16">
     <h1 className="text-xl  text-center divide-y-8 divide-orange-400 divide-dashed ">Why should you spend on creative graphic designs?</h1>
      <div className="flex my-10 pr-20">
      <div className="w-1/2 space-y-2 ">
      <h2 className="text-md font-semibold text-yellow-500">Visual Identity</h2>
      <p className="font-normal text-sm">Empower your identity familiarity with a constant message</p></div>
      
      <div className="w-1/2 space-y-2">
      <h2 className="text-md font-semibold text-yellow-500">Rich message</h2>
      <p className="font-normal text-sm">Convey your message with one creative design</p></div></div>

      <div className="flex my-10 pr-20">
      <div className="w-1/2 space-y-2">
      <h2 className="text-md font-semibold text-yellow-500">Proven results</h2>
      <p className="font-normal text-sm">The real meaning of “One Picture Worth Ten A thousand Words”</p></div>
      
      <div className="w-1/2 space-y-2">
      <h2 className="text-md font-semibold text-yellow-500">Cross-platform</h2>
      <p className="font-normal text-sm">Usable content across all social media platforms and traditional marketing.</p></div></div>
      </div>

      <ContactBox />
      <Footer />

    </>
  );
}
