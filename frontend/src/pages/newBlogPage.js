import React, { useState } from 'react';
import Header from '../components/header';
import NewBlog from '../components/newBlog';
import Homeicons from '../icons/homeicons';
import TickICon from '../icons/tickICon';
import { useNavigate } from 'react-router-dom';
import axios from '../services/axios'

function NewBlogPage() {
  const navigate = useNavigate()
  const [state,setState]=useState({title:'',content:''});
  const [err,setErr]=useState('');
  const submit=()=>{
    console.log(state)
    
    state?.title!=='' && state?.content!==''? axios.post('/create-blog',state).then(data=>{
      console.log(data.data)
      setState({title:'',content:''})
      setErr('')
    }):setErr("Title and content required")

  }

  return (
    <>
      <Header />
      <NewBlog state={state} setState={setState} err={err} />
      <div onClick={()=>navigate('/')} className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed top-[167px] left-[38px] shadow flex flex-col justify-center'>
        <Homeicons />
      </div>
      <div onClick={submit} className='bg-[#E9E9E9] w-[80px] h-[70px] rounded-[20px] fixed top-[265px] left-[38px] shadow flex flex-col justify-center'>
        <TickICon />
      </div>
    </>
  )

}

export default NewBlogPage