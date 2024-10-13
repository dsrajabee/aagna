import Image from 'next/image';
import Link from 'next/link';
import ContactBox from '../../components/contactbox';
import Footer from '../../components/footer';
import Header from '../../components/header';

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
          <Header />
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

      <div className="container mx-auto pb-4 text-white items-center justify-around w-3/4 mt-16">
        <h1 className="text-2xl font-normal mb-2">Our Step-By-Step Process</h1>
        <p className="text-white pb-4 ">
          By creating a strong identity, your company stands out as one of a
          kind. If your products and services offer something of value to
          consumers, your brand communicates why they should buy your product
          instead of your competitor&apos;s. Our process for helping you create
          a meaningful brand identity and experience includes the following
          steps:
        </p>

        <div className="mb-3">
          <h2 className="text-xl font-semibold text-yellow-500 mt-4 mb-1">
            1. Strategy Planning
          </h2>
          <p>
            We get to know your business, your industry and your audience. We
            research the current marketplace to determine how best to reach your
            audience and make your brand more appealing.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-xl font-semibold text-yellow-500 mt-4 mb-1">
            2.Brand Identity
          </h2>
          <p>
            Whether you are establishing your brand identity for the first time
            or rebranding, we bring all the elements together to build a brand
            that helps you carve your space in the market. Our team can design
            your logo, write your tagline and refine your mission, voice and
            vision. We develop a unique selling proposition that connects with
            consumers.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-xl font-semibold text-yellow-500 mt-4 mb-1">
            3.Marketing Strategy
          </h2>
          <p>
            Part of our marketing strategy includes helping your audience
            identify your brand. We use your logo, tagline and message in all
            hard-copy and digital marketing collateral. Wherever you go - your
            website, social media, print ads, etc. - your brand will be the
            first thing that people recognize. This solidifies your position in
            the marketplace.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-xl font-semibold text-yellow-500 mt-4 mb-1">
            4.Brand Development
          </h2>
          <p>
            After we lay the groundwork for establishing your brand, we continue
            to develop your business image by updating your website, launching
            new marketing campaigns and creating media that supports your
            efforts. We provide whatever resources you need for promotions and
            events, setting you up for success before, during and after each
            campaign.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-xl font-semibold text-yellow-500 mt-4 mb-1">
            5.Marketing Campaign Launches
          </h2>
          <p>
            Regardless of how much strategy you put into marketing your brand,
            every campaign&apos;s execution must be as effective as the
            planning. We look at every detail to ensure that every launch is
            successful by providing you with the brand materials and support you
            need.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-xl font-semibold text-yellow-500 mt-4 mb-1">
            6.Assess and Relaunch
          </h2>
          <p>
            Even the most perfectly executed brand launches have room for
            growth. We set up tracking to determine the return on investment
            (ROI) of your marketing materials and website. Our team meets
            monthly to look at the latest reports and discuss current metrics
            and further plans for ongoing marketing.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-xl font-semibold text-yellow-500 mt-4 mb-1">
            7.Account and Project Management
          </h2>
          <p>
            When it comes to managing your brand, the sun never sets. We are
            always looking to the horizon for the next great idea while your
            current marketing initiatives are being carried out. Ongoing
            management helps us identify small issues and adjust as we go
            instead of losing time trying to fix big problems or start over.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-xl font-semibold text-yellow-500 mt-4 mb-1"></h2>
          <p></p>
        </div>
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

      <ContactBox />
      <Footer />
    </>
  );
}
