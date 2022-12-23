import React from 'react'

function NewBlog() {
    return (
        <div className='w-[979px] h-[575px] bg-[#E9E9E9] mx-auto mt-[174px] mb-[41px] p-1'>
            <div className='bg-[#D9D9D9] h-[35px]'>

            </div>
            <div className='w-[375px] h-[60px] mx-auto bg-[#E9E9E9]'><input className='w-full h-full mt-1 focus:outline-none bg-[#E9E9E9]' placeholder='Title...' /></div>
            <textarea className='p-4 w-full h-[455px] focus:outline-none bg-[#E9E9E9]' placeholder='type your blog here...'></textarea>
        </div>
    )
}

export default NewBlog