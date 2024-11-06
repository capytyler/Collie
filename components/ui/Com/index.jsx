import React from 'react';
import { Quicksand} from '@next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const quick = Quicksand({ subsets: ['latin'], weight: '500',})





const Com = () => {
  const products = [
    {
      name: 'Our Service',
      price: 'Leave the time-consuming design process to us',
      feature1: 'Get your logo designed for free with our service!',
      feature2: 'No subscription or maintenance fee',
      feature3:'Free for three years*',
      feature4:'No prepaid is required ',
      feature5:'No watermark and promotion information in your website'
    },
    {
      name: 'Website builder',
      price: 'The tedious process of designing a website on your own',
      feature1: 'You need to design it yourself',
      feature2: 'Subscription fee is required',
      feature3:'Required',
      feature4:'N/A ',
      feature5:'Extra fee is required to removed annoyed watermark of website builder'
    },
    {
      name: 'Developers ',
      price: 'Developers design the website, but the content is fully provided by you.',
      feature1: 'Additional costs are required',
      feature2: 'Service contract for maintenance may be required',
        feature3:'Required',
        feature4:'Prepaids are common.',
        feature5:'Watermark of the company may appeared'
    },
  ];

  return (
<div className= {`${quick.className} sm:tracking-wider  text-xs px-4  my-8 xl:px-56`}>
  <h2 className="text-4xl font-bold mb-4 text-center">Product Comparison</h2>
  <table className="min-w-full bg-white   rounded-lg overflow-hidden table-fixed">
    <thead>
      <tr className="bg-cyan-200 border-b border-gray-300">
        <th className="py-6 px-2 sm:px-4 text-xs sm:text-sm w-1/4"></th>
        {products.map((product, index) => (
          <th key={index} className="py-6 px-2 sm:px-4 text-xs sm:text-sm text-center w-1/4">
            {product.name}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr className="mb-4 border-b border-gray-300 hover:bg-cyan-50">
        <td className="py-6 px-2 sm:px-4 w-1/4 font-bold text-center text-xs sm:text-lg">Need to work?</td>
        {products.map((product, index) => (
          <td key={index} className="py-6 px-2 sm:px-4 text-xs sm:text-sm text-center w-1/4">
            {product.price}
          </td>
        ))}
      </tr>

      <tr className="mb-4 border-b border-gray-300 hover:bg-cyan-50">
        <td className="py-6 px-2 sm:px-4 w-1/4 font-bold text-center text-xs sm:text-lg">Logo design</td>
        {products.map((product, index) => (
          <td key={index} className="py-6 px-2 sm:px-4 text-xs sm:text-sm text-center w-1/4">
            {product.feature1}
          </td>
        ))}
      </tr>

      <tr className="   mb-4 border-b border-gray-300 hover:bg-cyan-50">
        <td className="py-6 px-2 sm:px-4 w-1/4 font-bold text-center text-xs sm:text-lg">Subscription and maintenance fee</td>
        {products.map((product, index) => (
          <td key={index} className="py-6 px-2 sm:px-4 text-xs sm:text-sm text-center w-1/4">
            {product.feature2}
          </td>
        ))}
      </tr>

      <tr className="mb-4 border-b border-gray-300 hover:bg-cyan-50">
        <td className="py-6 px-2 sm:px-4 w-1/4 font-bold text-center text-xs sm:text-lg">Server hosting fee</td>
        {products.map((product, index) => (
          <td key={index} className="py-6 px-2 sm:px-4 text-xs sm:text-sm text-center w-1/4">
            {product.feature3}
          </td>
        ))}
      </tr>

      <tr className="mb-4 border-b border-gray-300 hover:bg-cyan-50">
        <td className="py-6 px-2 sm:px-4 w-1/4 font-bold text-center text-xs sm:text-lg">Prepaid</td>
        {products.map((product, index) => (
          <td key={index} className="py-6 px-2 sm:px-4 text-xs sm:text-sm text-center w-1/4">
            {product.feature4}
          </td>
        ))}
      </tr>
      <tr className="mb-4 border-b border-gray-300 hover:bg-cyan-50">
        <td className="py-6 px-2 sm:px-4 w-1/4 font-bold text-center text-xs sm:text-lg">Annoyed watermark</td>
        {products.map((product, index) => (
          <td key={index} className="py-6 px-2 sm:px-4 text-xs sm:text-sm text-center w-1/4">
            {product.feature5}
          </td>
        ))}
      </tr>
    </tbody>
  </table>
  <span className='text-xs sm:text-sm text-gray-500'>*Server hosting fee is free for first three years. Collie will strive to provide free hosting services after three years.</span>
</div>
  );
};

export default Com;