'use client'
import React, { useState } from 'react'

function Login({ loginhandler }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    loginhandler(email, password);
    setemail("");
    setpassword("");
  }

  return (
    <div className='h-screen sm:w-full flex items-center justify-center '>
      <div className='w-full'>
        <h1 className='text-emerald-600 text-6xl font-bold text-center'>Login</h1>
        <div className='sm:w-full flex items-center justify-center  mt-7'>

          <form className='sm:w-full w-[80%] lg:w-1/4 flex flex-col border-2 border-emerald-500 p-10 sm:p-20' onSubmit={(e) => {
            submitHandler(e);
          }} >
            <input className='h-15 w-full m-3 py-2 px-3 rounded-full text-lg bg-transparent border-2 border-emerald-500 outline-none text-white' type="email" required name="" id="" placeholder='Enter Email...' value={email} onChange={(e) => {
              setemail(e.target.value);
            }} />
            <input className='h-15 w-full m-3 py-2 px-3 rounded-full text-lg bg-transparent border-2 border-emerald-500 outline-none text-white' type="password" required name="" id="" placeholder='Enter Password...' value={password} onChange={(e) => {
              setpassword(e.target.value);
            }} />
            <button className='h-15 w-full m-3 py-2 px-3 rounded-full text-lg  border-2 bg-emerald-400 text-white'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
