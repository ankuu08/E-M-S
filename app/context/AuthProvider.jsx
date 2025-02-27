'use client'
import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
export const AuthContext = createContext();
function AuthProvider({ children }) {
  // localStorage.clear();
  // const data1 = getLocalStorage();
  const [authData, setAuthData] = useState({ employees: [], admins: {} });
  useEffect(() => {
    setLocalStorage();
    const data = getLocalStorage();
    setAuthData(data);
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ authData, setAuthData }}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
