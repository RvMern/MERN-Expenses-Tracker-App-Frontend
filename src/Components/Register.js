import React,{useEffect, useContext, useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import "../css/register.css"
import { authContext } from './Context/AuthContext/AuthContext';


const Register = () => {
  const navigate = useNavigate();
  const [userDetails,setUserDetails] = useState({
    fullname: '',
    file: '',
    email: '',
    password: ''
  });
  const {state, registerUserAction} = useContext(authContext);

  useEffect(()=>{
    if(state?.userAuth !== null){
      navigate('/dashboard');
    }
  },[state?.userAuth])

  const changeHandler = (e) => {
    const {name,value} = e.target;
    setUserDetails({
      ...userDetails,
      [name]:value
    })
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    setUserDetails({
      ...userDetails,
      'file':file
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullname',userDetails.fullname);
    formData.append('file',userDetails.file);
    formData.append('email',userDetails.email);
    formData.append('password',userDetails.password);
    registerUserAction(formData);
  };
  
  return (
    <div className='register-form-container'>
      <form onSubmit={submitHandler} id='registerForm' className='bg-slate-100 flex flex-col justify-center ' method='post'>
        <h1 className='p-6 text-xl bg-purple-500 text-center font-bold'>Register User</h1>
        <p className='bg-red-200 text-red-600 text-center font-medium'>{state?.error ? state?.error?.message : ""}</p>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="fullname">Fullname</label>
          <input onChange={changeHandler} autoComplete="true" className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border' type="text" name="fullname" id="fullname" placeholder='Eg: Rajesh Verma' />
        </div>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="profileImage">ProfileImage</label>
          <input onChange={fileChangeHandler} autoComplete='true' className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border file:border-none file:p-2 file:rounded-lg file:me-4 file:w-60 file:hover:cursor-pointer' type="file" name="file" id="profileImage"/>
        </div>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="email">Email</label>
          <input onChange={changeHandler} autoComplete='true' className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border' type="email" name="email" id="email" placeholder='Eg: abc@gmail.com...' />
        </div>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="password">Password</label>
          <input onChange={changeHandler} autoComplete='true' className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border' type="password" name='password' id='password'/>
        </div>
        <button className='bg-purple-300 font-medium hover:shadow-lg' type='submit'>Register</button>
        <p className='p-3 text-center font-medium'>Already Have an account? <Link className='text-red-500 hover:text-slate-300' to='/register'>Login</Link></p>
      </form>
    </div>
  )
}

export default Register