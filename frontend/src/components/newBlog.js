import React from 'react'

function NewBlog({ setState, state,err }) {

    return (
        <div className='md:w-[979px]  h-[575px] bg-[#E9E9E9] mx-auto  md:mt-[174px] mt-[254px]  mb-[41px] p-1'>
            <div className='bg-[#D9D9D9] h-[35px]'>

            </div>
            {err&&<p className='text-red-600  text-center'>Title and content required</p>}
            <div className='w-[375px] h-[60px] mx-auto bg-[#E9E9E9]  m-1 text-[40px] font-semibold text-center'>
                <input value={state?.title} onChange={(e)=>setState({...state,title:e.target.value})} 
                className='w-full h-full mt-1 focus:outline-none bg-[#E9E9E9]' placeholder='            Title...' />
            </div>
            <hr></hr>
            <textarea value={state?.content} onChange={(e)=>setState({...state,content:e.target.value})}
            className='p-4 w-full h-[455px] focus:outline-none bg-[#E9E9E9]' placeholder='Type your blog here...'>

            </textarea>
        </div>
    )
}

export default NewBlog