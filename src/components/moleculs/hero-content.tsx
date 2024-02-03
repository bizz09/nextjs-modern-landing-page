import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center md:px-20 px-6 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] h-5  w-5" />
          <h1 className="Welcome-text text-[13px]">Front End Developer</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6  text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            Project Exprience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m Frontend Software Engineer with experience in website. check out my project and Skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full md:flex hidden justify-center items-center"
      >
        <Image
          src={"/svg/mainIconsdark.svg"}
          width={650}
          height={650}
          alt="work icons"
        />
      </motion.div>
    </motion.div>
  );
}
