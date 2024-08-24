'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsClick(!isClick);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Our Design Process', href: '/ourdesign' },
    { name: 'Services', href: '/services' },
    { name: 'Works', href: '/works' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact us', href: '/contact' },
  ];

  return (
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
          {navLinks.map((link, i) => {
            const isActive = pathName === link.href;
            return (
              <Link
                href={link.href}
                key={i}
                className={
                  isActive
                    ? 'block py-2.5 font-bold text-yellow-500'
                    : 'block py-2.5'
                }
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
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
      {isClick && (
        <nav className="md:hidden bg-gray-800 py-4 px-7">
          <div className="flex flex-col">
            {navLinks.map((link, i) => {
              const isActive = pathName === link.href;
              return (
                <Link
                  href={link.href}
                  key={i}
                  className={
                    isActive
                      ? 'block py-2.5 font-bold text-yellow-500'
                      : 'block py-2.5'
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
