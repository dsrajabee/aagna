import Image from 'next/image';
import Link from 'next/link';
import ContactBox from '../../components/contactbox';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Socialmediamarketing() {
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
                Social Media marketing
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

      <div className="container mx-auto pb-4 text-white items-center justify-around w-3/4 my-16 space-y-4">
        <p className="">
          Increasing website traffic, strengthening brand presence, expanding
          visibility, and sharing ideas through platforms like Facebook,
          Twitter, LinkedIn, YouTube, Pinterest, and other popular social media
          networks is crucial for the growth of online businesses today. Social
          Media Marketing is the strategic process of promoting or optimizing a
          website and its brand across these digital channels to drive
          engagement and success
        </p>

        <p>
          Connect with your target audience by establishing a strong presence
          across multiple social media platforms. Effective social media
          marketing campaigns not only engage users but also increase the number
          of backlinks to your website, ultimately boosting your search engine
          rankings.
        </p>

        <p>
          Aagna Creatives brings innovative strategies to attract customers,
          harnessing the power of integrated social media marketing channels. We
          focus on connecting you with the right audience—those who will drive
          quality sales and leads for your business. Our team designs dynamic,
          concept-driven social media profiles that are tailored to enhance your
          websites visibility and grow your online presence
        </p>

        <p>
          Social Media Marketing Campaigns are additional support for your
          online marketing that boost up your sales and business along with
          traditional advertising and marketing methodsAagna Creatives has
          offered major Social Media Marketing campaigns for companies ranging
          from start-ups to huge enterprises.
        </p>

        <p>
          Social Media Marketing Campaigns provide valuable support to your
          online marketing efforts, enhancing your sales and business growth
          alongside traditional advertising and marketing strategies. Aagna
          Creatives has successfully launched impactful social media campaigns
          for businesses of all sizes, from start-ups to large enterprises.
        </p>
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
