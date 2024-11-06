import React from 'react';
import Image from 'next/image';
import placeholder from '../../../public/150.jpg'
import { Quicksand} from '@next/font/google'
import personal from '../../../public/personal.gif'
import med from '../../../public/med.gif'
// If loading a variable font, you don't need to specify the font weight
const quick = Quicksand({ subsets: ['latin'], weight: '300',})




const Sample = () => {
  const items = [
    { title: 'Personal', imgSrc: personal },
    { title: 'Organisation', imgSrc: med },
  ];

  return (
<div // If loading a variable font, you don't need to specify the font weight
className={quick.className}
>
    <h1 className='text-3xl tracking-wider  font-semibold text-center pb-6'>Sample Website</h1>

    <div className="flex  tracking-wider gap-6 px-10 flex-col sm:flex-row sm:justify-between">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center mb-4 sm:mb-0 sm:w-1/2 relative group">
          <div className="relative w-[350px] md:w-[550px]">
            <Image
              width={40}
              height={40}
              src={item.imgSrc}
              alt={item.title}
              className="w-full  rounded"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded"></div>
          </div>
          <h3 className="text-center mt-2 text-lg font-semibold">{item.title}</h3>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Sample;