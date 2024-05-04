import React from 'react';
import {Link} from "react-router-dom"

const AccountList = ({user}) => {
  return (
    <div className='bg-slate-400 p-2 m-2 rounded-md'>
        {
          user?.accounts.length > 0 ? 
          <div className='bg-slate-100 flex flex-col justify-center items-center text-center p-6'>
            <h2 className='text-violet-400 p-2 my-2 font-bold text-2xl'>
                List Of Accounts
            </h2>
            <p className='font-medium p-2 my-2'>A List Of Your Accounts, Either Seperated By Category Or In Chronological Order
            </p>
            <Link className='bg-red-300 p-2 rounded-lg
            font-medium transition-all hover:text-white hover:shadow-lg my-5
            hover:transform hover:-translate-y-1' to='/dashboard/addaccount'>Add New Account</Link>

            <div className='flex flex-col justify-center bg-violet-300 shadow-lg
            rounded-lg w-full p-8
            md:flex-row md:flex-wrap md:items-center
            md:justify-between'>

              {
                user?.accounts.map((account)=>{
                  return <div key={account?._id} className='flex justify-between items-center py-10 px-4 my-6 shadow-xl
                  rounded-md bg-white
                  md:w-80'>
                  <h2 className='font-medium text-xl'>{account?.accountName}</h2>
                  <Link to={`account/${account?._id}`} className='font-medium text-violet-300'>
                  <svg
                  className='hover:fill-violet-400'
                  width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </Link>
                  </div>
                })
              }
    
            </div>
          </div> : 
          <div className='bg-slate-100 p-12'>
            <h3 className='p-2 my-2 text-center font-medium text-2xl text-red-500'>No Account Found</h3>
            <p className='p-2 my-2 font-medium text-md text-center'>You have not created any account yet. Click the button below to create one.</p>
            <Link className='bg-red-300 p-3 block text-center w-40 my-5 mx-auto rounded-lg hover:shadow-xl font-medium
            hover:text-white
            hover:transform transition-all hover:-translate-y-1' to='/dashboard/addaccount'>Create Account</Link>
          </div>
        }      
    </div>
  )
}

export default AccountList