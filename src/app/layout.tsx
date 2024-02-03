import { Inter } from "next/font/google";
import "./globals.css";
import StartsCanvas from "@/components/organisms/start-background";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Cuma iseng bikin portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StartsCanvas />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
