import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Homeicons from '../icons/homeicons';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../services/axios';

function BlogPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [blog, setBlog] = useState()

  useEffect(() => {

    axios.post('/get-blog', { id }).then(data => {
      console.log(data.data, "single blog title")
      setBlog(data.data)
    })

  }, [])

  return (
    <>
      <Header />
      <div className='w-[979px] h-[520px] bg-[#E9E9E9] mx-auto mt-[174px] mb-[20px] p-4'>
        <div className='w-[375px] h-[60px] mx-auto bg-[#E9E9E9]'><h1 className='text-[40px] font-semibold text-center'>{blog?.title}</h1></div>
        <p className='break-all overflow-y-scroll h-[420px]'>{blog?.content}</p>
      </div>
      <div onClick={() => navigate('/')} className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed 
             top-[167px] left-[38px] shadow flex flex-col justify-center'>
        <Homeicons />
      </div>
    </>
  )
}

export default BlogPage