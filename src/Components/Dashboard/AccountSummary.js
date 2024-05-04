import React from 'react'

const AccountSummary = () => {
  return (
    <div className='flex flex-col justify-center items-center p-5'>
      <h1 className='font-bold text-4xl text-center my-5 w-full'>Total Income/Expenses Of All Accounts</h1>
      <p className='font-medium text-center my-5'>A list of your company's accounts, either separated by category or in chronological order.</p>

      <div className='flex flex-col justify-center items-center p-6 w-full
      md:flex-row md:justify-around text-white'>
        <div className='bg-violet-400 rounded-lg p-6 my-5 shadow-xl w-full md:mx-3 lg:mx-12'>
          <h2 className='text-white py-2 text-center font-bold text-lg'>Today's Revenue</h2>
          <div  className='flex justify-between items-center'>
            <h3 className='font-medium text-2xl p-2'>$4,540</h3>
            <h4 className='text-black text-sm bg-green-200 rounded-lg p-1 font-medium'>+23%</h4>
          </div>
        </div>
        <div className='bg-violet-300 rounded-lg p-6 my-5 shadow-xl w-full md:mx-3 md:lg-12'>
          <h2 className='text-white py-2 text-center font-bold text-lg'>Today's Orders</h2>
          <div  className='flex justify-between items-center'>
            <h3 className='font-medium text-2xl p-2'>$4,540</h3>
            <h4 className='text-black text-sm bg-green-200 rounded-lg p-1 font-medium'>+8%</h4>
          </div>
        </div>
        <div className='bg-violet-300 rounded-lg p-6 my-5 shadow-xl w-full md:mx-3 md:lg-12'>
          <h2 className='text-white py-2 text-center font-bold text-lg'>Avg. Order Value</h2>
          <div  className='flex justify-between items-center'>
            <h3 className='font-medium text-2xl p-2'>$91.42</h3>
            <h4 className='text-black text-sm bg-green-200 rounded-lg p-1 font-medium'>+23%</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSummary