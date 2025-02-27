import React from 'react'

function TaskListNumber({ data }) {
  return (
    <div className='text-white w-full  py-10 px-5 grid grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-x-10 '>
      <div className='bg-blue-400 px-8 py-8 w-auto  rounded-xl my-3'>
        <span className='text-3xl font-semibold'>{data.taskNumbers.newTask}</span>
        <br />
        <span className='text-2xl font-medium'>New Task</span>
      </div>
      <div className='bg-green-400 px-6 py-8 w-auto  rounded-xl my-3'>
        <span className='text-3xl font-semibold'>{data.taskNumbers.completed}</span>
        <br />
        <span className='text-2xl font-medium flex text-wrap'>Completed</span>
      </div>
      <div className='bg-yellow-400 px-8 py-8 w-auto  rounded-xl my-3'>
        <span className='text-3xl font-semibold'>{data.taskNumbers.active}</span>
        <br />
        <span className='text-2xl font-medium'>Accepted</span>
      </div>
      <div className='bg-red-400 px-8 py-8 w-auto rounded-xl my-3 '>
        <span className='text-3xl font-semibold'>{data.taskNumbers.failed}</span>
        <br />
        <span className='text-2xl font-medium'>Failed</span>
      </div>
    </div>
  )
}

export default TaskListNumber
