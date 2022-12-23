import React from 'react';
import Header from '../components/header';
import NewBlog from '../components/newBlog';
import Homeicons from '../icons/homeicons';
import TickICon from '../icons/tickICon';
function NewBlogPage() {
  return (
    <>
      <Header />
      <NewBlog />
      <div className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed top-[167px] left-[38px] shadow flex flex-col justify-center'>
        <Homeicons />
      </div>
      <div className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed top-[265px] left-[38px] shadow flex flex-col justify-center'>
        <TickICon />
      </div>
    </>
  )
}

export default NewBlogPage