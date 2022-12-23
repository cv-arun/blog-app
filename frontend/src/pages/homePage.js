import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Cards from '../components/cards';
import ClipBoard from '../icons/clipBoard';
import { useNavigate } from 'react-router-dom';
import axios from '../services/axios'


function HomePage() {
  const navigate = useNavigate();
  const [blogs,setBlogs]=useState()
  useEffect(() => {
    axios.get('get-all-blog').then(data=>{
      console.log(data.data,"all blogs") 
      setBlogs(data.data)

    })

  }, [])

  return (
    <div className='w-full'>
      <Header />
      <div className='mt-[143px]'>
        <div className='grid md:grid-cols-3 grid-col-1 gap-4 pt-[30px]'>
          {blogs?.map(curr => <div onClick={() => navigate(`/blog/${curr._id}`)} > <Cards title={curr?.title} /></div>)}
        </div>
        <div onClick={() => navigate('/new-blog')}
          className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed bottom-[24px] right-[55px] shadow flex flex-col justify-center'>
          <ClipBoard />
        </div>
      </div>
    </div>
  )
}

export default HomePage