import ContactBox from "@/app/components/contactbox";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import Link from "next/link";
import AnimatedImage from "../components/AnimatedImage";
// const Navbar = dynamic(() => import('./components/navbar'), { client: { ssr: false } });

export default function Websites() {
  return (
    <>
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
            <Link href="/" className="text-white">
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
            <Link href="/works" className="text-[#FFC807] font-bold">
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
            <a href="/" className="block text-white">
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
            <a href="/contact" className="block text-[#FFC807] font-bold">
              Contact us
            </a>
          </div>
        </nav>
        {/* )} */}
      </header>
      <div className="relative flex flex-col items-center justify-center  py-2 bg-black text-white">
        <AnimatedImage />

        <div className="flex justify-center">
          <div className="flex justify-center items-center self-center h-[350px]">
            <div className="text-center">
              <div>
                <h1 className="text-4xl animate-slide font-bold mb-4 text-[#FFC807]">
                  Websites
                </h1>
                <p className="text-lg mb-1 font-light text-white">
                  <span className="text-[#FFC807]">Reach</span> your audience.
                  <span className="text-[#FFC807]">Connect</span> your message.{" "}
                </p>
                <p className="text-lg font-light text-white">
                  {" "}
                  <span className="text-[#FFC807]">Inspire </span>an action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="max-w-sm h-min rounded-2xl shadow-lg bg-black  border border-yellow-400 mb-10">
            

            <div className="">
              <Link href="/">
                <Image
                  src="/images/GCC.png"
                  alt="GCC"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                />
              </Link>
            </div>
          </div>

          <div className="max-w-sm  h-min rounded-2xl overflow-hidden shadow-lg bg-black  border border-yellow-400 mb-10">
            <div className=" ">
              <Link href="/">
                <Image
                  src="/images/skipy.png"
                  alt="GCC"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                />
              </Link>
            </div>
          </div>
          <div className="max-w-sm h-min rounded-2xl overflow-hidden shadow-lg bg-black  border border-yellow-400 mb-10">
            <div className="">
              <Link href="/">
                <Image
                  src="/images/spids.png"
                  alt="GCC"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </Link>
            </div>
          </div>
        </div> */}
      </main>


      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="max-w-sm h-min ">
              <Link href="/">
                <Image
                  src="/images/GCC.png"
                  alt="GCC"
                  width={555}
                  height={607}
                  className="rounded-2xl shadow-lg bg-black  border border-yellow-400"
                />
              </Link>
            
          </div>

          <div className="max-w-sm h-min">
              <Link href="/">
                <Image
                  src="/images/skipy.png"
                  alt="GCC"
                  width={555}
                  height={607}
                  className="rounded-2xl shadow-lg bg-black  border border-yellow-400"
                />
              </Link>
            
          </div>

          <div className="max-w-sm h-max">
              <Link href="/">
                <Image
                  src="/images/spids.png"
                  alt="GCC"
                  width={555}
                  height={607}
                  className="rounded-2xl shadow-lg bg-black  border border-yellow-400"
                />
              </Link>
            
          </div>

          
        </div>
      </main>

      <ContactBox />
      <Footer />
    </>
  );
}
