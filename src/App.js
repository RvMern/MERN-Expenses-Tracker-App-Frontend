import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import AddTransaction from './Components/AddTransaction';
import AccountDashboard from './Components/Dashboard/AccountDashboard';
import AccountDetails from './Components/Dashboard/AccountDetails';
import LoggedIn from './utils/LoggedIn';
import AddAccount from './Components/AddAccount';
import NotFound from './Components/NotFound';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/addTransaction/:id' element={<LoggedIn children={AddTransaction}></LoggedIn>} />
          <Route path='/dashboard' element={<LoggedIn children={AccountDashboard}/>}/>
          <Route path='/dashboard/account/:id' element={<LoggedIn children={AccountDetails}/>}/>
          <Route path='/dashboard/addaccount' element={<LoggedIn children={AddAccount} />}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App