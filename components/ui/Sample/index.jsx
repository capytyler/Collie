import React from 'react';
import Image from 'next/image';
import placeholder from '../../../public/150.jpg'
 

const Sample = () => {
  const items = [
    { title: 'Organisation', imgSrc: 'https://via.placeholder.com/150' },
    { title: 'Laboratory', imgSrc: 'https://via.placeholder.com/150' },
    { title: 'Personal Website', imgSrc: 'https://via.placeholder.com/150' },
  ];

  return (
  <div id='sample' >
    <h1 className='pt-24 text-3xl text-center pb-6'>Sample Website</h1>
    <div className="flex gap-6 px-10 flex-col sm:flex-row sm:justify-between">
    {items.map((item, index) => (
      <div key={index} className="flex flex-col items-center mb-4 sm:mb-0 sm:w-1/3">
        <Image width={50} height={50} src={placeholder} alt={item.title} className="w-full mb-2 rounded" />
        <h3 className="text-center text-lg font-semibold">{item.title}</h3>
      </div>
    ))}
  </div>
  </div>
  );
};

export default Sample;