import { Quicksand} from '@next/font/google'
import { motion } from 'framer-motion';
// If loading a variable font, you don't need to specify the font weight
const quick = Quicksand({ subsets: ['latin'], weight: '300',})




const Footer = () => (
  <footer>
    <div className="custom-screen pt-16">
      <div className="mt-10  border-t items-center justify-between sm:flex">
      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © 2024 Collie Startup. All rights reserved.
      </motion.p>

      <motion.div
        className={`${quick.className} py-10 text-7xl`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Collie
      </motion.div>
      </div>
    </div>
  </footer>
);

export default Footer;