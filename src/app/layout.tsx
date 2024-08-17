import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Aladin } from "next/font/google";
// import  Nicole_Fally  from "next/font/google";
import "./globals.css";
// import CustomCursor from "./components/customcursor";

// const inter = Inter({ subsets: ["latin"] });

// const nicoMoji = Nicole_Fally({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-nico-moji',
//   weight: ['400', '700'],
// });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const aladin = Aladin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: [ '400']
});


export const metadata: Metadata = {
  title: "aaGna Creatives",
  description: "Transforming Ideas into a Multiverse of Creative Possibilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}
      {/* <CustomCursor /> */}
        <h1  className={aladin.className}></h1>
      </body>
    </html>
  );
}
