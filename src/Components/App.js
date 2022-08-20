import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import Login from './Login';
import Signup from './Signup';
import Todolist from './Todolist';
import ForgotPassword from './forgot-password';

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path='/todolist' element={<Todolist></Todolist>}></Route>
            
            <Route path='/' element={<Signup></Signup>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
        </Routes>
        </AuthProvider>
        </BrowserRouter>
    </div>
  )
}