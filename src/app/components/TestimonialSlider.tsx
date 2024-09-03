import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: 'My 3 years of association with Aagna Creatives has been very fruitful. The best I liked about them is the response time, which is phenomenal. Please don&apos;t contact them if your requirement is for an ordinary job, they are specialized in high quality jobs only.',
    author: 'Mr. Praveen Daga (Founder and CEO of KC eatos)',
  },
  {
    text: 'Working with Aagna Creatives transformed our online presence. Their creative designs and attention to detail exceeded our expectations. They truly understand how to capture a brand&apos;s essence and translate it into stunning visuals.',
    author: 'Ms. Sarah Johnson (Marketing Director, TechInnovate)',
  },
  {
    text: 'The team at Aagna Creatives is simply outstanding. Their ability to deliver high-quality work consistently and on time is remarkable. They&apos;ve become an integral part of our marketing strategy, and I couldn&apos;t recommend them more highly.',
    author: 'Mr. Alex Chen (CEO, GlobalTech Solutions)',
  },
  {
    text: 'I was impressed by Aagna Creatives&apos; professionalism and creativity. They took our vague ideas and turned them into a cohesive, beautiful brand identity. Their work has significantly improved our customer engagement and brand recognition.',
    author: 'Dr. Emily Rodriguez (Founder, EcoHealth Initiatives)',
  },
  {
    text: 'Aagna Creatives&apos; expertise in digital marketing is unparalleled. They not only designed our website but also provided valuable insights that boosted our online sales. Their holistic approach to digital presence is refreshing and effective.',
    author: 'Mr. David Thompson (COO, FutureFit Apparel)',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto my-12 p-6 bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
          <p className="text-yellow-400">
            - {testimonials[currentIndex].author}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-8 h-1 mx-1 ${
              index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'
            } transition-all duration-300 ease-in-out`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
