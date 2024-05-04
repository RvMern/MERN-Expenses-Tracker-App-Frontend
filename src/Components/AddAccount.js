import React,{useEffect, useContext, useState}  from 'react'
import {Link,useNavigate} from "react-router-dom";
import "../css/register.css"
import {accountContext} from './Context/AccountContext/AccountContext';

const AddAccount = () => {
  const navigate = useNavigate();
  const {state, createSingleAccount} = useContext(accountContext);
  const [accountDetails,setAccountDetails] = useState({
    accountName: '',
    accountType: '',
    initialBalance: "",
    notes: ''
  });

  const accountTypeOptions = ["Savings", "Current", "Investment", "Checking", "Credit Card","Building", "School", "Project", "Utilities", "Travel", "Personal", "Groceries", "Education", "Entertainment", "Loan" ,"Cash Flow", "Uncategorized"];


  const changeHandler = (e) => {
    const {name, value} = e.target;
    setAccountDetails({
      ...accountDetails,
      [name]:value
    })
  };

  
  const submitHandler = (e) => {
    e.preventDefault();
    createSingleAccount(accountDetails);
  };



  return (
    <div className='register-form-container'>
      <form onSubmit={submitHandler} id='registerForm' className='bg-slate-100 flex flex-col justify-center ' method='post'>
        <h1 className='p-6 text-xl bg-purple-500 text-center font-bold'>Create Tracking Account</h1>
        <p className='bg-red-200 text-red-600 text-center font-medium'>{state?.error ? state?.error?.message : ""}</p>

        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="accountName">Account Name</label>
          <input onChange={changeHandler} autoComplete="true" className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border' type="text" name="accountName" id="accountName" placeholder='Eg: Groceries Expenditure, Utilities Expenditure, etc...' />
        </div>

        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="accountType">Account Type</label>
          <select onChange={changeHandler} name="accountType" id="accountType"
          className='focus:outline-none cursor-pointer w-full sm:w-80 rounded-md p-1 font-medium border text-center'>
          <option disabled selected>Select Your Account Type</option>
            {accountTypeOptions.map((typeOption)=>{
              return <option key={typeOption} className='text-center' value={typeOption}>{typeOption}</option>
            })}
          </select>
        </div>

        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="initialBalance">Initial Balance <span className='text-slate-100 px-2 py-0 rounded-full text-sm bg-violet-300'>Optional</span></label>
          <input onChange={changeHandler} autoComplete='true' className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border' type="number" name='initialBalance' id='initialBalance' min='0' placeholder='$'/>
        </div>

        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="notes">Notes</label>
          <input onChange={changeHandler} autoComplete="true" className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border' type="text" name="notes" id="notes"/>
        </div>

        <button className='bg-purple-300 font-medium hover:shadow-lg' type='submit'>Create Account</button>
      </form>
    </div>
  )
}

export default AddAccount