import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import ContactBox from "../components/contactbox";
import Layout from "../components/Layout";

export default function Logo() {




  
  return (
   <>
   {/* <h1>welcom</h1>
   <Link href='/about' >About</Link>
   <Link href='/contact' >contact</Link> */}



<div className="relative flex flex-col h-screen justify-between">
    {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/contact_bg.mp4"
    /> */}
    
    <div className="relative z-10 flex flex-col h-screen justify-between text-white">
        {/* <header className="container mx-auto flex items-center justify-around p-4">
            <div className="flex items-center">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={150}
                    height={120}
                    className="rounded-lg"
                />
            </div>
            <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-[#FFC807] font-bold">Home</Link>
          <Link href="/about" className="text-white">About us</Link>
          <Link href="/ourdesign" className="text-white">Our Design Process</Link>
          <Link href="/services" className="text-white">Services</Link>
          <Link href="/works" className="text-white">Works</Link>
          <Link href="/blog" className="text-white">Blog</Link>
          <Link href="/contact" className="text-white">Contact us</Link>
        </nav>
        </header> */}
        

        <header className=" text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
        <Link href='/'><Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={120}
            className="rounded-lg"
          /></Link> 
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white">Home</Link>
         
          {/* <Link href="/about">About us</Link> */}
          <Link href='/about' className="text-white">About us</Link>
          <Link href="/ourdesign" className="text-white">Our Design Process</Link>
          <Link href="/services" className="text-white">Services</Link>
          <Link href="/works" className="text-[#FFC807] font-bold">Works</Link>
          <Link href="/clients" className="text-white">Clients</Link>
          <Link href="/contact" className="text-white">Contact us</Link>
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
            <a href="/" className="block text-white">Home</a>
            <a href="/about" className="block text-white">About us</a>
            <a href="/ourdesign" className="block text-white">Our Design Process</a>
            <a href="/services" className="block text-white">Services</a>
            <a href="/works" className="block text-white">Works</a>
            <a href="/clients" className="block text-white">Clients</a>
            <a href="/contact" className="block text-[#FFC807] font-bold">Contact us</a>
          </div>
        </nav>
      {/* )} */}
    </header> 
        <div className="flex justify-center">
        <div className="flex justify-center items-center self-center h-[350px]">
   <div className="text-center">
      <div >
         <h1 className="text-4xl font-bold mb-4 text-[#FFC807]">Works</h1>
         <p className="text-lg mb-1 font-light text-white"><span className="text-[#FFC807]">Reach</span> your audience.<span className="text-[#FFC807]">Connect</span>  your message. </p>
         <p className="text-lg font-light text-white"> <span className="text-[#FFC807]">Inspire </span>an action.</p>
      </div>
   </div>
</div>
        </div>
        
       
<div className="flex container mx-auto gap-8 mt-20 mb-20 space-y-20">


<Layout>
      <h1 className="text-4xl font-bold mb-8">All</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/social-media">
          <a className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow relative">
            <Image src="/images/social-media.jpg" alt="Social Media" layout="fill" objectFit="cover" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center rounded-b-lg">Social Media</div>
          </a>
        </Link>
        <Link href="/logo">
          <a className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow relative">
            <Image src="/images/logo.jpg" alt="Logo" layout="fill" objectFit="cover" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center rounded-b-lg">Logo</div>
          </a>
        </Link>
        <Link href="/website-ux-designs">
          <a className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow relative">
            <Image src="/images/website-ux-designs.jpg" alt="Website UX Designs" layout="fill" objectFit="cover" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center rounded-b-lg">Website UX Designs</div>
          </a>
        </Link>
      </div>
    </Layout>
</div>



<ContactBox />

<Footer />
    </div>
</div> 

   </>
  );
}
