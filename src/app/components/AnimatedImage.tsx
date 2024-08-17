import Image from 'next/image';
import React from 'react';

const AnimatedImage = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-96 overflow-hidden z-0">
      <div className="relative w-full h-full animate-moveRightToLeft">
        {/* <Image
          src="/images/bg_light.png"
          alt="Animated"
          layout="fill"
          objectFit="contain"
          className="w-full"
        /> */}

        <img src="/images/bg_light.png" className="w-full" />
      </div>
    </div>
  );
};

export default AnimatedImage;
