import React from 'react'
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
    <div className='my-6 p-2'>
      <div className='flex flex-col md:flex-row'>
        <div className='bg-slate-200 p-10'>
          <p className='text-1xl px-3 bg-yellow-400 inline-block font-medium'>PROJECT INCOME-EXPENSES TRACKER</p>
          <h1 className='text-5xl my-4 font-bold'>Track Your Income and Expenses in One Place</h1>
          <p className='my-6'>Wondering where all your money goes each month ? Tired of complicated budgeting software ? Try Our Simple Income & Expenses Tracker Application, the simple way to track your income and expenses in one place.</p>
          <div className='p-3'>
            <Link className='p-3 inline-block rounded-md hover:shadow-lg font-medium bg-red-400 me-6' to="/">Request A Demo</Link>
            <Link className='p-3 inline-block rounded-md hover:shadow-lg font-medium bg-green-400' to="/register">Register</Link>
          </div>
        </div>

        <div>
          <img src="/images/header.png" className='h-full object-cover' alt="Header Image" />
        </div>
      </div>

      <div className='my-12 p-5'>
        <p className='text-1xl px-3 bg-yellow-400 font-medium inline-block'>INCOME & EXPENSES TRACKER</p>
        <h2 className='text-3xl my-3 font-bold'>Track Your Project Income And Expenses</h2>
        <p className='my-4'>Manage your money more effectively and make better financial decisions with easy-to-use software.</p>
        <div className='bg-slate-200 md:flex'>
          <div className='md:w-full p-1 md:p-6'>

              <div className='md:flex bg-white md:m-12 m-4 rounded-2xl'>
              <div className='md:text-center md:w-12 md:p-3 p-2'>
              <i className="fa-solid ps-2 md:p-0 fa-message md:mt-6 text-2xl"></i>
              </div>
              <div>
                <h2 className='font-bold p-3'>Understand Your Spending Patterns</h2>
                <p className='p-3'>Stop wasting time logging expenses and tracking your income by hand. Use our software to manage it all in one place.</p>
              </div>
              </div>

              <div className='md:flex bg-white md:m-12 m-4 rounded-2xl'>
              <div className='md:text-center md:p-3 md:w-12 p-2'>
              <i className="fa-solid ps-2 md:p-0 fa-pen-to-square md:mt-6 text-2xl"></i>
              </div>
              <div>
                <h2 className='font-bold p-3'>Visualize Your Income and Expenses Over Time</h2>
                <p className='p-3'>See where your money goes each month and how it changes over time with this easy-to-use income and expenses tracker.</p>
              </div>
              </div>

              <div className='md:flex bg-white md:m-12 m-4 rounded-2xl'>
              <div className='md:text-center md:w-12 md:p-3 p-2'>
              <i className="fa-solid ps-2 md:p-0 fa-money-check-dollar md:mt-6 text-2xl"></i>
              </div>
              <div>
                <h2 className='font-bold p-3'>Stay on Top of Your Spending</h2>
                <p className='p-3'>Take back control of your finances with our easy-to-use budgeting tool. Get started for free.</p>
              </div>
              </div>

          </div>

          <div>
          <img src="/images/header.png" className='h-full object-cover' alt="Header Image" />
          </div>
        </div>
      </div>

      <div className='bg-slate-200 flex flex-col justify-center items-center text-center'>
        <p className='bg-yellow-400 mb-2 font-medium px-3'>Get Started</p>
        <h2 className='py-4 my-1 text-3xl font-bold'>Save Time And Money With The Income And Expenses Tracker</h2>
        <p className='my-1'>Flex is small Saas Business. Flex isn't traditional company. We Have a Diverse Team, approaches to work and transparency are key to our success</p>
        <Link className='bg-green-400 p-2 rounded-md inline-block my-6 hover:shadow-lg font-medium' to="/">Get Started</Link>
        <img className='bg-green-200 object-cover max-h-80 mt-3 w-full' src="/images/header.png" alt="Get Started Img" />
      </div>
    </div>
  )
}

export default HomePage