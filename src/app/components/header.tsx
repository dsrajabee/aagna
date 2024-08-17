import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={150}
          height={50}
          className="rounded-lg"
        />
        <h1 className="text-white ml-4">My Website</h1>
      </div>
      <nav className="space-x-4">
        <a href="/" className="text-white">
          Home
        </a>
        <a href="/about" className="text-white">
          About us
        </a>
        <a href="/ourdesign" className="text-white">
          Our Design Process
        </a>
        <a href="/services" className="text-white">
          Services
        </a>
        <a href="/works" className="text-white">
          Works
        </a>
        <a href="/blog" className="text-white">
          Blog
        </a>
        <a href="/contact" className="text-white">
          Contact us
        </a>
      </nav>
    </header>
  );
};

export default Header;
