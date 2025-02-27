import { AuthContext } from '@/app/context/AuthProvider';
import React, { useContext, useState } from 'react'

function CreateTask() {
  const [title, settitle] = useState('');
  const [date, setdate] = useState('');
  const [assignto, setassignto] = useState('');
  const [category, setcategory] = useState('');
  const [description, setdescription] = useState('');
  const [newtask, setnewtask] = useState({});
  const empdata = useContext(AuthContext);
  const submithandler = (e) => {
    e.preventDefault();
    setnewtask({ title, date, category, description, active: false, completed: false, failed: false, newTask: true });
    empdata.authData.employees.forEach((elem) => {
      if (elem.name === assignto) {
        elem.tasks.push(newtask);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
      }
    })
    settitle('');
    setdate('');
    setassignto('');
    setcategory('');
    setdescription('');
    // empdata.setAuthData(empdata.authData.employees);
    empdata.setAuthData({ employees: empdata.authData.employees });
  }
  return (
    <div>
      <div className='p-10 text-white w-full  sm:flex sm:itemse-center sm:justify-center'>
        <form className='w-full  bg-gray-900 rounded-sm sm:flex sm:items-center sm:justify-between px-10 py-16 gap-10' onSubmit={(e) => {
          submithandler(e)
        }}>
          <div className=' sm:w-1/2' >
            <div >
              <h1>TaskTitle</h1>
              <input className='p-1 bg-transparent border-2 rounded-md w-full mb-3' type="text" placeholder='Make a UI design' value={title} onChange={(e) => {
                settitle(e.target.value);
              }} />
            </div>
            <div>
              <h1>Date</h1>
              <input className='p-1 bg-transparent border-2 rounded-md w-full mb-3' type="date" name="" id="" placeholder='dd/mm/yyy' value={date} onChange={(e) => {
                setdate(e.target.value);
              }} />
            </div>
            <div>
              <h1>Assign to</h1>
              <input className='p-1 bg-transparent border-2 rounded-md w-full mb-3' type="text" placeholder='employee name' value={assignto} onChange={(e) => {
                setassignto(e.target.value);
              }} />
            </div>
            <div>
              <h1>Category</h1>
              <input className='p-1 bg-transparent border-2 rounded-md w-full mb-3' type="text" placeholder='design,dev,etc' value={category} onChange={(e) => {
                setcategory(e.target.value);
              }} />
            </div>
          </div>
          <div className='sm:w-[30%] sm:h-full sm:text-end sm:relative sm:overflow-hidden'>
            <h1 className='text-start  w-full'>Description</h1>
            <textarea className='min-h-36 w-full mb-5 bg-transparent border-2 outline-none p-2' name="" id="" value={description} onChange={(e) => {
              setdescription(e.target.value);
            }} ></textarea>
            <br />
            <button className=' py-2 mt-10 bg-green-400 w-full outline-none rounded-sm  '>Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
