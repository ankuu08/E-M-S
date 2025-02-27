import React from 'react'

function AllTask({ data }) {
  return (
    <div className='text-white  box-border p-5 h-48'>
      <div className='bg-blue-400 flex justify-between px-8 py-2 rounded-md  mb-3'>
        <span className='font-semibold w-1/5 '>Employee</span>
        <span className='font-semibold w-1/5 '>Accepted</span>
        <span className='font-semibold w-1/5 '>New</span>
        <span className='font-semibold w-1/5 '>Completed</span>
        <span className='font-semibold w-1/5 '>Failed</span>
      </div>
      <div className='overflow-y-auto h-40'>
        {data.map((elem) => (
          <div className='border-green-500 border-2 flex justify-between px-8 py-2 rounded-md  mb-3 w-full'>
            <span className='font-semibold w-1/5 '>{elem.name}</span>
            <span className='font-semibold w-1/5 '>{elem.taskNumbers.active}</span>
            <span className='font-semibold w-1/5 '>{elem.taskNumbers.newTask}</span>
            <span className='font-semibold w-1/5 '>{elem.taskNumbers.completed}</span>
            <span className='font-semibold w-1/5 '>{elem.taskNumbers.failed}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
