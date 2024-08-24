import Link from 'next/link';

const ContactBox = () => {
  return (
    <div className="bg-yellow-400 py-8 relative px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/ContactUs/contactbg.png')" }}
      >
        {/* Overlay to maintain yellow color and opacity */}
        <div className="absolute inset-0 bg-yellow-400 opacity-75 z-10"></div>
      </div>

      {/* Content with animation */}
      <div className="container relative mx-auto flex items-center text-black justify-center z-20 animate-slide-horizontal">
        <div className="rounded-lg flex">
          <h2 className="text-3xl font-bold">Talk to us Now!</h2>
          <Link href="/contact">
            <button className="block text-center border text-black border-black py-2 px-8 ml-10 rounded-md hover:bg-yellow-600 transition-colors duration-300">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
