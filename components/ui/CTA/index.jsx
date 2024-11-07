import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/cta-image.jpg"
import Image from "next/image"
import { Quicksand} from '@next/font/google'
import { motion } from 'framer-motion';
const quick = Quicksand({ subsets: ['latin'], weight: '500',})


const CTA = () => {
    return (
        <SectionWrapper id="about" className="pb-0">
        <div className={`${quick.className} tracking-wide custom-screen`}>
            <motion.div
                className="items-center mt-10 gap-x-12 lg:flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="flex-1 sm:hidden lg:block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                </motion.div>
                <motion.div
                    className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-gray-800 tracking-wide mb-6 text-3xl  font-semibold sm:text-4xl">
                        The simplest way to create a website
                    </h2>
                    <p className="mt-3 text-md text-gray-600">
                        Collie is a group of website development enthusiasts based in Hong Kong. We are dedicated to providing affordable and straightforward solutions for creating websites that promote our clients' organizations and ideas. Our customers can feel at ease and confident when choosing our services. With our expertise, we ensure a seamless experience from start to finish
                    </p>
                    <NavLink
                        href="#contact"
                        className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                    >
                        Get started
                    </NavLink>
                </motion.div>
            </motion.div>
        </div>
    </SectionWrapper>
    )
}

export default CTA