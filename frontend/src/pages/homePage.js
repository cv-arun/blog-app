import React from 'react';
import Header from '../components/header';
import Cards from '../components/cards';
import ClipBoard from '../icons/clipBoard';

function HomePage() {
  return (
    <div className='w-full'>
      <Header />
      <div className='mt-[143px]'>
      <div className='grid grid-cols-3 gap-4 pt-[30px]'>
        {[...Array(9)].map(curr => <Cards />)}
      </div>


      <div className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed bottom-[24px] right-[55px] shadow flex flex-col justify-center'>
        <ClipBoard/>
      </div>
      </div>
    </div>
  )
}

export default HomePage