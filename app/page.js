'use client'
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import TaskListNumber from './components/Other/TaskListNumber'
import TaskList from './components/Other/TaskList'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { AuthContext } from './context/AuthProvider'
function page() {
  const [user, setuser] = useState(null);
  const [loggedInUserdata, setloggedInUserdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const data1 = useContext(AuthContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setuser(parsedUser.role);
      if (parsedUser.role === "User" && parsedUser.data) {
        setloggedInUserdata(parsedUser.data);
      }
    }
    setLoading(false);
  }, []);
  const loginhandler = (email, password) => {
    if (email == "admin@me.com" && password == '123') {
      setuser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: data1.admin }));
    } else if (data1) {
      const employee = data1.authData.employees.find((e) => email == e.email && password == e.password);
      if (employee) {
        setuser("User");
        setloggedInUserdata(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'User', data: employee }));
      }
    } else {
      setuser(null);
    }
  }
  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }
  return (
    <div>
      {!user ? <Login loginhandler={loginhandler}></Login> : ''}
      {user == "admin" ? <AdminDashBoard setuser={setuser}></AdminDashBoard> : ''}
      {user == "User" ? <EmployeeDashBoard data={loggedInUserdata} setuser={setuser}></EmployeeDashBoard> : ''}
    </div>
  )
}

export default page
