import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../Other/TaskList'

function EmployeeDashBoard({ data, setuser }) {
  return (
    <div className='pb-32'>
      <Header data={data} setuser={setuser}></Header>
      <TaskListNumber data={data}></TaskListNumber>
      <TaskList data={data}></TaskList>
    </div>
  )
}

export default EmployeeDashBoard
