import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Contact() {
  return (
    <>
      <div className="relative flex flex-col h-screen justify-between">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/contact_bg.mp4"
        />
        <div className="relative z-10 flex flex-col h-screen justify-between text-white">
          <Header />
          <div className="flex justify-center">
            <div className="flex justify-center items-center self-center h-[350px]">
              <div className="text-center">
                <div>
                  <h1 className="text-4xl animate-slide font-bold mb-4 text-[#FFC807]">
                    Let us Connect
                  </h1>
                  <p className="text-lg mb-1 font-light text-white">
                    <span className="text-[#FFC807]">Reach</span> your audience.
                    <span className="text-[#FFC807]">Connect</span> your
                    message.{' '}
                  </p>
                  <p className="text-lg font-light text-white">
                    {' '}
                    <span className="text-[#FFC807]">Inspire </span>an action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 mb-8 flex-col md:flex-row ">
            <div className="text-white text-center bg-[#3D3D3D] md:w-1/3 py-10">
              <p className="mb-6 text-lg">Madurai Office</p>
              <span className="font-extralight">
                64C/1, 3rd Floor,
                <br />
                Sri Ram Complex, <br />
                Iyer Bungalow, Madurai, <br />
                Tamil Nadu - 625014.
              </span>
            </div>

            <div className=" text-center bg-[#FFC807] text-black md:w-1/3 py-10">
              <p className="mb-6 text-lg font-semibold">Sivakasi Office</p>
              <span className=" text-black">
                110i, Velayutham Road,
                <br />
                Parasakthi Colony,
                <br />
                Sivakasi, <br />
                Tamil Nadu - 626123
              </span>
            </div>
            <div className="text-white text-center bg-[#3D3D3D] md:w-1/3 py-10">
              <span className="flex justify-center">
                <Image
                  src="/images/ContactUs/phone.png"
                  alt="Logo"
                  width={40}
                  height={30}
                  className="rounded-lg text-center"
                />
              </span>
              <span className="font-extralight mt-3">+91 8608605996</span>

              <span className="flex justify-center pt-4">
                <Image
                  src="/images/ContactUs/mail.png"
                  alt="Logo"
                  width={40}
                  height={30}
                  className="rounded-lg text-center"
                />
              </span>
              <span className="font-extralight mt-3">
                info@aagnacreatives.com
              </span>
              <p className="font-extralight mt-3">aagnacreatives@gmail.com</p>
            </div>
          </div>

          <form className="flex justify-center py-6">
            <div className=" px-10 py-6 w-full max-w-2xl bg-black rounded-lg shadow-lg text-white">
              <h2 className="text-lg font-medium text-center mb-12">
                Contact Information
              </h2>

              <div className="flex flex-col md:flex-row">
                <div className="mb-4 w-full md:w-1/2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="block w-full mt-1 text-[#ffc807] bg-black border-b px-4 py-2 border-[#616060] shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                  />
                </div>

                <div className="mb-4 w-full md:w-1/2 md:ml-8">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full bg-black text-[#ffc807] border-b px-4 mt-1 py-2 border-[#616060] shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="mb-4 w-full md:w-1/2">
                  <label htmlFor="mobile" className="block text-sm font-medium">
                    Mobile *
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="number"
                    autoComplete="mobile"
                    className="block w-full bg-black text-[#ffc807] border-b px-4 mt-1 py-2  border-[#616060] shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                  />
                </div>

                <div className="mb-4 w-full md:w-1/2 md:ml-8">
                  <label
                    htmlFor="Services"
                    className="block text-sm font-medium"
                  >
                    Services looking for
                  </label>
                  <input
                    id="Services"
                    name="Services"
                    type="text"
                    autoComplete="Services"
                    className="block w-full mt-1 py-2 text-[#ffc807] bg-black border-b px-4 border-[#616060] shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="block w-full mt-1 pt-2 text-[#ffc807] bg-black border-b px-4 border-[#616060] shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                ></textarea>
              </div>
              <div className="flex justify-center pt-3">
                <button
                  type="submit"
                  className="w-24 bg-yellow-400 text-black py-2 px-4 text-center rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="">
            <div className="mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.6243800635883!2d77.79411016948724!3d9.463208822268175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf0212913d83%3A0x356d2926b03afb82!2sAagna%20Creatives!5e1!3m2!1sen!2sin!4v1721714870189!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
