import React from 'react'

function Cards({title}) {
  return (
    <div className='w-[300px] bg-[#D9D9D9] h-[180px] rounded-[15px] mx-auto my-[30px] flex flex-col justify-center'>
      <h1 className='mx-auto'>{title}</h1>
    </div>
  )
}

export default Cards