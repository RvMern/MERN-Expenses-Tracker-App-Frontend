import React,{useContext, useEffect, useState} from 'react'
import "../css/login.css"
import {Link,useNavigate} from "react-router-dom";
import { authContext } from './Context/AuthContext/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const {state, loginUserAction} = useContext(authContext);
  const [formData, setFormData] = useState({
    email:"",
    password:""
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserAction(formData);
  }

  useEffect(()=>{
    if(state?.userAuth !== null){
      navigate('/dashboard');
    }
  },[state?.userAuth])

  return (

    <div className='login-form-container'>
      <form onSubmit={handleSubmit} id='loginForm' className='bg-slate-100 flex flex-col justify-center' method='post'>
        <h1 className='p-6 text-xl bg-purple-500 text-center font-bold'>Login to your Account</h1>
        <p className='bg-red-200 text-center w-full font-medium text-red-500'>{state?.error !== null ? state?.error.message : ""}</p>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="email">Email</label>
          <input value={formData.email} onChange={handleChange} autoComplete="true" className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border' type="email" name="email" id="email" placeholder='Eg: abc@gmail.com...' />
        </div>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="password">Password</label>
          <input value={formData.password} onChange={handleChange} autoComplete="true" className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border' type="password" name='password' id='password'/>
        </div>
        <button className='bg-purple-300 font-medium hover:shadow-lg' type='submit'>Log in</button>
        <p className='p-3 text-center font-medium'>Don't Have an account? <Link className='text-red-500 hover:text-slate-300' to='/register'>Register</Link></p>
      </form>
    </div>
  )
}

export default Login