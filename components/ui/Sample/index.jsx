import React from "react";
import Image from "next/image";
import placeholder from "../../../public/150.jpg";
import { Quicksand } from "@next/font/google";
import personal from "../../../public/personal.gif";
import med from "../../../public/med.gif";
import Link from "next/link";
import { motion } from "framer-motion";

// If loading a variable font, you don't need to specify the font weight
const quick = Quicksand({ subsets: ["latin"], weight: "500" });


const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3, // Adjust the delay as needed
      duration: 2, // Adjust the duration as needed
    },
  }),
};

const Sample = () => {
  const items = [
    { title: "Personal", imgSrc: personal, link: "https://collieweb.github.io/Julia3/gallery.html" },
    { title: "Organisation", imgSrc: med, link: "https://www.homed.health/" },
  ];

  return (
    <div 
    id='sample'
      className={quick.className}
    >
      <h1 className="text-3xl pb-10 sm:pt-24  font-semibold sm:text-5xl tracking-wider   text-center ">
        Sample Website
      </h1>

      <div className="flex tracking-wider gap-6 px-10 flex-col sm:flex-row sm:justify-between">
      {items.map((item, index) => (
        <motion.div
        whileInView="visible"
          key={index}
          className="flex flex-col items-center mb-4 sm:mb-0 sm:w-1/2 relative group"
          custom={index}
          initial="hidden"
        
          variants={fadeInVariants}
        >
          <Link href={item.link}>
            <div className="w-[300px] sm:w-[450px]">
              <Image
                width={40}
                height={40}
                src={item.imgSrc}
                alt={item.title}
                className="w-full rounded"
              />
            </div>
          </Link>
          <h3 className="text-center mt-2 text-lg font-semibold">
            {item.title}
          </h3>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Sample;
