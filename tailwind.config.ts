import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        hammersmith: ["Hammersmith One", 'sans-serif'],
        montserrat_alternates: ["Montserrat Alternates", 'sans-serif'],

      },
      keyframes: {
        moveRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        textPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        textSlide: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '5%': { transform: 'translateX(-5%)' },
        },
        slideVertical: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        gradientBorder: {
          '0%': { 'border-image-source': 'linear-gradient(45deg, #FFC807, #FF6F00)' },
          '100%': { 'border-image-source': 'linear-gradient(45deg, #FF6F00, #FFC807)' },
        },
        pulseCursor: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },

        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        slideHorizontal: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50%)' },
          '75%': { transform: 'translateX(-50%)' },
        },
      //   colors: {
      //   'custom-orange-30': 'rgba(254, 158, 0, 0.3)',
      // },
      },
      animation: {
        moveRightToLeft: 'moveRightToLeft 5s linear infinite',
        textPulse: 'textPulse 2s ease-in-out infinite',
        // textSlide: 'textSlide 5s ease-out infinite',
        textSlide: 'textSlide 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
        slide: 'slide 10s linear infinite',
        slideVertical: 'slide-vertical 10s linear infinite',
        zoom: 'zoom 15s ease-in-out infinite',
        slideHorizontal: 'slide-horizontal 4s ease-in-out infinite',

        gradientBorder: 'gradientBorder 3s linear infinite',
        pulseCursor: 'pulseCursor 1s infinite',
        spinSlow: 'spin 3s linear infinite',
        bounceSlow: 'bounce 2s infinite',
      },
      cursor: {
        pointer: 'url(/images/cursor.png), pointer', // Customize the path and fallback cursor
      },
      borderImage: {
        'gradient-yellow': 'linear-gradient(45deg, #FFC807, #FF6F00)',
      },
      // animation: {
      //   rotate: 'rotate 10s linear infinite',
      // },
      // animation: {
      //   "spin-slow": 'spin 3s linear infinite',
      //   },
      // keyframes: {
      //   rotate: {
      //     '0%': { transform: 'rotate(0deg) scale(10)' },
      //     '100%': { transform: 'rotate(-360deg) scale(10)' },
      //   },
      // },
    },
  },
  plugins: [],
};
export default config;
