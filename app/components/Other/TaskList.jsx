import React from 'react'
import AcceptedTask from '../TaskList/AcceptedTask'
import CompletedTask from '../TaskList/CompletedTask'
import FailedTask from '../TaskList/FailedTask'
import NewTask from '../TaskList/NewTask'

function TaskList({ data }) {
  return (
    <div id="tasklist" className='text-white  w-full min-h-64 py-5 px-4 gap-4 overflow-x-auto flex sm:flex-row'>
      {data.tasks.map((e) => {
        if (e.active) {
          return <AcceptedTask data={e}></AcceptedTask>
        }
        if (e.newTask) {
          return <NewTask data={e}></NewTask>
        }
        if (e.completed) {
          return <CompletedTask data={e}></CompletedTask>
        }
        if (e.failed) {
          return <FailedTask data={e}></FailedTask>
        }
      })}
    </div>
  )
}

export default TaskList
