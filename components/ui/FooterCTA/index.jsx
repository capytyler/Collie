import SectionWrapper from "../../SectionWrapper";
import Link from "next/link";
import { Quicksand } from "@next/font/google";
import NavLink from "../NavLink";
const quick = Quicksand({ subsets: ["latin"], weight: "500" });
import { motion } from 'framer-motion';

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 2,
      },
    },
  };
  
  const FooterCTA = () => (
    <SectionWrapper>
      <div id="contact" className="pt-20 custom-screen">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-5xl">
            Get started with Collie today
          </h2>
          <p className="mt-3 text-gray-600">
            Hire experts to create your next idea, follow best practices, remove
            roadblocks, and delivery on schedule.
          </p>
          <NavLink
            href="mailto:colliewebdev@gmail.com"
            className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 px-4 py-2 rounded"
          >
            Start building
          </NavLink>
        </motion.div>
        <motion.div
          className="pt-10 pb-2 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          Send us an email
        </motion.div>
        <motion.div
          className="tracking-wide py-6 bg-gradient-to-r from-yellow-500 via-red-700 to-blue-800 bg-clip-text text-2xl sm:text-6xl lg:text-6xl font-semibold text-transparent text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <Link href="mailto:colliewebdev@gmail.com"> colliewebdev@gmail.com </Link>
       
          </motion.div>
       
 

      </div>
    </SectionWrapper>
  );

export default FooterCTA;
