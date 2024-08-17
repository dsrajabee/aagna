import ContactBox from "@/app/components/contactbox";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import Link from "next/link";
import useClient from "next/client";
import dynamic from "next/dynamic";
import AnimatedImage from "../components/AnimatedImage";
import Card from "../components/cards";
// const Navbar = dynamic(() => import('./components/navbar'), { client: { ssr: false } });

export default function Services() {
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
            <Link href="/services" className="text-[#FFC807] font-bold">
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
        {/* <AnimatedImage /> */}

        <div className="relative w-full overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-10 h-10 bg-yellow-500 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}

          <div className="flex justify-center">
            <div className="flex justify-center items-center self-center h-[350px]">
              <div className="text-center">
                <div>
                  <h1 className="text-4xl animate-slide font-bold mb-4 text-[#FFC807]">
                    Our Services
                  </h1>
                  <p className="text-lg mb-1 font-light text-white">
                    Best solution for the{" "}
                    <span className="text-[#FFC807] italic ">dreams </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/branding"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            {" "}
            <Card
              image="/images/Services/branding1.png"
              title="Brand"
              description="A Logo is a design symbolizing one's organization. It is a design..."
              link=""
            />
          </a>
          <a
            href="/graphicsdesign"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            <Card
              image="/images/Services/graphics_design.png"
              title="Graphics Design"
              description="Modern and innovative graphic designs that drive customers' attention ...."
              link="#"
            />
          </a>
          <a
            href="/"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            <Card
              image="/images/Services/adver.png"
              title=" Ads & Publishing"
              description="An innovation-based comprehensive set of services and solutions to help..."
              link="#"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            <Card
              image="/images/Services/Websitedesign.png"
              title="Web Design & Dev"
              description="Empower your brand and enrich your user’s experience with a highly..."
              link=""
            />
          </a>
          <a
            href="/"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            <Card
              image="/images/Services/seo.png"
              title="SEO"
              description="Prove your brand name and stand out from the competition on the search ...."
              link="#"
            />
          </a>
          <a
            href="/"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            <Card
              image="/images/Services/marketing.png"
              title="Marketing Strat"
              description="An innovation-based comprehensive set of services and solutions to help..."
              link="#"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            {" "}
            <Card
              image="/images/Services/social.png"
              title="Social Media Mktg"
              description="Gain website traffic, gather attention and promote your marketing effort..."
              link=""
            />
          </a>
          <a
            href="/"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            <Card
              image="/images/Services/video_animation.png"
              title="Video & Anim"
              description="Convey a rich message and catch your audience’s attention with ...."
              link="#"
            />
          </a>
          <a
            href="/"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            <Card
              image="/images/Services/email.png"
              title="Email Mktg"
              description="Carry out your digital promotions and marketing campaigns through highly..."
              link="#"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/"
            className="transform transition-transform duration-500 hover:scale-110"
          >
           
            <Card
              image="/images/Services/sms.png"
              title="SMS Mktg"
              description="Reach out to your customers, potential customers, or any other contact ..."
              link=""
            />
          </a>
          <a
            href="/"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            <Card
              image="/images/Services/whatsapp.png"
              title="Whatsapp Mktg"
              description="WhatsApp is the most popular alternative to SMS in 109 countries ...."
              link="#"
            />
          </a>
          <a
            href="/"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            <Card
              image="/images/Services/photography.png"
              title="Photo"
              description="We take photos that are worth a thousand words as we catch the..."
              link="#"
            />
          </a>
        </div>
      </main>

      <ContactBox />
      <Footer />
    </>
  );
}
