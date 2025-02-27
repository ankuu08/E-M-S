import React, { useEffect, useState } from 'react'

function Header({ data, setuser }) {
  const [username, setusername] = useState('');
  useEffect(() => {
    if (!data) {
      setusername('Admin');
    } else {
      setusername(data.name);
    }
  }, [])
  return (
    <div className='w-full p-4 px-10 flex items-center justify-between'>
      <p>
        <span className='font-semibold text-lg text-white'>Hello,</span>
        <br />
        <span className='font-semibold text-3xl leading-none tracking-tight text-white'>{username}👋</span>
      </p>
      <button className='bg-red-600 rounded-md text-white p-3 py-2' onClick={() => {
        localStorage.setItem('loggedInUser', '');
        // window.location.reload();
        setuser('');
        localStorage.clear();
      }}>Logout</button>
    </div>
  )
}

export default Header
