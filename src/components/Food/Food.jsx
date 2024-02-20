import Image from 'next/image';
import React from 'react';
import Food1 from '../../../public/Image/Taste/Food.webp';
import Food2 from '../../../public/Image/Taste/Food1.webp';
import Button from '../Button/Button';

const Food = () => {
  return (
    <section className='h-full w-full'>
      <div className='sm:grid sm:grid-cols-2'>
        <div className='flex flex-col justify-between'>
          <div className=''>
            <Image src={Food1} alt='Food' className='object-cover' />
          </div>
          <div className='bg-yellow-400 text-center p-6 space-y-2'>
            <h1 className='text-2xl'>Dressing Oil</h1>
            <p className='text-lg'>For salad made in heaven</p>
            <Button name="Shop Now" color="black"  text="white"/>
            

          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <div className=''>
            <Image src={Food2} alt='Food' className='object-cover' />
          </div>
          <div className='bg-yellow-400 text-center p-6 space-y-2'>
            <h1 className='text-2xl'>Cooking Oil</h1>
            <p className='text-lg'>For Your Crunch fries</p>
            <Button name="Shop Now" color="black" text="white"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Food;
