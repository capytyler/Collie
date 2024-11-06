import React from 'react';
import { motion } from 'framer-motion';
import { Quicksand} from '@next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const quick = Quicksand({ subsets: ['latin'], weight: '400',})




const Flow = () => {
  const steps = [
    {
      number: 1,
      title: 'Reach Out to Us',
      description: 'Start by communicating your needs and vision for your website.',
      emoji: '📞',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-500',
    },
    {
      number: 2,
      title: 'Receive a Quotation',
      description: 'Our team will provide you with a detailed quotation for your website project.',
      emoji: '💬',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-500',
    },
    {
      number: 3,
      title: 'Share Your Vision',
      description: 'Provide essential details about your ideal website, including:\n- Number of pages\n- Preferred images\n- Desired style\n- Content and text for the site',
      emoji: '🖼️',
      bgColor: 'bg-yellow-100',
      borderColor: 'border-yellow-500',
    },
    {
      number: 4,
      title: 'Website Development',
      description: 'Our developers will begin creating your website. (No charges are required until this step!)',
      emoji: '💻',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-500',
    },
    {
      number: 5,
      title: 'Review Your Website',
      description: 'Once the website is ready, you\'ll have the opportunity to review it. Confirm that it meets your expectations before making a payment.',
      emoji: '👀',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-500',
    },
    {
      number: 6,
      title: 'Optional: Domain Registration',
      description: 'Consider registering a domain to establish your brand identity and enhance your SEO.',
      emoji: '🌐',
      bgColor: 'bg-teal-100',
      borderColor: 'border-teal-500',
    },
  ];

  return (
<div id='workflow' className={`${quick.className} tracking-wide pt-28 pb-10`}>
    <h1  className='text-center font-bold text-5xl'> How we work</h1>
    <div className={` flex flex-col items-center p-4 space-y-8`} >
      {steps.map((step) => (
        <motion.div
          key={step.number}
          className={`${step.bgColor} ${step.borderColor} border-4 border-opacity-100 rounded-lg p-4 shadow-md w-full max-w-5xl`}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="font-extrabold pb-2 text-lg flex items-center">
            <motion.span
              className="font-bold mr-2 text-3xl" // Increased size for better visibility
              whileHover={{ rotate: 360 }} // Rotate the emoji on hover
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {step.emoji}
            </motion.span>
            {step.number}. {step.title}
          </h3>
          <p className="text-gray-600">{step.description}</p>
        </motion.div>
      ))}
    </div>
</div>
  );
};

export default Flow;