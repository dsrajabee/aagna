'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence, filterProps } from 'framer-motion';

import ContactBox from '@/app/components/contactbox';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedImage from '../components/AnimatedImage';
import Header from '../components/header';
import FilterButtons from '../components/FilterButtons';

export default function Works() {
  const [activeFilter, setActiveFilter] = useState('SHOW ALL');

  const works = [
    {
      type: 'LOGO DESIGN',
      image: '/images/Works/logo_works.png',
      title: 'Logo Design',
      link: '/works/logodesigns',
    },
    {
      type: 'BRANDING',
      image: '/images/Works/graphics_works.png',
      title: 'Branding',
      link: '/works/branding',
    },
    {
      type: 'PRINT DESIGN',
      image: '/images/Works/websites.png',
      title: 'Print Design',
      link: '/works/printdesign',
    },
    {
      type: 'PACKAGING DESIGN',
      image: '/images/Works/websites.png',
      title: 'Packaging Design',
      link: '/works/packagingdesigns',
    },
    {
      type: 'SOCIAL MEDIA DESIGN',
      image: '/images/Works/websites.png',
      title: 'Social Media Design',
      link: '/works/socialmedia',
    },
    {
      type: 'POSTER DESIGN',
      image: '/images/Works/websites.png',
      title: 'Poster Design',
      link: '/websites',
    },
    {
      type: '2D ANIMATION',
      image: '/images/Works/websites.png',
      title: '2D Animation',
      link: '/websites',
    },
  ];

  const filteredWorks =
    activeFilter === 'SHOW ALL'
      ? works
      : works.filter((work) => work.type === activeFilter);

  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center justify-center px-6   py-2 bg-black text-white">
        <AnimatedImage />

        <div className="flex justify-center">
          <div className="flex justify-center items-center self-center h-[350px]">
            <div className="text-center">
              <div>
                <h1 className="text-4xl animate-slide font-bold mb-4 text-[#FFC807]">
                  Works
                </h1>
                <p className="text-lg mb-1 font-light text-white">
                  <span className="text-[#FFC807]">Reach</span> your audience.
                  <span className="text-[#FFC807]">Connect</span> your message.{' '}
                </p>
                <p className="text-lg font-light text-white">
                  {' '}
                  <span className="text-[#FFC807]">Inspire </span>an action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-6 mt-6  md:mx-auto md:container text-center  ">
        <FilterButtons
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 place-items-center"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.title}
                layout
                layoutId={work.title}
                className="w-full md:w-96 rounded-2xl overflow-hidden shadow-lg bg-black border border-yellow-400 md:my-24"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  opacity: { duration: 0.3 },
                  layout: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="h-72 bg-cover bg-center"
                  style={{ backgroundImage: `url('${work.image}')` }}
                  layoutId={`image-${work.title}`}
                ></motion.div>
                <motion.div className="p-6" layoutId={`content-${work.title}`}>
                  <Link href={work.link}>
                    <h2 className="text-2xl font-semibold mb-2 text-center text-yellow-400">
                      {work.title}
                    </h2>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <ContactBox />
      <Footer />
    </>
  );
}
