import NavLink from "../NavLink";
import image1 from "../../../public/computer.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {Smooch_Sans} from '@next/font/google'
 
import { Quicksand} from '@next/font/google'
 
const quick = Quicksand({ subsets: ['latin'], weight: '500',})


const major = Smooch_Sans({ subsets: ['latin'], weight: '400',})


const Hero = () => (
  <section id="home" className="py-10  text-gray-800 relative">
    <div className="mt-20 custom-screen grid grid-cols-1 md:grid-cols-12 items-center w-full relative">
      <div className="space-y-5 max-w-4xl sm:mx-auto text-left md:text-left md:col-span-4 relative sm:z-10  overflow-visible">
        <div class="flex items-center justify-center ">
          <div class={`${major.className} absolute mx-auto py-2 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text md:text-6xl box-content font-extrabold text-transparent text-center select-none whitespace-nowrap overflow-visible`}>
            Make website simple
          </div>

          <h1
            class= {`${major.className} tracking-wide relative top-0 w-fit h-auto justify-center flex items-center 
            bg-gradient-to-r from-red-500 via-black to-sky-800  bg-clip-text text-4xl sm:text-6xl lg:text-9xl font-semibold text-transparent text-center  whitespace-nowrap overflow-visible`}
          >
            Make website simple
          </h1>
          
        </div>
        <p className={`${quick.className} tracking-wide  text-center justify-center max-w-xl  text-sm md:text-xl mx-0  md:whitespace-nowrap overflow-visible`}>
          Providing affordable and straightforward website solutions{" "}
        </p>
       
        <div className="flex items-center justify-center md:justify-start gap-x-3 font-medium text-sm">
          <NavLink
            href="#contact"
            className={`${quick.className} tracking-wider border-2 border-blue-600 text-white bg-blue-600 hover:bg-blue-500 active:bg-gray-900 px-4 py-2 rounded`}
          >
            Start building
          </NavLink>
          <NavLink
            href="#about"
            className={`${quick.className} tracking-wider text-gray-700 border-2 border-gray-800 hover:bg-gray-50 px-4 py-2 rounded`}
            scroll={false}
          >
            Learn more
          </NavLink>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 7 }}
        className="md:col-span-8  relative"
      >
        <Image
          src={image1}
          alt="Descriptive Alt Text"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
