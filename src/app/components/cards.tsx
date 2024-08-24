// components/Card.tsx
import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, link }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-black  border border-yellow-400 my-14">
      <div
        className="h-48 bg-cover bg-center "
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-center capitalize text-yellow-400">
          {title}
        </h2>
        <p className="text-white text-base text-left mb-4">{description}</p>
        <a
          href={''}
          className=" text-right py-2 text-sm font-medium leading-6 text-right text-yellow-400 rounded-full hover:text-white focus:outline-none"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
