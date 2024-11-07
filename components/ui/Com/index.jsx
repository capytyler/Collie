import React from 'react';
import { Quicksand} from '@next/font/google'
 import { motion } from 'framer-motion';
// If loading a variable font, you don't need to specify the font weight
const quick = Quicksand({ subsets: ['latin'], weight: '500',})



const products = [
  {
    name: 'Our Service',
    price: 'Leave the time-consuming design process to us',
    feature1: 'Get your logo designed for free with our service!',
    feature2: 'No subscription or maintenance fee',
    feature3: 'Free for three years*',
    feature4: 'No prepaid is required',
    feature5: 'No watermark and promotion information in your website',
  },
  {
    name: 'Website builder',
    price: 'The tedious process of designing a website on your own',
    feature1: 'You need to design it yourself',
    feature2: 'Subscription fee is required',
    feature3: 'Required',
    feature4: 'N/A',
    feature5: 'Extra fee is required to remove annoyed watermark of website builder',
  },
  {
    name: 'Developers',
    price: 'Developers design the website, but the content is fully provided by you.',
    feature1: 'Additional costs are required',
    feature2: 'Service contract for maintenance may be required',
    feature3: 'Required',
    feature4: 'Prepaids are common.',
    feature5: 'Watermark of the company may appear',
  },
];

const titles = [
  { title: "Need to work?", key: "price" },
  { title: "Logo design", key: "feature1" },
  { title: "Subscription and maintenance fee", key: "feature2" },
  { title: "Server hosting fee", key: "feature3" },
  { title: "Prepaid", key: "feature4" },
  { title: "Annoyed watermark", key: "feature5" },
];

const Com = () => {
  return (
<div className={`${quick.className} sm:tracking-wider text-xs px-2 my-8 xl:px-56`}>
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <h2 className="text-3xl pb-10 sm:pt-24 font-semibold sm:text-5xl text-center">Product Comparison</h2>
    <table className=" w-full rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-sky-200">
          {products.map((product, index) => (
            <th key={index} className="px-2 py-1 text-sm text-center text-gray-800 sm:px-6 sm:py-4  sm:text-xl">
              {product.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {titles.map((title, index) => (
          <React.Fragment key={index}>
            <tr>
              <td colSpan={products.length} className="border-gray-500 px-2 py-1 text-sm text-center bg-sky-100 text-gray-800 sm:px-6 sm:py-2 font-extrabold sm:text-lg">
                {title.title}
              </td>
            </tr>
            <tr className="bg-sky-50">
              {products.map((product, productIndex) => (
                <td key={productIndex} title={title.title} className="px-2 py-1 text-sm text-center text-gray-800 sm:px-6 sm:py-4 sm:text-lg">
                  {product[title.key]}
                </td>
              ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
    <span className='text-xs sm:text-sm text-gray-500'>*Server hosting fee is free for first three years. Collie will strive to provide free hosting services after three years.</span>
  </motion.div>
</div>
  );
};


 

export default Com;