import ContactBox from '@/app/components/contactbox';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedImage from '../components/AnimatedImage';
import Header from '../components/header';

export default function Ourdesign() {
  // useClient();
  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center justify-center  py-2 bg-black text-white">
        <AnimatedImage />

        <div className="flex justify-center">
          <div className="flex justify-center items-center self-center h-[350px]">
            <div className="text-center">
              <div>
                <h1 className="text-4xl font-light mb-4 animate-slide">
                  The work of <span className="text-[#FFC807]">art</span> is
                  above all
                  <br />a process of creation
                </h1>
                <p className="text-md mb-1 font-light text-white">
                  Our focus is on solving business challenges with cutting-edge
                  solutions that amaze users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex container mx-auto gap-8 mt-20 mb-20 space-y-20 w-3/4 animate-slide-up"> */}
      <div className="flex container mx-auto gap-8 mt-20 mb-20 space-y-20 w-3/4 ">
        <div className="bg-black  text-white flex flex-col items-center justify-center">
          <h1 className="text-2xl font-light mb-20 text-yellow-500 mt-20 border-b-2 border-yellow-500 pb-2 ">
            Discovery
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8 ">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <p className="text-md mb-4">
                The first people you will meet are our experts in business, UX
                and technology. They dig into your business, discuss the scope
                of the challenge and consult on the most suitable technological
                solutions.
              </p>
              <div className="">
                <ul className="space-y-2">
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Workshop
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Concept
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Consulting
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Research
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Project Planning
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Expectation Setting
                  </li>
                </ul>{' '}
              </div>
            </div>
            {/* <div className="lg:w-1/2 animate-zoom"> */}
            <div className="lg:w-1/2 animate-zoom">
              <Image
                src="/images/OurDesign/deliveryy.png"
                alt="Discovery Image"
                layout="responsive"
                width={300}
                height={275}
                className="rounded-xl w-full bg-gradient-to-r from-black via-orange-500 to-yellow-500 rounded-md p-0.5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex container mx-auto gap-8 mt-20 mb-20 space-y-20 w-3/4 ">
        <div className="bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-2xl font-light mb-20 text-yellow-500 mt-20 border-b-2 border-yellow-500 pb-2 ">
            Strategy
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8 ">
            <div className="lg:w-1/2 animate-zoom">
              <Image
                src="/images/OurDesign/Strategy.png"
                alt="strategy Image"
                layout="responsive"
                width={300}
                height={275}
                className="rounded-xl w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-black rounded-md p-0.5"
              />
            </div>
            <div className="mb-8 lg:mb-0 lg:w-1/2 pl-16">
              <p className="text-md mb-4">
                This is where we validate your future users and define the
                project backbone. It consists of a working plan in which the
                users’ needs are met with a solution that fulfils the business
                goals.
              </p>
              <div className="">
                <ul className="space-y-2">
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Persona Development
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Brand Personallization
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Digital Strategy
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Stakeholder Alignment
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Information Architecture
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Prototyping
                  </li>
                </ul>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex container mx-auto gap-8 mt-20 mb-20 space-y-20 w-3/4 ">
        <div className="bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-2xl font-light mb-20 text-yellow-500 mt-20 border-b-2 border-yellow-500 pb-2 ">
            Design
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8 ">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <p className="text-md mb-4">
                The user is the foundation on which we build all of the visual
                communication. It is intuitive, attractive and easy to use on
                any platform, to ensure an impressive experience in the
                interaction between the brand and the user.
              </p>
              <div className="">
                <ul className="space-y-2">
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Art Direction
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Visual Moodbards
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Content Creation
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Digital Identity
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    UI Design
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Interaction Design
                  </li>
                </ul>{' '}
              </div>
            </div>
            <div className="lg:w-1/2 animate-zoom">
              <Image
                src="/images/OurDesign/design.png"
                alt="Design Image"
                layout="responsive"
                width={300}
                height={275}
                className="rounded-xl w-full bg-gradient-to-r from-black via-orange-500 to-yellow-500 rounded-md p-0.5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex container mx-auto gap-8 mt-20 mb-20 space-y-20 w-3/4 ">
        <div className="bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-2xl font-light mb-20 text-yellow-500 mt-20 border-b-2 border-yellow-500 pb-2 ">
            Development
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8 ">
            <div className="lg:w-1/2 animate-zoom">
              <Image
                src="/images/OurDesign/Development.png"
                alt="Development Image"
                layout="responsive"
                width={300}
                height={275}
                className="rounded-xl w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-black rounded-md p-0.5"
              />
            </div>
            <div className="mb-8 lg:mb-0 lg:w-1/2 pl-16">
              <p className="text-md mb-4">
                Our code crafters plan for progressive solutions placed on the
                right platforms to enhance the user experience. They focus on
                building top-quality, high-performing custom solutions that are
                easily scalable.
              </p>
              <div className="">
                <ul className="space-y-2">
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Web Development
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Back-End & Front End
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Physical Installation
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Mobile Development
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 t w-2 h-2 rounded-full mr-2"></span>{' '}
                    CMS Integration
                  </li>
                </ul>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex container mx-auto gap-8 mt-20 mb-20 space-y-20 w-3/4  mb-48">
        <div className="bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-2xl font-light mb-20 text-yellow-500 mt-20 border-b-2 border-yellow-500 pb-2 ">
            Testing
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <p className="text-md mb-4">
                Although we conduct a variety of tests throughout each phase,
                the big moment our testers shine in is when we produce a
                specific part of the project that needs a true user experience.
              </p>
              <div className="">
                <ul className="space-y-2">
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Usability Testing
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    System Testing
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Security Testing
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Functional Testing
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Performance Testing
                  </li>
                  <li className="flex items-center text-yellow-500 font-light">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>{' '}
                    Integration Testing
                  </li>
                </ul>{' '}
              </div>
            </div>
            <div className="lg:w-1/2 animate-zoom">
              <Image
                src="/images/OurDesign/Testing.png"
                alt="Testing Image"
                layout="responsive"
                width={300}
                height={275}
                className="rounded-xl w-full bg-gradient-to-r from-black via-orange-500 to-yellow-500 rounded-md p-0.5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-900 py-6 font-sans sm:py-12">
  <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

  <div className="mx-auto flex w-full max-w-lg items-center justify-center">
    <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
      <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
      <div className="relative z-20 flex w-full rounded-[0.60rem] bg-slate-900 p-2">
        <input type="text" className="mr-2 inline-block h-full flex-1 rounded-lg bg-transparent px-2 py-3 text-gray-500 placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-cyan-500" placeholder="subscribe to our newsletter" />

        <span className="relative z-50 block rounded-lg border border-slate-800 bg-slate-900 px-8 py-3 text-center text-sm text-white shadow-2xl transition duration-200 hover:bg-slate-800"> Subscribe </span>
      </div>
    </div>
  </div>
</div> */}

      <ContactBox />
      <Footer />
    </>
  );
}
