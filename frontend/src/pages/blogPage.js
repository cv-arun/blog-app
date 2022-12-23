import React from 'react';
import Header from '../components/header';
import Homeicons from '../icons/homeicons';
import { useNavigate } from 'react-router-dom';

function BlogPage() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className='w-[979px] h-[520px] bg-[#E9E9E9] mx-auto mt-[174px] mb-[20px] p-4'>
        <div className='w-[375px] h-[60px] mx-auto bg-[#E9E9E9]'><h1 className='text-[40px] font-semibold text-center'>Title</h1></div>
        <p className='break-all overflow-y-scroll h-[420px]'>fdsjfjsdfjssdfddddddddddddddddddddffffffffffasdfsdffffffffffffffffffffffffsdffffffffffffffsfffffffffffffffffffffffffffffffffffffffffffdnfkjldsnfkjdsnfjnfkldsfffffffffffffffffffffffffffffffffffsdfdsssssssssssssssssssssssssssssssss</p>
      </div>
      <div onClick={()=>navigate('/')} className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed 
             top-[167px] left-[38px] shadow flex flex-col justify-center'>
        <Homeicons />
      </div>
    </>
  )
}

export default BlogPage