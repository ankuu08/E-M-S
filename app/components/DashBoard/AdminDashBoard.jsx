import React, { useContext } from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'
import AuthProvider, { AuthContext } from '@/app/context/AuthProvider'

function AdminDashBoard({ setuser }) {
  const dataadmin = useContext(AuthContext);
  // console.log(dataadmin.employees);
  return (
    <div className='pb-5'>
      <Header setuser={setuser}></Header>
      <CreateTask></CreateTask>
      <AllTask data={dataadmin.authData.employees}></AllTask>
    </div>
  )
}

export default AdminDashBoard
