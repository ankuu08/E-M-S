import React from 'react'

function AcceptedTask({ data }) {
  return (
    <div className='bg-rose-500 min-h-56 w-[93%] sm:w-[38%] shrink-0 rounded-lg px-8 py-5 ' style={{ boxSizing: 'border-box' }}>
      <div className='text-white flex items-center justify-between'>
        <h1 className='bg-red-700 px-3 py-1 rounded-md'>{data.category}</h1>
        <span className='text-sm'>{data.date}</span>
      </div>
      <h1 className='mt-4 text-2xl font-bold'>{data.title}</h1>
      <p className='text-sm mt-3'>{data.description}</p>
      <div className='mt-4 w-full flex items-center justify-between'>
        <button className='px-2 py-1 bg-green-500 text-xs border-none'>Complete</button>.
        <button className='px-6 py-1 bg-red-500 text-xs border-none'>Failed</button>
      </div>
    </div>

  )
}

export default AcceptedTask
