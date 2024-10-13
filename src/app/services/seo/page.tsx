import Image from 'next/image';
import Link from 'next/link';
import ContactBox from '../../components/contactbox';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Seo() {
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
                SEO
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
          Aagna Creatives – Masters of SEO services – brings you the most
          effective SEO strategies to enhance your website’s visibility, attract
          more traffic, and fuel your business growth. Our dedicated SEO
          techniques ensure that your site achieves top rankings on reputable
          search engines like Google, Bing, Baidu, and more, using only ethical
          practices free from black hat tactics
        </p>

        <p>
          We also offer premium white label SEO services to SEO firms, digital
          marketing agencies, and web design agencies looking to expand their
          service offerings without additional overhead costs.
        </p>

        <ul className="list-disc list-inside">
          <li>White Label Partnerships</li>
          <li>Startup Business Partnerships</li>
        </ul>

        <p>Our comprehensive suite of exceptional SEO services encompasses</p>

        <ul className="space-y-2">
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Advanced Website Audit
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Competitor Analysis
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Keyword Research
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            SEO Content Creation
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Search Engine Optimization Execution
          </li>
          <li className="flex items-center text-yellow-500 font-light">
            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
            Monitor Traffic & Rankings
          </li>
        </ul>
      </div>

      <ContactBox />
      <Footer />
    </>
  );
}
