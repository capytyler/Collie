import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import wordpress from "../../../public/icons/wordpress.svg"
import nextjs from "../../../public/icons/nextjs.svg"
import tailwind from "../../../public/icons/tailwind.svg"
import nodejs from "../../../public/icons/nodejs.svg"
import vercel from "../../../public/icons/vercel.svg"
import figma from "../../../public/icons/figma.svg"
import mot from "../../../public/icons/framer.svg"

import { Quicksand} from '@next/font/google'
 


import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// If loading a variable font, you don't need to specify the font weight
const quick = Quicksand({ subsets: ['latin'], weight: '500',})




const ToolKit = () => {

    const features = [
     
        {
            icon: nextjs,
            title: "Next.js",
            desc: "Next.js is a React framework that gives you building blocks to create web apps."
        },
        {
            icon: tailwind,
            title: "Tailwind CSS",
            desc: "Tailwind CSS is basically a utility-first CSS framework for rapidly building UIs."
        },
        {
            icon: nodejs,
            title: "Node.js",
            desc: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment."
        },
        {
            icon: vercel,
            title: "Vercel",
            desc: "Vercel is a cloud platform that enables developers to host web apps."
        },
      
    ]

    return (
        <SectionWrapper>
 <motion.div
      id="toolkit"
      className={`${quick.className} tracking-wider max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={fadeIn}
    >
      <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
        <h2 className="text-gray-800 text-3xl  font-semibold sm:text-5xl">
          Work with the best toolkit
        </h2>
        <p>These are a few of our favourite things</p>
      </div>
      <div className="mt-12">
        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-1 lg:grid-cols-2">
          {features.map((item, idx) => (
            <motion.li
              key={idx}
              className="flex gap-x-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx }}
              variants={fadeIn}
            >
              <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                <Image src={item.icon} alt={item.title} />
              </div>
              <div>
                <h4 className="sm:text-2xl text-gray-900 font-semibold">
                  {item.title}
                </h4>
                <p className="sm:text-xl font-semibold mt-3">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
        </SectionWrapper>
    )
}

export default ToolKit