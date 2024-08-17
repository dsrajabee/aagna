import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
      // Style={{  }}
      <div
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        backgroundImage: 'url(/images/cursor.png)',
      }}
      className="fixed w-8 h-8 bg-center bg-no-repeat bg-contain pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-pulseCursor"
    ></div>
  );
};

export default CustomCursor;