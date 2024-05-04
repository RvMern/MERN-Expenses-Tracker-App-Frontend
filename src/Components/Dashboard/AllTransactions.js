import React from 'react'
import {Link,useParams} from "react-router-dom"

const AllTransactions = ({allTransactions}) => {
  const accountID = useParams().id;
  return (
    <div className='my-5 p-6 overflow-auto'>

      <div className='flex flex-col justify-center lg:flex-row lg:justify-between items-center'>
        <div className='flex flex-col justify-center items-start'>
          <h2 className='p-2 my-2 font-bold text-xl text-center w-full lg:text-start'>All Transactions</h2>
          <p className='p-2 my-2 font-medium text-center w-full lg:text-start'>All Transactions including expenses and income for this account are listed here</p>
        </div>
        <Link className='bg-violet-400 mx-12 my-4 p-2 font-medium rounded-xl hover:shadow-lg hover:transform hover:-translate-y-1 hover:text-white transition-all' to={`/addTransaction/${accountID}`}>Add New Transaction</Link>
      </div>

      {
        allTransactions?.length > 0 ?
        <table className='my-6 text-white w-full bg-slate-900'>
        <thead>
        <tr>
          <th className='p-2'>Name</th>
          <th className='p-2 border border-solid'>Type</th>
          <th className='p-2 border border-solid'>Amount</th>
          <th className='p-2 border border-solid'>Note</th>
        </tr>
        </thead>
        <tbody>
        {allTransactions?.map(transaction => {
          return <tr key={transaction?._id} className='even:bg-violet-500'>

          <td className='font-medium text-center p-2 border border-solid border-slate-100'>{transaction?.transactionName}</td>

          <td style={{backgroundColor:`${transaction?.color}`}} className='font-medium text-center border p-2 border-solid border-slate-100'>{transaction?.transactionType}</td>

          <td style={{color:transaction?.color}} className='font-medium text-center p-2 border border-solid border-slate-100'>$ {transaction?.amount}</td>

          <td className='font-medium flex justify-between items-center p-2'>
            <p className='w-full'>{transaction?.notes}</p>
            <Link className='font-bold my-1 mx-6 px-1 transition-all hover:text-violet-300' to='/updatetransaction'>Edit</Link>
          </td>
          
        </tr>
        })}
        </tbody>
        </table>
        :
        <h2 className='my-12 p-6 font-bold text-lg text-center text-red-400'>No Transactions Found</h2>
      }  
    </div>
  )
}

export default AllTransactions