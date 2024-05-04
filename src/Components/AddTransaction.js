import React, { useContext, useState } from 'react'
import {useParams} from "react-router-dom";
import {transactionContext} from "../Components/Context/TransactionContext/TransactionsContext"

const AddTransaction = () => {
  const accountID = useParams().id;
  const {state,createTransaction} = useContext(transactionContext);
  const [transactionDetails,setTransactionDetails] = useState({
    transactionName:"",
    transactionType:"",
    amount:"",
    category:"",
    color:"",
    notes:""
  });

  const categories = ["Food", "Transportation", "Entertainment", "Shopping", "Utilities", "Health", "Travel", "Education", "Personal", "Groceries", "Bills", "Uncategorized"];

  const handleChange = (e) => {
    const {name,value} = e.target;
    if(name === "transactionType"){
      if(value === 'Income'){
        document.getElementById('amount').removeAttribute('max');
        document.getElementById('amount').setAttribute('min','1')
        document.getElementById('color').value = '#00ff00';
        document.getElementById('color').removeAttribute('disabled');
        document.getElementById('color-label').textContent = "Enabled";
        document.getElementById('color-label').style.color = "rgba(0,255,0,0.5)";
        setTransactionDetails({
          ...transactionDetails,
          color:'#00ff00',
          [name]:value
        });
      }
      else{
        document.getElementById('amount').removeAttribute('min');
        document.getElementById('amount').setAttribute('max','-1')
        document.getElementById('color').value = '#ff0000';
        document.getElementById('color').setAttribute('disabled','disabled');
        document.getElementById('color-label').textContent = "Disabled";
        document.getElementById('color-label').style.color = "rgba(255,0,0,0.5)";
        setTransactionDetails({
          ...transactionDetails,
          [name]:value,
          color:'#ff0000'
        })
      }
    }
    else{
      setTransactionDetails({
        ...transactionDetails,
        [name]:value
      });}
  };

  const handleColorChange = (e) => {
      setTransactionDetails({
        ...transactionDetails,
        color:e.target.value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createTransaction(accountID,transactionDetails);
  };

  return (
    <div className='add-transaction-form'>
      <form onSubmit={handleSubmit} id='registerForm' className='bg-slate-100 flex flex-col justify-center my-12 mx-auto' method='post'>
      <h1 className='p-6 text-xl bg-purple-500 text-center font-bold'>Add Transaction</h1>
      <p className='text-center bg-red-500 text-red-200 font-medium'>{state?.error ? state?.error?.message : ''}</p>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="transactionName">Transaction Name</label>
          <input onChange={handleChange} className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border' type="text" name="transactionName" id="transactionName" placeholder='Eg: Food Expenses' />
        </div>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="transactionType">Transaction Type</label>
          <select onChange={handleChange} className='w-full text-center sm:w-80
           focus:outline-none rounded-md p-1 block font-medium border mx-auto cursor-pointer' name="transactionType" id="transactionType">
            <option selected disabled>Select Type</option>
            <option value="Income">Income(+)</option>
            <option value="Expenses">Expenses(-)</option>
          </select>
        </div>
        <div className='p-5 my-5 shadow-lg'>
          <label className="font-medium block mb-2" htmlFor="amount">Amount</label>
          <input onChange={handleChange} className="w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border" type="number" placeholder='$' name="amount" id="amount"/>
        </div>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="category">Category</label>
          <select onChange={handleChange} className='w-full text-center sm:w-80
           focus:outline-none rounded-md p-1 block font-medium border mx-auto cursor-pointer' defaultValue="Select Category" name="category" id="category">
            <option selected disabled>Select Category</option>
            {
              categories?.map((category) => {
                return <option key={category} value={category}>{category}</option>
              })
            }
          </select>
        </div>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="color">Color <span id='color-label' className='shadow-lg bg-slate-200 px-2 py-0.5 text-center text-red-500 text-sm'>Disabled</span></label>
          <div className='flex justify-center items-center'>
          <input disabled onChange={handleColorChange} className='w-12 h-12 mx-3 focus:outline-none rounded-full p-1 font-medium border cursor-pointer' type="color" name="color" id="color"/>
          </div>
        </div>
        <div className='p-5 my-5 shadow-lg'>
          <label className='font-medium block mb-2' htmlFor="notes">Transaction Note</label>
          <input onChange={handleChange} className='w-full sm:w-80 focus:outline-none rounded-md p-1 font-medium border' type="text" name="notes" id="notes" placeholder='Eg: Bought Veg Pizza' />
        </div>
        <button className='bg-purple-300 font-medium hover:shadow-lg' type='submit'>Add Transaction</button>
      </form>

    </div>
  )
}

export default AddTransaction