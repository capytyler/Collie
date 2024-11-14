import React from 'react';
import { Quicksand} from '@next/font/google'
 import { motion } from 'framer-motion';
// If loading a variable font, you don't need to specify the font weight
const quick = Quicksand({ subsets: ['latin'], weight: '500',})




const Info = () => {
  return (
    <motion.div 
      className={`${quick.className} tracking-wider text-center px-4 md:px-24 xl:px-80 bg-white rounded-lg`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-3xl font-bold mb-4">Piece of information for your website</h1>
      <p className="mb-6">
        With just one piece of information, our developers will handle the rest. Save time and let us create a stunning website for you.
      </p>
      
      <form>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Number of Pages:
          </label>
          <p className="mt-1">What pages would you like to include? (e.g., Home, About, Services, Contact)</p>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Pictures:
          </label>
          <p className="mt-1">Please list at least 10 images you would like to feature, such as logos, team photos, or service demonstrations.</p>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Color Theme:
          </label>
          <p className="mt-1">What color scheme do you prefer? (e.g., primary, secondary, and accent colors)</p>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Website Content:
          </label>
          <p className="mt-1">Please provide a brief description (200-400 words) about your organization, including your mission, values, and any key messages you'd like to convey.</p>
        </div>
      </form>
    </motion.div>
  );
};

export default Info;